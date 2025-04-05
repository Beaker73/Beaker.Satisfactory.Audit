import type { ReactNode } from "react";

import { makeStyles, mergeClasses, tokens } from "@fluentui/react-components";
import type { PageState } from "./Types";

export function usePageView(children: ReactNode, state: PageState)
{
	const style = usePageStyles();

	return <div className={mergeClasses(style.container, style[state.type])}>
		<div className={style.content}>
			{children}
		</div>
	</div>;
}

const usePageStyles = makeStyles({
	container: {
		width: "100%",
		height: "100%",
		minHeight: "100%",
		maxHeight: "100%",
	},
	content: {
		padding: `${tokens.spacingVerticalXXL} ${tokens.spacingHorizontalXXL}`,
	},
	fixed: {
		overflow: "hidden",
	},
	scrollable: {
		overflow: "auto",
	}
})