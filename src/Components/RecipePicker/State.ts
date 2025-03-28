import { useMemo, useState } from "react";
import { useDatabase } from "../../Database/Hooks";
import type { Recipe } from "../../Database/Types";
import type { RecipePickerProps } from "./Types";

export function useRecipePickerState(props: RecipePickerProps) {

	const [pickedRecipe, setPickedRecipe] = useState<Recipe | undefined>();
	const isValid = true;

	const database = useDatabase();
	const recipes = useMemo(() => {

		console.debug("Building recipe list");
		
		const recipes = Object.values(database.recipes).filter(r => r.inMachine)
		const grouped = groupBy(recipes, r => r.products.map(p => p.item))

		// now merge miners into the list
		for(const miner of Object.values(database.miners)) {
			const itemKeys = miner.allowedResources.map(r => database.resources[r].item);
			for(const itemKey of itemKeys) {
				if(itemKey in grouped) {
					//
				}
			}
		}

		const sorted = objectEntries(grouped)
			.sort((a, b) => database.items[a[0]].slug.localeCompare(database.items[b[0]].slug));

		return sorted.map(([key, recipes]) => {
			return {
				item: database.items[key],
				recipes: recipes.sort((a, b) => a.slug.localeCompare(b.slug)),
				buildings: objectEntries(groupBy(recipes, r => r.producedIn))
					.map(([key, recipes]) => ({ 
						building: database.buildings[key], 
						recipes: recipes.sort((a, b) => a.slug.localeCompare(b.slug))
					}))
					.sort((a, b) => buildingOrder.indexOf(a.building.className) - buildingOrder.indexOf(b.building.className))
			}
		});

	}, [database.buildings, database.items, database.miners, database.recipes, database.resources]);

	return {
		recipes,

		isSubtle: props.appearance === "subtle",
		pickedRecipe,
		isValid,
		onPickedRecipe: setPickedRecipe,
	}
}

function groupBy<T, K extends string = string>(items: T[], keySelector: (item: T) => K | K[]) {
	const grouped = {} as Record<K, T[]>;

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

const buildingOrder = [
	"Desc_SmelterMk1_C",
	"Desc_FoundryMk1_C",
	"Desc_ConstructorMk1_C",
	"Desc_AssemblerMk1_C",
	"Desc_ManufacturerMk1_C",
	"Desc_OilRefinery_C",
	"Desc_Packager_C",
	"Desc_Blender_C",
	"Desc_QuantumEncoder_C",
	"Desc_Converter_C",
];

function objectEntries<T, K extends string = string>(obj: Record<K, T>) {
	return Object.entries(obj) as [K, T][];
}