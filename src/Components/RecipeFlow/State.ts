import { useMemo } from "react";
import { useRecipeByKey } from "../../Database/Hooks";
import type { RecipeFlowProps } from "./Types";

export function useRecipeFlowState(props: RecipeFlowProps)
{
	const { recipeKey, size = "large" } = props;

	const recipe = useRecipeByKey(recipeKey);
	const { inputs, outputs } = useMemo(() => 
	{
		const inputs = recipe.ingredients.map(i => ({
			itemKey: i.item,
			quantity: i.amount,
		}))
		const outputs = recipe.products.map(p => ({
			itemKey: p.item,
			quantity: p.amount,
		}));
		return { inputs, outputs };
	}, [recipe.ingredients, recipe.products]);

	return {
		size,
		inputs, outputs,
	};
}