import type { PropsWithChildren } from "react";

import { usePageState } from "./State.ts";
import type { PageProps } from "./Types.ts";
import { usePageView } from "./View.tsx";

export function Page(props: PropsWithChildren<PageProps>)
{
	const { children, ...childLessProps } = props;

	const state = usePageState(childLessProps);
	return usePageView(children, state);
}