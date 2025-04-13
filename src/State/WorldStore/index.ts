import { v4 } from "uuid";
import { createStore } from "zustand";
import { createJSONStorage, persist, subscribeWithSelector } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import type { VariantKey } from "../../Database/Types";
import type { Group, GroupId, GroupSubType, GroupView, World, WorldId } from "../Group";
import type { BuildingId, Item, ItemId, ItemSubType } from "../Item";
import type { Node, NodeId } from "../Node";
import { findGroupById, findItemById, findNodeById } from "../Visitor";
import { CURRENT_VERSION, migrate } from "./Migrations";

export type WorldState = {
	rootId: WorldId;
	nodes: Record<string, Node>;
}

export type WorldStore = WorldState & {
	addElement: (parentGroupId: GroupId, element: Node) => void;
	updateName: (nodeId: NodeId, name: string) => void;
	changeView: (groupId: GroupId, view: GroupView) => void;
	createGroup: (parentGroupId: Exclude<GroupId, WorldId>, subType: Exclude<GroupSubType, "world">) => string,
	createItem: (parentGroupId: GroupId, subType: ItemSubType) => string,
	updateVariant: (itemId: ItemId, variant: VariantKey | undefined) => void,
}

const worldStoresById: Record<WorldId, ReturnType<typeof creatWorldStore>> = {};

export function getOrCreateWorldStore(worldId: WorldId) 
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

function creatWorldStore(worldId: WorldId) 
{
	return createStore<WorldStore>()(
		subscribeWithSelector(
			persist(
				immer(
					(set) => ({
						rootId: worldId,
						nodes: {
							[worldId]: {
								type: "group",
								subType: "world",
								id: worldId,
								name: "World",
								children: [],
								view: "tiles",
							},
						},

						addElement: (parentGroupId: GroupId, node: Node) =>
							set(state => 
							{
								const gr = findGroupById(state, parentGroupId);
								if(gr) 
								{
									gr.children.push(node.id);
									state.nodes[node.id] = node;
								}
							}),

						updateName: (nodeId: NodeId, name: string) =>
							set(state =>
							{
								const el = findNodeById(state, nodeId);
								if(el)
									el.name = name;
							}),

						changeView: (groupId: GroupId, view: GroupView) =>
							set(state =>
							{
								const el = findGroupById(state, groupId);
								if(el)
									el.view = view;
							}),

						createGroup: (parentGroupId: Exclude<GroupId, WorldId>, subType: Exclude<GroupSubType, "world">) => 
						{
							const groupId = v4() as  Exclude<GroupId, WorldId>;
							set(state => 
							{
								const parentGroup = findGroupById(state, parentGroupId);
								if(parentGroup) 
								{
									const group = {
										type: "group",
										subType,
										id: groupId,
										name: subType === "factory" ? "Unnamed Factory" : subType === "folder" ? "Unnamed Folder" : "Unnamed Group",
										children: [],
										view: "tiles",
									} as Exclude<Group, World>;

									parentGroup.children.push(groupId);
									state.nodes[groupId] = group;
								}
							});
							return groupId;
						},

						createItem: <TSubType extends ItemSubType>(parentGroupId: GroupId, subType: TSubType) => 
						{
							const itemId = v4() as TSubType extends "building" ? BuildingId : ItemId;
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
									state.nodes[itemId] = item;
								}
							});
							return itemId;
						},

						updateVariant: (itemId: ItemId, variant: VariantKey | undefined) =>
						{
							set(state => 
							{
								console.debug(`Updating variant for ${itemId} to ${variant}`);
								const item = findItemById(state, itemId);
								if(item) 
									item.variant = variant;
							});
						}
					})),
				{
					name: `satisfactory-audit-world-${worldId}`,
					version: CURRENT_VERSION,
					storage: createJSONStorage(() => localStorage),
					migrate
				}
			)
		)
	);
}