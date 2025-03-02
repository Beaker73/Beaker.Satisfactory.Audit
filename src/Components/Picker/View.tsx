import type { PositioningShorthand } from "@fluentui/react-components";
import { makeStyles, mergeClasses, Popover, PopoverSurface, PopoverTrigger, tokens } from "@fluentui/react-components";
import { ChevronDownRegular } from "@fluentui/react-icons";
import type { ReactNode } from "react";
import type { PickerState } from "./Types";

const position: PositioningShorthand = {
	align: "start",
	position: "below",
};

export function usePickerView<T>(state: PickerState<T>, children: ReactNode) {
	const style = usePickerStyles();
	return <Popover positioning={position}>
		<PopoverTrigger>
			<div className={mergeClasses(style.pickerField, state.isSubtle ? style.pickerFieldSubtle : style.pickerFieldDefault)}>
				<div className={style.pickerFieldDefaultContent}>
					sdfsdfs
				</div>
				<div className={style.pickerFieldDefaultIcon}>
					<ChevronDownRegular />
				</div>
			</div>
		</PopoverTrigger>
		<PopoverSurface>
			{children}
		</PopoverSurface>
	</Popover>
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