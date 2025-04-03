import { useDetailsViewState } from "./State.ts";
import type { DetailsViewProps } from "./Types.ts";
import { useDetailsViewView } from "./View.tsx";

export function DetailsView(props: DetailsViewProps)
{
	const state = useDetailsViewState(props);
	return useDetailsViewView(state);
}