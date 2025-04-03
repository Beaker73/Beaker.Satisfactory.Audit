import { useRoutes } from "raviger";
import { createElement } from "react";
import { WorldsPage } from "./Components/WorldsPage";
import { EditPage } from "./Components/EditPage";

export function useAppRoutes()
{
	return useRoutes({
		"/": () => createElement(WorldsPage),
		"/edit/:id": props => createElement(EditPage, props),
	}, {
		basePath: "/Beaker.Satisfactory.Audit"
	});
}