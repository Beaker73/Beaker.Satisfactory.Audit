import { makeStyles } from "@fluentui/react-components";
import type { ReactNode } from "react";
import type { ShellState } from "./Types";

 
export function useShellView(_state: ShellState, children: ReactNode) 
{
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
		gridTemplateColumns: "200px 1fr auto",
		gridTemplateRows: "auto 1fr",
		gridTemplateAreas: `"header header header" "tree content totals"`,
	},
})