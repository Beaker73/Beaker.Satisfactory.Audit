import type { PropsWithChildren } from "react";

import { useHeadingState } from "./State.ts";
import type { HeadingProps } from "./Types.ts";
import { useHeadingView } from "./View.tsx";

export function Heading(props: PropsWithChildren<HeadingProps>)
{
	const { children, ...childLessProps } = props;

	const state = useHeadingState(childLessProps);
	return useHeadingView(children, state);
}