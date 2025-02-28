import { v4 } from "uuid";
import { isGroup, visitItem } from "../Helpers";
import { Action, ActionData, State } from "../Types";

export type AddFactoryAction = Action<"addFactory", AddFactoryPayload>;

export type AddFactoryPayload = {
	parentGroupId: string;
	name?: string,
}

export function addFactory(parentGroupId: string, name?: string): AddFactoryAction {
	return {
		type: "addFactory",
		payload: { parentGroupId, name },
	}
}

function apply(state: State, payload: AddFactoryPayload) {
	const { parentGroupId } = payload;

	visitItem(state.world, parentGroupId, item => {
		if (isGroup(item)) {
			item.children.push({
				id: v4(),
				type: "factory",
			});
		}
	});
}

export const action: ActionData<AddFactoryAction> = {
	type: "addFactory",
	apply,
};