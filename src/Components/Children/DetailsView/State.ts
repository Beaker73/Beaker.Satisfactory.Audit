import { useDatabase } from "../../../Database/Hooks";
import type { DetailsViewProps } from "./Types";

export function useDetailsViewState(props: DetailsViewProps)
{
	const { children } = props;

	const db = useDatabase();
	const recipes = db.recipes

	const items = children.map(child => child.type === "item");
	const groups = children.map(child => child.type === "group");
	
	return {
		items, groups,
		recipes,
	};
}