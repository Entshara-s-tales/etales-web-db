import { MockUnits } from '$lib/db/units';
import { render } from '@testing-library/svelte';
import Card from './Card.svelte';

describe('<Card/>', () => {
	it('matches snapshot', () => {
		const results = render(Card, {
			unit: MockUnits[0],
		});
		expect(results.container).toMatchSnapshot();
	});
});
