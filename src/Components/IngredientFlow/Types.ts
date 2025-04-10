import type { ItemKey } from "../../Database/Types";
import type { useIngredientFlowState } from "./State";

export type IngredientFlowProps = {
	inputs: ItemKeyQuantity[],
	outputs: ItemKeyQuantity[],
	size?: "tiny" | "small" | "medium" | "large" | "huge";
};

export type ItemKeyQuantity = {
	itemKey: ItemKey;
	quantity: number;
};


export type IngredientFlowState = ReturnType<typeof useIngredientFlowState>;