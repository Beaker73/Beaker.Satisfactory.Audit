import { makeStyles, mergeClasses } from "@fluentui/react-components";
import { ChevronRightRegular } from "@fluentui/react-icons";
import { IngredientTile } from "../IngredientTile";
import type { IngredientFlowState } from "./Types";

export function useIngredientFlowView(state: IngredientFlowState)
{
	const style = useIngredientFlowStyles();

	return <div className={mergeClasses(style.root, style[state.size])}>
		{state.inputs.map(input =>
			<IngredientTile itemKey={input.itemKey} quantity={input.quantity} size={state.size} />
		)}
		<ChevronRightRegular />
		{state.outputs.map(output =>
			<IngredientTile itemKey={output.itemKey} quantity={output.quantity} size={state.size} />
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