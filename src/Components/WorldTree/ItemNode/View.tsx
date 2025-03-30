import { makeStyles, TreeItem, TreeItemLayout } from "@fluentui/react-components";
import type { ItemNodeState } from "./Types";

export function useItemNodeView(state: ItemNodeState)
{
	const { item } = state;

	const style = useItemNodeStyles();
	if(!item) return null;
	return <TreeItem itemType="leaf" className={style.root}>
		<TreeItemLayout actions={null}>
			{item.name}
		</TreeItemLayout>
	</TreeItem>;
}

const useItemNodeStyles = makeStyles({
	root: {
	}
})