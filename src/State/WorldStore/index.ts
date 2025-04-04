import { v4 } from "uuid";
import { createStore } from "zustand";
import { createJSONStorage, persist, subscribeWithSelector } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import type { Element } from "../Element";
import type { Group, GroupSubType, GroupView } from "../Group";
import type { Item, ItemSubType } from "../Item";
import { findElementById, findGroupById } from "../Visitor";
import { migrate } from "./Migrations";

export type WorldState = {
	rootId: string;
	elements: Record<string, Element>;
}

export type WorldStore = WorldState & {
	addElement: (parentGroupId: string, element: Element) => void;
	updateName: (elementId: string, name: string) => void;
	changeView: (groupId: string, view: GroupView) => void;
	createGroup: (parentGroupId: string, subType: GroupSubType) => string,
	createItem: (parentGroupId: string, subType: ItemSubType) => string,
}

const worldStoresById: Record<string, ReturnType<typeof creatWorldStore>> = {};

export function getOrCreateWorldStore(worldId: string) 
{
	let worldStore = worldStoresById[worldId];

	if(!worldStore)
	{
		console.debug(`Creating world store for ${worldId}`);
		worldStore = creatWorldStore(worldId);

		worldStoresById[worldId] = worldStore;
	}

	return worldStore;
}

function creatWorldStore(worldId: string) 
{
	return createStore<WorldStore>()(
		subscribeWithSelector(
			persist(
				immer(
					(set) => ({
						rootId: worldId,
						elements: {
							[worldId]: {
								type: "group",
								subType: "world",
								id: worldId,
								name: "World",
								children: [],
								view: "tiles",
							},
						},

						addElement: (parentGroupId: string, element: Element) =>
							set(state => 
							{
								const gr = findGroupById(state, parentGroupId);
								if(gr) 
								{
									gr.children.push(element.id);
									state.elements[element.id] = element;
								}
							}),

						updateName: (elementId: string, name: string) =>
							set(state =>
							{
								const el = findElementById(state, elementId);
								if(el)
									el.name = name;
							}),

						changeView: (groupId: string, view: GroupView) =>
							set(state =>
							{
								const el = findGroupById(state, groupId);
								if(el)
									el.view = view;
							}),

						createGroup: (parentGroupId: string, subType: GroupSubType) => 
						{
							const factoryId = v4();
							set(state => 
							{
								const parentGroup = findGroupById(state, parentGroupId);
								if(parentGroup) 
								{
									const factory = {
										type: "group",
										subType,
										id: factoryId,
										name: "Factory",
										children: [],
										view: "tiles",
									} satisfies Group;
									parentGroup.children.push(factoryId);
									state.elements[factoryId] = factory;
								}
							});
							return factoryId;
						},

						createItem: (parentGroupId: string, subType: ItemSubType) => 
						{
							const itemId = v4();
							set(state => 
							{
								const parentGroup = findGroupById(state, parentGroupId);
								if(parentGroup) 
								{
									const item = {
										type: "item",
										subType,
										id: itemId,
										name: "Factory",
										multiplier: 1,
										quantity: 1,
										somersloops: 0,
									} satisfies Item;
									parentGroup.children.push(itemId);
									state.elements[itemId] = item;
								}
							});
							return itemId;
						}
					})),
				{
					name: `satisfactory-audit-world-${worldId}`,
					version: 1,
					storage: createJSONStorage(() => localStorage),
					migrate
				}
			)
		)
	);
}