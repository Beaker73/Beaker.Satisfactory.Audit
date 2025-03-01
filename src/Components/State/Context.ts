import { createContext } from "react";
import { StateContext } from "./Types";
import { v4 } from "uuid";

export const stateContext = createContext<StateContext>([
	{
		world: {
			id: v4(),
			type: "group",
			name: "Unnamed World",
			children: [],
			multiplier: 1,
		},
	},
	() => {}
]);