import { useWorldStore } from "../../../State";
import { findItemById } from "../../../State/Visitor";
import type { ItemNodeProps } from "./Types";

export function useItemNodeState(props: ItemNodeProps)
{
	const { itemId } = props;

	const item = useWorldStore(store => findItemById(store, itemId));

	return {
		item,
	};
}