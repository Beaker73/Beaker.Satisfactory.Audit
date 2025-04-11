import type { VariantEntry } from "../../Database/Types";
import type { useRecipePanelState } from "./State";

export type RecipePanelProps = {
	type?: "overlay" | "inline",
	onVariantSelected?: (variant: VariantEntry) => void,
	onDismiss?: () => void,
};

export type RecipePanelState = ReturnType<typeof useRecipePanelState>;

