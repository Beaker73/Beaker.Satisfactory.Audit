import type { TilesViewProps } from "./Types";

export function useTilesViewState(props: TilesViewProps)
{
	const { children } = props;

	return {
		children,
	};
}