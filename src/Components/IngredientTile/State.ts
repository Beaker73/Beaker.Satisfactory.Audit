import { useBuildingByKey, useItemByKey } from "../../Database/Hooks";
import type { IngredientTileProps } from "./Types";

export function useIngredientTileState(props: IngredientTileProps)
{
	const { itemKey, buildingKey, quantity, size = "large" } = props;
	
	const item = useItemByKey(itemKey);
	const building = useBuildingByKey(buildingKey);
	console.debug({itemKey, item, buildingKey, building})

	const hasQuantity = quantity !== undefined;
	const showQuantity = hasQuantity && size !== "tiny" && size !== "small";
	const tooltip = hasQuantity ? `${item?.name ?? building?.name} (${quantity})` : item?.name ?? building?.name ?? "";

	return {
		item, building,
		quantity, showQuantity,
		size,
		tooltip,
	};
}