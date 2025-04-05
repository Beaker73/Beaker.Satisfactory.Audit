import { makeStyles, tokens } from "@fluentui/react-components";
import type { PropsWithChildren } from "react";

export function ShellContent(props: PropsWithChildren<object>) 
{
	console.debug("ShellContent", {shadow: tokens.shadow16});

	const style = useShellContentStyles();
	return <>
		<div className={style.content}>
			{props.children}
		</div>
		<div className={style.shadow}></div>
	</>;
}

const useShellContentStyles = makeStyles({
	content: {
		gridArea: "content",
		backgroundColor: tokens.colorNeutralBackground4,
		zIndex: 0,
		overflow: "hidden",
	},
	shadow: {
		gridArea: "content",
		boxShadow: "0 0 2px rgba(0,0,0,0.12) inset, 0 4px 8px rgba(0,0,0,0.14) inset",
		pointerEvents: "none",
		outline: "solid 1px red",
		width: "100%",
		height: "100%",
		zIndex: 1,
	}
});