import type { usePageState } from "./State";

export type PageProps = {
	className?: string,
	type?: "fixed" | "scrollable",
};

export type PageState = ReturnType<typeof usePageState>;