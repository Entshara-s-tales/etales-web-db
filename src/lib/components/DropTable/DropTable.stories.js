import DropTable from './DropTable.svelte';

export default {
  title: 'lib/components/DropTable',
  component: DropTable,
  argTypes: {},
};

const Template = ({ onClick, ...args }) => ({
  Component: DropTable,
  props: args,
});

export const SampleUsage_ = Template.bind({});
SampleUsage.args = {
  label: 'DropTable',
};
