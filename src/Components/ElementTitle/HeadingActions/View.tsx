import type { ReactNode } from "react";

import { makeStyles } from "@fluentui/react-components";
import type { HeadingActionsState } from "./Types";

export function useHeadingActionsView(children: ReactNode, _state: HeadingActionsState)
{
	const style = useHeadingActionsStyles();

	return <div className={style.root}>
		{children}
	</div>;
}

const useHeadingActionsStyles = makeStyles({
	root: {
		gridArea: "actions",
	}
})