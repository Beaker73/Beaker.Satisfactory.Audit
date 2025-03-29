import type { PropsWithChildren } from "react";
import { useShellState } from "./State";
import type { ShellProps } from "./Types";
import { useShellView } from "./View";

export function Shell(props: PropsWithChildren<ShellProps>) 
{
	const { children, ...childLessProps } = props;
	const state = useShellState(childLessProps);
	return useShellView(state, children);
}