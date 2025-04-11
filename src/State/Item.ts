import type { VariantKey } from "../Database/Types";

export type Building = {
	type: "item",
	subType: "building",
	id: string,
	name: string,
	variant?: VariantKey,
	quantity: number,
	multiplier: number,
	somersloops: number,	
}

export type Item =
	| Building;

export type ItemSubType = Item["subType"];