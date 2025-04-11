/** Cast type U as T, but keeping nullable intact, thus a non nullable U becomase a non nullable T. But a U | null becomes T | null, or U | undefined becomes T | undefined. */
export type NullableCast<T, U> = undefined extends T 
	? null extends T
		? U | null | undefined
		: U | undefined 
	: null extends T
		? U | null
		: U;


/**
 * Merge two types together
 * base on: https://stackoverflow.com/questions/49682569/typescript-merge-object-types
 */

type OptionalPropertyNames<T> =
	{ [K in keyof T]-?: (object extends { [P in K]: T[K] } ? K : never) }[keyof T];

type MergeProperties<L, R, K extends keyof L & keyof R> =
	{ [P in K]: L[P] | Exclude<R[P], undefined> };

type Prop<T> = T extends infer U ? { [K in keyof U]: U[K] } : never;

type MergeTwo<L, R> = Prop<
	& Pick<L, Exclude<keyof L, keyof R>>
	& Pick<R, Exclude<keyof R, OptionalPropertyNames<R>>>
	& Pick<R, Exclude<OptionalPropertyNames<R>, keyof L>>
	& MergeProperties<L, R, OptionalPropertyNames<R> & keyof L>
>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Merge<A extends readonly [...any]> = A extends [infer L, ...infer R] ?
	MergeTwo<L, Merge<R>> : unknown;

export const tags = Symbol("tags");

/** Tags any type with special compile time values */
export type Tag<
	TBase,
	TTag extends string | symbol,
	TValue = unknown
> = TBase extends { [tags]: infer TTags extends object }
	? TTags extends { rootType?: [infer TRoot] }
		? TRoot extends object
			? Merge<[TRoot, { [tags]: Merge<[TTags, { [K in TTag]: TValue }]> }]>
			: TRoot & { [tags]: Merge<[TTags, { [K in TTag]: TValue }]> }
		: Merge<[TBase, { [tags]: Merge<[TTags, { [K in TTag]: TValue }]> }]>
	: GetRoot<TBase> extends object
		? Merge<[TBase, { [tags]: Merge<[{ [K in TTag]: TValue }, { rootType?: [GetRoot<TBase>] }]> }]>
		: TBase & { [tags]: Merge<[{ [K in TTag]: TValue }, { rootType?: [GetRoot<TBase>] }]> }
	;

			
/** Gets the root type of T, if not tagged returns T itself */
export type GetRoot<T> = T extends { [tags]: { rootType?: [infer TRoot] } } ? TRoot : ClearTags<T>;


/** Gets a specific tag from a tagged type */
export type GetTag<
	TTagged extends { [tags]: Record<string, unknown> },
	TTag extends string | symbol
// eslint-disable-next-line @typescript-eslint/no-explicit-any
> = TTagged extends { [tags]: infer TTags extends { [K in TTag]: any } }
	? TTags[TTag] : never;

/** 
 * Creates a type that allows for testing if it extends the tag (i.e. if it has the tag)
 * @example MyType extends HasTag<"type"> ? "has type tag" : "does not have type tag";
*/
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type HasTag<TTag extends string | symbol> = { [tags]: { [K in TTag]: any } };


/** Clears a tagged type from all its tags to get the root type back */
export type ClearTags<T> = T extends { readonly [tags]: object }
	? T extends { readonly [tags]: { rootType?: [infer TRoot] } }
		? TRoot
		: Omit<T, typeof tags>
	: T;




/** String that holds a some type of key for type T */
export type Key<T = undefined> = T extends undefined ? Tag<string, "type", "Key"> : Tag<Tag<string, "type", "Key">, "keyType", T>;
