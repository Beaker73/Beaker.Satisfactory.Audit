import type { WorldId } from "./Group";

export type Project = {
	type: "project",
	id: WorldId,
	name: string,
	description: string,
	createdAt: Date,
	lastUsedAt?: Date,
}