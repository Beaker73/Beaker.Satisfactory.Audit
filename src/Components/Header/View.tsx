import { HeaderState } from "./Types";
import { makeStyles, tokens, Text, Toolbar, ToolbarButton } from "@fluentui/react-components";
import { SettingsRegular, BugRegular } from "@fluentui/react-icons";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function useHeaderView(_state: HeaderState) {
	const styles = useHeaderStyles();
	return <div className={styles.root}>
		<div className={styles.logo}>
			<Text size={600} weight="semibold">Satisfactory Audit</Text>
		</div>
		<div className={styles.version}>
			<Text size={200} weight="regular">v0.00</Text>
		</div>
		<div className={styles.title}>World Name</div>
		<div className={styles.user}>
			<Toolbar>
				<ToolbarButton icon={<SettingsRegular />} />
				<ToolbarButton icon={<BugRegular />} />
			</Toolbar>
		</div>
	</div>;
}

const useHeaderStyles = makeStyles({
	root: {
		display: "grid",
		gridTemplateRows: "auto",
		gridTemplateColumns: "auto auto 1fr auto",
		gridTemplateAreas: `"logo version title user"`,
		padding: `${tokens.spacingVerticalXXS} ${tokens.spacingHorizontalM}`,
		gridColumnGap: tokens.spacingHorizontalM,
		alignItems: "center",
	},
	logo: {
		gridArea: "logo",
	},
	version: {
		gridArea: "version",
		alignSelf: "end", // version number low
	},
	title: {
		gridArea: "title",
		justifySelf: "center", // title center
	},
	user: {
		gridArea: "user",
	},
})
