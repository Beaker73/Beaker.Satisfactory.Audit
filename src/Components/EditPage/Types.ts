import type { NodeId } from "../../State/Node";
import type { useEditPageState } from "./State";

export type EditPageProps = {
	id: NodeId,
}

export type EditPageState = ReturnType<typeof useEditPageState>;