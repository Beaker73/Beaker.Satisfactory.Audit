import { Factory, Group, Item } from "./Types";

export function visitItems(root: Item, onVisit: (item: Item) => void) {
	onVisit(root);
	if ("children" in root)
		for (const child of root.children)
			visitItems(child, onVisit);
}

export function visitItem(root: Item, id: string, onVisit: (item: Item) => void) {
	visitItems(root, item => {
		if (item.id === id)
			onVisit(item);
	});
}

export function findItemById(item: Item, id: string): Item | undefined {
	let foundItem: Item | undefined;

	visitItems(item, item => {
		if (item.id === id)
			foundItem = item;
	});

	return foundItem;
}

export function isGroup(item: Item): item is Group
{
	return item.type === "group";
}

export function isFactory(item: Item): item is Factory
{
	return item.type === "factory";
}