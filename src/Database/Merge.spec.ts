import { describe, test } from "vitest";
import { merge } from "./Merge";

describe("Database/Merge", () => 
{
	test("merge", () => 
	{
		const result = merge();
		console.log("merge", result);
	});
});