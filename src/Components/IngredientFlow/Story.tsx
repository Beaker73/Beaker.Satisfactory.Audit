import { Card, makeStyles, tokens } from "@fluentui/react-components";
import { IngredientFlow } from ".";
import type { StoryExport } from "../StoryPage/Types";
import type { IngredientFlowProps } from "./Types";

function IngredientFlowStory()
{
	const style = useIngredientTileStoryStyles();

	const ingredientProps: IngredientFlowProps = {
		inputs: [
			{ quantity: 5, itemKey: "Desc_Coal_C" },
			{ quantity: 1, itemKey: "BP_EquipmentDescriptorRifle_C" },
		],
		outputs: [
			{ quantity: 2, itemKey: "Desc_CrystalOscillator_C"}
		],
	};

	return <article>
		<h2>Ingredient Flow</h2>
		<p>Displays the flow of the ingredients.</p>
		<section>
			<h4>Default</h4>
			<p>Simply provided the list of inputs and outputs</p>
			<Card className={style.examples}>
				<IngredientFlow {...ingredientProps} />
			</Card>
		</section>
		<section>
			<h4>Sizes</h4>
			<p>The flow comes in the same 5 sizes as the individual tiles, <em>tiny</em>, <em>small</em>, <em>medium</em>, <em>large</em> and <em>huge</em>. If not given the flow defaults to the large size.</p>
			<Card className={style.examples}>
				<IngredientFlow {...ingredientProps} size="tiny" />
				<IngredientFlow {...ingredientProps} size="small" />
				<IngredientFlow {...ingredientProps} size="medium" />
				<IngredientFlow {...ingredientProps} size="large" />
				<IngredientFlow {...ingredientProps} size="huge" />
			</Card>
		</section>
	</article>
}

const useIngredientTileStoryStyles = makeStyles({
	examples: {
		display: "flex",
		flexDirection: "column",
		gap: tokens.spacingVerticalXXL,
	},
})

export const story: StoryExport = {
	name: "IngredientFlow",
	renderStory: () => <IngredientFlowStory />,
}