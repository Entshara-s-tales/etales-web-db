import { render } from '@testing-library/svelte';
import DropTable from './DropTable.svelte';

import { MockUnits } from '$lib/db/units';

describe('<DropTable/>', () => {
	it('matches snapshot', () => {
		const results = render(DropTable, {
			unit: MockUnits[0],
		});
		expect(results.container).toMatchSnapshot();
	});
});
