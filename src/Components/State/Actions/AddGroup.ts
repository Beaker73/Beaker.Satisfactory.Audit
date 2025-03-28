import { v4 } from "uuid";
import { isGroup, visitItem } from "../Helpers";
import type { Action, ActionData, State } from "../Types";

export type AddGroupAction = Action<"addGroup", AddGroupPayload>;

export type AddGroupPayload = {
	parentGroupId: string;
	name?: string,
}

export function addGroup(parentGroupId: string, name?: string): AddGroupAction {
	return {
		type: "addGroup",
		payload: { parentGroupId, name },
	}
}

function apply(state: State, payload: AddGroupPayload) {
	const { parentGroupId, name } = payload;

	visitItem(state.world, parentGroupId, item => {
		if (isGroup(item)) {
			item.children.push({
				id: v4(),
				type: "group",
				name,
				children: [],
				multiplier: 1,
				tags: [],
			});
		}
	});
}

export const action: ActionData<AddGroupAction> = {
	type: "addGroup",
	apply,
};
