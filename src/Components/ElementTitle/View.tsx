import { type ReactNode } from "react";

import { makeStyles, tokens } from "@fluentui/react-components";
import type { HeadingState } from "./Types";

export function useHeadingView(children: ReactNode, state: HeadingState)
{
	const { Icon } = state;

	const style = useElementTitleStyles();

	return <div className={style.root}>
		{Icon && <div className={style.icon}>
			{ typeof Icon !== "function" ? Icon : <Icon /> }
		</div>}
		{children}
	</div>;
}

const useElementTitleStyles = makeStyles({
	root: {
		display: "grid",
		gridTemplateColumns: "auto 1fr auto",
		gridTemplateAreas: "'icon title actions'",	
		gridGap: tokens.spacingHorizontalS,
	},
	icon: {
		gridArea: "icon",
		fontSize: tokens.fontSizeBase600,
	},
})