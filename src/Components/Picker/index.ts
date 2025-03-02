import type { PropsWithChildren } from "react";
import { usePickerState } from "./State";
import type { PickerProps } from "./Types";
import { usePickerView } from "./View";

export function Picker<T>(props: PropsWithChildren<PickerProps<T>>) {
	const { children, ...stateProps } = props;
	const state = usePickerState<T>(stateProps);
	return usePickerView<T>(state, children);
}