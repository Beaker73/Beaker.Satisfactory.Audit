import type { IngredientFlowProps } from "./Types";

export function useIngredientFlowState(props: IngredientFlowProps)
{
	const { building, inputs, outputs, size = "large" } = props;
	
	return {
		size,
		building,
		inputs, outputs,
	};
}