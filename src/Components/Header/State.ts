import type { InputProps } from "@fluentui/react-components";
import { useCallback } from "react";
import { useShallow } from "zustand/shallow";
import { useWorldStore } from "../../State";
import type { HeaderProps } from "./Types";

 
export function useHeaderState(_props: HeaderProps) 
{
	const updateName = useWorldStore(store => store.updateName);
	const { worldId, worldName } = useWorldStore(useShallow(state => ({ 
		worldId: state.rootId, 
		worldName: state.nodes[state.rootId]?.name ?? "",
	})));
	const updateWorldName = useCallback<NonNullable<InputProps["onChange"]>>(
		(_, data) => updateName(worldId, data.value ?? ""), 
		[updateName, worldId]);

	return {
		worldName, updateWorldName,
	}
}