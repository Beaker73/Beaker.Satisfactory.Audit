import type { PropsWithChildren } from "react";

import { useColorizeState } from "./State.ts";
import type { ColorizeProps } from "./Types.ts";
import { useColorizeView } from "./View.tsx";

export function Colorize(props: PropsWithChildren<ColorizeProps>)
{
	const { children, ...childLessProps } = props;

	const state = useColorizeState(childLessProps);
	return useColorizeView(children, state);
}