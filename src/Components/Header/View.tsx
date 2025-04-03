import { Input, makeStyles, Text, tokens, Toolbar, ToolbarButton } from "@fluentui/react-components";
import { BugRegular, SettingsRegular } from "@fluentui/react-icons";
import type { HeaderState } from "./Types";
import { useBasePath } from "raviger";

 
export function useHeaderView(state: HeaderState) 
{
	const basePath = useBasePath();

	const styles = useHeaderStyles();
	return <div className={styles.root}>
		<div className={styles.logo}>
			<img className={styles.logoSvg} alt="logo" src={`${basePath}/logo.svg`} />
			<Text size={600} weight="semibold">Satisfactory Audit</Text>
		</div>
		<div className={styles.version}>
			<Text size={200} weight="regular">v0.00</Text>
		</div>
		<div className={styles.title}>
			<Input value={state.worldName} onChange={state.updateWorldName} appearance="filled-lighter" />
		</div>
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
		gridTemplateAreas: "\"logo version title user\"",
		padding: `${tokens.spacingVerticalXXS} ${tokens.spacingHorizontalM}`,
		gridColumnGap: tokens.spacingHorizontalM,
		alignItems: "center",
	},
	logo: {
		gridArea: "logo",
	},
	logoSvg: {
		width: "32px",
		height: "32px",
		marginRight: tokens.spacingHorizontalXS,
		transform: "translateY(3px)",
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
