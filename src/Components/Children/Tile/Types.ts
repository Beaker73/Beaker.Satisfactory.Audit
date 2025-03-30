import type { useTileState } from "./State";

export type TileProps = {
	elementId: string,
};

export type TileState = ReturnType<typeof useTileState>;