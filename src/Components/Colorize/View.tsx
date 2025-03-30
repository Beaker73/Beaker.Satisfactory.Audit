import type { ReactNode } from "react";

import type { BrandVariants, Theme } from "@fluentui/react-components";
import { createLightTheme, FluentProvider, webLightTheme } from "@fluentui/react-components";
import type { ColorizeState, Sentiment } from "./Types";

export function useColorizeView(children: ReactNode, state: ColorizeState)
{
	const { sentiment } = state;

	return <FluentProvider theme={themeMap[sentiment]}>
		{children}
	</FluentProvider>;
}

const danger: BrandVariants = { 
	10: "#060201",
	20: "#25110D",
	30: "#3F1916",
	40: "#551E1B",
	50: "#6C2320",
	60: "#842826",
	70: "#9C2C2C",
	80: "#B53031",
	90: "#CF3337",
	100: "#D94D49",
	110: "#E1645C",
	120: "#E87A70",
	130: "#EE8F84",
	140: "#F4A399",
	150: "#F8B7AF",
	160: "#FBCBC5"
};
	
const dangerTheme: Theme = {
	...createLightTheme(danger), 
};

const warning: BrandVariants = { 
	10: "#060200",
	20: "#241500",
	30: "#3C2100",
	40: "#4D2B00",
	50: "#5E3600",
	60: "#6E4100",
	70: "#7F4D00",
	80: "#905A00",
	90: "#A06700",
	100: "#B17400",
	110: "#C28200",
	120: "#D49000",
	130: "#E59E00",
	140: "#F4AE1C",
	150: "#FFBF43",
	160: "#FFD387"
};
	
const warningTheme: Theme = {
	...createLightTheme(warning), 
};

const success: BrandVariants = { 
	10: "#000500",
	20: "#001F02",
	30: "#00310B",
	40: "#003F0F",
	50: "#004D11",
	60: "#005C11",
	70: "#006B0F",
	80: "#087A0D",
	90: "#2A881D",
	100: "#42952D",
	110: "#59A33E",
	120: "#70B051",
	130: "#87BE66",
	140: "#9ECB7E",
	150: "#B6D798",
	160: "#CDE4B5"
};
	
const successTheme: Theme = {
	...createLightTheme(success), 
};

	
const themeMap: Record<Sentiment, Theme> = {
	danger: dangerTheme,
	warning: warningTheme,
	success: successTheme,
	info: webLightTheme,
}