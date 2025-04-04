import { Button, DrawerBody, DrawerHeader, DrawerHeaderTitle, makeStyles, MenuItem, OverlayDrawer, SearchBox, ToggleButton, tokens, ToolbarButton, Tooltip } from "@fluentui/react-components";
import { DismissIcon, GroupIcon, ItemIcon } from "../../Helpers/Icons";
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

		<DrawerBody>
			<div className={style.root}>
				<div className={style.filters}>
					<SearchBox placeholder="Search for recipe" />
					<Tooltip content="Group by Factory Type" relationship="description" appearance="inverted" withArrow>
						<ToggleButton icon={<GroupIcon />} />
					</Tooltip>
				</div>
				<div className={style.list}>
					{state.view === "byItem" && Object.entries(state.byItem).map(([key, { item, recipies }]) => 
					{
						return <MenuItem key={key} icon={<ItemIcon item={item} />}>
							{item.name} <span className={style.batch}>{recipies.length}</span>
						</MenuItem>;
					})}
				</div>
				<div className={style.actions}>
					<Button onClick={state.onDismiss} appearance="secondary">Cancel</Button>
				</div>
			</div>
		</DrawerBody>

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
		overflowY: "scroll",
	},
	actions: {
		gridArea: "actions",
		display: "flex",
		justifyContent: "flex-end",
		alignItems: "center",
		gap: tokens.spacingHorizontalM,
	},
	batch: {
		fontSize: tokens.fontSizeBase100,
		borderRadius: tokens.borderRadiusCircular,
		backgroundColor: tokens.colorBrandBackground2,
		padding: `${tokens.spacingVerticalXXS} ${tokens.spacingHorizontalXS}`,
	}
})