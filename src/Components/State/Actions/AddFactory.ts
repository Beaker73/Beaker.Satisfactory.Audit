import { v4 } from "uuid";
import { isGroup, visitItem } from "../Helpers";
import type { Action, ActionData, State } from "../Types";

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
				sloops: 0,
				clockSpeed: 1,
				inputs: [],
				outputs: [],
				multiplier: 1,
				tags: [],
			});
		}
	});
}

export const action: ActionData<AddFactoryAction> = {
	type: "addFactory",
	apply,
};
