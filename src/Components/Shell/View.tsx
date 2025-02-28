import { ReactNode } from "react";
import { ShellState } from "./Types";
import { makeStyles } from "@fluentui/react-components";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function useShellView(_state: ShellState, children: ReactNode) {
	const styles = useShellStyles();
	return <div className={styles.root}>
		{children}
	</div>;
}

const useShellStyles = makeStyles({
	root: {
		position: "fixed",
		display: "grid",
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
		gridTemplateColumns: "auto 1fr",
		gridTemplateRows: "auto 1fr",
		gridTemplateAreas: `"header header" "navigation content"`,
	},
})