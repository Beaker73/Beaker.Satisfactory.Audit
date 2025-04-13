import { useNavigate } from "raviger";
import { useCallback } from "react";
import { useShallow } from "zustand/shallow";
import type { WorldStore } from "../../State";
import { useWorldStore } from "../../State";
import type { Node, NodeId } from "../../State/Node";
import { findParentGroup } from "../../State/Visitor";
import type { BreadcrumbProps } from "./Types";

export function useBreadcrumbState(props: BreadcrumbProps)
{
	let nodeId: NodeId | undefined = props.nodeId;

	const nodeList = useWorldStore(s => 
	{
		/* As far as I understand writing useWorldStore(useShallow(s => selector(s))), the default way of writing it,
		   should be equivalent to writing useWorldStore(s => useShallow(s => selector(s)(s)), the way I wrote it below.
		   But, for some reason the second version, that I used below, works without issues,
		   while the first version throws an error. I don't know why. I keep it as below with this comment, so I will not rewrite it to the more readable first version.
		 */

		// eslint-disable-next-line react-hooks/rules-of-hooks
		const r = useShallow((store: WorldStore) => 
		{
			const nodeList: Node[] = [];

			const stateNodes = store.nodes;
			const stateNodeValues = Object.values(stateNodes);

			const startNode = nodeId ? stateNodes[nodeId] : undefined;
			if(!startNode)
				return nodeList;
		
			nodeList.push(startNode);
			do
			{
				console.debug("breadcrumb: loop NodeId", nodeId);

				const group = findParentGroup(stateNodeValues, nodeId!);
				if(group) 
				{
					console.debug("breadcrumb: unshift", group);
					nodeList.unshift(group);
				}

				nodeId = group?.id;
			}
			while(nodeId);

			return nodeList;
		})(s);

		return r;
	})

	const navigate = useNavigate();
	const onNodeClick = useCallback((node: Node)=>
	{
		navigate(`/edit/${node.id}`);
	},[navigate]);
	

	return {
		nodeList, 
		onNodeClick,
	};
}