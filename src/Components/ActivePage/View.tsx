import type { ActivePageState } from "./Types";

export function useActivePageView(state: ActivePageState) 
{
	return state.page;
}