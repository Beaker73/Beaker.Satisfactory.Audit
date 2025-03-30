import type { ReactElement } from "react";
import type { Element } from "../../State/Element";
import type { useHeadingState } from "./State";

export type HeadingProps = {
	/** The element the heading is for, giving this will auto select an icon for the heading */
	element?: Element,
	/** The icon to display in front of the title */
	icon?: ReactElement,
};

export type HeadingState = ReturnType<typeof useHeadingState>;