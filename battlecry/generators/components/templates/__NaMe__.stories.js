import __NaMe__ from './__NaMe__.svelte';

export default {
  title: 'lib/components/__NaMe__',
  component: __NaMe__,
  argTypes: {},
};

const Template = ({ onClick, ...args }) => ({
  Component: __NaMe__,
  props: args,
});

export const __NaMe__ = Template.bind({});
__NaMe__.args = {
  primary: true,
  label: '__NaMe__',
};
