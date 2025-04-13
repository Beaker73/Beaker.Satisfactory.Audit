import type { ItemId } from "../../State/Item";
import type { useItemEditorState } from "./State";

export type ItemEditorProps = {
	itemId: ItemId;
};

export type ItemEditorState = ReturnType<typeof useItemEditorState>;