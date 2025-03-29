import type { useEditPageState } from "./State";

export type EditPageProps = {
	id: string,
}

export type EditPageState = ReturnType<typeof useEditPageState>;