import { useIngredientTileState } from "./State.ts";
import type { IngredientTileProps } from "./Types.ts";
import { useIngredientTileView } from "./View.tsx";

export function IngredientTile(props: IngredientTileProps)
{
	const state = useIngredientTileState(props);
	return useIngredientTileView(state);
}