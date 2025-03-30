import { navigate } from "raviger";
import { useCallback } from "react";
import { useShallow } from "zustand/shallow";
import { hasValue } from "../../Helpers/Object";
import { useWorldStore } from "../../State";
import { findElementById, findGroupById } from "../../State/Visitor";
import type { ChildrenProps } from "./Types";

export function useChildrenState(props: ChildrenProps)
{
	const { groupId } = props;

	const group = useWorldStore(state => findGroupById(state, groupId));
	const children = useWorldStore(useShallow(state => 
		group?.children.map(childId => findElementById(state, childId)).filter(hasValue) ?? []
	));


	console.debug("ChildrenState", children);

	const createGroup = useWorldStore(store => store.createGroup)
	const canCreateFactory = group?.subType === "world";
	const onCreateFactory = useCallback(() => 
	{ 
		if(group) 
		{
			const factoryId = createGroup(group.id, "factory");
			navigate(`/edit/${factoryId}`);
		}
	}, [createGroup, group]);

	const canCreateFolder = true;
	const onCreateFolder = useCallback(() => 
	{ 
		if(group) 
		{
			const factoryId = createGroup(group.id, "folder");
			navigate(`/edit/${factoryId}`);
		}
	}, [createGroup, group]);

	const createItem = useWorldStore(store => store.createItem)
	const canCreateMachine = true; // subType === "factory";
	const onCreateMachine = useCallback(() =>
	{ 
		if(group) 
		{
			const itemId = createItem(group.id, "building");
			navigate(`/edit/${itemId}`);
		}
	}, [createItem, group]);

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