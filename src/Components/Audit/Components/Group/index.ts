import { useGroupState } from "./State";
import { GroupProps } from "./Types";
import { useGroupView } from "./View";

export function Group(props: GroupProps) {
	const state = useGroupState(props);
	return useGroupView(state);
}