import type { useDetailsViewState } from "./State";
import type { Element } from "../../../State/Element"

export type DetailsViewProps = {
	children: Element[],
};

export type DetailsViewState = ReturnType<typeof useDetailsViewState>;