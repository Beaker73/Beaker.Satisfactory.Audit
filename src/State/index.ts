import { useStore } from "zustand";
import type { WorldId } from "./Group";
import { useProjectStore } from "./ProjectStore";
import type { WorldStore } from "./WorldStore";
import { getOrCreateWorldStore } from "./WorldStore";

export { useProjectStore } from "./ProjectStore";
export type { ProjectState, ProjectStore } from "./ProjectStore";

export type { WorldState, WorldStore } from "./WorldStore";

export function useWorldStore<U>(selector: (state: WorldStore) => U)
	: U
{
	const activeProjectId = useProjectStore(state => state.activeProjectId);	
	return useStore(getOrCreateWorldStore(activeProjectId), selector) as U;
}

let unsubscribe: undefined | (() => void);


// special case for the world name, which is also stored in the project store
// subscribe to the active world store, and when the name changes, update the project stores name aswell
useProjectStore.subscribe(store => store.activeProjectId, onActiveProjectIdChange);
function onActiveProjectIdChange(activeProjectId: WorldId)
{ 
	// when active project changes, unsubscribe from the previous world store
	unsubscribe?.();
	
	// subscribe to the (new) world store
	console.debug("Subscribing to world store", activeProjectId);
	unsubscribe = getOrCreateWorldStore(activeProjectId).subscribe(
		// when world name changes
		store => store.nodes[store.rootId]?.name,
		// store that new name in the project store for the matching project
		name => 
		{
			console.debug("Updating project store with new world name", name);
			useProjectStore.setState(state => 
			{
				state.projects[activeProjectId].name = name;
			});
		}
	);
}

// trigger initial subscription to the world store
const activeProjectId = useProjectStore.getState().activeProjectId;
onActiveProjectIdChange(activeProjectId);

// set the active project id in the project store so last used gets updated to now
useProjectStore.getState().setActiveProjectId(activeProjectId);
