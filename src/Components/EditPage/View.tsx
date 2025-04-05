import { GroupEditor } from "../GroupEditor";
import { ItemEditor } from "../ItemEditor";
import { Page } from "../Page";
import type { EditPageState } from "./Types";

export function useEditPageView(state: EditPageState) 
{
	return <Page type="scrollable">
		{state.type === "group" && <GroupEditor groupId={state.id} />}
		{state.type === "item" && <ItemEditor itemId={state.id} />}
	</Page>
}