import { Card, ToolbarButton, Tooltip } from "@fluentui/react-components";
import { CopyFilled, CopyRegular, DeleteFilled, DeleteRegular, bundleIcon } from "@fluentui/react-icons";
import { FactoryState } from "./Types";
import { ActionBar, Actions } from "../../../ActionBar";

export function useFactoryView(state: FactoryState) {

	const DeleteIcon = bundleIcon(DeleteFilled, DeleteRegular);
	const CloneIcon = bundleIcon(CopyFilled, CopyRegular);

	return <Card>
		<ActionBar>
			<Actions>
				<Tooltip content="Clone Factory" relationship="label">
					<ToolbarButton onClick={state.onCloneFactory} icon={<CloneIcon />} />
				</Tooltip>
				<Tooltip content="Delete Factory" relationship="label">
					<ToolbarButton onClick={state.onDeleteFactory} icon={<DeleteIcon />} />
				</Tooltip>
			</Actions>
		</ActionBar>
	</Card>
}