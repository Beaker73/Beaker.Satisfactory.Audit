import type { useGroupNodeState } from "./State";

export type GroupNodeProps = {
	groupId: string,
};

export type GroupNodeState = ReturnType<typeof useGroupNodeState>;