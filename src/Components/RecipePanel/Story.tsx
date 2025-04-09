import { Card, CardPreview, makeStyles } from "@fluentui/react-components";
import { RecipePanel } from ".";
import type { StoryExport } from "../StoryPage/Types";

function RecipePanelStory()
{
	const style = useRecipePanelStyles();

	return <article>
		<h2>Recipe Panel</h2>
		<p>Allows user to select a recipy</p>
		<Card className={style.panel}>
			<CardPreview className={style.panel}>
				<div className={style.panel}>
					<RecipePanel type="inline" />
				</div>
			</CardPreview>
		</Card>
	</article>
}

const useRecipePanelStyles = makeStyles({
	panel: {
	}
})

export const story: StoryExport = {
	name: "RecipePanel",
	renderStory: () => <RecipePanelStory />,
}