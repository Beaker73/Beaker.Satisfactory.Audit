import type { NodeId } from "../../State/Node";
import type { usePageState } from "./State";

export type PageProps = {
	className?: string,
	type?: "fixed" | "scrollable",
	breadcrumb?: NodeId,
};

export type PageState = ReturnType<typeof usePageState>;