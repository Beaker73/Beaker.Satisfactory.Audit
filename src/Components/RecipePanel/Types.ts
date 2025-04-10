import type { useRecipePanelState } from "./State";

export type RecipePanelProps = {
	type?: "overlay" | "inline",
	onDismiss?: () => void,
};

export type RecipePanelState = ReturnType<typeof useRecipePanelState>;

