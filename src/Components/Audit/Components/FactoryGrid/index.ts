import { useFactoryGridState } from "./State";
import { FactoryGridProps } from "./Types";
import { useFactoryGridView } from "./View";

export function FactoryGrid(props: FactoryGridProps) {
	const state = useFactoryGridState(props);
	return useFactoryGridView(state);
}