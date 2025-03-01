import data from "../assets/database.json";
import { Database } from "./Types";

export function useDatabase() {
	return data as Database;
}