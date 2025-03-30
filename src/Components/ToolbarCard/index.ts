import type { PropsWithChildren } from "react";

import { useToolbarCardState } from "./State.ts";
import type { ToolbarCardProps } from "./Types.ts";
import { useToolbarCardView } from "./View.tsx";

export * from "./ToolbarCommands";
export * from "./ToolbarOptions";

export function ToolbarCard(props: PropsWithChildren<ToolbarCardProps>)
{
	const { children, ...childLessProps } = props;

	const state = useToolbarCardState(childLessProps);
	return useToolbarCardView(children, state);
}
