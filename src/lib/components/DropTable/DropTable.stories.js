import { MockUnits } from '$lib/db/units';
import DropTable from './DropTable.svelte';

export default {
  title: 'lib/components/DropTable',
  component: DropTable,
  argTypes: {},
};

const Template = ({ onClick, ...args }) => ({
  Component: DropTable,
  props: {
    ...args,
  },
});

export const SampleUsage = Template.bind({});
SampleUsage.args = {
  label: 'DropTable',
  unit: MockUnits[0],
};
