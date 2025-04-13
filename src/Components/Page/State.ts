import type { PageProps } from "./Types";

export function usePageState(props: PageProps)
{
	const { type = "scrollable", className, breadcrumb } = props;

	return {
		breadcrumb,
		className,
		type,
	};
}