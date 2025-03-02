import { makeStyles, Menu, MenuDivider, MenuGroup, MenuGroupHeader, MenuItem, MenuList, MenuPopover, MenuTrigger, SearchBox, tokens } from "@fluentui/react-components";
import type { Recipe } from "../../Database/Types";
import { BuildingName } from "../BuildingName";
import { ItemName } from "../ItemName";
import { Picker } from "../Picker";
import { RecipeName } from "../RecipeName";
import type { RecipePickerState } from "./Types";

export function useRecipePickerView(state: RecipePickerState) {

	const style = useRecipePickerStyles();

	return <Picker<Recipe> value={state.pickedRecipe} onChange={state.onPickedRecipe}  appearance={state.isSubtle ? "subtle" : "default"}>
		<div>
			<SearchBox placeholder="Search for a recipe" />
			<MenuList className={style.pickerList}>
				{state.recipes.map(recipes => {

					// just one recipe, no need for a submenu
					if(recipes.recipes.length === 1)
						return <MenuItem key={recipes.item.slug}>
							<ItemName item={recipes.item} />
						</MenuItem>

					// multiple recipes, show a submenu
					return <Menu>
						<MenuTrigger>
							<MenuItem key={recipes.item.slug}>
								<ItemName item={recipes.item} />
							</MenuItem>
						</MenuTrigger>
						<MenuPopover>
							<MenuList>
								{recipes.buildings.map((building, ix, a) => <MenuGroup>
									<MenuGroupHeader className={style.menuHeader}>
										<BuildingName building={building.building} />
									</MenuGroupHeader>
									{building.recipes.map(recipe => <MenuItem key={recipe.slug}>
										<RecipeName recipe={recipe} />
									</MenuItem>)}
									{(ix < (a.length - 1)) && <MenuDivider />}
								</MenuGroup>)}
							</MenuList>
						</MenuPopover>
					</Menu>
				})}
			</MenuList>
		</div>
	</Picker>
}

const useRecipePickerStyles = makeStyles({
	pickerList: {
		maxHeight: "60vh",
		overflowY: "auto",
	},
	menuHeader: {
		color: tokens.colorBrandForeground1
	}
});