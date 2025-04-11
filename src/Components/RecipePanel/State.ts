import { useCallback, useMemo, useState } from "react";
import { useDatabase } from "../../Database/Hooks";
import { useByItemDatabase } from "../../Database/Merge";
import type { BuildingKey, ByItemEntry, VariantEntry } from "../../Database/Types";
import type { RecipePanelProps } from "./Types";

export function useRecipePanelState(props: RecipePanelProps)
{
	const { onDismiss, onVariantSelected, type = "overlay" } = props;

	const database = useDatabase();
	const byItem = useByItemDatabase();


	const recipes = useMemo(() => Object.values(database.recipes)
		.filter(r => r.inMachine)
	, [database.recipes]);

	const [view] = useState<"byItem" | "byFactory">("byItem");
	const [subView, setSubView] = useState<"items" | "recipes">("items");
	const [selectedEntry, setSelectedEntry] = useState<ByItemEntry | undefined>(undefined);

	const onClickByItemEntry = useCallback(
		(entry: ByItemEntry) => 
		{
			if(entry.byMachine.count > 1) 
			{
				setSelectedEntry(entry);
				setSubView("recipes");
			}
			else 
			{
				const onlyBuilding = entry.byMachine[Object.keys(entry.byMachine).find(k => k !== "count") as BuildingKey];
				if(onlyBuilding) 
				{
					const onlyVariant = onlyBuilding.variants[0];
					if(onlyVariant) 
					{
						onVariantSelected?.(onlyVariant);
						onDismiss?.();
					}
				}
			}
		},
		[onDismiss, onVariantSelected]);
	const onClickByVariantEntry = useCallback(
		(variant: VariantEntry) => 
		{
			onVariantSelected?.(variant);
			onDismiss?.();
		},
		[onDismiss, onVariantSelected]);

	const onBack = useCallback(
		() => 
		{
			setSubView("items");
			setSelectedEntry(undefined);
		},
		[]);

	return {
		type, onDismiss, onBack,
		view, subView,
		recipes, byItem,
		onClickByItemEntry, onClickByVariantEntry, selectedEntry,
		
	};
}