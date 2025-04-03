import { createTableColumn, DataGrid, DataGridBody, DataGridHeader, DataGridHeaderCell, DataGridRow, makeStyles, tokens } from "@fluentui/react-components";
import { useMemo } from "react";
import { useDatabase } from "../../../Database/Hooks";
import type { RecipeKey } from "../../../Database/Types";
import type { Item } from "../../../State/Item";
import type { DetailsViewState } from "./Types";

export function useDetailsViewView(state: DetailsViewState)
{
	const style = useDetailsViewStyles();
	const columns = useColumns();
	return <DataGrid columns={columns} items={state.items}>
		<DataGridHeader>
			<DataGridRow>
				{({renderHeaderCell}) => <DataGridHeaderCell className={style.header}>
					{renderHeaderCell()}
				</DataGridHeaderCell>}
			</DataGridRow>
		</DataGridHeader>
		<DataGridBody<Item>>
			{({item}) => <DataGridRow<Item>>
				{({renderCell}) => <DataGridHeaderCell>
					{renderCell(item)}
				</DataGridHeaderCell>}
			</DataGridRow>}
		</DataGridBody>
	</DataGrid>
}

const useDetailsViewStyles = makeStyles({
	header: {
		fontWeight: tokens.fontWeightSemibold,
	}
})

function useColumns()
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
			renderCell: (item) => <RecipyName recipyKey={item.recipyKey} />,
			compare: (a, b) => a.type.localeCompare(b.type),
		}),
	], []);
}

function RecipyName({recipyKey}: {recipyKey?: RecipeKey })
{
	const recipes = useDatabase().recipes;
	const recipe = recipyKey ? recipes[recipyKey] : undefined;

	return recipe?.name ?? "";
}