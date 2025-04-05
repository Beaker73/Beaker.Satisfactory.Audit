import { useRecipeByKey } from "../../Database/Hooks";
import type { RecipeFlowProps } from "./Types";

export function useRecipeFlowState(props: RecipeFlowProps)
{
	const { recipeKey, size = "large" } = props;

	const recipe = useRecipeByKey(recipeKey);

	return {
		size,
		recipe,
		ingredients: recipe.ingredients,
		products: recipe.products,
	};
}