import { InputProps } from "@fluentui/react-components";
import { GroupProps } from "./Types";
import { useCallback, useMemo, useState } from "react";
import { useWorldState } from "../../../State/Hooks";
import { updateNameOfGroup } from "../../../State/Actions/UpdateNameOfGroup";
import { addGroup } from "../../../State/Actions/AddGroup";
import { addFactory } from "../../../State/Actions/AddFactory";
import { deleteItem } from "../../../State/Actions/DeleteItem";
import { cloneItem } from "../../../State/Actions/CloneItem";

export function useGroupState(props: GroupProps) {

	const { group } = props
	const [state,dispatch] = useWorldState();

	const childGroups = useMemo(
		() => group.children.filter(c => c.type === "group"), 
		[group.children]
	);
	const factories = useMemo(
		() => group.children.filter(c => c.type === "factory"),
		[group.children]
	);

	const isWorld = group.id === state.world.id;

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

	const onCloneGroup = useCallback(() => {
		dispatch(cloneItem(group.id));
	}, [dispatch, group.id]);

	const onDeleteGroup = useCallback(() => {
		dispatch(deleteItem(group.id));	
	}, [dispatch, group.id]);

	return {
		isWorld,
		name: group.name,
		onNameChange,
		
		isCollapsed, onToggleCollapse,
		childGroups,
		factories,
		
		onAddGroup,
		onAddFactory,
		onCloneGroup,
		onDeleteGroup,
	}
}