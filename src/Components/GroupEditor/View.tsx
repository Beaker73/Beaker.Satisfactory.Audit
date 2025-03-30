import { Button, Card, Field, Input, makeStyles, tokens, Tooltip } from "@fluentui/react-components";
import { DeleteIcon } from "../../Helpers/Icons";
import { Children } from "../Children";
import { Colorize } from "../Colorize";
import { Heading } from "../ElementTitle";
import { HeadingActions } from "../ElementTitle/HeadingActions";
import { HeadingTitle } from "../ElementTitle/HeadingTitle";
import type { GroupEditorState } from "./Types";

export function useGroupEditorView(state: GroupEditorState)
{
	const { group, onNameChange, canDelete } = state;

	const style = useGroupEditorStyles();

	return <div>
		{group && <Heading element={group}>
			<HeadingTitle>
				{group.name}
			</HeadingTitle>
			{canDelete && <HeadingActions>
				<Colorize sentiment="danger">
					<Tooltip appearance="inverted" content={`Delete "${name}" from the world`} relationship="description" withArrow>
						<Button appearance="primary" icon={<DeleteIcon />} />
					</Tooltip>
				</Colorize>
			</HeadingActions>}
		</Heading>}
		<div className={style.root}>
			<Card>
				<Field label="Name" required>
					<Input value={group?.name ?? ""} onChange={onNameChange} />
				</Field>
			</Card>
			{group && <Children groupId={group.id} />}
		</div>
	</div>;
}

const useGroupEditorStyles = makeStyles({
	root: {
		display: "flex",
		flexDirection: "column",
		gap: tokens.spacingVerticalM,
	}
})