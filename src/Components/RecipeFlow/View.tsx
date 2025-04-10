import { IngredientFlow } from "../IngredientFlow";
import type { RecipeFlowState } from "./Types";

export function useRecipeFlowView(state: RecipeFlowState)
{
	return <IngredientFlow inputs={state.inputs} outputs={state.outputs} size={state.size} />
}
