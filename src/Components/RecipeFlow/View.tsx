import { makeStyles, mergeClasses } from "@fluentui/react-components";
import { ChevronRightRegular } from "@fluentui/react-icons";
import { IngredientTile } from "../IngredientTile";
import type { RecipeFlowState } from "./Types";

export function useRecipeFlowView(state: RecipeFlowState)
{
	const style = useRecipeFlowStyles();

	return <div className={mergeClasses(style.root, style[state.size])}>
		{state.ingredients.map(ingredient =>
			<IngredientTile itemKey={ingredient.item} quantity={ingredient.amount} size={state.size} />
		)}
		<ChevronRightRegular />
		{state.products.map(product =>
			<IngredientTile itemKey={product.item} quantity={product.amount} size={state.size} />
		)}
	</div>;
}

const useRecipeFlowStyles = makeStyles({
	root: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
	},
	tiny: {
		fontSize: "10px",
		gap: "2px",
	},
	small: {
		fontSize: "16px",
		gap: "3px",
	},
	medium: {
		fontSize: "22px",
		gap: "4px",
	},
	large: {
		gap: "6px",
		fontSize: "28px",
	},
	huge: {
		fontSize: "36px",
		gap: "8px",
	},
})