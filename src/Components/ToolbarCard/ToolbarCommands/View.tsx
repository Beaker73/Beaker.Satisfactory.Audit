import type { ReactNode } from "react";

import { makeStyles } from "@fluentui/react-components";
import type { ToolbarCommandsState } from "./Types";

export function useToolbarCommandsView(children: ReactNode, _state: ToolbarCommandsState)
{
	const style = useToolbarCommandsStyles();

	return <div className={style.commands}>
		{children}
	</div>;
}

const useToolbarCommandsStyles = makeStyles({
	commands: {
		gridArea: "commands",
	}
})