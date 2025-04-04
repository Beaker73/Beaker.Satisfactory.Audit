import { useMemo } from "react";
import { useDatabase } from "../../Database/Hooks";
import type { ItemKey } from "../../Database/Types";
import { groupBy } from "../../Helpers/Object";
import type { RecipePanelProps } from "./Types";

export function useRecipePanelState(props: RecipePanelProps)
{
	const { onDismiss } = props;

	const database = useDatabase();
	const recipes = useMemo(() => Object.values(database.recipes)
		.filter(r => r.inMachine)
	, [database.recipes]);
	const [byItem, byFactory] = useMemo(
		() => 
		{
			const bareByItem = groupBy(recipes, recipe => recipe.products.map(i => i.item));
			const byItem = Object.fromEntries(
				Object.entries(bareByItem)
					.map(([key, recipesForItem]) => [
						key, 
						{
							item: database.items[key as ItemKey],
							recipies: recipesForItem
								.sort((a, b) => a.name.localeCompare(b.name))
								.sort((a) => a.alternate ? 1 : -1) // Sort alternate recipes to the bottom
						}
					] as const)
					.sort(([_keyA, itemA], [_keyB, itemB]) => itemA.item.name.localeCompare(itemB.item.name))
			);

			console.debug("byItem", {bareByItem, byItem});

			const byFactory = groupBy(recipes, recipe => recipe.producedIn);
			
			return [byItem, byFactory] as const;
		}, 
		[database.items, recipes]);

	return {
		onDismiss,
		recipes, byItem, byFactory,
		view: "byItem",
	};
}