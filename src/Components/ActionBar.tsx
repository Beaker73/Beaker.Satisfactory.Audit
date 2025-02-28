import { makeStyles, tokens } from "@fluentui/react-components";
import { PropsWithChildren } from "react";

export function ActionBar(props: PropsWithChildren<object>) {
	const styles = useActionBarStyles();
	return <div className={styles.actionBar}>
		{props.children}
	</div>;
}
const useActionBarStyles = makeStyles({
	actionBar: {
		display: "grid",
		gridTemplateColumns: "1fr auto",
		gridTemplateRows: "1fr",
		gridGap: tokens.spacingHorizontalM,
		gridTemplateAreas: `"content actions"`,
	}
});



export function Actions(props: PropsWithChildren<object>) {
	const style = useActionsStyles();
	return <div className={style.actions}>
		{props.children}
	</div>;
}
const useActionsStyles = makeStyles({
	actions: {
		gridArea: "actions",
	},
});