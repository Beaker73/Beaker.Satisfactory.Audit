import { useEditPageState } from "./State";
import type { EditPageProps } from "./Types";
import { useEditPageView } from "./View";

export function EditPage(props: EditPageProps) 
{
	const state = useEditPageState(props);
	return useEditPageView(state);
}