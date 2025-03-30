import type { useChildrenState } from "./State";

export type ChildrenProps = {
	groupId: string,
};

export type ChildrenState = ReturnType<typeof useChildrenState>;