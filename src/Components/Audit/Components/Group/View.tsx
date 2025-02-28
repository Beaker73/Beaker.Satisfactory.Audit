import { Card, Input, makeStyles, tokens, Toolbar, ToolbarButton, ToolbarDivider, Tooltip } from "@fluentui/react-components";
import { FolderAddRegular, FolderAddFilled, bundleIcon, BuildingFactoryRegular, BuildingFactoryFilled, DeleteFilled, DeleteRegular, CopyAddFilled, CopyAddRegular, CopyFilled, CopyRegular, AddSquareRegular, AddSquareFilled, SubtractSquareFilled, SubtractSquareRegular } from "@fluentui/react-icons";
import { Collapse } from "@fluentui/react-motion-components-preview";
import { GroupState } from "./Types";
import { Item } from "../Item";
import { ActionBar, Actions } from "../../../ActionBar";
import { Fragment } from "react/jsx-runtime";

export function useGroupView(state: GroupState) {

	const FolderAddIcon = bundleIcon(FolderAddFilled, FolderAddRegular);
	const FactoryIcon = bundleIcon(BuildingFactoryFilled, BuildingFactoryRegular);
	const CloneIcon = bundleIcon(CopyFilled, CopyRegular);
	const DeleteIcon = bundleIcon(DeleteFilled, DeleteRegular);

	const IsCollapsedIcon = bundleIcon(AddSquareFilled, AddSquareRegular);
	const IsOpenIcon = bundleIcon(SubtractSquareFilled, SubtractSquareRegular);

	const style = useGroupViewStyles();
	return <Card>
		<ActionBar>
			<Actions>
				<Toolbar>
					<Tooltip content="Add Folder" relationship="label">
						<ToolbarButton onClick={state.onAddGroup} icon={<FolderAddIcon />} />
					</Tooltip>
					<Tooltip content="Add Factory" relationship="label">
						<ToolbarButton onClick={state.onAddFactory} icon={<FactoryIcon />} />
					</Tooltip>
					<ToolbarDivider />
					<Tooltip content="Clone Folder" relationship="label">
						<ToolbarButton icon={<CloneIcon />} />
					</Tooltip>
					<Tooltip content="Delete Folder" relationship="label">
						<ToolbarButton icon={<DeleteIcon />} />
					</Tooltip>
				</Toolbar>
			</Actions>
			<div className={style.collapse}>
				<ToolbarButton onClick={state.onToggleCollapse} icon={state.isCollapsed ? <IsCollapsedIcon /> : <IsOpenIcon />} />
				<Input value={state.name} onChange={state.onNameChange} appearance="filled-lighter" placeholder="Unnamed" />
			</div>
		</ActionBar>
		<Collapse visible={!state.isCollapsed}>
			<div className={style.list}>
				{state.children.map(item => <Item key={item.id} item={item} />)}
			</div>
		</Collapse>
	</Card>
}
const useGroupViewStyles = makeStyles({
	collapse: {
		display: "grid",
		gridTemplateColumns: "auto 1fr",
		gridGap: tokens.spacingHorizontalM,
		gridTemplateAreas: `"collapse name"`,
	},
	list: {
		display: "flex",
		flexDirection: "column",
		gap: tokens.spacingVerticalM,
	}
});