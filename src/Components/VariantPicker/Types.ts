import type { VariantEntry } from "../../Database/Types";
import type { useVariantPickerState } from "./State";

export type VariantPickerProps = {
	value?: VariantEntry,
	onVariantChange?: (variant: VariantEntry | undefined) => void,
};

export type VariantPickerState = ReturnType<typeof useVariantPickerState>;