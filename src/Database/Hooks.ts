import data from "../assets/database.json";
import type { Database } from "./Types";

export type Data = typeof data;

export function useDatabase() {
	return data as Database;
}