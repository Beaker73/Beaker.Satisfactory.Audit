import { InputProps } from "@fluentui/react-components";
import { GroupProps } from "./Types";
import { useCallback, useState } from "react";
import { useWorldState } from "../../../State/Hooks";
import { updateNameOfGroup } from "../../../State/Actions/UpdateNameOfGroup";
import { addGroup } from "../../../State/Actions/AddGroup";
import { addFactory } from "../../../State/Actions/AddFactory";

export function useGroupState(props: GroupProps) {

	const { group } = props
	const [,dispatch] = useWorldState();

	const [isCollapsed, setIsCollapsed] = useState(false);
	const onToggleCollapse = useCallback(() => {
		setIsCollapsed(c => !c);
	}, [])

	const onNameChange = useCallback<NonNullable<InputProps["onChange"]>>((_, data) => {
		dispatch(updateNameOfGroup(group.id, data.value));
	}, [dispatch, group.id])

	const onAddGroup = useCallback(() => {
		dispatch(addGroup(group.id));
	}, [dispatch, group.id])

	const onAddFactory = useCallback(() => {
		dispatch(addFactory(group.id));
	}, [dispatch, group.id])

	return {
		name: group.name,
		onNameChange,
		
		isCollapsed, onToggleCollapse,
		children: group.children,
		
		onAddGroup,
		onAddFactory,
	}
}