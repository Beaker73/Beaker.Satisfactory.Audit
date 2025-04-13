import type { Node } from "../../../State/Node";
import type { useTilesViewState } from "./State";

export type TilesViewProps = {
	children: Node[],
};

export type TilesViewState = ReturnType<typeof useTilesViewState>;