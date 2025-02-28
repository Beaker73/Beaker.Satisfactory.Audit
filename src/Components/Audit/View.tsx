import { AuditState } from "./Types";
import { makeStyles, tokens } from "@fluentui/react-components";
import { Group } from "./Components/Group";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function useAuditView(state: AuditState) {
	const styles = useAuditStyles();
	return <div className={styles.root}>
		<div className={styles.group}>
			<Group group={state.world} />
		</div>
	</div>;
}

const useAuditStyles = makeStyles({
	root: {
		padding: `${tokens.spacingVerticalM} ${tokens.spacingHorizontalM}`,
	},
	group: {
		display: "grid",
		gridTemplateColumns: "1fr 100px",
		gridGap: tokens.spacingHorizontalM,
	},
	icon: {
		fontSize: "20px",
	}
})