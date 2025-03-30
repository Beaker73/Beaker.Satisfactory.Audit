import { v4 } from "uuid";
import { createStore } from "zustand";
import { createJSONStorage, persist, subscribeWithSelector } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import type { Element } from "../Element";
import type { Factory, GroupView } from "../Group";
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
	createFactory: (parentGroupId: string) => string,
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

						createFactory: (parentGroupId: string) => 
						{
							const factoryId = v4();
							set(state => 
							{
								const parentGroup = findGroupById(state, parentGroupId);
								if(parentGroup) 
								{
									const factory = {
										type: "group",
										subType: "factory",
										id: factoryId,
										name: "Factory",
										children: [],
										view: "tiles",
									} satisfies Factory;
									parentGroup.children.push(factoryId);
									state.elements[factoryId] = factory;
								}
							});
							return factoryId;
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