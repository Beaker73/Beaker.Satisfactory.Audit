import type { PickerProps } from "./Types";

export function usePickerState<T>(props: PickerProps<T>) {
	return {
		isSubtle: true, // props.appearance === "subtle",
	};
}