import { Tree } from "@fluentui/react-components";
import { GroupNode } from "./GroupNode";
import type { WorldTreeState } from "./Types";

export function useWorldTreeView(state: WorldTreeState) 
{
	const { rootId } = state;

	return <Tree navigationMode="treegrid" aria-label={"The world"}>
		<GroupNode groupId={rootId} />
	</Tree>;
}


// type StateProps = { state: WorldTreeState };
// type GroupProps = StateProps & { group: Group };
// type ItemProps = StateProps & { item: Item };
// type ElementProps = StateProps & { element: Element };

// function Actions(props: ElementProps)
// {
// 	const { state, element } = props;
// 	const { onEdit } = state;

// 	return <Fragment>
// 		<Button aria-label="Edit" onClick={() => onEdit(element)} appearance="subtle" icon={<EditIcon />}/>
// 		<Menu>
// 			<MenuTrigger>
// 				<Button aria-label="More options" appearance="subtle" icon={<MoreIcon />}/>
// 			</MenuTrigger>
// 			<MenuPopover>
// 				<MenuList>
// 					<CommonMenuItems state={state} element={element} />
// 				</MenuList>
// 			</MenuPopover>
// 		</Menu>
// 	</Fragment>;
// }

// function GroupNode(props: GroupProps)
// {
// 	const { state, group } = props;

// 	return <Tree navigationMode="treegrid" aria-label={`Group Tree: ${group.name}`} key={group.id}>
// 		<TreeItem itemType="branch">
// 			<TreeItemLayout actions={<Actions state={state} element={group} />}>
// 				{group.name}
// 			</TreeItemLayout>
// 			{group.children.map(element => <Node state={state} element={element} />)}
// 		</TreeItem>
// 	</Tree>;
// }

// function ItemNode(props: ItemProps)
// {
// 	const { state, item } = props;

// 	return <Tree navigationMode="treegrid" aria-label={`Group Tree: ${item.name}`} key={item.id}>
// 		<TreeItem itemType="leaf">
// 			<TreeItemLayout actions={<Actions state={state} element={item} />}>{item.name}</TreeItemLayout>
// 		</TreeItem>
// 	</Tree>;
// }

// function Node(props: ElementProps)
// {
// 	const { state, element } = props;

// 	if(element.type === "group")
// 		return <GroupNode state={state} group={element} />;
// 	if(element.type === "item")
// 		return <ItemNode state={state} item={element} />;

// 	return null;
// }

// function CommonMenuItems(props: ElementProps) 
// {

// 	const { state: { onEdit }, element } = props;

// 	return <MenuItem onClick={() => onEdit(element)}>
// 		Edit
// 	</MenuItem>;
// }