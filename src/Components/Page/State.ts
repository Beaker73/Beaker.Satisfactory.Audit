import type { PageProps } from "./Types";

export function usePageState(props: PageProps)
{
	const { type = "scrollable" } = props;

	return {
		type,
	};
}