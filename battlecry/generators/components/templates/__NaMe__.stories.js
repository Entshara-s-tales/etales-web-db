import __NaMe__ from './__NaMe__.svelte';

export default {
  title: 'Example/__NaMe__',
  component: __NaMe__,
  argTypes: {},
};

const Template = ({ onClick, ...args }) => ({
  Component: __NaMe__,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: '__NaMe__',
};
