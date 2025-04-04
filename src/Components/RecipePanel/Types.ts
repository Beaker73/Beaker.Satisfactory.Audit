import type { useRecipePanelState } from "./State";

export type RecipePanelProps = {
	onDismiss?: () => void,
};

export type RecipePanelState = ReturnType<typeof useRecipePanelState>;