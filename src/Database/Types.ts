import type { Data } from "./Hooks";

export type Database = {
	items: Record<ItemKey, Item>,
	recipes: Record<RecipeKey, Recipe>,
	schematics: Record<SchematicKey, Schematic>,
	generators: Record<GeneratorKey, Generator>,
	resources: Record<ResourceKey, Resource>,
	miners: Record<MinerKey, Miner>,
	buildings: Record<BuildingKey, Building>,
}

export type ItemKey = keyof Data["items"];
export type Item = {
	slug: string,
	icon: string,
	name: string,
	description: string,
	sinkPoints: number,
	className: string,
	stackSize: number,
	energyValue: number,
	radioactiveDecay: number,
	liquid: boolean,
	fluidColor: {
		r: number,
		g: number,
		b: number,
		a: number
	}
}

export type RecipeKey = keyof Data["recipes"];
export type Recipe = {
	slug: string,
	name: string,
	className: string,
	alternate: boolean,
	time: number,
	inHand: boolean,
	forBuilding: boolean,
	inWorkshop: boolean,
	inMachine: boolean,
	manualTimeMultiplier: number,
	ingredients: { item: ItemKey, amount: number }[],
	products: { item: ItemKey, amount: number }[],
	producedIn: BuildingKey[],
	isVariablePower: boolean,
	minPower: number,
	maxPower: number,
}

export type SchematicKey = keyof Data["schematics"];
export type Schematic = {
	className: string,
	type: string,
	name: string,
	slug: string,
	icon: string,
	cost: { item: ItemKey, amount: number }[],
	unlock: {
		recipes: RecipeKey[],
		scannerResources: string[],
		inventorySlots: number,
		giveItems: { item: ItemKey, amount: number }[],
	},
	requiredSchematics: SchematicKey[],
	tier: number,
	time: number,
	mam: boolean,
	alternate: boolean,
}

export type GeneratorKey = keyof Data["generators"];
export type Generator = {
	className: string,
	fuel: string[],
	powerProduction: number,
	powerProductionExponent: number,
	waterToPowerRatio: number,
}

export type ResourceKey = keyof Data["resources"];
export type Resource = {
	item: ItemKey,
	pingColor: {
		r: number,
		g: number,
		b: number,
		a: number
	},
	speed: number,
}

export type MinerKey = keyof Data["miners"];
export type Miner = {
	className: string,
	allowedResources: ResourceKey[],
	allowLiquids: boolean,
	allowSolids: boolean,
	itemsPerCycle: number,
	extractCycleTime: number,
}

export type BuildingKey = keyof Data["buildings"];
export type Building = {
	slug: string,
	icon: string,
	name: string,
	description: string,
	className: string,
	categories: string[],
	buildMenuPriority: number,
	metadata: {
		powerConsumption: number,
		powerConsumptionExponent: number,
		manufacturingSpeed: number,
	},
	size: {
		width: number,
		height: number,
		length: number,
	}
}