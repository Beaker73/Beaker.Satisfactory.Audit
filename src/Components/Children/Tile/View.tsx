import { makeStyles } from "@fluentui/react-components";
import type { TileState } from "./Types";

export function useTileView(_state: TileState)
{
	const style = useTileStyles();

	return <div className={style.root}>
	</div>;
}

const useTileStyles = makeStyles({
	root: {
	}
})