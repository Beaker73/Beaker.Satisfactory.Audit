import { useWorldsPageState } from "./State.ts";
import type { WorldsPageProps } from "./Types.ts";
import { useWorldsPageView } from "./View.tsx";

export function WorldsPage(props: WorldsPageProps)
{
	const state = useWorldsPageState(props);
	return useWorldsPageView(state);
}