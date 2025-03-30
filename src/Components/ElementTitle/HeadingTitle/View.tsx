import type { ReactNode } from "react";

import { makeStyles, tokens } from "@fluentui/react-components";
import type { HeadingTitleState } from "./Types";

export function useHeadingTitleView(children: ReactNode, _state: HeadingTitleState)
{
	const style = useHeadingTitleStyles();

	return <div className={style.root}>
		{children}
	</div>;
}

const useHeadingTitleStyles = makeStyles({
	root: {
		gridArea: "title",
		display: "flex",
		alignItems: "center",
		gap: tokens.spacingHorizontalS,
		marginBottom: tokens.spacingVerticalL,
		fontSize: tokens.fontSizeBase600,
		fontWeight: tokens.fontWeightSemibold,
	}
})