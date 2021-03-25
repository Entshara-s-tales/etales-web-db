import { MockUnits } from '$lib/db/units';
import Card from './Card.svelte';

export default {
  title: 'Example/Card',
  component: Card,
};

const Template = ({ onClick, ...args }) => ({
  Component: Card,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Card',
  unit: MockUnits[0]
};
