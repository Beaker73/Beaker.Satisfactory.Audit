import { useRoutes } from "raviger";
import { createElement } from "react";
import { EditPage } from "../EditPage";
import { WorldsPage } from "../WorldsPage";
import type { ActivePageProps } from "./Types";

export function useActivePageState(_props: ActivePageProps) 
{
	const page = useRoutes({
		"/": () => createElement(WorldsPage),
		"/edit/:id": props => createElement(EditPage, props),
	});

	return {
		page,
	}
}