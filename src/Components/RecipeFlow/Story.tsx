import { Card, makeStyles, tokens } from "@fluentui/react-components";
import { RecipeFlow } from ".";
import type { StoryExport } from "../StoryPage/Types";

function RecipeFlowStory()
{
	const style = useIngredientTileStoryStyles();
	return <article>
		<h2>Recipe Flow</h2>
		<p>Displays the flow of the ingredients to the products of a recipe</p>
		<section>
			<h4>Default</h4>
			<p>Simply provided the key to the recipy and the flow of the correct recipe will be displayed</p>
			<Card className={style.examples}>
				<RecipeFlow recipeKey="Recipe_IngotIron_C" />
				<RecipeFlow recipeKey="Recipe_AluminaSolution_C" />
				<RecipeFlow recipeKey="Recipe_PlutoniumFuelRod_C" />
			</Card>
		</section>
		<section>
			<h4>Sizes</h4>
			<p>The flow comes in the same 5 sizes as the individual tiles, <em>tiny</em>, <em>small</em>, <em>medium</em>, <em>large</em> and <em>huge</em>. If not given the flow defaults to the large size.</p>
			<Card className={style.examples}>
				<RecipeFlow recipeKey="Recipe_AluminaSolution_C" size="tiny" />
				<RecipeFlow recipeKey="Recipe_AluminaSolution_C" size="small" />
				<RecipeFlow recipeKey="Recipe_AluminaSolution_C" size="medium" />
				<RecipeFlow recipeKey="Recipe_AluminaSolution_C" size="large" />
				<RecipeFlow recipeKey="Recipe_AluminaSolution_C" size="huge" />
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
	name: "RecipeFlow",
	renderStory: () => <RecipeFlowStory />,
}