import type { StoryExport, StoryPageProps } from "./Types";

const exports = import.meta.glob<StoryExport>("../**/*Story.tsx", { eager: true, import: "story"})
const stories = Object.fromEntries(Object.values(exports).map((story) => [story.name, story] as const));


export function useStoryPageState(props: StoryPageProps)
{
	const { name } = props;
	const exportedStory: StoryExport | undefined = name ? stories[name] : undefined;
	const allStories = Object.values(stories).map((story) => story.name);

	return {
		name,
		exportedStory,
		allStories,
	};
}