import { useNavigate } from "raviger";
import { useCallback, useMemo } from "react";
import { useShallow } from "zustand/shallow";
import { useWorldStore } from "../../../State";
import { findElementById, findGroupById } from "../../../State/Visitor";
import type { GroupNodeProps } from "./Types";

export function useGroupNodeState(props: GroupNodeProps)
{
	const { groupId } = props;

	const group = useWorldStore(store => findGroupById(store, groupId));
	const childTypes = useWorldStore(useShallow(store => group?.children.map(childId => findElementById(store, childId)?.type) ?? [] ));
	const childData = useMemo(() => group?.children.map((childId, index) => ({id: childId, type: childTypes[index]})) ?? [], [group, childTypes]);

	const navigate = useNavigate();
	const onEdit = useCallback(() => navigate(`/edit/${groupId}`), [groupId, navigate]);

	return {
		group, onEdit,
		childData,
	};
}