import { useNavigate } from "raviger";
import { useCallback, useMemo } from "react";
import { useShallow } from "zustand/shallow";
import { useProjectStore } from "../../State";
import type { WorldsPageProps } from "./Types";

export function useWorldsPageState(_props: WorldsPageProps)
{
	const activeProjectId = useProjectStore(store => store.activeProjectId)
	const projects = useProjectStore(useShallow(store => Object.values(store.projects)));
	const navigate = useNavigate();
	
	const setActiveProjectId = useProjectStore(store => store.setActiveProjectId);
	const onActivateProject = useCallback((projectId: string) => 
	{
		setActiveProjectId(projectId);
		navigate(`/edit/${projectId}`);
	}, [navigate, setActiveProjectId]);

	const createNewProject = useProjectStore(store => store.createNewProject);
	const onCreateProject = useCallback(() => 
	{ 
		const id = createNewProject();
		setActiveProjectId(id);
		navigate(`/edit/${id}`);
	}, [createNewProject, navigate, setActiveProjectId]);

	const selectedProjects = useMemo(() => activeProjectId ? [activeProjectId] : [], [activeProjectId]);
	return {
		activeProjectId, onActivateProject,
		projects, selectedProjects, onCreateProject,
	};
}