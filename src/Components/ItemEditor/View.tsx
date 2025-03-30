import { makeStyles } from "@fluentui/react-components";
import type { ItemEditorState } from "./Types";

export function useItemEditorView(_state: ItemEditorState)
{
	const style = useItemEditorStyles();

	return <div className={style.root}>
	</div>;
}

const useItemEditorStyles = makeStyles({
	root: {
	}
})