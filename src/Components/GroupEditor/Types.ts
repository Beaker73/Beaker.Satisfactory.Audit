import type { useGroupEditorState } from "./State";

export type GroupEditorProps = {
	groupId: string;
};

export type GroupEditorState = ReturnType<typeof useGroupEditorState>;