import type { WorldState } from ".";

export const CURRENT_VERSION = 1;

/**
 * Migrates any old state al the way up to the latest version.
 * @param state The state read from the persistent storage.
 * @param version The version of the state read from the persistent storage.
 * @returns A new state matching the format of the latest version
 */
export function migrate(state: unknown, version: number): WorldState
{
	while(version < CURRENT_VERSION)
	{
		const migrate = migrateFrom[version];
		if(!migrate)
			throw new Error(`Unknown migration version: ${version}`);

		state = migrate(state);
		version++;
	}

	return state as WorldState;
}

const migrateFrom = [
	0, migrateFrom0,
] as const;

function migrateFrom0(_state: unknown): WorldState
{
	throw new Error("There is no version 0. This is here to keep base code compiling while there are no migrations yet.");
}