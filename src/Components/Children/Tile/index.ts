import { useTileState } from "./State.ts";
import type { TileProps } from "./Types.ts";
import { useTileView } from "./View.tsx";

export function Tile(props: TileProps)
{
	const state = useTileState(props);
	return useTileView(state);
}