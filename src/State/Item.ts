import type { VariantKey } from "../Database/Types";
import type { Key } from "../Helpers/Types";

export type BuildId = Key<Build>;
export type Build = {
	type: "item",
	subType: "building",
	id: BuildId,
	name: string,
	variant?: VariantKey,
	instances: Instance[],
}

export type InstanceId = Key<Instance>;
export type Instance = {
	id: InstanceId,
	speed: number,
	somersloops: number,
}

export type ItemId = BuildId;
export type Item =
	| Build;

export type ItemSubType = Item["subType"];
