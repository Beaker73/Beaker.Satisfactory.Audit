import { useCallback, useState } from "react";
import { useRecipeByKey } from "../../Database/Hooks";
import type { RecipePickerProps } from "./Types";

export function useRecipePickerState(props: RecipePickerProps)
{
	const { value } = props;

	const recipe = useRecipeByKey(value);
	const [isOpen, setIsOpen] = useState(false);

	const onClick = useCallback(
		() => 
		{
			setIsOpen(true);
		}, 
		[]);
	const onDismiss = useCallback(
		() => 
		{
			setIsOpen(false);
		}, 
		[]);

	return {
		recipe,
		onClick, isOpen, onDismiss,
	};
}