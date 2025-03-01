import { useWorldState } from "../State/Hooks";
import { AuditProps } from "./Types";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function useAuditState(_props: AuditProps) {

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [state, _dispatch] = useWorldState();

	return {
		world: state.world,
	}

}