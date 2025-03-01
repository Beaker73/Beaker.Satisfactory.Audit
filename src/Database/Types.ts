export type Database = {
	items: Record<string, Item>,
	recipes: Record<string, Recipe>,
	schematics: Record<string, Schematic>,
	generators: Record<string, Generator>,
	resources: Record<string, Resource>,
	miners: Record<string, Miner>,
	buildings: Record<string, Building>,
}

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
	ingredients: { item: string, amount: number }[],
	products: { item: string, amount: number }[],
	producedIn: string[],
	isVariablePower: boolean,
	minPower: number,
	maxPower: number,
}

export type Schematic = {
	className: string,
	type: string,
	name: string,
	slug: string,
	icon: string,
	cost: { item: string, amount: number }[],
	unlock: {
		recipes: string[],
		scannerResources: string[],
		inventorySlots: number,
		giveItems: { item: string, amount: number }[],
	},
	requiredSchematics: string[],
	tier: number,
	time: number,
	mam: boolean,
	alternate: boolean,
}

export type Generator = {
	className: string,
	fuel: string[],
	powerProduction: number,
	powerProductionExponent: number,
	waterToPowerRatio: number,
}

export type Resource = {
	item: string,
	pingColor: {
		r: number,
		g: number,
		b: number,
		a: number
	},
	speed: number,
}

export type Miner = {
	className: string,
	allowedResources: string[],
	allowLiquids: boolean,
	allowSolids: boolean,
	itemsPerCycle: number,
	extractCycleTime: number,
}

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