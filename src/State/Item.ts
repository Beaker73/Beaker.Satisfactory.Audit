import type { VariantKey } from "../Database/Types";
import type { Key } from "../Helpers/Types";

export type BuildingId = Key<Building>;
export type Building = {
	type: "item",
	subType: "building",
	id: BuildingId,
	name: string,
	variant?: VariantKey,
	quantity: number,
	multiplier: number,
	somersloops: number,	
}

export type ItemId = BuildingId;
export type Item =
	| Building;

export type ItemSubType = Item["subType"];