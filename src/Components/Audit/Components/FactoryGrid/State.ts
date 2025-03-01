import { useCallback } from "react";
import { FactoryGridProps } from "./Types";
import { cloneItem } from "../../../State/Actions/CloneItem";
import { deleteItem } from "../../../State/Actions/DeleteItem";
import { Factory } from "../../../State/Types";
import { useWorldState } from "../../../State/Hooks";

export function useFactoryGridState(props: FactoryGridProps) {

	const { factories } = props;
	const [, dispatch] = useWorldState();

	const onCloneFactory = useCallback((factory: Factory) => {
		dispatch(cloneItem(factory.id));
	}, [dispatch])
	const onDeleteFactory = useCallback((factory: Factory) => {
		dispatch(deleteItem(factory.id));
	}, [dispatch])

	return {
		factories,
		onCloneFactory,
		onDeleteFactory,
	};
}