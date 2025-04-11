import type { Key } from "../Helpers/Types";

export type Database = {
	items: Record<ItemKey, Item>,
	recipes: Record<RecipeKey, Recipe>,
	schematics: Record<SchematicKey, Schematic>,
	generators: Record<GeneratorKey, Generator>,
	resources: Record<ResourceKey, Resource>,
	miners: Record<MinerKey, Miner>,
	buildings: Record<BuildingKey, Building>,
}

export type ItemKey = Key<Item>;
export type Item = {
	slug: string,
	icon: string,
	name: string,
	description: string,
	sinkPoints: number,
	className: ItemKey,
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

export type RecipeKey = Key<Recipe>;
export type Recipe = {
	slug: string,
	name: string,
	className: RecipeKey,
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

export type SchematicKey = Key<Schematic>;
export type Schematic = {
	className: SchematicKey,
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

export type GeneratorKey = Key<Generator>;
export type Generator = {
	className: GeneratorKey,
	fuel: ItemKey[],
	powerProduction: number,
	powerProductionExponent: number,
	waterToPowerRatio: number,
}

export type ResourceKey = Key<Resource>;
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

export type MinerKey = Key<Miner>;
export type Miner = {
	className: MinerKey,
	allowedResources: ResourceKey[],
	allowLiquids: boolean,
	allowSolids: boolean,
	itemsPerCycle: number,
	extractCycleTime: number,
}

export type BuildingKey = Key<Building | Miner> ; // all miners use a subset of the building keys
export type Building = {
	slug: string,
	icon: string,
	name: string,
	description: string,
	className: BuildingKey,
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






export type ByItemEntry = {
	itemKey: ItemKey,
	item: Item,
	byMachine: Partial<Record<BuildingKey, ByMachineEntry>> & { count: number },
}
export type ByMachineEntry = {
	building: Building,
	variants: VariantEntry[],
	count: number,
}

export type RecipeVariantEntry = {
	key: RecipeVariantKey,
	type: "recipe",
	building: Building,
	source: Recipe,
	input: ItemQuantity[],
	output: ItemQuantity[],
}
export type MinerVariantEntry = {
	key: MinerVariantKey,
	type: "miner",
	building: Building,
	source: Miner,
	input: ItemQuantity[],
	output: ItemQuantity[],
}
export type GeneratorVariantEntry = {
	key: GeneratorVariantKey,
	type: "generator",
	building: Building,
	source: Generator,
	input: ItemQuantity[],
	output: ItemQuantity[],
}
export type VariantEntry = RecipeVariantEntry | MinerVariantEntry | GeneratorVariantEntry;

export type MinerVariantKey = `miner:${MinerKey}:${ResourceKey}`;
export type GeneratorVariantKey = `generator:${GeneratorKey}`;
export type RecipeVariantKey = `recipe:${RecipeKey}:${BuildingKey}`;
export type VariantKey = MinerVariantKey | GeneratorVariantKey | RecipeVariantKey;

export type ItemQuantity = {
	item: Item,
	itemKey: ItemKey,
	quantity: number,
}