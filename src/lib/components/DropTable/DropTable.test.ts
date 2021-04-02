import { render } from '@testing-library/svelte';
import DropTable from './DropTable.svelte';

import { MockDropTable } from '$lib/db/units';

describe('<DropTable/>', () => {
	it('matches snapshot', () => {
		const results = render(DropTable, {
			dropTable: MockDropTable,
		});
		expect(results.container).toMatchSnapshot();
	});
});
