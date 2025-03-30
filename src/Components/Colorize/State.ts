import type { ColorizeProps } from "./Types";

export function useColorizeState(props: ColorizeProps)
{
	const { sentiment }	= props;

	return {
		sentiment,
	};
}