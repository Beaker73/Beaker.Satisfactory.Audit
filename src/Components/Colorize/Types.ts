import type { useColorizeState } from "./State";

export type Sentiment = 
	| "danger"
	| "warning"
	| "success"
	| "info"
	;


export type ColorizeProps = {
	sentiment: Sentiment;
};

export type ColorizeState = ReturnType<typeof useColorizeState>;