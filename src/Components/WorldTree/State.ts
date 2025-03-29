import { navigate } from "raviger";
import { useCallback } from "react";
import { useAppStore } from "../../State";
import type { Element } from "../../State/Element";
import type { WorldTreeProps } from "./Types";

export function useWorldTreeState(_props: WorldTreeProps) 
{
	const root = useAppStore(store => store.root);

	const onEdit = useCallback((el: Element) => 
	{
		navigate(`/edit/${el.id}`);
	}, [])

	return {
		root,
		onEdit,
	};
}