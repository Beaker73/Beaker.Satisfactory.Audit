import { makeStyles, tokens } from "@fluentui/react-components";
import { PropsWithChildren } from "react";

export function ShellHeader(props: PropsWithChildren<object>) {
	const style = useShellHeaderStyles();
	return <div className={style.header}>
		{props.children}
	</div>;
}

const useShellHeaderStyles = makeStyles({
	header: {
		gridArea: "header",
		backgroundColor: tokens.colorNeutralBackground1,
		boxShadow: tokens.shadow16,
	},
});