export function deepClone<T>(obj: T): T 
{
	// failing since it as mostly called from inside a reducer
	// where the object are proxy objects (immer)
	// return structuredClone<T>(obj);

	// this is a quick fix to get the job done
	// TODO: manual real clone?
	return JSON.parse(JSON.stringify(obj));
}

export function hasValue<T>(value: T | null | undefined): value is NonNullable<T>
{
	return value !== null && value !== undefined;
}

export function groupBy<T, K extends string>(list: T[], keyGetter: (item: T) => K | K[]): Record<K, T[]>
{
	const map = {} as Record<K, T[]>;

	list.forEach(
		(item) => 
		{
			let keys = keyGetter(item);
			if(typeof keys === "string")
				keys = [keys];
			for(const key of keys)
			{
				const collection = map[key] ?? [];
				collection.push(item);
				map[key] = collection;
			}
		});

	return map;
}

export function objectEntries<K extends string | number | symbol, V>(obj: Record<K, V>): [K, V][] 
{
	return Object.entries(obj) as [K, V][];
}