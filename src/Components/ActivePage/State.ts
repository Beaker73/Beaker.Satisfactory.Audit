import { useRoutes } from "raviger";
import { createElement } from "react";
import { EditPage } from "../EditPage";
import type { ActivePageProps } from "./Types";

export function useActivePageState(_props: ActivePageProps) 
{
	const page = useRoutes({
		"/edit/:id": props => createElement(EditPage, props),
	});

	return {
		page,
	}
}