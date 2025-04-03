import type { ActivePageProps } from "./Types";
import { useAppRoutes } from "../../Routes";

export function useActivePageState(_props: ActivePageProps) 
{
	const page = useAppRoutes();	

	return {
		page,
	}
}