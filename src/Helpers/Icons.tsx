import { makeStyles } from "@fluentui/react-components";
import type { FluentIcon } from "@fluentui/react-icons";
import { BotFilled, BotRegular, BuildingFactoryFilled, BuildingFactoryRegular, bundleIcon, createFluentIcon, DeleteFilled, DeleteRegular, DismissFilled, DismissRegular, EarthFilled, EarthRegular, EditFilled, EditRegular, FolderOpenFilled, FolderOpenRegular, GridFilled, GridRegular, GroupListFilled, GroupListRegular, MoreVerticalFilled, MoreVerticalRegular, TextBulletListFilled, TextBulletListRegular } from "@fluentui/react-icons";
import { memo } from "react";
import { itemPath } from "../Database/Hooks";
import type { Item } from "../Database/Types";
import type { Element } from "../State/Element";

export const WorldIcon = bundleIcon(EarthFilled, EarthRegular)
export const FolderIcon = bundleIcon(FolderOpenFilled, FolderOpenRegular);
export const EditIcon = bundleIcon(EditFilled, EditRegular);
export const MoreIcon = bundleIcon(MoreVerticalFilled, MoreVerticalRegular);
export const FactoryIcon = bundleIcon(BuildingFactoryFilled, BuildingFactoryRegular);
export const RobotIcon = bundleIcon(BotFilled, BotRegular);
export const DeleteIcon = bundleIcon(DeleteFilled, DeleteRegular);
export const TilesIcon = bundleIcon(GridFilled, GridRegular);
export const DetailsIcon = bundleIcon(TextBulletListFilled, TextBulletListRegular);
export const DismissIcon = bundleIcon(DismissFilled, DismissRegular);
export const GroupIcon = bundleIcon(GroupListFilled, GroupListRegular);

// todo: figure out how to create correctly scaling svg icons, like the actual fluentui ones seem to do.
const GalaxyRegular = createFluentIcon("GalaxyRegular", "514", [
	"M19.76,353.753c0.867,0.325,1.756,0.479,2.63,0.479c3.037,0,5.896-1.859,7.024-4.871 C52.608,287.453,98.761,219.98,159.371,159.37c2.929-2.929,2.929-7.678,0-10.606c-2.929-2.929-7.678-2.929-10.606,0 C86.672,210.856,39.298,280.227,15.368,344.098C13.915,347.977,15.881,352.3,19.76,353.753z",
	"M6.665,413.005c0.284,0.032,0.565,0.047,0.845,0.047c3.768,0,7.015-2.833,7.444-6.665 c0.683-6.088,1.735-12.475,3.129-18.985c0.867-4.05-1.713-8.037-5.764-8.904c-4.049-0.865-8.036,1.714-8.904,5.764 c-1.497,6.993-2.63,13.875-3.367,20.454C-0.414,408.833,2.549,412.544,6.665,413.005z",
	"M16.083,445.315c-0.833-4.057-4.801-6.672-8.856-5.836c-4.057,0.834-6.67,4.799-5.836,8.856 c3.549,17.266,10.973,31.645,22.064,42.736c1.464,1.465,3.384,2.197,5.303,2.197c1.919,0,3.839-0.732,5.303-2.197 c2.929-2.929,2.929-7.677,0-10.606C25.081,471.484,19.032,459.658,16.083,445.315z",
	"M490.83,171.44c-3.831-1.579-8.214,0.245-9.792,4.075c-24.321,58.988-69.027,122.786-125.881,179.641 c-2.929,2.929-2.929,7.678,0,10.606c1.464,1.464,3.384,2.197,5.303,2.197s3.839-0.732,5.303-2.197 c58.221-58.221,104.085-123.755,129.142-184.529C496.484,177.403,494.659,173.019,490.83,171.44z",
	"M507.861,101.528c-4.117-0.468-7.827,2.501-8.289,6.617c-0.861,7.673-2.305,15.789-4.292,24.123 c-0.961,4.029,1.526,8.074,5.556,9.035c0.585,0.14,1.17,0.206,1.746,0.206c3.392,0,6.468-2.317,7.289-5.762 c2.129-8.927,3.679-17.652,4.608-25.931C514.94,105.701,511.978,101.99,507.861,101.528z",
	"M498.443,69.211c0.729,3.548,3.853,5.991,7.338,5.991c0.5,0,1.009-0.05,1.518-0.155c4.057-0.834,6.67-4.799,5.836-8.856 c-3.55-17.267-10.973-31.645-22.064-42.736c-2.929-2.929-7.678-2.929-10.606,0c-2.929,2.929-2.929,7.678,0,10.606 C489.446,43.041,495.494,54.867,498.443,69.211z",
	"M287.202,374.597c-90.916,74.396-181.876,103.421-216.285,69.013c-2.929-2.929-7.678-2.929-10.606,0 c-2.929,2.929-2.929,7.678,0,10.606c12.482,12.482,30.009,18.765,51.771,18.765c14.374,0,30.598-2.743,48.428-8.251 c41.679-12.877,90.046-40.764,136.191-78.524c3.206-2.623,3.678-7.348,1.055-10.554 C295.133,372.446,290.407,371.973,287.202,374.597z",
	"M333.042,333.042c-4.847,4.847-9.828,9.671-14.804,14.337c-3.021,2.833-3.174,7.58-0.34,10.601 c1.476,1.574,3.472,2.37,5.472,2.37c1.839,0,3.682-0.672,5.129-2.029c5.093-4.776,10.19-9.712,15.15-14.672 c2.929-2.929,2.929-7.678,0-10.606C340.72,330.113,335.971,330.113,333.042,333.042z",
	"M222.58,141.625c1.67,0,3.352-0.555,4.745-1.696C318.242,65.533,409.203,36.509,443.61,70.917 c2.929,2.929,7.678,2.929,10.606,0c2.929-2.929,2.929-7.678,0-10.606c-20.727-20.727-55.375-24.362-100.2-10.514 c-41.679,12.877-90.046,40.764-136.19,78.524c-3.206,2.623-3.678,7.348-1.055,10.554 C218.254,140.686,220.408,141.625,222.58,141.625z",
	"M176.181,183.68c1.919,0,3.839-0.732,5.303-2.197c4.85-4.85,9.831-9.673,14.804-14.336 c3.022-2.833,3.174-7.58,0.341-10.601c-2.833-3.021-7.58-3.174-10.601-0.341c-5.09,4.773-10.188,9.709-15.15,14.672 c-2.929,2.929-2.929,7.678,0,10.606C172.342,182.948,174.261,183.68,176.181,183.68z",
	"M207.767,406.9c1.199,0,2.416-0.288,3.545-0.896c36.445-19.596,74.56-48.805,110.223-84.468 c41.977-41.976,75.262-87.776,93.725-128.963c19.462-43.416,20.208-77.299,2.1-95.407c-2.929-2.929-7.678-2.929-10.606,0 c-2.929,2.929-2.929,7.678,0,10.606c13.2,13.2,11.312,41.873-5.181,78.665c-17.735,39.563-49.926,83.774-90.644,124.492 c-34.643,34.643-71.546,62.951-106.72,81.864c-3.648,1.961-5.016,6.509-3.054,10.157C202.509,405.468,205.095,406.9,207.767,406.9z ",
	"M203.597,203.597c31.393-31.393,65.103-57.915,97.485-76.7c3.583-2.078,4.803-6.668,2.724-10.25 c-2.079-3.584-6.67-4.803-10.25-2.724c-33.491,19.428-68.266,46.77-100.565,79.068c-41.976,41.977-75.262,87.776-93.725,128.963 c-19.462,43.416-20.208,77.299-2.1,95.407c1.464,1.465,3.384,2.197,5.303,2.197c1.919,0,3.839-0.732,5.303-2.197 c2.929-2.929,2.929-7.678,0-10.606c-13.2-13.2-11.312-41.873,5.181-78.665C130.688,288.527,162.88,244.315,203.597,203.597z",
	"M203.532,325.597c6.715,0,15.437-3.253,26.317-9.781c14.433-8.66,31.288-22.335,47.459-38.508 c16.172-16.172,29.848-33.027,38.508-47.459c10.744-17.907,12.615-29.963,5.719-36.858c-19.481-19.482-77.739,37.648-84.318,44.227 s-63.709,64.834-44.227,84.318C195.696,324.241,199.195,325.597,203.532,325.597z M213.581,289.156 c8.11-12.682,20.271-27.36,34.243-41.333c13.972-13.972,28.651-26.133,41.333-34.243c12.102-7.74,18.826-9.534,21.424-9.635 c-0.102,2.598-1.896,9.323-9.635,21.424c-8.11,12.681-20.271,27.36-34.243,41.332c-13.972,13.972-28.651,26.133-41.332,34.244 c-12.102,7.739-18.827,9.534-21.424,9.635C204.047,307.982,205.842,301.257,213.581,289.156z",
	"M163.943,381.385c34.958,0,90.969-37.452,135.48-81.963c56.171-56.171,101.095-130.646,73.711-158.029 c-27.383-27.384-101.858,17.541-158.029,73.711c-56.171,56.171-101.095,130.646-73.711,158.029 C147.077,378.818,154.785,381.385,163.943,381.385z M159.728,312.739c13.571-27.143,37.004-58.05,65.983-87.028 s59.886-52.412,87.028-65.983c15.145-7.572,28.413-11.51,37.853-11.51c5.302,0,9.396,1.243,11.936,3.782 c7.059,7.059,4.097,26.136-7.729,49.788c-13.571,27.143-37.004,58.05-65.983,87.029c-28.979,28.979-59.886,52.412-87.028,65.983 c-23.651,11.826-42.729,14.787-49.788,7.729C144.941,355.468,147.902,336.39,159.728,312.739z",
], { flipInRtl: false } );
export function GalaxyIcon32()  
{
	const style = useGalaxyIconStyles();
	return <div className={style.root}>
		<GalaxyRegular />
	</div>
}
const useGalaxyIconStyles = makeStyles({
	root: {
		width: "32px", 
		height: "32px", 
		transformOrigin: "top left", 
		transform: "scale(5%)"
	}
});

// these types are just to correct help validating the icon map during development
// after the 'satisifies' validation we cast it to more generic Record type, so it is usable int the app
type SubTypeKey<E extends Element, TypeKey extends E["type"]> = E extends { type: TypeKey, subType: infer SubKey } ? SubKey : never;
type IconMap = {
	[typeKey in Element["type"]]: {
		[subTypeKey in SubTypeKey<Element, typeKey>]: FluentIcon
	}
}

// eslint-disable-next-line react-refresh/only-export-components
export const iconMap: Record<Element["type"], Record<Element["subType"], FluentIcon>> = {
	group: {
		world: WorldIcon,
		folder: FolderIcon,
		factory: FactoryIcon,
	},
	item: {
		building: RobotIcon,
	}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
} satisfies IconMap as any;

export type ItemIconProps = {
	item?: Item,
}

export const ItemIcon = memo(
	(props: ItemIconProps) =>
	{
		const { item } = props;
		
		if(!item)
			return null;
		
		return <img src={itemPath(item)} alt={`Icon for ${item.name}`} className="sau-IconImage" />
	});
