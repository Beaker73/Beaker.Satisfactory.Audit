import { List, ListItem, makeStyles, tokens } from "@fluentui/react-components";
import { Tile } from "../Tile";
import type { TilesViewState } from "./Types";

export function useTilesViewView(state: TilesViewState)
{
	const style = useTilesViewStyles();

	return <List className={style.tiles} navigationMode="composite">
		{state.children?.map(child => <ListItem key={child.id}>
			<Tile nodeId={child.id} />
		</ListItem> )}
	</List>;
}

const useTilesViewStyles = makeStyles({
	tiles: {
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		gap: tokens.spacingHorizontalS,
	}
})