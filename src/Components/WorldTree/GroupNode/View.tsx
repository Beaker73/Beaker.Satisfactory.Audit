import { ToolbarButton, Tree, TreeItem, TreeItemLayout } from "@fluentui/react-components";
import { GroupNode } from ".";
import { EditIcon } from "../../../Helpers/Icons";
import { ItemNode } from "../ItemNode";
import type { GroupNodeState } from "./Types";

export function useGroupNodeView(state: GroupNodeState)
{
	const { group, childData } = state;

	if(!group)
		return null;

	return <Tree navigationMode="treegrid" aria-label={`${group.type} named ${group.name}`} key={group.id}>
		<TreeItem itemType="branch">
			<TreeItemLayout actions={
				<ToolbarButton onClick={state.onEdit} icon={<EditIcon />} />
			}>
				{group.name}
			</TreeItemLayout>
			{childData.map(child => 
				child.type === "group" ? <GroupNode key={child.id} groupId={child.id} /> : 
					child.type === "item" ? <ItemNode key={child.id} itemId={child.id} /> 
						: null
			)}
		</TreeItem>
	</Tree>;
}
