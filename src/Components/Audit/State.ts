import { useWorldState } from "../State/Hooks";
import { AuditProps } from "./Types";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function useAuditState(_props: AuditProps) {

	const [state, dispatch] = useWorldState();

	return {
		world: state.world,
	}

}