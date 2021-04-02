/**
 * Unknown right now, probably should be some kind of an enum
 * Seems that there's dress, head, unkown/not defined, weapon/wings, Miscelaneous
 */
export type ItemType = string;

// This isn't probably right though.
export type ItemState = 'passive';

export interface Item {
	name: string;
	type: ItemType;
	state: ItemState;
	description?: string;
}

export const MockItems: Item[] = [
	{
		name: 'Potato dress',
		type: 'Dress',
		state: 'passive',
		description: 'This item has a very calm aura',
	},
	{
		name: 'cat',
		type: 'Miscelaneous',
		state: 'passive',
	},
	{
		name: 'dog',
		type: 'Miscelaneous',
		state: 'passive',
		description: 'It definitely is not a cat!',
	},
];
