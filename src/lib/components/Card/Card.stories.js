import { MockUnits } from '$lib/db/units';
import Card from './Card.svelte';

export default {
  title: 'lib/components/Card',
  component: Card,
};

const Template = ({ onClick, ...args }) => ({
  Component: Card,
  props: args,
});

export const SampleUsage = Template.bind({});
SampleUsage.args = {
  label: 'Card',
  unit: MockUnits[0]
};
