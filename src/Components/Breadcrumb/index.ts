import { useBreadcrumbState } from "./State.ts";
import type { BreadcrumbProps } from "./Types.ts";
import { useBreadcrumbView } from "./View.tsx";

export function Breadcrumb(props: BreadcrumbProps)
{
	const state = useBreadcrumbState(props);
	return useBreadcrumbView(state);
}