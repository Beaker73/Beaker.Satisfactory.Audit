import type { Building, Item, Recipe } from "../../Database/Types";
import type { useRecipePanelState } from "./State";

export type RecipePanelProps = {
	type?: "overlay" | "inline",
	onDismiss?: () => void,
};

export type RecipePanelState = ReturnType<typeof useRecipePanelState>;

export type ByItemEntry = {
	item: Item,
	recipies: Recipe[],
	byMachine: {
		building: Building,
		recipes: Recipe[],
	}[]
}