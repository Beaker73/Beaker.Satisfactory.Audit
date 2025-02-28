import { Item as ItemModel } from "../../State/Types";
import { Factory } from "./Factory";
import { Group } from "./Group";

export type ItemProps = {
	item: ItemModel;
}

export function Item(props: ItemProps) {
	const { type } = props.item;

	if (type === "group")
		return <Group group={props.item} />;

	if( type === "factory")
		return <Factory factory={props.item} />;

	return null;
}