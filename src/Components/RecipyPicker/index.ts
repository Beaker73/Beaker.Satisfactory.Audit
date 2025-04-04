import { useRecipePickerState } from "./State.ts";
import type { RecipePickerProps } from "./Types.ts";
import { useRecipePickerView } from "./View.tsx";

export function RecipePicker(props: RecipePickerProps)
{
	const state = useRecipePickerState(props);
	return useRecipePickerView(state);
}