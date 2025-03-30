import type { PropsWithChildren } from "react";

import { useToolbarOptionsState } from "./State.ts";
import type { ToolbarOptionsProps } from "./Types.ts";
import { useToolbarOptionsView } from "./View.tsx";

export function ToolbarOptions(props: PropsWithChildren<ToolbarOptionsProps>)
{
	const { children, ...childLessProps } = props;

	const state = useToolbarOptionsState(childLessProps);
	return useToolbarOptionsView(children, state);
}