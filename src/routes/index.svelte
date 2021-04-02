<script lang="ts">
	import Card from '$lib/components/Card/Card.svelte';
	import { MockUnits } from '../lib/db/units';
</script>

<main class="container mx-auto px-20">
	<div class="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-12">
		{#each MockUnits as unit}
			<Card {unit} />
		{/each}
	</div>
</main>

<style style lang="postcss">
	:root {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
			'Open Sans', 'Helvetica Neue', sans-serif;
	}
</style>
