import { useStoryPageState } from "./State.ts";
import type { StoryPageProps } from "./Types.ts";
import { useStoryPageView } from "./View.tsx";

export function StoryPage(props: StoryPageProps)
{
	const state = useStoryPageState(props);
	return useStoryPageView(state);
}