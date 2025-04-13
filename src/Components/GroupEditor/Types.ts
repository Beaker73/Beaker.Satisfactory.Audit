import type { GroupId } from "../../State/Group";
import type { useGroupEditorState } from "./State";

export type GroupEditorProps = {
	groupId: GroupId;
};

export type GroupEditorState = ReturnType<typeof useGroupEditorState>;