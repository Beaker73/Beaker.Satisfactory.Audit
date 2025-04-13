import type { ItemId } from "../../../State/Item";
import type { useItemNodeState } from "./State";

export type ItemNodeProps = {
	itemId: ItemId,
};

export type ItemNodeState = ReturnType<typeof useItemNodeState>;