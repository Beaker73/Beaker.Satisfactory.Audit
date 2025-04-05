import type { usePageState } from "./State";

export type PageProps = {
	type: "fixed" | "scrollable",
};

export type PageState = ReturnType<typeof usePageState>;