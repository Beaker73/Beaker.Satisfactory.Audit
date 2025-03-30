import { Card, List, ListItem, makeStyles, mergeClasses, Text, tokens, Toolbar, ToolbarButton, Tooltip } from "@fluentui/react-components";
import { GalaxyIcon32, WorldIcon } from "../../Helpers/Icons";
import { Heading } from "../ElementTitle";
import { HeadingTitle } from "../ElementTitle/HeadingTitle";
import { ToolbarCard, ToolbarCommands } from "../ToolbarCard";
import type { WorldsPageState } from "./Types";

export function useWorldsPageView(state: WorldsPageState)
{
	const style = useWorldsPageStyles();

	return <div className={style.root}>
		<Heading icon={<GalaxyIcon32 />}>
			<HeadingTitle>Known Worlds in your Galaxy</HeadingTitle>
		</Heading>
		<ToolbarCard>
			<ToolbarCommands>
				<Toolbar>
					<Tooltip content="Creates a new pristine World to use as you see fit" relationship="description" appearance="inverted" withArrow>
						<ToolbarButton onClick={state.onCreateProject} icon={<WorldIcon />}>Create new World</ToolbarButton>
					</Tooltip>
				</Toolbar>
			</ToolbarCommands>
		</ToolbarCard>
		<List selectionMode="single" selectedItems={state.selectedProjects} navigationMode="composite" className={style.tiles}>
			{state.projects.map(project => 
			{
				const cl = mergeClasses(
					style.tile,
					project.id === state.activeProjectId ? style.tileActive : undefined
				);
				return <ListItem checkmark={null} key={project.id}>
					<Card role="gridcell" className={cl} onClick={() => state.onActivateProject(project.id)}>
						<div className={style.tileName}>{project.name}</div>
						<div className={style.labelGrid}>
							<Text size={200}>Created</Text>
							<Text size={200}>{project.createdAt.toLocaleDateString()}</Text>
							<Text size={200}>Last used</Text>
							<Text size={200}>{project.lastUsedAt ? project.lastUsedAt.toLocaleDateString() : "Never"}</Text>
						</div>
					</Card>
				</ListItem>;
			})}
		</List>
	</div>;
}

const useWorldsPageStyles = makeStyles({
	root: {
		display: "flex",
		flexDirection: "column",
		gap: tokens.spacingVerticalM,
	},
	tiles: {
		display: "flex",
		flexWrap: "wrap",
		gap: tokens.spacingHorizontalM,		
	},
	tile: {
		width: "220px",
		height: "90px",
		"&:hover": {
			backgroundColor: tokens.colorNeutralBackground3Hover,
			boxShadow: tokens.shadow8,
		},
		"&:active": {
			backgroundColor: tokens.colorNeutralBackground3Pressed,
			boxShadow: tokens.shadow4,
		},
		"& > .fui-Label": {
			padding: "0 !important",
		}
	},
	tileActive: {
		backgroundColor: tokens.colorNeutralBackground3Selected,
	},
	tileName: {
		fontSize: tokens.fontSizeBase400,
		fontWeight: tokens.fontWeightSemibold,
	},
	labelGrid: {
		display: "grid",
		gridTemplateColumns: "auto 1fr",
		gridColumnGap: tokens.spacingHorizontalS,
		gridRowGap: 0,
	}
})