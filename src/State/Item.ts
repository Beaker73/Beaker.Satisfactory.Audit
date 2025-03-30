export type Building = {
	type: "item",
	subType: "building",
	id: string,
	name: string,
}

export type Item =
	| Building;

export type ItemSubType = Item["subType"];