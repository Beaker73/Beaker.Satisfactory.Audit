import { useActivePageState } from "./State";
import type { ActivePageProps } from "./Types";
import { useActivePageView } from "./View";

export function ActivePage(props: ActivePageProps) 
{
	const state = useActivePageState(props);
	return useActivePageView(state);
}