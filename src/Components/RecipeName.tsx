import { makeStyles, Tag, tokens } from "@fluentui/react-components";
import { useDatabase } from "../Database/Hooks";
import type { Recipe } from "../Database/Types";

export type RecipeNameProps = {
	recipe: Recipe,
	noIcon?: boolean,
	noTag?: boolean,
}

export function RecipeName(props: RecipeNameProps) 
{
	const { recipe: recipy, noIcon = false, noTag = false } = props;

	const db = useDatabase();
	const style = useRecipeNameStyles();

	if(!recipy)
		return null;

	const itemKey = recipy.products[0].item;
	const item = db.items[itemKey];

	return <span className={style.flex}>
		{item && !noIcon && <img src={`${import.meta.env.BASE_URL}/images/${item.icon}_64.png`} width={16} height={16} alt={`Icon for ${item.name}`} />}
		<span>{recipy.name.replace("Alternate: ", "")}</span>
		{recipy.alternate && !noTag && <Tag size="extra-small">Alternate</Tag>}
	</span>
}

const useRecipeNameStyles = makeStyles({
	flex: {
		display: "inline-flex",
		gap: tokens.spacingHorizontalM,
	}
});