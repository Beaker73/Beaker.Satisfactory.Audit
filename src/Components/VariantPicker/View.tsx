import { Button, makeStyles, mergeClasses, tokens } from "@fluentui/react-components";
import { Fragment } from "react/jsx-runtime";
import { IngredientTile } from "../IngredientTile";
import { RecipeName } from "../RecipeName";
import { RecipePanel } from "../RecipePanel";
import type { VariantPickerState } from "./Types";

export function useVariantPickerView(state: VariantPickerState)
{
	const style = useVariantPickerStyles();

	return <Fragment>
		<Button appearance="transparent" onClick={state.onClick} className={mergeClasses(style.button, !state.variant ? style.unselected : undefined)}>
			{state.variant?.type === "recipe" && <div className={style.variant}>
				<div className={style.tile}><IngredientTile itemKey={state.variant.output[0].itemKey} size="medium" /></div>
				<div className={style.building}>{state.variant.building.name}</div>
				<div className={style.recipe}><RecipeName recipe={state.variant.source} noIcon noTag /></div>
			</div>}
			{state.variant?.type === "miner" && <div className={style.variant}>
				<div className={style.tile}><IngredientTile itemKey={state.variant.output[0].itemKey} size="medium" /></div>
				<div className={style.building}>{state.variant.building.name}</div>
				<div className={style.recipe}>{state.variant.output[0].item.name}</div>
			</div>}
			{!state.variant && "Please select a recipe"}
		</Button>
		{state.isOpen && <RecipePanel onDismiss={state.onDismiss} onVariantSelected={state.onVariantChange} />}
	</Fragment>;
}

const useVariantPickerStyles = makeStyles({
	unselected: {
		opacity: 0.5,
	},
	button: {
		padding: 0,
	},
	variant: {
		display: "grid",
		gridTemplateColumns: "auto 1fr",
		gridTemplateRows: "auto auto",
		gridTemplateAreas: "'tile building' 'tile recipe'",
		gridColumnGap: tokens.spacingHorizontalS,
		textAlign: "left",
	},
	tile: {
		gridArea: "tile",
	},
	building: {
		gridArea: "building",
		fontSize: tokens.fontSizeBase200,
		fontWeight: tokens.fontWeightRegular,
		lineHeight: tokens.lineHeightBase200,
	},
	recipe: {
		gridArea: "recipe",
		fontWeight: tokens.fontWeightSemibold,
		lineHeight: tokens.lineHeightBase200,
	}
})
