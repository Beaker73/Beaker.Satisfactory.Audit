import type { InputProps } from "@fluentui/react-components";
import { useCallback } from "react";
import { useShallow } from "zustand/shallow";
import { useWorldStore } from "../../State";
import { findElementById } from "../../State/Visitor";
import type { BaseEditorProps } from "./Types";

export function useBaseEditorState(props: BaseEditorProps)
{
	const { elementId } = props;

	const { id, type, subType, name } = useWorldStore(useShallow(state => 
	{
		const element = findElementById(state, elementId);
		return {
			id: element?.id,
			type: element?.type,
			subType: element?.subType,
			name: element?.name,
		}
	}));
	const updateName = useWorldStore(state => state.updateName);
	const onNameChange = useCallback<NonNullable<InputProps["onChange"]>>(
		(_, data) => 
		{
			if(id)
				updateName(id, data.value ?? "")
		},
		[id, updateName],
	);

	return {
		name, onNameChange,
		type, subType,
	};
}