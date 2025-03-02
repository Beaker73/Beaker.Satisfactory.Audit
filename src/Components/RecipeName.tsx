import { makeStyles, Tag, tokens } from "@fluentui/react-components";
import type { Recipe } from "../Database/Types";

export type RecipeNameProps = {
	recipe: Recipe,
}

export function RecipeName(props: RecipeNameProps) {
	const { recipe: recipy } = props;

	const style = useRecipeNameStyles();

	if(!recipy)
		return null;

	if(recipy.alternate) {
		return <span className={style.flex}>
			<span>{recipy.name.replace("Alternate: ", "")}</span>
			<Tag size="extra-small">Alternate</Tag>
		</span>
	}

	return <div>{recipy.name}</div>;
}

const useRecipeNameStyles = makeStyles({
	flex: {
		display: "inline-flex",
		gap: tokens.spacingHorizontalM,
	}
});