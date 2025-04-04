import type { DataGridProps } from "@fluentui/react-components";
import { DataGrid, DataGridBody, DataGridCell, DataGridHeader, DataGridHeaderCell, DataGridRow, mergeClasses } from "@fluentui/react-components";

export type WithId = {
	id: string,
}

export type DataGridTemplateProps<Item extends WithId> = {
	items: Item[],
	columns: DataGridProps["columns"],
	style?: Record<string, string>,
}

export function DataGridTemplate<Item extends WithId>(props: DataGridTemplateProps<Item>)
{
	const { items, columns, style } = props;

	return <DataGrid columns={columns} items={items} getRowId={(item) => item.id}>
		<DataGridHeader>
			<DataGridRow>
				{({columnId, renderHeaderCell}) => <DataGridHeaderCell className={mergeClasses(style?.header, style?.[columnId as string])}>
					{renderHeaderCell()}
				</DataGridHeaderCell>}
			</DataGridRow>
		</DataGridHeader>
		<DataGridBody<Item>>
			{({item}) => <DataGridRow<Item> key={item.id}>
				{({columnId, renderCell}) => <DataGridCell className={style?.[columnId as string]}>
					{renderCell(item)}
				</DataGridCell>}
			</DataGridRow>}
		</DataGridBody>
	</DataGrid>;
}