import Checkbox from './Checkbox.svelte';

export default {
  title: 'lib/components/Checkbox',
  component: Checkbox,
  argTypes: {},
};

const Template = ({ onClick, ...args }) => ({
  Component: Checkbox,
  props: args,
});

export const SampleUsage = Template.bind({});
SampleUsage.args = {
  label: 'Checkbox',
};
