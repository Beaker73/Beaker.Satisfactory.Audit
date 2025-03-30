import { useGroupEditorState } from "./State.ts";
import type { GroupEditorProps } from "./Types.ts";
import { useGroupEditorView } from "./View.tsx";

export function GroupEditor(props: GroupEditorProps)
{
	const state = useGroupEditorState(props);
	return useGroupEditorView(state);
}