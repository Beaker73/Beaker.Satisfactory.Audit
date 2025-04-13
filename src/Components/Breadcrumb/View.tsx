import { makeStyles, tokens, ToolbarButton } from "@fluentui/react-components";
import { Fragment, type ReactNode } from "react";
import { ChevronRightIcon, NodeIcons } from "../../Helpers/Icons";
import type { BreadcrumbState } from "./Types";

export function useBreadcrumbView(state: BreadcrumbState)
{
	const style = useBreadcrumbStyles();

	return <div className={style.root}>
		{state.nodeList.map((node, ix) => 
		{
			const isLast = ix === state.nodeList.length - 1;
			const fragments: ReactNode[] = [];
			const Icon = NodeIcons[node.subType];

			if(node.subType === "world")
				fragments.push(<ToolbarButton onClick={() => state.onNodeClick(node)} disabled={isLast} icon={<Icon />} title={node.name} />);
			else
				fragments.push(<ToolbarButton onClick={() => state.onNodeClick(node)} disabled={isLast} icon={<Icon />} className={style.groupButton}>{node.name}</ToolbarButton>);
			
			if(!isLast)
				fragments.push(<ChevronRightIcon className={style.seperator} />);

			return <Fragment>{fragments}</Fragment>
		})}
	</div>;
}

const useBreadcrumbStyles = makeStyles({
	root: {
		display: "flex",
		alignItems: "center",
	},
	groupButton: {
		fontWeight: tokens.fontWeightRegular,
		paddingLeft: 0,
		paddingRight: 0,
		minWidth: "unset",
		color: tokens.colorNeutralForeground2,
		"&:hover": {
			color: tokens.colorBrandForegroundLink,
		},
		"&:hover[disabled]": {
			color: tokens.colorNeutralForeground2,
			cursor: "unset",
		}
	},
	seperator: {
		fontSize: "22px"
	}
})