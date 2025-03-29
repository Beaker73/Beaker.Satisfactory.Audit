import { [FTName]State } from "./State";

export function use[FTName]View(_state: [FTName]State)
{
	const style = use[FTName]Styles();

	return <div className={style.root}>
	</div>;
}

const use[FTName]Styles = makeStyles({
	root: {
	}
})