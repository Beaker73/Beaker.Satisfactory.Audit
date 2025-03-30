import { useItemEditorState } from "./State.ts";
import type { ItemEditorProps } from "./Types.ts";
import { useItemEditorView } from "./View.tsx";

export function ItemEditor(props: ItemEditorProps)
{
	const state = useItemEditorState(props);
	return useItemEditorView(state);
}