import { useChildrenState } from "./State.ts";
import type { ChildrenProps } from "./Types.ts";
import { useChildrenView } from "./View.tsx";

export function Children(props: ChildrenProps)
{
	const state = useChildrenState(props);
	return useChildrenView(state);
}