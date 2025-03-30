import { Button, Card, Field, Input, makeStyles, tokens, Tooltip } from "@fluentui/react-components";
import { DeleteIcon } from "../../Helpers/Icons";
import { Colorize } from "../Colorize";
import { Heading } from "../ElementTitle";
import { HeadingActions } from "../ElementTitle/HeadingActions";
import { HeadingTitle } from "../ElementTitle/HeadingTitle";
import type { BaseEditorState } from "./Types";

export function useBaseEditorView(state: BaseEditorState)
{
	const { name, onNameChange, type, subType } = state;

	const style = useBaseEditorStyles();

	return <div>
		{type && subType && <Heading type={type} subType={subType}>
			<HeadingTitle>
				{name}
			</HeadingTitle>
			<HeadingActions>
				<Colorize sentiment="danger">
					<Tooltip appearance="inverted" content={`Delete "${name}" from the world`} relationship="description" withArrow>
						<Button appearance="primary" icon={<DeleteIcon />} />
					</Tooltip>
				</Colorize>
			</HeadingActions>
		</Heading>}
		<Card className={style.root}>
			<Field label="Name" required>
				<Input value={name ?? ""} onChange={onNameChange} />
			</Field>
		</Card>
	</div>;
}

const useBaseEditorStyles = makeStyles({
	root: {
		display: "flex",
		flexDirection: "column",
		gap: tokens.spacingVerticalL,
	}
})