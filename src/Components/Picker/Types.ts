import type { usePickerState } from "./State";

export type PickerAppearance = "default" | "subtle";

export type PickerProps<T> = {
	value?: T,
	onChange?: (value: T) => void,
	appearance?: PickerAppearance,
};

export type PickerState<T> = ReturnType<typeof usePickerState<T>>;