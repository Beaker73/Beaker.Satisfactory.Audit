import { makeStyles, tokens } from "@fluentui/react-components";
import type { Item } from "../Database/Types";

export type ItemNameProps = {
	item?: Item,
}

export function ItemName(props: ItemNameProps) {
	const { item } = props;

	const style = useItemNameStyles();

	if(!item)
		return null;

	return <div className={style.flex}>
		<img className={style.icon} src={`/images/${item.icon}_64.png`} width={20} height={20} alt={item.name} />
		{item.name}
	</div>;
}

const useItemNameStyles = makeStyles({
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