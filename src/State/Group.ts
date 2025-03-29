import type { Element } from "./Element";

export type World = {
	type: "group",
	subType: "world",
	id: string,
	name: string,
	children: Element[],
};

export type Factory = {
	type: "group",
	subType: "factory",
	id: string,
	name: string,
	children: Element[]
};

export type Group = 
	| World
	| Factory
	;