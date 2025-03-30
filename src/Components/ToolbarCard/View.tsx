import type { ReactNode } from "react";

import { Card, CardPreview, makeStyles } from "@fluentui/react-components";
import type { ToolbarCardState } from "./Types";

export function useToolbarCardView(children: ReactNode, _state: ToolbarCardState)
{
	const style = useToolbarCardStyles();

	return <Card>
		<CardPreview>
			<div>
				<div className={style.toolbar}>
					{children}
				</div>
			</div>
		</CardPreview>
	</Card>;
}

const useToolbarCardStyles = makeStyles({
	toolbar: {
		display: "grid",
		gridTemplateColumns: "1fr auto",
		gridTemplateAreas: "'commands options'",
	},
})