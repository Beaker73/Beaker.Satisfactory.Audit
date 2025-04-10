import type { IngredientFlowProps } from "./Types";

export function useIngredientFlowState(props: IngredientFlowProps)
{
	const { inputs, outputs, size = "large" } = props;
	
	return {
		size,
		inputs, outputs,
	};
}