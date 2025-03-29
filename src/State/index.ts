import { produce } from "immer";
import { v4 } from "uuid";
import { create } from "zustand";
import type { Element } from "./Element";
import type { World } from "./Group";
import { findElementById, findGroupById } from "./Visitor";

export type AppState = {
	root: World;
}

export type AppStore = AppState & {
	addElement: (parentGroupId: string, element: Element) => void;
	updateName: (elementId: string, name: string) => void;
}

export const useAppStore = create<AppStore>(set => ({
	root: {
		type: "group",
		subType: "world",
		id: v4(),
		name: "Unnamed World",
		children: [],
	},

	addElement: (parentGroupId: string, element: Element) =>
		set(produce(state => 
		{
			const gr = findGroupById(state.root, parentGroupId);
			if(gr)
				gr.children.push(element);
		})),

	updateName: (elementId: string, name: string) =>
		set(produce(state =>
		{
			const el = findElementById(state.root, elementId);
			if(el)
				el.name = name;
		})),
}));
