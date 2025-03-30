
export type GroupView = "tiles" | "details";

export type World = {
	type: "group",
	subType: "world",
	id: string,
	name: string,
	children: string[],
	view: GroupView,
};

export type Factory = {
	type: "group",
	subType: "factory",
	id: string,
	name: string,
	children: string[]
	view: GroupView,
};

export type Folder = {
	type: "group",
	subType: "folder",
	id: string,
	name: string,
	children: string[]
	view: GroupView,
};

export type Group = 
	| World
	| Factory
	| Folder
	;