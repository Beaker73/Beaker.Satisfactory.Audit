import type { AddFactoryAction } from "./Actions/AddFactory";
import type { AddGroupAction } from "./Actions/AddGroup";
import type { CloneItemAction } from "./Actions/CloneItem";
import type { DeleteItemAction } from "./Actions/DeleteItem";
import type { UpdateNameOfGroupAction } from "./Actions/UpdateNameOfGroup";

export type Action = AddFactoryAction | AddGroupAction | CloneItemAction | DeleteItemAction | UpdateNameOfGroupAction;