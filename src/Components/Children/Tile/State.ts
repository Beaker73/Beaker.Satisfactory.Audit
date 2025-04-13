import { useNavigate } from "raviger";
import { useCallback } from "react";
import { useWorldStore } from "../../../State";
import { findNodeById } from "../../../State/Visitor";
import type { TileProps } from "./Types";

export function useTileState(props: TileProps)
{
	const { nodeId: elementId } = props;
	const element = useWorldStore(state => findNodeById(state, elementId));

	const navigate = useNavigate();
	const onEdit = useCallback(() => 
	{
		if(element)
			navigate(`/edit/${element.id}`);
	}, [element, navigate]);

	return {
		element, onEdit,
	};
}