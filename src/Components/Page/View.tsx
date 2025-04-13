import type { ReactNode } from "react";

import { makeStyles, mergeClasses, tokens } from "@fluentui/react-components";
import { Breadcrumb } from "../Breadcrumb";
import type { PageState } from "./Types";

export function usePageView(children: ReactNode, state: PageState)
{
	const style = usePageStyles();

	return <div className={style.page}>
		{state.breadcrumb && <div className={style.breadcrumb}>
			<Breadcrumb nodeId={state.breadcrumb} />
		</div>}
		<div className={mergeClasses(style.container, style[state.type])}>
			<div className={mergeClasses(style.content, state.className)}>
				{children}
			</div>
		</div>
	</div>;
}

const usePageStyles = makeStyles({
	page: {
		display: "grid",
		gridTemplateRows: "auto 1fr",
		gridTemplateAreas: "'breadcrumb' 'container'"
	},
	breadcrumb: {
		gridArea: "breadcrumb",
		padding: `${tokens.spacingVerticalXL} ${tokens.spacingHorizontalXL}`,
		paddingBottom: 0,
	},
	container: {
		gridArea: "container",
		width: "100%",
		height: "100%",
		minHeight: "100%",
		maxHeight: "100%",
	},
	content: {
		boxSizing: "border-box",
		padding: `${tokens.spacingVerticalXXL} ${tokens.spacingHorizontalXXL}`,
		minHeight: "100%",
	},
	fixed: {
		overflow: "hidden",
	},
	scrollable: {
		overflow: "auto",
	}
})