import { useAuditState } from "./State";
import { useAuditView } from "./View";
import { AuditProps } from "./Types";

export function Audit(props: AuditProps) {
	const state = useAuditState(props);
	return useAuditView(state);
}