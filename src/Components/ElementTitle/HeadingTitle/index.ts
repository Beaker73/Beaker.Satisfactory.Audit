import type { PropsWithChildren } from "react";

import { useHeadingTitleState } from "./State.ts";
import type { HeadingTitleProps } from "./Types.ts";
import { useHeadingTitleView } from "./View.tsx";

export function HeadingTitle(props: PropsWithChildren<HeadingTitleProps>)
{
	const { children, ...childLessProps } = props;

	const state = useHeadingTitleState(childLessProps);
	return useHeadingTitleView(children, state);
}