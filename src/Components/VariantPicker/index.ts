import { useVariantPickerState } from "./State.ts";
import type { VariantPickerProps } from "./Types.ts";
import { useVariantPickerView } from "./View.tsx";

export function VariantPicker(props: VariantPickerProps)
{
	const state = useVariantPickerState(props);
	return useVariantPickerView(state);
}