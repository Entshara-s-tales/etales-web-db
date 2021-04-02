import { render } from '@testing-library/svelte';
import DropTable from './DropTable.svelte';

describe('<DropTable/>', () => {
	it('matches snapshot', () => {
		const results = render(DropTable);
		expect(results.container).toMatchSnapshot();
	});
});
