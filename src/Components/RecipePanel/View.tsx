import { Button, createPresenceComponent, DrawerBody, DrawerHeader, DrawerHeaderTitle, makeStyles, MenuDivider, MenuGroupHeader, MenuItem, mergeClasses, motionTokens, OverlayDrawer, SearchBox, ToggleButton, tokens, ToolbarButton, Tooltip } from "@fluentui/react-components";
import { buildingPath } from "../../Database/Hooks";
import type { RecipeKey } from "../../Database/Types";
import { BackIcon, DismissIcon, GroupIcon, ItemIcon } from "../../Helpers/Icons";
import { RecipeFlow } from "../RecipeFlow";
import { RecipeName } from "../RecipeName";
import type { RecipePanelState } from "./Types";

export function useRecipePanelView(state: RecipePanelState)
{
	const style = useRecipePanelStyles();

	return <OverlayDrawer open position="end">
		
		<DrawerHeader>
			<DrawerHeaderTitle action={
				<ToolbarButton onClick={state.onDismiss} icon={<DismissIcon />}  />
			}>Available Recipes</DrawerHeaderTitle>
		</DrawerHeader>

		<BodyPresenceMotion level={1} visible={state.subView === "items"} unmountOnExit>
			<DrawerBody>
				<div className={style.root}>
					<div className={style.filters}>
						<SearchBox placeholder="Search for recipe" />
						<Tooltip content="Group by Factory Type" relationship="description" appearance="inverted" withArrow>
							<ToggleButton icon={<GroupIcon />} />
						</Tooltip>
					</div>
					<div className={style.list}>
						{state.view === "byItem" && Object.entries(state.byItem).map(([key, entry]) => 
						{
							const { item,recipies } = entry;
							const isSubmenu = recipies.length > 1;

							return <MenuItem key={key} onClick={() => state.onClickByItemEntry(entry)} icon={<ItemIcon item={item} /> } hasSubmenu={isSubmenu}>
								{item.name} {isSubmenu && <span className={style.batch}>{recipies.length}</span>}
							</MenuItem>;
						})}
					</div>
					<div className={style.actions}>
						<Button onClick={state.onDismiss} appearance="secondary">Cancel</Button>
					</div>
				</div>
			</DrawerBody>
		</BodyPresenceMotion>

		<BodyPresenceMotion level={2} visible={state.subView === "recipes"} unmountOnExit>
			<DrawerBody>
				<div className={style.root}>
					<div className={mergeClasses(style.list, style.listSegments)}>
						{state.view === "byItem" && state.selectedEntry && state.selectedEntry.byMachine.map(
							(machine) => <div key={machine.building.slug}>
								<MenuGroupHeader className={style.groupHeader}>
									<img src={buildingPath(machine.building)} alt={machine.building.name} width={32} height={32} />
									{machine.building.name}
								</MenuGroupHeader>
								<MenuDivider />
								{machine.recipes.map((recipe) => <MenuItem key={recipe.slug}>
									<div className={style.recipeItem}>
										<div className={style.recipeName}>
											<RecipeName recipe={recipe} noIcon noTag />
											{recipe.alternate && <span className={style.recipeAlt}>Alternate</span> }
										</div>
										<RecipeFlow recipeKey={recipe.className as RecipeKey} size="medium" />
									</div>
								</MenuItem>)}
							</div>)}
					</div>
					<div className={style.actions}>
						<Button onClick={state.onBack} icon={<BackIcon />} appearance="primary">Back</Button>
						<Button onClick={state.onDismiss} appearance="secondary">Cancel</Button>
					</div>
				</div>
			</DrawerBody>
		</BodyPresenceMotion>

	</OverlayDrawer>;
}

const useRecipePanelStyles = makeStyles({
	root: {
		height: `calc(100% - ${tokens.spacingVerticalXL})`,
		display: "grid",
		gridTemplateRows: "auto 1fr auto",
		gridTemplateAreas: "'filters' 'list' 'actions'",
		rowGap: tokens.spacingVerticalM,
	},
	filters: {
		gridArea: "filters",
		display: "grid",
		gridTemplateColumns: "1fr auto",
		gridTemplateAreas: "'search group'",
		columnGap: tokens.spacingHorizontalM,
	},
	list: {
		gridArea: "list",
		overflowX: "hidden",
		overflowY: "auto",
		maxWidth: "100%",
	},
	actions: {
		gridArea: "actions",
		display: "flex",
		justifyContent: "flex-end",
		alignItems: "center",
		gap: tokens.spacingHorizontalM,
	},
	batch: {
		display: "inline-flex",
		width: "12px",
		height: "12px",
		fontSize: "8px",
		borderRadius: tokens.borderRadiusCircular,
		backgroundColor: tokens.colorBrandBackground2,
		justifyContent: "center",
		alignItems: "center",
		alignContent: "center",
		transform: "translateY(-2px)",
	},
	listSegments: {
		display: "flex",
		flexDirection: "column",
		rowGap: tokens.spacingVerticalXXL,
	},
	groupHeader: {
		display: "flex",
		gap: tokens.spacingHorizontalM,
		alignItems: "end",
	},
	recipeItem: {
		display: "flex",
		flexDirection: "column",
		gap: tokens.spacingVerticalXS,
	},
	recipeName: {
		display: "grid",
		gridTemplateColumns: "1fr auto",
		gridTemplateAreas: "'name alt'",
	},
	recipeAlt: {
		gridArea: "alt",
		fontSize: tokens.fontSizeBase100,
		color: tokens.colorNeutralForeground4,
	}
})

const BodyPresenceMotion = createPresenceComponent<{ level: 1 | 2 }>(
	({ level }) => 
	{
		const keyframes = [
			{
				opacity: 0,
				transform: level === 1 ? "translateX(-100%)" : "translateX(100%)",
			},
			{ opacity: 1, transform: "translateX(0)" },
		];
  
		const duration = motionTokens.durationNormal;
		const easing = motionTokens.curveEasyEase;
  
		return {
			enter: {
				keyframes,
				duration,
				easing,
			},
			exit: {
				keyframes: [...keyframes].reverse(),
				duration,
				easing,
			},
		};
	}
);