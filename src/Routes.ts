import { useRoutes } from "raviger";
import { createElement } from "react";
import { EditPage } from "./Components/EditPage";
import { StoryPage } from "./Components/StoryPage";
import { WorldsPage } from "./Components/WorldsPage";
import type { NodeId } from "./State/Node";

export function useAppRoutes()
{
	return useRoutes({
		"/": () => createElement(WorldsPage),
		"/edit/:id": props => createElement(EditPage, props as {id: NodeId}),
		"/story": props => createElement(StoryPage, props),
		"/story/:name": props => createElement(StoryPage, props),
	}, {
		basePath: "/Beaker.Satisfactory.Audit"
	});
}