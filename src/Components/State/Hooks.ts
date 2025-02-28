import { useContext } from "react";
import { stateContext } from "./Context";

export function useWorldState() {
	const context = useContext(stateContext);
	return context;
}