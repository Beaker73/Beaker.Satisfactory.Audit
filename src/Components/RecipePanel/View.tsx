import { Button, createPresenceComponent, Drawer, DrawerBody, DrawerHeader, DrawerHeaderTitle, makeStyles, MenuDivider, MenuGroupHeader, MenuItem, mergeClasses, motionTokens, SearchBox, ToggleButton, tokens, ToolbarButton, Tooltip } from "@fluentui/react-components";
import { Fragment } from "react/jsx-runtime";
import { buildingPath } from "../../Database/Hooks";
import { BackIcon, DismissIcon, GroupIcon, ItemIcon } from "../../Helpers/Icons";
import { objectEntries } from "../../Helpers/Object";
import { IngredientFlow } from "../IngredientFlow";
import { RecipeName } from "../RecipeName";
import type { RecipePanelState } from "./Types";

export function useRecipePanelView(state: RecipePanelState)
{
	const style = useRecipePanelStyles();

	return <Drawer open type={state.type} position="end">
		
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
						{state.view === "byItem" && objectEntries(state.byItem).map(([key, entry]) => 
						{
							const { item } = entry;
							const isSubmenu = entry.byMachine.count > 1;

							return <MenuItem key={key} onClick={() => state.onClickByItemEntry(entry)} icon={<ItemIcon item={item} /> } hasSubmenu={isSubmenu}>
								{item.name} {isSubmenu && <span className={style.batch}>{entry.byMachine.count}</span>}
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
						{state.view === "byItem" && state.selectedEntry && Object.values(state.selectedEntry.byMachine).filter(v => typeof v === "object").map(
							(byMachine) => <div key={byMachine.building.className}>
								<MenuGroupHeader className={style.groupHeader}>
									<img src={buildingPath(byMachine.building)} alt={byMachine.building.name} width={32} height={32} />
									{byMachine.building.name}
								</MenuGroupHeader>
								<MenuDivider />
								{byMachine.variants.map((variant) => <MenuItem key={variant.source.className} onClick={() => state.onClickByVariantEntry(variant)} icon={<ItemIcon item={variant.output[0].item} />} hasSubmenu={variant.input.length > 1}>
									<div className={style.recipeItem}>
										<div className={style.recipeName}>
											{variant.type === "recipe" && <Fragment>
												<RecipeName recipe={variant.source} noIcon noTag />
												{variant.source.alternate && <span className={style.recipeAlt}>Alternate</span> }
											</Fragment>}
										</div>
										<IngredientFlow inputs={variant.input} outputs={variant.output} size="medium" />
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

	</Drawer>;
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