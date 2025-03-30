import type { useBaseEditorState } from "./State";

export type BaseEditorProps = {
	elementId: string;
};

export type BaseEditorState = ReturnType<typeof useBaseEditorState>;