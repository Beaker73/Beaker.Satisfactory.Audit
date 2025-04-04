import type { RecipeKey } from "../../Database/Types";
import type { useRecipePickerState } from "./State";

export type RecipePickerProps = {
	value?: RecipeKey,
	onRecipeChange?: (recipeKey: RecipeKey | undefined) => void,
};

export type RecipePickerState = ReturnType<typeof useRecipePickerState>;