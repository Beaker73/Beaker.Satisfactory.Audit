import { Tab, TabList } from "@fluentui/react-components";
import { useNavigate } from "raviger";
import { Page } from "../Page";
import type { StoryPageState } from "./Types";

export function useStoryPageView(state: StoryPageState)
{
	const navigate = useNavigate();
	return <Page type="scrollable">
		<TabList selectedValue={state.name}>
			{state.allStories.map(story => <Tab key={story} value={story} onClick={() => navigate(`/story/${story}`)}>{story}</Tab>)}
		</TabList>
		{state.exportedStory && state.exportedStory.renderStory?.()}
		{!state.exportedStory && state.name && <section><h1>404</h1><p>Story {state.name} not found.</p></section>}
	</Page>;
}