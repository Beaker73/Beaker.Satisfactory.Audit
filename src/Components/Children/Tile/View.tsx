import { Card, makeStyles, Text, tokens } from "@fluentui/react-components";
import { iconMap } from "../../../Helpers/Icons";
import type { TileState } from "./Types";

export function useTileView(state: TileState)
{
	const { element, onEdit } = state;
	const Icon = element ? iconMap[element?.type][element?.subType] : null;

	const style = useTileStyles();

	if(!element) return null;
	return <Card role="gridcell" className={style.root} onClick={onEdit}>
		<div className={style.tileHeading}>
			{Icon && <Icon className={style.icon} />}
			<Text className={style.name}>{element.name}</Text>
		</div>
	</Card>;
}

const useTileStyles = makeStyles({
	root: {
		width: "220px",
		height: "90px",
		"&:hover": {
			backgroundColor: tokens.colorNeutralBackground1Hover,
			boxShadow: tokens.shadow8,
		},
		"&:active": {
			backgroundColor: tokens.colorNeutralBackground1Pressed,
			boxShadow: tokens.shadow4,
		}

	},
	tileHeading: {
		display: "grid",
		gridTemplateColumns: "auto 1fr",
		gridTemplateAreas: "'icon name'",
		gridGap: tokens.spacingHorizontalS,
		alignItems: "center",
	},
	icon: {
		gridArea: "icon",
	},
	name: {
		gridArea: "name",
		textOverflow: "ellipsis",
		overflow: "hidden",
		whiteSpace: "nowrap",
	}
})