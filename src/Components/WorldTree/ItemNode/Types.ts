import type { useItemNodeState } from "./State";

export type ItemNodeProps = {
	itemId: string,
};

export type ItemNodeState = ReturnType<typeof useItemNodeState>;