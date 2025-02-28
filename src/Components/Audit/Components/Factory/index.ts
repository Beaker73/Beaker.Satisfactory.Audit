import { useFactoryState } from "./State";
import { FactoryProps } from "./Types";
import { useFactoryView } from "./View";

export function Factory(props: FactoryProps) {
	const state = useFactoryState(props);
	return useFactoryView(state);
}