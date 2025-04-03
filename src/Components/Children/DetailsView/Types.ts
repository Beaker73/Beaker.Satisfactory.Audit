import type { Element } from "../../../State/Element";
import type { useDetailsViewState } from "./State";

export type DetailsViewProps = {
	children: Element[],
};

export type DetailsViewState = ReturnType<typeof useDetailsViewState>;