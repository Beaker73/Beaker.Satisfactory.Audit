import { makeStyles, mergeClasses } from "@fluentui/react-components";
import { ChevronRightRegular, DividerTallRegular } from "@fluentui/react-icons";
import { Fragment } from "react/jsx-runtime";
import { IngredientTile } from "../IngredientTile";
import type { IngredientFlowState } from "./Types";

export function useIngredientFlowView(state: IngredientFlowState)
{
	const style = useIngredientFlowStyles();

	return <div className={mergeClasses(style.root, style[state.size])}>
		{state.building && <Fragment>
			<IngredientTile buildingKey={state.building} size={state.size} />
			<DividerTallRegular />
		</Fragment>}
		{state.inputs.map(input =>
			<IngredientTile key={input.itemKey} itemKey={input.itemKey} quantity={input.quantity} size={state.size} />
		)}
		{state.inputs.length > 0 && state.outputs.length > 0 && <ChevronRightRegular />}
		{state.outputs.map(output =>
			<IngredientTile key={output.itemKey} itemKey={output.itemKey} quantity={output.quantity} size={state.size} />
		)}
	</div>;
}

const useIngredientFlowStyles = makeStyles({
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