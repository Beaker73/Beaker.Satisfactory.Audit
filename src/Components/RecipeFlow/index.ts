import { useRecipeFlowState } from "./State.ts";
import type { RecipeFlowProps } from "./Types.ts";
import { useRecipeFlowView } from "./View.tsx";

export function RecipeFlow(props: RecipeFlowProps)
{
	const state = useRecipeFlowState(props);
	return useRecipeFlowView(state);
}