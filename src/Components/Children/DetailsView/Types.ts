import type { Node } from "../../../State/Node";
import type { useDetailsViewState } from "./State";

export type DetailsViewProps = {
	children: Node[],
};

export type DetailsViewState = ReturnType<typeof useDetailsViewState>;