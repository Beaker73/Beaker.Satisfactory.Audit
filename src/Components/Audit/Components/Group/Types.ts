import { Group } from "../../../State/Types";
import { useGroupState } from "./State";

export type GroupProps = {
	group: Group,
};

export type GroupState = ReturnType<typeof useGroupState>;