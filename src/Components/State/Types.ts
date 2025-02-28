import { AddFactoryAction } from "./Actions/AddFactory";
import { AddGroupAction } from "./Actions/AddGroup";
import { UpdateNameOfGroupAction } from "./Actions/UpdateNameOfGroup";

export type Action<TType extends string = string, TPayload extends object = object> = {
	type: TType;
	payload: TPayload;
}

export type ApplyAction<TPayload extends object = object> = (state: State, payload: TPayload) => void;

export type ActionData<TAction extends Action = Action> = {
	type: string,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	apply: ApplyAction<TAction extends Action<infer _,infer TPlayload> ? TPlayload : never>,
}

export type StateAction =
	| UpdateNameOfGroupAction
	| AddGroupAction
	| AddFactoryAction
	;

export type State = {
	world: Group;
};

export type StateContext = [
	State,
	React.Dispatch<StateAction>
];

export type Group = {
	type: "group",
	id: string,
	name?: string,
	children: Item[],
}

export type Factory = {
	type: "factory",
	id: string,
}

export type Item = Group | Factory;