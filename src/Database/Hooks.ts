import memoize from "fast-memoize";
import data from "../assets/database.json";
import type { NullableCast } from "../Helpers/Types";
import type { Building, Database, Item, ItemKey, Recipe, RecipeKey } from "./Types";

export type Data = typeof data;

export function getDatabase()
{
	return data as Database;
}
export function useDatabase() 
{
	return data as Database;
}



export function useRecipeByKey<T extends RecipeKey | undefined>(key: T): NullableCast<T, Recipe>
{
	const database = useDatabase();
	const recipe: Recipe | undefined = key ? database?.recipes[key] ?? undefined : undefined;
	
	return recipe as NullableCast<T, Recipe>;
}

export function useItemByKey<T extends ItemKey | undefined>(key: T): NullableCast<T, Item>
{
	const database = useDatabase();
	const item: Item | undefined = key ? database?.items[key] ?? undefined : undefined;
	
	return item as NullableCast<T, Item>;
}






export const itemPath = memoize((item: Item, size = 64) =>
{
	return `${import.meta.env.BASE_URL}/images/${item.icon}_${size}.png`;
});

export const buildingPath = memoize((building: Building, size = 64) =>
{
	return `${import.meta.env.BASE_URL}/images/${building.icon}_${size}.png`;
});