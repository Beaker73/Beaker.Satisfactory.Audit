import { useNavigate } from "raviger";
import { useCallback } from "react";
import { useShallow } from "zustand/shallow";
import { hasValue } from "../../Helpers/Object";
import { useWorldStore } from "../../State";
import type { FactoryId, FolderId } from "../../State/Group";
import { findGroupById, findNodeById } from "../../State/Visitor";
import type { ChildrenProps } from "./Types";

export function useChildrenState(props: ChildrenProps)
{
	const { groupId } = props;

	const group = useWorldStore(state => findGroupById(state, groupId));
	const children = useWorldStore(useShallow(state => 
		group?.children.map(childId => findNodeById(state, childId)).filter(hasValue) ?? []
	));


	console.debug("ChildrenState", children);

	const navigate = useNavigate();

	const createGroup = useWorldStore(store => store.createGroup)
	const canCreateFactory = group?.subType === "world";
	const onCreateFactory = useCallback(() => 
	{ 
		if(group) 
		{
			const factoryId = createGroup(group.id as FactoryId, "factory");
			navigate(`/edit/${factoryId}`);
		}
	}, [createGroup, group, navigate]);

	const canCreateFolder = true;
	const onCreateFolder = useCallback(() => 
	{ 
		if(group) 
		{
			const factoryId = createGroup(group.id as FolderId, "folder");
			navigate(`/edit/${factoryId}`);
		}
	}, [createGroup, group, navigate]);

	const createItem = useWorldStore(store => store.createItem)
	const canCreateMachine = true; // subType === "factory";
	const onCreateMachine = useCallback(() =>
	{ 
		if(group) 
		{
			const itemId = createItem(group.id, "building");
			navigate(`/edit/${itemId}`);
		}
	}, [createItem, group, navigate]);

	const changeView = useWorldStore(state => state.changeView);
	const isTilesView = group?.view === "tiles";
	const isDetailsView = group?.view === "details";
	const onTilesView = useCallback(() => changeView(groupId, "tiles"), [changeView, groupId]);
	const onDetailsView = useCallback(() => changeView(groupId, "details"), [changeView, groupId]);

	return {
		group, children,
		isTilesView, onTilesView,
		isDetailsView, onDetailsView,
		canCreateFactory, onCreateFactory,
		canCreateFolder, onCreateFolder,
		canCreateMachine, onCreateMachine,
	};
}