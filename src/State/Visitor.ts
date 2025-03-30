import type { Element } from "./Element";
import type { Group } from "./Group";
import type { Item } from "./Item";
import type { WorldState } from "./WorldStore";

/**
 * Tries to find an element with the given id in the tree starting from the given group.
 * @param state The state to search in
 * @param id The id of the element to find.
 * @returns The element with the given id, or undefined if not found.
 */
export function findElementById(state: WorldState, id: string): Element | undefined
{
	return state.elements[id];
}

/**
 * Tries to find a group with the given id in the tree starting from the given group.
 * @param state The state to search in
 * @param id The id of the group to find.
 * @returns The group with the given id, or undefined if not found.
 */
export function findGroupById(state: WorldState, id: string): Group | undefined
{
	const el = findElementById(state, id);
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
export function findItemById(state: WorldState, id: string): Item | undefined
{
	const el = findElementById(state, id);
	if (el && el.type === "item") 
		return el;
	return undefined;
}