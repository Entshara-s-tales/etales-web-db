import Button from './Button.svelte';

export default {
  title: 'lib/components/Button',
  component: Button,
  argTypes: {},
};

const Template = ({ onClick, ...args }) => ({
  Component: Button,
  props: {
    ...args,
  },
});

export const SampleUsage = Template.bind({});
SampleUsage.args = {
  label: 'Button',
};
