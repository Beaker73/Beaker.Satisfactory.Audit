import type { BuildingKey } from "../Database/Types";

const buildingOrder = {
	Desc_MinerMk1_C: 0,
	Desc_MinerMk2_C: 1,
	Desc_MinerMk3_C: 2,
	Desc_WaterPump_C: 3,
	Desc_OilPump_C: 4,
	Desc_FrackingSmasher_C: 5,
	Desc_FrackingExtractor_C: 6,
	
	Desc_SmelterMk1_C: 10,
	Desc_FoundryMk1_C: 11,
	Desc_ConstructorMk1_C: 12,
	Desc_AssemblerMk1_C: 13,
	Desc_ManufacturerMk1_C: 14,
	Desc_OilRefinery_C: 15,
	Desc_Packager_C: 16,
	Desc_Blender_C	: 17,
	Desc_HadronCollider_C: 18,
	Desc_QuantumEncoder_C: 19,
	Desc_Converter_C: 20,

	Desc_GeneratorBiomass_Automated_C: 30,
	Desc_GeneratorCoal_C: 31,
	Desc_GeneratorFuel_C: 32,
	Desc_GeneratorGeoThermal_C: 33,
	Desc_GeneratorNuclear_C: 34,
	Desc_PowerStorageMk1_C: 35,
	Desc_AlienPowerBuilding_C: 36,
}

export function buildingSort(a: BuildingKey, b: BuildingKey): number 
{
	if(a in buildingOrder === false || b in buildingOrder === false)
	{
		if(a in buildingOrder)
			return 1;
		else if(b in buildingOrder)
			return -1;
		else
			return 0;
	}

	return buildingOrder[a as keyof typeof buildingOrder] - buildingOrder[b as keyof typeof buildingOrder];
}