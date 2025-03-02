import type { Recipe } from "../../Database/Types";
import type { PickerProps } from "../Picker/Types";
import type { useRecipePickerState } from "./State";

export type RecipePickerProps = PickerProps<Recipe>;
export type RecipePickerState = ReturnType<typeof useRecipePickerState>;