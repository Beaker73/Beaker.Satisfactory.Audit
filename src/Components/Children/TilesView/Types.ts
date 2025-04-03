import type { useTilesViewState } from "./State";
import type { Element } from "../../../State/Element"

export type TilesViewProps = {
	children: Element[],
};

export type TilesViewState = ReturnType<typeof useTilesViewState>;