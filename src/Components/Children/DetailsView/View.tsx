import { createTableColumn, makeStyles, tokens } from "@fluentui/react-components";
import { useMemo } from "react";
import type { Item } from "../../../State/Item";
import { DataGridTemplate } from "../../DataGridTemplate";
import { RecipePicker } from "../../RecipyPicker";
import type { DetailsViewState } from "./Types";

export function useDetailsViewView(state: DetailsViewState)
{
	const style = useDetailsViewStyles();
	const columns = useColumns(state);
	return <DataGridTemplate columns={columns} items={state.items} style={style} />
}

const useDetailsViewStyles = makeStyles({
	header: {
		fontWeight: tokens.fontWeightSemibold,
	}
})

function useColumns(state: DetailsViewState)
{
	return useMemo(() => [
		createTableColumn<Item>({
			columnId: "name",
			renderHeaderCell: () => "Name",
			renderCell: (item) => item.name,
			compare: (a, b) => a.name.localeCompare(b.name),
		}),
		createTableColumn<Item>({
			columnId: "recipy",
			renderHeaderCell: () => "Recipy",
			renderCell: (item) => <RecipePicker value={item.recipeKey} onRecipeChange={state.onRecipeChange} />,
			compare: (a, b) => a.type.localeCompare(b.type),
		}),
	], [state.onRecipeChange]);
}
