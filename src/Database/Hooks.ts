import memoize from "fast-memoize";
import data from "../assets/database.json";
import type { Database, Item, Recipe, RecipeKey } from "./Types";

export type Data = typeof data;

export function useDatabase() 
{
	return data as Database;
}

export function useRecipeByKey<T extends RecipeKey | undefined>(key: T): undefined extends T ? Recipe | undefined : Recipe
{
	const database = useDatabase();
	const recipe: Recipe | undefined = key ? database?.recipes[key] ?? undefined : undefined;
	
	return recipe as undefined extends T ? Recipe | undefined : Recipe;
}

export const itemPath = memoize((item: Item, size = 64) =>
{
	return `${import.meta.env.BASE_URL}/images/${item.icon}_${size}.png`;
});