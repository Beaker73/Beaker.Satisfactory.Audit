import { useShallow } from "zustand/shallow";
import { useAppStore } from "../../State";
import type { EditPageProps } from "./Types";

export function useEditPageState(props: EditPageProps) 
{
	const { id } = props

	const {type, subType} = useAppStore(useShallow(state => 
	{
		const element = state.root.children.find(el => el.id === id);
		return {
			type: element?.type,
			subType: element?.subType,
		}
	}));

	return {
		id, type, subType,
	};
}