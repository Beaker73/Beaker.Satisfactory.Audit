import { Page } from "../Page";
import type { StoryPageState } from "./Types";

export function useStoryPageView(state: StoryPageState)
{
	return <Page type="scrollable">
		{state.exportedStory?.renderStory?.() ?? <section><h1>404</h1><p>Story {state.name} not found.</p></section>}
	</Page>;
}