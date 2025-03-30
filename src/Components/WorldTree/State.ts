import { useWorldStore } from "../../State";
import type { WorldTreeProps } from "./Types";

export function useWorldTreeState(_props: WorldTreeProps) 
{
	const rootId = useWorldStore(store => store.rootId);

	// const onEdit = useCallback((el: Element) => 
	// {
	// 	navigate(`/edit/${el.id}`);
	// }, [])

	return {
		rootId,
	};
}