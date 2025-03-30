import type { PropsWithChildren } from "react";

import { useToolbarCommandsState } from "./State.ts";
import type { ToolbarCommandsProps } from "./Types.ts";
import { useToolbarCommandsView } from "./View.tsx";

export function ToolbarCommands(props: PropsWithChildren<ToolbarCommandsProps>)
{
	const { children, ...childLessProps } = props;

	const state = useToolbarCommandsState(childLessProps);
	return useToolbarCommandsView(children, state);
}