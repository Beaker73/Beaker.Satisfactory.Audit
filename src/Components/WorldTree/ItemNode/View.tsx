import { makeStyles } from "@fluentui/react-components";
import type { ItemNodeState } from "./Types";

export function useItemNodeView(_state: ItemNodeState)
{
	const style = useItemNodeStyles();

	return <div className={style.root}>
	</div>;
}

const useItemNodeStyles = makeStyles({
	root: {
	}
})