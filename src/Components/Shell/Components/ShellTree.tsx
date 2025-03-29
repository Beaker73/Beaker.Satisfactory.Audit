import { makeStyles, tokens } from "@fluentui/react-components";
import type { PropsWithChildren } from "react";

export function ShellTree(props: PropsWithChildren<object>) 
{
	const style = useShellTreeStyles();
	return <div className={style.content}>
		{props.children}
	</div>;
}

const useShellTreeStyles = makeStyles({
	content: {
		gridArea: "tree",
		backgroundColor: tokens.colorNeutralBackground1,
		borderRight: `solid 1px ${tokens.colorNeutralStroke1}`,
		zIndex: 3,
	},
});