import type { InputProps } from "@fluentui/react-components";
import { useCallback } from "react";
import { useShallow } from "zustand/shallow";
import { useAppStore } from "../../State";
import type { HeaderProps } from "./Types";

 
export function useHeaderState(_props: HeaderProps) 
{
	const updateName = useAppStore(store => store.updateName);
	const { worldId, worldName } = useAppStore(useShallow(state => ({ 
		worldId: state.root.id, 
		worldName: state.root.name
	})));
	const updateWorldName = useCallback<NonNullable<InputProps["onChange"]>>(
		(_, data) => updateName(worldId, data.value ?? ""), 
		[updateName, worldId]);

	return {
		worldName, updateWorldName,
	}
}