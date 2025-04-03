import { useTilesViewState } from "./State.ts";
import type { TilesViewProps } from "./Types.ts";
import { useTilesViewView } from "./View.tsx";

export function TilesView(props: TilesViewProps)
{
	const state = useTilesViewState(props);
	return useTilesViewView(state);
}