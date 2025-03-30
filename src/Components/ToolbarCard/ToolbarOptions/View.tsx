import type { ReactNode } from "react";

import { makeStyles } from "@fluentui/react-components";
import type { ToolbarOptionsState } from "./Types";

export function useToolbarOptionsView(children: ReactNode, _state: ToolbarOptionsState)
{
	const style = useToolbarOptionsStyles();

	return <div className={style.options}>
		{children}
	</div>;
}

const useToolbarOptionsStyles = makeStyles({
	options: {
		gridArea: "options",
	},
})