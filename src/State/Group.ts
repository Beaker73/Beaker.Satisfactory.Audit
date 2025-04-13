import type { Key } from "../Helpers/Types";
import type { NodeId } from "./Node";

export type GroupView = "tiles" | "details";

export type WorldId = Key<World>;
export type World = {
	type: "group",
	subType: "world",
	id: WorldId,
	name: string,
	children: NodeId[],
	view: GroupView,
};

export type FactoryId = Key<Factory>;
export type Factory = {
	type: "group",
	subType: "factory",
	id: FactoryId,
	name: string,
	children: NodeId[]
	view: GroupView,
};

export type FolderId = Key<Folder>;
export type Folder = {
	type: "group",
	subType: "folder",
	id: FolderId,
	name: string,
	children: NodeId[]
	view: GroupView,
};

export type GroupId = WorldId | FactoryId | FolderId;
export type Group = 
	| World
	| Factory
	| Folder
	;

export type GroupSubType = Group["subType"];