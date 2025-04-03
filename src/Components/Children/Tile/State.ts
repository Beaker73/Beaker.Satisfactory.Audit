import { useNavigate } from "raviger";
import { useCallback } from "react";
import { useWorldStore } from "../../../State";
import { findElementById } from "../../../State/Visitor";
import type { TileProps } from "./Types";

export function useTileState(props: TileProps)
{
	const { elementId } = props;
	const element = useWorldStore(state => findElementById(state, elementId));

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