import { visitItem } from "../Helpers";
import type { Action, ActionData, State } from "../Types";

export type UpdateNameOfGroupAction = Action<"updateNameOfGroup", UpdateNameOfGroupPayload>;

export type UpdateNameOfGroupPayload = {
	groupId: string;
	name: string;
};

export function updateNameOfGroup(groupId: string, name: string): UpdateNameOfGroupAction {
	return {
		type: "updateNameOfGroup",
		payload: { groupId, name },
	}
}

function apply(state: State, payload: UpdateNameOfGroupPayload) {
	const { groupId, name } = payload;

	visitItem(state.world, groupId, item => {
		if (item.type === "group")
			item.name = name;
	});
}

export const action: ActionData<UpdateNameOfGroupAction> = {
	type: "updateNameOfGroup",
	apply,
}