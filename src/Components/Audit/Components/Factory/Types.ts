import { Factory } from "../../../State/Types";
import { useFactoryState } from "./State";

export type FactoryProps = {
	factory: Factory,
};

export type FactoryState = ReturnType<typeof useFactoryState>;