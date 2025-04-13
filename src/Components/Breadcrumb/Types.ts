import type { NodeId } from "../../State/Node";
import type { useBreadcrumbState } from "./State";

export type BreadcrumbProps = {
	nodeId: NodeId,
};

export type BreadcrumbState = ReturnType<typeof useBreadcrumbState>;