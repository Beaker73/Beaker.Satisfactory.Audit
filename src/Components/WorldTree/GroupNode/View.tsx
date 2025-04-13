import { ToolbarButton, Tree, TreeItem, TreeItemLayout } from "@fluentui/react-components";
import { GroupNode } from ".";
import { EditIcon } from "../../../Helpers/Icons";
import type { GroupId } from "../../../State/Group";
import type { ItemId } from "../../../State/Item";
import { ItemNode } from "../ItemNode";
import type { GroupNodeState } from "./Types";

export function useGroupNodeView(state: GroupNodeState)
{
	const { group, childData } = state;

	if(!group)
		return null;

	return <TreeItem itemType="branch">
		<TreeItemLayout actions={
			<ToolbarButton onClick={state.onEdit} icon={<EditIcon />} />
		}>
			{group.name}
		</TreeItemLayout>
		<Tree navigationMode="treegrid" aria-label={`${group.type} named ${group.name}`} key={group.id}>
			{childData.map(child => 
				child.type === "group" ? <GroupNode key={child.id} groupId={child.id as GroupId} /> : 
					child.type === "item" ? <ItemNode key={child.id} itemId={child.id as ItemId} /> 
						: null
			)}
		</Tree>
	</TreeItem>;
}
