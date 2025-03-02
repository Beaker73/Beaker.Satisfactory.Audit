import { Fragment, type ReactNode } from "react";
import type { PickerDropdownState } from "./Types";

export function usePickerDropdownView(_state: PickerDropdownState, children: ReactNode) {
	return <Fragment>
		{children}
	</Fragment>
}