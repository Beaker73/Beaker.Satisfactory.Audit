import { useCallback } from "react";
import { useWorldState } from "../../../State/Hooks";
import { FactoryProps } from "./Types";
import { cloneItem } from "../../../State/Actions/CloneItem";
import { deleteItem } from "../../../State/Actions/DeleteItem";

export function useFactoryState(props: FactoryProps) {

	const { factory } = props;
	const [, dispatch] = useWorldState();

	const onCloneFactory = useCallback(() => {
		dispatch(cloneItem(factory.id));
	}, [dispatch, factory.id])
	const onDeleteFactory = useCallback(() => {
		dispatch(deleteItem(factory.id));
	}, [dispatch, factory.id])

	return {
		onCloneFactory,
		onDeleteFactory,
	}
}