import { useIngredientFlowState } from "./State.ts";
import type { IngredientFlowProps } from "./Types.ts";
import { useIngredientFlowView } from "./View.tsx";

export function IngredientFlow(props: IngredientFlowProps)
{
	const state = useIngredientFlowState(props);
	return useIngredientFlowView(state);
}