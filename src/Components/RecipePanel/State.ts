import { useCallback, useMemo, useState } from "react";
import { useDatabase } from "../../Database/Hooks";
import type { ByItemEntry } from "../../Database/Merge";
import { useByItemDatabase } from "../../Database/Merge";
import type { RecipePanelProps } from "./Types";

export function useRecipePanelState(props: RecipePanelProps)
{
	const { onDismiss, type = "overlay" } = props;

	const database = useDatabase();
	const byItem = useByItemDatabase();


	const recipes = useMemo(() => Object.values(database.recipes)
		.filter(r => r.inMachine)
	, [database.recipes]);

	const [view] = useState<"byItem" | "byFactory">("byItem");
	const [subView, setSubView] = useState<"items" | "recipes">("items");
	const [selectedEntry, setSelectedEntry] = useState<ByItemEntry | undefined>(undefined);

	const onClickByItemEntry = useCallback(
		(entry: ByItemEntry) => 
		{
			setSelectedEntry(entry);
			if(entry.byMachine.count > 1)
				setSubView("recipes");
		},
		[]);

	const onBack = useCallback(
		() => 
		{
			setSubView("items");
			setSelectedEntry(undefined);
		},
		[]);

	return {
		type, onDismiss, onBack,
		view, subView,
		recipes, byItem,
		onClickByItemEntry, selectedEntry,
		
	};
}