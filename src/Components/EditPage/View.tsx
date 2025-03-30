import { BaseEditor } from "../BaseEditor";
import { GroupEditor } from "../GroupEditor";
import { ItemEditor } from "../ItemEditor";
import type { EditPageState } from "./Types";

export function useEditPageView(state: EditPageState) 
{

	switch(state.type) 
	{
		case "group":
			return <GroupEditor groupId={state.id} />;
		case "item":
			return <ItemEditor itemId={state.id} />;
	}

	// default case, no specific editor found, so use the base editor instead.
	return <BaseEditor elementId={state.id} />;
}