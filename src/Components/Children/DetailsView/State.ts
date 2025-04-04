import { useCallback } from "react";
import { useDatabase } from "../../../Database/Hooks";
import type { DetailsViewProps } from "./Types";

export function useDetailsViewState(props: DetailsViewProps)
{
	const { children } = props;

	const db = useDatabase();
	const recipes = db.recipes

	const items = children.filter(child => child.type === "item");
	const groups = children.filter(child => child.type === "group");

	const onRecipeChange = useCallback(() => {}, []);
	
	return {
		items, groups,
		recipes, onRecipeChange,
	};
}