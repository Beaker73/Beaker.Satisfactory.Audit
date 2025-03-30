import { v4 } from "uuid";
import { create } from "zustand";
import { createJSONStorage, persist, subscribeWithSelector } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import type { Project } from "../Project";
import { migrate } from "./Migrations";

export type ProjectState = {
	activeProjectId: string;
	projects: Record<string, Project>;
}

export type ProjectStore = ProjectState & {
	setActiveProjectId: (projectId: string) => void;
	createNewProject: () => string;
}

const initialProjectId = "1fe812dc-5508-477a-9d3d-1337cf7c3235";

export const useProjectStore = create<ProjectStore>()(
	subscribeWithSelector(
		persist(
			immer(
				(set, get) => ({
					activeProjectId: initialProjectId,
					projects: {
						[initialProjectId]: {
							type: "project",
							id: initialProjectId,
							name: "My First World",
							description: "This is my first world. It will be grandiose.",
							createdAt: new Date(),
						},
					},

					setActiveProjectId: (projectId: string) => 
					{
						if(projectId in get().projects)
						{
							set(state =>
							{
								state.activeProjectId = projectId;
								state.projects[projectId].lastUsedAt = new Date();
							});
						}
					},

					createNewProject: () => 
					{
						let id = "";

						set(state => 
						{
							id = v4();
							state.projects[id] = {
								type: "project",
								id: id,
								name: "My New World",
								description: "This is my new world. It will be grandiose.",
								createdAt: new Date(),
							};
						})

						return id;
					}
				})),
			{
				name: "satisfactory-audit-projects",
				version: 1,
				storage: createJSONStorage(() => localStorage, {
					reviver(key, value) 
					{
						if(key.endsWith("At") && typeof value === "string" && value.endsWith("Z"))
							return new Date(value);
						return value;
					},
				}),
				migrate
			},
		)
	)
)