import { useWorldTreeState } from "./State";
import type { WorldTreeProps } from "./Types";
import { useWorldTreeView } from "./View";

export function WorldTree(props: WorldTreeProps) 
{
	const state = useWorldTreeState(props);
	return useWorldTreeView(state);
}