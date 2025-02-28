import { useAuditState } from "./State";

export type AuditProps = object;
export type AuditState = ReturnType<typeof useAuditState>;