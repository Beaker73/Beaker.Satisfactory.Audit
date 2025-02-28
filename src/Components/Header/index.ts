import { useHeaderState } from "./State";
import { useHeaderView } from "./View";
import { HeaderProps } from "./Types";

export function Header(props: HeaderProps) {
	const state = useHeaderState(props);
	return useHeaderView(state);
}