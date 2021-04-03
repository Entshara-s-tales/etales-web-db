import { render } from '@testing-library/svelte';
import Checkbox from './Checkbox.svelte';

describe('<Checkbox/>', () => {
	it('matches snapshot', () => {
		const results = render(Checkbox, {
			name: 'checkbox-name',
			label: 'MyLabel',
		});
		expect(results.container).toMatchSnapshot();
	});
});
