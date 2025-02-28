import { makeStyles, tokens } from "@fluentui/react-components";
import { PropsWithChildren } from "react";

export function ShellContent(props: PropsWithChildren<object>) {
	const style = useShellContentStyles();
	return <div className={style.content}>
		{props.children}
	</div>;
}

const useShellContentStyles = makeStyles({
	content: {
		gridArea: "content",
		backgroundColor: tokens.colorNeutralBackground4,
	},
});