import { useRoutes } from "raviger";
import { createElement } from "react";
import { EditPage } from "./Components/EditPage";
import { StoryPage } from "./Components/StoryPage";
import { WorldsPage } from "./Components/WorldsPage";

export function useAppRoutes()
{
	return useRoutes({
		"/": () => createElement(WorldsPage),
		"/edit/:id": props => createElement(EditPage, props),
		"/story/:name": props => createElement(StoryPage, props),
	}, {
		basePath: "/Beaker.Satisfactory.Audit"
	});
}