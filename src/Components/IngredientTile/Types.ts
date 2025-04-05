import type { ItemKey } from "../../Database/Types";
import type { useIngredientTileState } from "./State";

export type IngredientTileProps = {
	/** The item to display */
	itemKey: ItemKey,
	/** If given, a number batch will be shown */
	quantity?: number, 
	/** size as a predefined name -> tiny: 16, small: 20, medium: 32, large: 48, huge: 64 */
	size?: "tiny" | "small" | "medium" | "large" | "huge",
};

export type IngredientTileState = ReturnType<typeof useIngredientTileState>;