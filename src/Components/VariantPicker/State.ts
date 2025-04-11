import { useCallback, useState } from "react";
import type { VariantPickerProps } from "./Types";

export function useVariantPickerState(props: VariantPickerProps)
{
	const { value, onVariantChange } = props;

	//const recipe = useRecipeByKey(value);
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
		variant: value, onVariantChange,
		onClick, isOpen, onDismiss,
	};
}