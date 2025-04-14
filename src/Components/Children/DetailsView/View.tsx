import { createTableColumn, makeStyles, SpinButton, tokens } from "@fluentui/react-components";
import { useMemo } from "react";
import { getVariant } from "../../../Database/Merge";
import type { Item } from "../../../State/Item";
import { DataGridTemplate } from "../../DataGridTemplate";
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
			columnId: "recipe",
			renderHeaderCell: () => "Recipe",
			renderCell: (item) => <VariantPicker value={getVariant(item.variant)} onVariantChange={(variant) => onVariantChange(item, variant)} />,
			compare: (a, b) => a.type.localeCompare(b.type),
		}),
		createTableColumn<Item>({
			columnId: "instances",
			renderHeaderCell: () => "Instances",
			renderCell: (item) => <SpinButton value={item.instances.length} />,
			compare: (a, b) => a.instances.length - b.instances.length,
		})
	], [onVariantChange]);
}
