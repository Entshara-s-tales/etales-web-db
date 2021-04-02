import { render } from '@testing-library/svelte';
import Button from './Button.svelte';

describe('<Button/>', () => {
	it('matches snapshot', () => {
		const results = render(Button);
		expect(results.container).toMatchSnapshot();
	});
});
