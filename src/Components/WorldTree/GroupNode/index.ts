import { useGroupNodeState } from "./State.ts";
import type { GroupNodeProps } from "./Types.ts";
import { useGroupNodeView } from "./View.tsx";

export function GroupNode(props: GroupNodeProps)
{
	const state = useGroupNodeState(props);
	return useGroupNodeView(state);
}