import type { useItemEditorState } from "./State";

export type ItemEditorProps = {
	itemId: string;
};

export type ItemEditorState = ReturnType<typeof useItemEditorState>;