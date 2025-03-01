export function deepClone<T>(obj: T): T {
	// failing since it as mostly called from inside a reducer
	// where the object are proxy objects (immer)
	// return structuredClone<T>(obj);

	// this is a quick fix to get the job done
	// TODO: manual real clone?
	return JSON.parse(JSON.stringify(obj));
}