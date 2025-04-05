import type { RecipeKey } from "../../Database/Types";
import type { useRecipeFlowState } from "./State";

export type RecipeFlowProps = {
	recipeKey: RecipeKey;
	size?: "tiny" | "small" | "medium" | "large" | "huge";
};

export type RecipeFlowState = ReturnType<typeof useRecipeFlowState>;