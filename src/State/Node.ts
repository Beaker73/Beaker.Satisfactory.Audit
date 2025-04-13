import type { Group, GroupId } from "./Group";
import type { Item, ItemId } from "./Item";

export type NodeId = GroupId | ItemId;
export type Node = 
 | Group 
 | Item
 ;
