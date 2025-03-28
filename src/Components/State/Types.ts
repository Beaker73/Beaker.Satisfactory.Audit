import type { Action as StateAction } from "./.ActionType.g";
export type { Action as StateAction } from "./.ActionType.g";

export type Action<TType extends string = string, TPayload extends object = object> = {
	type: TType;
	payload: TPayload;
}

export type ApplyAction<TPayload extends object = object> = (state: State, payload: TPayload) => void;

export type ActionData<TAction extends Action = Action> = {
	type: TAction extends Action<infer TType> ? TType : never,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	apply: ApplyAction<TAction extends Action<infer _,infer TPlayload> ? TPlayload : never>,
}

export type State = {
	world: Group;
};

export type StateContext = [
	State,
	React.Dispatch<StateAction>
];

export type Group = {
	id: string,
	type: "group",
	name?: string,
	children: Item[],
	multiplier: number,
	tags: string[],
}

export type Factory = {
	id: string,
	type: "factory",
	sloops: number,
	clockSpeed: number,
	buildingKey?: string,
	recipeKey?: string,
	inputs: [],
	outputs: [],
	multiplier: number,
	tags: string[],
}

export type Item = Group | Factory;