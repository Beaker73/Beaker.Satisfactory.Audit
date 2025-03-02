import { useRecipePickerState } from "./State";
import type { RecipePickerProps } from "./Types";
import { useRecipePickerView } from "./View";

export function RecipePicker(props: RecipePickerProps) {
	const state = useRecipePickerState(props);
	return useRecipePickerView(state);
}