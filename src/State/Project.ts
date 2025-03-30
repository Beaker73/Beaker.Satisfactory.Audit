
export type Project = {
	type: "project",
	id: string,
	name: string,
	description: string,
	createdAt: Date,
	lastUsedAt?: Date,
}