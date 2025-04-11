import { useCallback } from "react";
import { useDatabase } from "../../../Database/Hooks";
import type { VariantEntry } from "../../../Database/Types";
import { useWorldStore } from "../../../State";
import type { Building } from "../../../State/Item";
import type { DetailsViewProps } from "./Types";

export function useDetailsViewState(props: DetailsViewProps)
{
	const { children } = props;
	const updateVariant = useWorldStore(store => store.updateVariant);

	const db = useDatabase();
	const recipes = db.recipes

	const items = children.filter(child => child.type === "item");
	const groups = children.filter(child => child.type === "group");

	const onVariantChange = useCallback((item: Building, variant: VariantEntry | undefined) => 
	{
		updateVariant(item.id, variant?.key)
	}, [updateVariant]);
	
	return {
		items, groups,
		recipes, onVariantChange,
	};
}