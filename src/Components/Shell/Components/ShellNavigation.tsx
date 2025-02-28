import { makeStyles, tokens } from "@fluentui/react-components";

export function ShellNavigation() {
	const styles = useShellNavigationStyles();
	return <div className={styles.navigation}>
		TTT
	</div>;
}

const useShellNavigationStyles = makeStyles({
	navigation: {
		gridArea: "navigation",
		backgroundColor: tokens.colorNeutralBackground1,
		boxShadow: tokens.shadow16,
	}
});