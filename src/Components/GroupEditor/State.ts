import type { InputProps } from "@fluentui/react-components";
import { useCallback } from "react";
import { useWorldStore } from "../../State";
import { findGroupById } from "../../State/Visitor";
import type { GroupEditorProps } from "./Types";

export function useGroupEditorState(props: GroupEditorProps)
{
	const { groupId } = props;
	
	const group = useWorldStore(state => findGroupById(state, groupId));
	const updateName = useWorldStore(state => state.updateName);
	const onNameChange = useCallback<NonNullable<InputProps["onChange"]>>(
		(_, data) => 
		{
			if(group)
				updateName(group.id, data.value ?? "")
		},
		[group, updateName],
	);
	
	return {
		group,onNameChange,
		canDelete: group?.subType !== "world",
	};
}