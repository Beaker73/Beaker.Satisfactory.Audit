import type { PropsWithChildren } from "react";
import { useReducer } from "react";
import { v4 } from "uuid";
import { stateContext } from "./Context";
import { reducer } from "./Reducer";

export function StateProvider(props: PropsWithChildren<object>) {

	const context = useReducer(reducer, {
		world: {
			id: v4(),
			type: "group",
			name: "Unnamed World",
			children: [],
			multiplier: 1,
			tags: [],
		},
	});

	return <stateContext.Provider value={context}>
		{props.children}
	</stateContext.Provider>;
}