import type { Element } from "./Element";
import type { Group } from "./Group";
import type { Item } from "./Item";

/**
 * Visit all the element in a tree starting from the given group.
 * @param group The root group to start visiting from.
 * @param onElement Called for every element in the tree.
 */
export function visit(group: Group, onElement: (element: Element) => void) 
{
	for (const child of group.children) 
	{
		if (child.type === "item") 
			onElement(child);
		else 
			visit(child, onElement);
	}

	onElement(group);
}

/**
 * Tries to find an element with the given id in the tree starting from the given group.
 * @param group The root group to start searching from.
 * @param id The id of the element to find.
 * @returns The element with the given id, or undefined if not found.
 */
export function findElementById(group: Group, id: string): Element | undefined
{
	let found: Element | undefined = undefined;
	
	visit(group, (element) => 
	{
		if (element.id === id) 
			found = element;
	});
	
	return found;
}

/**
 * Tries to find a group with the given id in the tree starting from the given group.
 * @param group The root group to start searching from.
 * @param id The id of the group to find.
 * @returns The group with the given id, or undefined if not found.
 */
export function findGroupById(group: Group, id: string): Group | undefined
{
	const el = findElementById(group, id);
	if (el && el.type === "group") 
		return el;
	return undefined;
}

/**
 * Tries to find an item with the given id in the tree starting from the given group.
 * @param group The root group to start searching from.
 * @param id The id of the item to find.
 * @returns The item with the given id, or undefined if not found.
 */
export function findItemById(group: Group, id: string): Item | undefined
{
	const el = findElementById(group, id);
	if (el && el.type === "item") 
		return el;
	return undefined;
}