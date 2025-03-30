import { navigate } from "raviger";
import { useCallback } from "react";
import { useWorldStore } from "../../State";
import { findGroupById } from "../../State/Visitor";
import type { ChildrenProps } from "./Types";

export function useChildrenState(props: ChildrenProps)
{
	const { groupId } = props;

	const group = useWorldStore(state => findGroupById(state, groupId));

	const canCreateFactory = group?.subType === "world";
	const createFactory = useWorldStore(store => store.createFactory)
	const onCreateFactory = useCallback(() => 
	{ 
		if(group) 
		{
			const factoryId = createFactory(group.id);
			navigate(`/edit/${factoryId}`);
		}
	}, [createFactory, group]);

	const canCreateFolder = true;
	const onCreateFolder = useCallback(() => {}, []);

	const canCreateMachine = true; // subType === "factory";
	const onCreateMachine = useCallback(() => {}, []);

	const changeView = useWorldStore(state => state.changeView);
	const isTilesView = group?.view === "tiles";
	const isDetailsView = group?.view === "details";
	const onTilesView = useCallback(() => changeView(groupId, "tiles"), [changeView, groupId]);
	const onDetailsView = useCallback(() => changeView(groupId, "details"), [changeView, groupId]);

	return {
		group,
		isTilesView, onTilesView,
		isDetailsView, onDetailsView,
		canCreateFactory, onCreateFactory,
		canCreateFolder, onCreateFolder,
		canCreateMachine, onCreateMachine,
	};
}