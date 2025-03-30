import { makeStyles, ToggleButton, tokens, Toolbar, ToolbarButton, Tooltip } from "@fluentui/react-components";
import { DetailsIcon, FactoryIcon, FolderIcon, RobotIcon, TilesIcon } from "../../Helpers/Icons";
import { ToolbarCard, ToolbarCommands, ToolbarOptions } from "../ToolbarCard";
import { Tile } from "./Tile";
import type { ChildrenState } from "./Types";

export function useChildrenView(state: ChildrenState)
{
	const {
		group,
		isTilesView, onTilesView,
		isDetailsView, onDetailsView,
		canCreateFactory, onCreateFactory, 
		canCreateFolder, onCreateFolder, 
		canCreateMachine, onCreateMachine
	} = state;


	const style = useChildrenViewStyles();

	if(!group) return null;
	return <div className={style.root}>
		<ToolbarCard>
			<ToolbarCommands>
				<Toolbar>
					{canCreateFactory && <Tooltip appearance="inverted" content={`Adds a new factory to this ${group.subType}`} relationship="description" withArrow>
						<ToolbarButton onClick={onCreateFactory} icon={<FactoryIcon />}>Add Factory</ToolbarButton>
					</Tooltip>}
					{canCreateFolder && <Tooltip appearance="inverted" content={`Adds a new folder to this ${group.subType}. Folders help organize multiple factories or machines in logical groupings.`} relationship="description" withArrow>
						<ToolbarButton onClick={onCreateFolder} icon={<FolderIcon />}>Add Folder</ToolbarButton>
					</Tooltip>}
					{canCreateMachine && <Tooltip appearance="inverted" content={`Adds a new machine to this ${group.subType}`} relationship="description" withArrow>
						<ToolbarButton onClick={onCreateMachine} icon={<RobotIcon />}>Add Machine</ToolbarButton>
					</Tooltip>}
				</Toolbar>
			</ToolbarCommands>
			<ToolbarOptions>
				<Toolbar>
					<Tooltip appearance="inverted" content={"Switch to tiles view"} relationship="description" withArrow>
						<ToggleButton checked={isTilesView} icon={<TilesIcon />} onClick={onTilesView} appearance="subtle" />
					</Tooltip>
					<Tooltip appearance="inverted" content={"Switch to details view"} relationship="description" withArrow>
						<ToggleButton checked={isDetailsView} icon={<DetailsIcon />} onClick={onDetailsView} appearance="subtle" />
					</Tooltip>
				</Toolbar>
			</ToolbarOptions>
		</ToolbarCard>
		{isDetailsView && <DetailsView state={state} />}
		{isTilesView && <TilesView state={state} />}
	</div>;
}

const useChildrenViewStyles = makeStyles({
	root: {
		display: "flex",
		flexDirection: "column",
		gap: tokens.spacingVerticalM,
	},
});


function DetailsView({state}: {state: ChildrenState})
{
	return null;
}

function TilesView({state}: {state: ChildrenState})
{
	const styles = useTilesViewStyles();

	return <div className={styles.tiles}>
		{state.children?.map(child => <Tile elementId={child.id} /> )}
	</div>
}

const useTilesViewStyles = makeStyles({
	tiles: {
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		gap: tokens.spacingHorizontalS,
	}
})