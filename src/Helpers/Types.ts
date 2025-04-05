/** Cast type U as T, but keeping nullable intact, thus a non nullable U becomase a non nullable T. But a U | null becomes T | null, or U | undefined becomes T | undefined. */
export type NullableCast<T, U> = undefined extends T 
	? null extends T
		? U | null | undefined
		: U | undefined 
	: null extends T
		? U | null
		: U;