import { Card, makeStyles } from "@fluentui/react-components";
import { IngredientTile } from ".";
import type { ItemKey } from "../../Database/Types";
import type { StoryExport } from "../StoryPage/Types";

function IngredientTileStory()
{
	const style = useIngredientTileStoryStyles();
	return <article>
		<h2>Ingredient Tile</h2>
		<p>Displays a tile with a image of the ingredient. Optionally showing a quanity for when used in recipes. On hover the name is shown.</p>
		<section>
			<h4>Size</h4>
			<p>An Ingredient Tile supports <em>tiny</em>, <em>small</em>, <em>medium</em>, <em>large</em> and <em>huge</em>. If not given the tile defaults to the large size.</p>
			<Card className={style.examples}>
				<IngredientTile itemKey={"Desc_IronPlate_C" as ItemKey} size="tiny" />
				<IngredientTile itemKey={"Desc_IronPlate_C" as ItemKey} size="small" />
				<IngredientTile itemKey={"Desc_IronPlate_C" as ItemKey} size="medium" />
				<IngredientTile itemKey={"Desc_IronPlate_C" as ItemKey} size="large" />
				<IngredientTile itemKey={"Desc_IronPlate_C" as ItemKey} size="huge" />
			</Card>
		</section>
		<section>
			<h4>Quantity</h4>
			<p>For use in recipies there is an option to show quantities of the item. The size needs to be at least medium to be able to show a quantity. Smaller sizes are to small for this. The tooltip however does show the quantity in such cases.</p>
			<Card className={style.examples}>
				<IngredientTile itemKey={"Desc_IronPlate_C" as ItemKey} size="tiny" quantity={31} />
				<IngredientTile itemKey={"Desc_IronPlate_C" as ItemKey} size="small" quantity={6} />
				<IngredientTile itemKey={"Desc_IronPlate_C" as ItemKey} size="medium" quantity={91} />
				<IngredientTile itemKey={"Desc_IronPlate_C" as ItemKey} size="large" quantity={133} />
				<IngredientTile itemKey={"Desc_IronPlate_C" as ItemKey} size="huge" quantity={285} />
			</Card>
		</section>
		<section>
			<h4>Item</h4>
			<p>By providing the item key the correct item is shown in the tile</p>
			<Card className={style.examples}>
				<IngredientTile itemKey={"Desc_IronPlate_C" as ItemKey} />
				<IngredientTile itemKey={"Desc_NobeliskNuke_C" as ItemKey} />
				<IngredientTile itemKey={"Desc_Crystal_C" as ItemKey} />
				<IngredientTile itemKey={"Desc_Motor_C" as ItemKey} />
				<IngredientTile itemKey={"Desc_FicsiteIngot_C" as ItemKey} />
			</Card>
		</section>
	</article>
}

const useIngredientTileStoryStyles = makeStyles({
	examples: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
})

export const story: StoryExport = {
	name: "IngredientTile",
	renderStory: () => <IngredientTileStory />,
}