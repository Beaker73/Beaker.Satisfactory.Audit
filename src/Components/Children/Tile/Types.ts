import type { NodeId } from "../../../State/Node";
import type { useTileState } from "./State";

export type TileProps = {
	nodeId: NodeId,
};

export type TileState = ReturnType<typeof useTileState>;