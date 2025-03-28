import { isGroup, visitItems } from "../Helpers";
import type { Action, ActionData, State } from "../Types";

export type DeleteItemAction = Action<"deleteItem", DeleteItemPayload>;

export type DeleteItemPayload = {
	groupId: string;
};

export function deleteItem(itemId: string): DeleteItemAction {
	return {
		type: "deleteItem",
		payload: { groupId: itemId },
	}
}

function apply(state: State, payload: DeleteItemPayload) {
	const { groupId } = payload;

	visitItems(state.world, item => {
		if (isGroup(item)) {
			const index = item.children.findIndex(child => child.id === groupId);
			if (index !== -1)
				item.children.splice(index, 1);
		}
	});
}

export const action: ActionData<DeleteItemAction> = {
	type: "deleteItem",
	apply,
};