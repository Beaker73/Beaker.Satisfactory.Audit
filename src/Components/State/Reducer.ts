import { ActionData, State, StateAction } from "./Types";
import { produce } from "immer";

const actionData = import.meta.glob<ActionData>('./Actions/*.ts', {eager: true, import: "action"});
const applies = Object.fromEntries(Object.values(actionData).map(data => [data.type, data.apply] as const));

export function reducer(state: State, action: StateAction): State {
	return produce(state, draft => {
		const apply = applies[action.type];
		if (apply)
			apply(draft, action.payload);
		else
			throw new Error(`Unknown action type: ${action.type}`);
	});
}