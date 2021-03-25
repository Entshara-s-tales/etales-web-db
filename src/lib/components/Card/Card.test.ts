import { render } from '@testing-library/svelte';
import Card from './Card.svelte';

describe('<Card/>', () => {
	it('matches snapshot', () => {
		const results = render(Card);
		expect(results.container).toMatchSnapshot();
	});
});
