import { makeStyles, tokens } from "@fluentui/react-components";
import type { ActivePageState } from "./Types";

export function useActivePageView(state: ActivePageState) 
{
	const style = useActivePageStyles();

	return <div className={style.page}>
		{state.page}
	</div>;
}

const useActivePageStyles = makeStyles({
	page: {
		padding: `${tokens.spacingVerticalL} ${tokens.spacingHorizontalL}`,
		height: "100%",
		overflowY: "auto"
	}
})