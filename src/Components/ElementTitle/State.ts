import { useMemo } from "react";
import { iconMap } from "../../Helpers/Icons";
import type { HeadingProps } from "./Types";

export function useHeadingState(props: HeadingProps)
{
	const { element, icon } = props;

	const Icon = useMemo(() => 
	{
		if (icon) return icon;
		if (!element) return undefined;

		return iconMap[element.type][element.subType];
	}, [element, icon])

	return {
		Icon,
	};
}