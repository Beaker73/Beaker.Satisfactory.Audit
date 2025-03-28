import type { PositioningShorthand } from "@fluentui/react-components";
import { makeStyles, mergeClasses, OverlayDrawer, tokens } from "@fluentui/react-components";
import { ChevronDownRegular } from "@fluentui/react-icons";
import { useCallback, useState, type ReactNode } from "react";
import type { PickerState } from "./Types";

const position: PositioningShorthand = {
	align: "start",
	position: "below",
};

export function usePickerView<T>(state: PickerState<T>, children: ReactNode) {

	const [isOpen, setIsOpen] = useState(false);
	const onToggleOpen = useCallback(() => setIsOpen(io => !io), []);

	const style = usePickerStyles();
	return <div className={mergeClasses(style.pickerField, state.isSubtle ? style.pickerFieldSubtle : style.pickerFieldDefault)}>
		<div className={style.pickerFieldDefaultContent} onClick={onToggleOpen}>
			sdfsdfs
		</div>
		<div className={style.pickerFieldDefaultIcon}>
			<ChevronDownRegular />
		</div>
		<OverlayDrawer open={isOpen}>
			{children}
		</OverlayDrawer>
	</div>
}

const usePickerStyles = makeStyles({
	pickerField: {
		width: "100%",
		display: "grid",
		gridTemplateColumns: "1fr auto",
		gridTemplateAreas: `"content icon"`,
		padding: `${tokens.spacingVerticalXS} ${tokens.spacingHorizontalM}`,
	},
	pickerFieldDefault: {
		border: `solid 1px ${tokens.colorNeutralStroke1}`,
		borderRadius: tokens.borderRadiusMedium,
		borderBottomColor: tokens.colorNeutralStrokeAccessible,
	},
	pickerFieldSubtle: {
	},
	pickerFieldDefaultContent: {
		gridArea: "content",
	},
	pickerFieldDefaultIcon: {
		gridArea: "icon",
		fontSize: "20px",
	},
});