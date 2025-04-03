import { List, ListItem, makeStyles, tokens } from "@fluentui/react-components";
import type { TilesViewState } from "./Types";
import { Tile } from "../Tile";

export function useTilesViewView(state: TilesViewState)
{
	const style = useTilesViewStyles();

	return <List className={style.tiles} navigationMode="composite">
		{state.children?.map(child => <ListItem key={child.id}>
			<Tile elementId={child.id} />
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