import type { GroupId } from "../../State/Group";
import type { ItemId } from "../../State/Item";
import { GroupEditor } from "../GroupEditor";
import { ItemEditor } from "../ItemEditor";
import { Page } from "../Page";
import type { EditPageState } from "./Types";

export function useEditPageView(state: EditPageState) 
{
	return <Page type="scrollable" breadcrumb={state.id}>
		{state.type === "group" && <GroupEditor groupId={state.id as GroupId} />}
		{state.type === "item" && <ItemEditor itemId={state.id as ItemId} />}
	</Page>
}