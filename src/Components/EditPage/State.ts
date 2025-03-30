import { useShallow } from "zustand/shallow";
import { useWorldStore } from "../../State";
import { findElementById } from "../../State/Visitor";
import type { EditPageProps } from "./Types";

export function useEditPageState(props: EditPageProps) 
{
	const { id } = props

	const {type, subType} = useWorldStore(useShallow(state => 
	{
		const element = findElementById(state, id);
		return {
			type: element?.type,
			subType: element?.subType,
		}
	}));

	return {
		id, type, subType,
	};
}