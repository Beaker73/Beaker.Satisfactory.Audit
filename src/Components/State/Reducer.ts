import { produce } from "immer";
import type { ActionData, State, StateAction } from "./Types";

const actionData = import.meta.glob<ActionData>(['./Actions/*.ts', '!**/.node.ts'], {eager: true, import: "action"});
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