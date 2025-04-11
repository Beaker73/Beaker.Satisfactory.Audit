import { createTableColumn, makeStyles, tokens } from "@fluentui/react-components";
import { useMemo } from "react";
import { getVariant } from "../../../Database/Merge";
import type { Item } from "../../../State/Item";
import { DataGridTemplate } from "../../DataGridTemplate";
import { IngredientFlow } from "../../IngredientFlow";
import { VariantPicker } from "../../VariantPicker";
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
	const { onVariantChange } = state;

	return useMemo(() => [
		createTableColumn<Item>({
			columnId: "name",
			renderHeaderCell: () => "Name",
			renderCell: (item) => item.name,
			compare: (a, b) => a.name.localeCompare(b.name),
		}),
		createTableColumn<Item>({
			columnId: "recipy",
			renderHeaderCell: () => "Recipe",
			renderCell: (item) => <VariantPicker value={getVariant(item.variant)} onVariantChange={(variant) => onVariantChange(item, variant)} />,
			compare: (a, b) => a.type.localeCompare(b.type),
		}),
		createTableColumn<Item>({
			columnId: "flow",
			renderHeaderCell: () => "Flow",
			renderCell: (item) => 
			{
				const variant = getVariant(item.variant);
				if(!variant) return null;
				return <IngredientFlow size="medium" inputs={variant.input} outputs={variant.output} />
			},
		}),
	], [onVariantChange]);
}
