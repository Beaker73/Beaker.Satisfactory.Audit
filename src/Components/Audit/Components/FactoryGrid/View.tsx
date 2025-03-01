import { createTableColumn, DataGrid, DataGridBody, DataGridCell, DataGridHeader, DataGridHeaderCell, DataGridRow, ToolbarButton, Tooltip } from "@fluentui/react-components";
import { CopyFilled, CopyRegular, DeleteFilled, DeleteRegular, bundleIcon } from "@fluentui/react-icons";
import { FactoryGridState } from "./Types";
import { Factory } from "../../../State/Types";
import { Fragment } from "react/jsx-runtime";

export function useFactoryGridView(state: FactoryGridState) {

	const { factories } = state;

	const columns = useFactoryGridColumns(state);

	return <DataGrid columns={columns} items={factories} 
			size="small" sortable
			getRowId={factory => factory.id}>
		<DataGridHeader>
			<DataGridRow>
				{({renderHeaderCell}) => <DataGridHeaderCell>
					{renderHeaderCell()}
				</DataGridHeaderCell>}
			</DataGridRow>
		</DataGridHeader>
		<DataGridBody<Factory>>
			{({ item }) => <DataGridRow<Factory> key={item.id}>
				{({ renderCell }) => <DataGridCell>
					{renderCell(item)}
				</DataGridCell>}
			</DataGridRow>}
		</DataGridBody>
	</DataGrid>
}

function useFactoryGridColumns(state: FactoryGridState) {

	const DeleteIcon = bundleIcon(DeleteFilled, DeleteRegular);
	const CloneIcon = bundleIcon(CopyFilled, CopyRegular);
	
	return [
		createTableColumn<Factory>({
			columnId: "recipe",
			renderHeaderCell: () => "Recipe",
			renderCell: () => "",
		}),
		createTableColumn<Factory>({
			columnId: "building",
			renderHeaderCell: () => "Building",
			renderCell: () => "",
		}),
		createTableColumn<Factory>({
			columnId: "adjust",
			renderHeaderCell: () => "Adjust",
			renderCell: () => "",
		}),
		createTableColumn<Factory>({
			columnId: "input",
			renderHeaderCell: () => "Input",
			renderCell: () => "",
		}),
		createTableColumn<Factory>({
			columnId: "output",
			renderHeaderCell: () => "Output",
			renderCell: () => "",
		}),
		createTableColumn<Factory>({
			columnId: "actions",
			renderHeaderCell: () => "Actions",
			renderCell: factory => <Fragment>
				<Tooltip content="Clone Factory" relationship="label">
					<ToolbarButton onClick={() => state.onCloneFactory(factory)} icon={<CloneIcon />} />
				</Tooltip>
				<Tooltip content="Delete Factory" relationship="label">
					<ToolbarButton onClick={() => state.onDeleteFactory(factory)} icon={<DeleteIcon />} />
				</Tooltip>
			</Fragment>,
		}),
	]
}