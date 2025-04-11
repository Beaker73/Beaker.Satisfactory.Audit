import { makeStyles, mergeClasses, tokens, Tooltip } from "@fluentui/react-components";
import { buildingPath, itemPath } from "../../Database/Hooks";
import type { IngredientTileState } from "./Types";

export function useIngredientTileView(state: IngredientTileState)
{
	const style = useIngredientTileStyles();

	return <Tooltip content={state.tooltip} relationship="description" withArrow>
		<div className={mergeClasses(style.root, style[state.size])}>
			<img src={itemPath(state.item) ?? buildingPath(state.building)} className={style.image} alt={state.item?.name ?? state.building?.name ?? "icon"} />
			{state.showQuantity && <span className={mergeClasses(style.quantity, style[`${state.size}Quantity`] )}>{state.quantity}</span>}
		</div>
	</Tooltip>;
}

const useIngredientTileStyles = makeStyles({
	root: {
		boxSizing: "border-box",
		border: `solid 1px ${tokens.colorNeutralStroke1}`,
		display: "grid",
		gridTemplateRows: "1fr",
		gridTemplateColumns: "1fr",
		gridTemplateAreas: "'content'",
		alignItems: "center",
		justifyItems: "center",
		alignContent: "center",
		justifyContent: "center",
		"&>img": {
			gridArea: "content",
		}
	},
	quantity: {
		display: "inline-block",
		gridArea: "content",
		alignSelf: "end",
		justifySelf: "end",
		backgroundColor: tokens.colorBackgroundOverlay,
		color: tokens.colorNeutralForegroundInverted,
		padding: "0px 6px",
		borderRadius: tokens.borderRadiusSmall,
		fontSize: tokens.fontSizeBase200,
		transformOrigin: "bottom right",
	},
	tinyQuantity: { display: "none" },
	smallQuantity: { display: "none" },
	mediumQuantity: {
		transform: "scale(0.5) translate(0px, -1px)"
	},
	largeQuantity: {
		transform: "scale(0.75)"
	},
	hugeQuantity: {
	},
	tiny: {
		width: "16px",
		height: "16px",
		padding: "1px",
		borderRadius: tokens.borderRadiusSmall,
	},
	small: {
		width: "20px",
		height: "20px",
		padding: "1.5px",
		borderRadius: tokens.borderRadiusSmall,
	},
	medium: {
		width: "32px",
		height: "32px",
		padding: "2px",
		borderRadius: tokens.borderRadiusSmall,
	},
	large: {
		width: "48px",
		height: "48px",
		padding: "3px",
		borderRadius: tokens.borderRadiusMedium,
	},
	huge: {
		width: "64px",
		height: "64px",
		padding: "4px",
		borderRadius: tokens.borderRadiusMedium,
	},
	image: {
		width: "100%",
		height: "100%",
	}
})