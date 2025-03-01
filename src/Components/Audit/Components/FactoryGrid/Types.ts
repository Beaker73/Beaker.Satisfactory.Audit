import { Factory } from "../../../State/Types";
import { useFactoryGridState } from "./State";

export type FactoryGridProps = {
	factories: Factory[];
};

export type FactoryGridState = ReturnType<typeof useFactoryGridState>;