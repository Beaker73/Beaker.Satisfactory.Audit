import { useItemNodeState } from "./State.ts";
import type { ItemNodeProps } from "./Types.ts";
import { useItemNodeView } from "./View.tsx";

export function ItemNode(props: ItemNodeProps)
{
	const state = useItemNodeState(props);
	return useItemNodeView(state);
}