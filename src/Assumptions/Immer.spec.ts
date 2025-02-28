import { describe, expect, test } from "vitest";
import { produce } from "immer";

describe("immer assumptions", () => {
	test("a single object on multiple locations is updated correctly", () => {
		
		const obj = { value: 1 };
		const state = {
			obj1: obj,
			nested: {
				obj2: obj,
			}
		};

		const nextState = produce(state, draft => {
			// update obj1, reference updates 2.
			draft.obj1.value = 2;
		});

		expect(nextState.obj1.value).toBe(2);
		expect(nextState.nested.obj2.value).toBe(2);

	})
})