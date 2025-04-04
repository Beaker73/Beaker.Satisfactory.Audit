import { Link, makeStyles } from "@fluentui/react-components";
import { Fragment } from "react/jsx-runtime";
import { RecipePanel } from "../RecipePanel";
import type { RecipePickerState } from "./Types";

export function useRecipePickerView(state: RecipePickerState)
{
	const style = useRecipePickerStyles();

	return <Fragment>
		<Link onClick={state.onClick} className={!state.recipe ? style.unselected : undefined}>
			{state.recipe?.name ?? "Please select a recipe"}
		</Link>
		{state.isOpen && <RecipePanel onDismiss={state.onDismiss} />}
	</Fragment>;
}

const useRecipePickerStyles = makeStyles({
	unselected: {
		opacity: 0.5,
	}
})
