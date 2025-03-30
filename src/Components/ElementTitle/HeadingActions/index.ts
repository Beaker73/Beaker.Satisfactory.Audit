import type { PropsWithChildren } from "react";

import { useHeadingActionsState } from "./State.ts";
import type { HeadingActionsProps } from "./Types.ts";
import { useHeadingActionsView } from "./View.tsx";

export function HeadingActions(props: PropsWithChildren<HeadingActionsProps>)
{
	const { children, ...childLessProps } = props;

	const state = useHeadingActionsState(childLessProps);
	return useHeadingActionsView(children, state);
}