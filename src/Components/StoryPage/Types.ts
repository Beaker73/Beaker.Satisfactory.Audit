import type { useStoryPageState } from "./State";

export type StoryPageProps = {
	/** Name of the Story to show */
	name?: string,
};

export type StoryPageState = ReturnType<typeof useStoryPageState>;

export type StoryExport = {
	name: string,
	renderStory: () => JSX.Element,
}