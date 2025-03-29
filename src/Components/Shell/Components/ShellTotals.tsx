import { makeStyles, tokens } from "@fluentui/react-components";

export function ShellTotals() 
{
	const styles = useShellTotalsStyles();
	return <div className={styles.totals}>
		TTT
	</div>;
}

const useShellTotalsStyles = makeStyles({
	totals: {
		gridArea: "totals",
		backgroundColor: tokens.colorNeutralBackground1,
		zIndex: 3,
	}
});