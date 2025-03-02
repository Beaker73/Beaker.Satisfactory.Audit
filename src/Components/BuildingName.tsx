import { makeStyles, tokens } from "@fluentui/react-components";
import type { Building } from "../Database/Types";

export type BuildingNameProps = {
	building?: Building
}

export function BuildingName(props: BuildingNameProps) {
	const { building } = props;

	const style = useBuildingNameStyles();

	if(!building)
		return null;

	return <div className={style.flex}>
		<img className={style.icon} src={`/images/${building.icon}_64.png`} width={20} height={20} alt={building.name} />
		{building.name}
	</div>;
}

const useBuildingNameStyles = makeStyles({
	flex: {
		display: "flex",
		alignItems: "center",
		gap: tokens.spacingHorizontalM,
	},
	icon: {
		width: "20px",
		height: "20px",
	}
});