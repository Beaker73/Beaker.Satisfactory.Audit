import { useBaseEditorState } from "./State.ts";
import type { BaseEditorProps } from "./Types.ts";
import { useBaseEditorView } from "./View.tsx";

export function BaseEditor(props: BaseEditorProps)
{
	const state = useBaseEditorState(props);
	return useBaseEditorView(state);
}