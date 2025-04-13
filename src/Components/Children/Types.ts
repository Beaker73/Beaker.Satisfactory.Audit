import type { GroupId } from "../../State/Group";
import type { useChildrenState } from "./State";

export type ChildrenProps = {
	groupId: GroupId,
};

export type ChildrenState = ReturnType<typeof useChildrenState>;