import type { ItemNodeProps } from "./Types";

export function useItemNodeState(props: ItemNodeProps)
{
	const { itemId } = props;

	console.debug("ItemNode", itemId);

	return {
	};
}