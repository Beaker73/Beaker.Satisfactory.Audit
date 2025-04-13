import type { GroupId } from "../../../State/Group";
import type { useGroupNodeState } from "./State";

export type GroupNodeProps = {
	groupId: GroupId,
};

export type GroupNodeState = ReturnType<typeof useGroupNodeState>;