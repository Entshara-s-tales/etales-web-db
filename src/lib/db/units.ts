import { MockItems } from "./items";
import type { Item } from "./items";

export interface DropTable {
	item: Item;
	/**
	 * As percentages, normalized by 100 in frontend
	 */
	dropRate: number;
}

export interface Unit {
	name: string;
	id: number;
	// n <= 0 && n <= 99
	level: number;
	dropTable: DropTable[];
}

const MockDropTable = [
	{
		item: MockItems[0],
		dropRate: 0.1,
	},
	{
		item: MockItems[1],
		dropRate: 0.001,
	},
	{
		item: MockItems[2],
		dropRate: 0.8,
	},
];

export const MockUnits: Unit[] = [
	{
		name: "Spider pig",
		id: 0,
		level: 54,
		dropTable: MockDropTable,
	},
	{
		name: "Baby Bear",
		id: 64,
		level: 2,
		dropTable: MockDropTable,
	},
	{
		name: "Murloc Tiderunner",
		id: 93,
		level: 8,
		dropTable: MockDropTable,
	},
	{
		name: "Murloc Tiderunner Murloc Tiderunner",
		id: 93,
		level: 8,
		dropTable: MockDropTable,
	},
	{
		name: "Murloc Tiderunner Murloc Tiderunner Murloc Tiderunner",
		id: 93,
		level: 8,
		dropTable: MockDropTable,
	},
];
