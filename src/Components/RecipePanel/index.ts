import { useRecipePanelState } from "./State.ts";
import type { RecipePanelProps } from "./Types.ts";
import { useRecipePanelView } from "./View.tsx";

export function RecipePanel(props: RecipePanelProps)
{
	const state = useRecipePanelState(props);
	return useRecipePanelView(state);
}