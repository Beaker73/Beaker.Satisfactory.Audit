import { v4 } from "uuid";
import { deepClone } from "../../../Helpers/Object";
import { isGroup, visitItems } from "../Helpers";
import type { Action, ActionData, State } from "../Types";

export type CloneItemAction = Action<"cloneItem", CloneItemPayload>;

export type CloneItemPayload = {
	id: string;
};

export function cloneItem(id: string): CloneItemAction {
	return {
		type: "cloneItem",
		payload: { id, },
	};
}

function apply(state: State, payload: CloneItemPayload) {
	const { id } = payload;

	visitItems(state.world, item => {
		if(isGroup(item)) {
			// find the collection with the item to clone
			const ix = item.children.findIndex(child => child.id === id);
			if(ix !== -1) {
				// get original item
				const itemToClone = item.children[ix];

				// create a deep clone, but with a new id
				const clonedItem = deepClone(itemToClone);
				itemToClone.id = v4();

				// insert the cloned item after the original item
				item.children.splice(ix + 1, 0, clonedItem);
			}
		}
	})
}

export const action: ActionData<CloneItemAction> = {
	type: "cloneItem",
	apply,
}