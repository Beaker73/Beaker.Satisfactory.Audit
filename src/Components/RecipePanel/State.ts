import { useCallback, useMemo, useState } from "react";
import { useDatabase } from "../../Database/Hooks";
import type { BuildingKey } from "../../Database/Types";
import { groupBy, objectEntries } from "../../Helpers/Object";
import { buildingSort } from "../../Helpers/Sorting";
import type { ByItemEntry, RecipePanelProps } from "./Types";

export function useRecipePanelState(props: RecipePanelProps)
{
	const { onDismiss } = props;

	const database = useDatabase();
	const recipes = useMemo(() => Object.values(database.recipes)
		.filter(r => r.inMachine)
	, [database.recipes]);
	const [byItem, byFactory] = useMemo(
		() => 
		{
			const bareByItem = groupBy(recipes, recipe => recipe.products.map(i => i.item));
			const byItem = Object.fromEntries(
				objectEntries(bareByItem)
					.map(([key, recipesForItem]) => [
						key, 
						{
							item: database.items[key],
							recipies: recipesForItem
								.sort((a, b) => a.name.localeCompare(b.name))
								.sort((a) => a.alternate ? 1 : -1), // Sort alternate recipes to the bottom
							byMachine: objectEntries(groupBy(recipesForItem, recipe => recipe.producedIn))
								.map(([key, recipes]) => ({
									building: database.buildings[key],
									recipes,
								}))
								.sort((a,b) => buildingSort(a.building.className as BuildingKey, b.building.className as BuildingKey))
						}
					] as const)
					.sort(([_keyA, itemA], [_keyB, itemB]) => itemA.item.name.localeCompare(itemB.item.name))
			) ;

			console.debug("byItem", {bareByItem, byItem});

			const byFactory = groupBy(recipes, recipe => recipe.producedIn);
			
			return [byItem, byFactory] as const;
		}, 
		[database.buildings, database.items, recipes]);

	const [view] = useState<"byItem" | "byFactory">("byItem");
	const [subView, setSubView] = useState<"items" | "recipes">("items");
	const [selectedEntry, setSelectedEntry] = useState<ByItemEntry | undefined>(undefined);

	const onClickByItemEntry = useCallback(
		(entry: ByItemEntry) => 
		{
			setSelectedEntry(entry);
			if(entry.recipies.length > 1)
				setSubView("recipes");
		},
		[]);

	const onBack = useCallback(
		() => 
		{
			setSubView("items");
			setSelectedEntry(undefined);
		},
		[]);

	return {
		onDismiss, onBack,
		view, subView,
		recipes, byItem, byFactory,
		onClickByItemEntry, selectedEntry,
		
	};
}