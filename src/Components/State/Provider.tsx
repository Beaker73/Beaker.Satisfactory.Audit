import { PropsWithChildren, useReducer } from "react";
import { stateContext } from "./Context";
import { reducer } from "./Reducer";
import { v4 } from "uuid";

export function StateProvider(props: PropsWithChildren<object>) {

	const context = useReducer(reducer, {
		world: {
			id: v4(),
			type: "group",
			name: "Unnamed World",
			children: [],
		},
	});

	return <stateContext.Provider value={context}>
		{props.children}
	</stateContext.Provider>;
}