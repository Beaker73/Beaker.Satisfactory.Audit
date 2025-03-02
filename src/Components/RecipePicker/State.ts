import { useMemo, useState } from "react";
import { useDatabase } from "../../Database/Hooks";
import type { Recipe } from "../../Database/Types";
import type { RecipePickerProps } from "./Types";

export function useRecipePickerState(props: RecipePickerProps) {

	const [pickedRecipe, setPickedRecipe] = useState<Recipe | undefined>();
	const isValid = true;

	const database = useDatabase();
	const recipes = useMemo(() => {
		
		const recipes = Object.values(database.recipes).filter(r => r.inMachine)
		const grouped = groupBy(recipes, r => r.products.map(p => p.item))
		const sorted = Object.entries(grouped)
			.sort((a, b) => a[0].localeCompare(b[0]));

		return sorted.map(([key, recipes]) => {
			return {
				item: database.items[key],
				recipes,
				buildings: Object.entries(groupBy(recipes, r => r.producedIn))
					.map(([key, recipes]) => ({ 
						building: database.buildings[key], 
						recipes 
					}))
			}
		});

	}, [database.buildings, database.items, database.recipes]);

	return {
		recipes,

		isSubtle: props.appearance === "subtle",
		pickedRecipe,
		isValid,
		onPickedRecipe: setPickedRecipe,
	}
}

function groupBy<T>(items: T[], keySelector: (item: T) => string | string[]) {
	const grouped: Record<string, T[]> = {};

	for (const item of items) {
		const keys = keySelector(item);
		const keyArray = Array.isArray(keys) ? keys : [keys];

		for (const key of keyArray) {
			if (!grouped[key])
				grouped[key] = [];

			grouped[key].push(item);
		}
	}

	return grouped;
}