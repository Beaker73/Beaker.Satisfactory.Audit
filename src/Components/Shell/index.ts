import { PropsWithChildren } from "react";
import { useShellState } from "./State";
import { useShellView } from "./View";
import { ShellProps } from "./Types";

export function Shell(props: PropsWithChildren<ShellProps>) {
	const { children, ...childLessProps } = props;
	const state = useShellState(childLessProps);
	return useShellView(state, children);
}