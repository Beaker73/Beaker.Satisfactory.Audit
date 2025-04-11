import { buildingSort } from "../Helpers/Sorting";
import { getDatabase } from "./Hooks";
import type { Building, BuildingKey, Generator, Item, ItemKey, Miner, Recipe } from "./Types";

const byItem = merge();

export function useByItemDatabase() 
{
	return byItem;
}


// merge recipes, generators and miners into a single list
export function merge() 
{
	const database = getDatabase();

	const byItem: Partial<Record<ItemKey, ByItemEntry>> = {};

	// Object.values(database.generators)
	// 	.forEach(generator => 
	// 	{
	// 		generator.fuel.forEach((fuelItemKey) =>
	// 		{
	// 			const item = database.items[fuelItemKey];
	// 			const entry = byItem[item.className] = byItem[item.className] ?? {
	// 				itemKey: item.className,
	// 				item,
	// 				byMachine: {},
	// 			};
	// 			entry.byMachine[generator.className] = entry.byMachine[generator.className] ?? {
	// 				type: "generator",
	// 				machine: generator,
	// 				input: [database.items[fuelItemKey]],
	// 				output: [],
	// 			}
	// 		});
	// 	});

	Object.values(database.miners)
		.forEach(miner =>
		{
			miner.allowedResources.forEach((resourceKey) => 
			{
				const resource = database.resources[resourceKey];
				const item = database.items[resource.item];
				const entry = byItem[item.className] = byItem[item.className] ?? {
					itemKey: item.className,
					item,
					byMachine: { count: 0 },
				} satisfies ByItemEntry;
				
				entry.byMachine[miner.className] = entry.byMachine[miner.className] ?? {
					building: database.buildings[miner.className],
					variants: [],
					count: 0,
				} satisfies ByMachineEntry;

				entry.byMachine[miner.className]!.variants = [
					...entry.byMachine[miner.className]!.variants, 
					{
						type: "miner",
						source: miner,
						input: [],
						output: [{quantity: miner.itemsPerCycle, itemKey: resource.item, item: database.items[resource.item]}],
					} satisfies VariantEntry
				];
				
				entry.byMachine.count++;
			});
		});

	Object.values(database.recipes)
		.filter(recipe => recipe.inMachine)
		.forEach(recipe =>
		{
			recipe.products.forEach((product) => 
			{
				const item = database.items[product.item];
				if(!item)
					console.log("Missing item", product.item, recipe.className);
				const entry = byItem[item.className] = byItem[item.className] ?? {
					itemKey: item.className,
					item,
					byMachine: { count: 0 },
				} satisfies ByItemEntry;
				recipe.producedIn.forEach(building =>
				{
					const byMachine = entry.byMachine[building] = entry.byMachine[building] ?? {
						building: database.buildings[building],
						variants: [],
						count: 0,
					} satisfies ByMachineEntry;
					byMachine.variants = [...byMachine.variants, {
						type: "recipe",
						source: recipe,
						input: recipe.ingredients.map(i => ({ quantity: i.amount, itemKey: i.item, item: database.items[i.item] })),
						output: recipe.products.map(i => ({ quantity: i.amount, itemKey: i.item, item: database.items[i.item] })),	
					} satisfies VariantEntry];
					
					entry.byMachine.count++;
					entry.byMachine[building].count = entry.byMachine.count;
				})
			});
		});

	// recreate with keys in desired order
	// for items, we use alphabetical order
	// for machines, we use a predefined desirable order
	const sortedByItem: Partial<Record<ItemKey, ByItemEntry>> = {};
	Object.entries(byItem)
		.sort(([, valueA], [, valueB]) => valueA.item.name.localeCompare(valueB.item.name))
		.forEach(([key, entry]) => sortedByItem[key as ItemKey] = {
			...entry,
			byMachine: Object.fromEntries(
				Object.entries(entry.byMachine)
					.sort(([keyA], [keyB]) => buildingSort(keyA as BuildingKey, keyB as BuildingKey)
					)) as Partial<Record<BuildingKey, ByMachineEntry>> & { count: number },
		});
		


	return sortedByItem;
}

export type ByItemEntry = {
	itemKey: ItemKey,
	item: Item,
	byMachine: Partial<Record<BuildingKey, ByMachineEntry>> & { count: number },
}
export type ByMachineEntry = {
	building: Building,
	variants: VariantEntry[],
	count: number,
}

export type RecipeVariantEntry = {
	type: "recipe",
	source: Recipe,
	input: ItemQuantity[],
	output: ItemQuantity[],
}
export type MinerVariantEntry = {
	type: "miner",
	source: Miner,
	input: ItemQuantity[],
	output: ItemQuantity[],
}
export type GeneratorVariantEntry = {
	type: "generator",
	source: Generator,
	input: ItemQuantity[],
	output: ItemQuantity[],
}
export type VariantEntry = RecipeVariantEntry | MinerVariantEntry | GeneratorVariantEntry;

export type ItemQuantity = {
	item: Item,
	itemKey: ItemKey,
	quantity: number,
}