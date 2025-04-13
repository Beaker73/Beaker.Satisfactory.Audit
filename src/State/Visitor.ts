import type { Group, GroupId } from "./Group";
import type { Item, ItemId } from "./Item";
import type { Node, NodeId } from "./Node";
import type { WorldState } from "./WorldStore";

/**
 * Tries to find an element with the given id in the tree starting from the given group.
 * @param state The state to search in
 * @param id The id of the element to find.
 * @returns The element with the given id, or undefined if not found.
 */
export function findNodeById(state: WorldState, id: NodeId): Node | undefined
{
	return state.nodes[id];
}

/**
 * Find the parent group of the node with the given id.
 * @param state The state to search in
 * @param id The id of the child node to find the parent of.
 * @returns The parent group of the node with the given id, or undefined if not found.
 */
export function findParentGroup(nodes: Node[], id: NodeId): Group | undefined
{
	for(const node of nodes)
	{
		if (node.type === "group" && node.children.includes(id)) 
			return node;
	};

	return undefined;
}

/**
 * Tries to find a group with the given id in the tree starting from the given group.
 * @param state The state to search in
 * @param id The id of the group to find.
 * @returns The group with the given id, or undefined if not found.
 */
export function findGroupById(state: WorldState, id: GroupId): Group | undefined
{
	const el = findNodeById(state, id);
	if (el && el.type === "group") 
		return el;
	return undefined;
}

/**
 * Tries to find an item with the given id in the tree starting from the given group.
 * @param state The state to search in
 * @param id The id of the item to find.
 * @returns The item with the given id, or undefined if not found.
 */
export function findItemById(state: WorldState, id: ItemId): Item | undefined
{
	const el = findNodeById(state, id);
	if (el && el.type === "item") 
		return el;
	return undefined;
}