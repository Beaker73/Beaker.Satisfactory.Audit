import { useItemByKey } from "../../Database/Hooks";
import type { IngredientTileProps } from "./Types";

export function useIngredientTileState(props: IngredientTileProps)
{
	const { itemKey, quantity, size = "large" } = props;
	
	const item = useItemByKey(itemKey);
	const hasQuantity = quantity !== undefined;
	const showQuantity = hasQuantity && size !== "tiny" && size !== "small";
	const tooltip = hasQuantity ? `${item.name} (${quantity})` : item.name;

	return {
		item,
		quantity, showQuantity,
		size,
		tooltip,
	};
}