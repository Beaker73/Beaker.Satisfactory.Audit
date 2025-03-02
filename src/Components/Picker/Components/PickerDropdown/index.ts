import type { PropsWithChildren } from "react";
import { usePickerDropdownState } from "./State";
import type { PickerDropdownProps } from "./Types";
import { usePickerDropdownView } from "./View";

export function PickerDropdown(props: PropsWithChildren<PickerDropdownProps>) {
	const { children, ...stateProps } = props;
	const state = usePickerDropdownState(stateProps);
	return usePickerDropdownView(state, children);
}