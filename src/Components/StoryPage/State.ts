import type { StoryExport, StoryPageProps } from "./Types";

const exports = import.meta.glob<StoryExport>("../**/*Story.tsx", { eager: true, import: "story"})
const stories = Object.fromEntries(Object.values(exports).map((story) => [story.name, story] as const));


export function useStoryPageState(props: StoryPageProps)
{
	const { name } = props;
	const exportedStory: StoryExport | undefined = stories[name];

	console.debug("stories", {stories, name, story: exportedStory});

	return {
		name,
		exportedStory,
	};
}