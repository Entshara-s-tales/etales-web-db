<script lang="ts">
	import { capitalize } from 'lodash';

	import Icon from 'svelte-awesome';
	import { times } from 'svelte-awesome/icons';

	import type { Unit } from '$lib/db/units';

	export let unit: Unit;
	export let onClose: () => void = undefined;
</script>

<div class="w-full">
	<div class="absolute right-0 top-0">
		<button on:click={onClose} type="button">
			<Icon
				class="w-10 h-10 transform hover:rotate-45 transition-transform fill-current hover:text-gray-700"
				data={times}
			/>
		</button>
	</div>
	<h3 class="text-center pr-8 pl-2 pt-2 pb-2">{unit.name}</h3>
	{#each unit.dropTable as itemDrop, i}
		<div class="mb-4 p-2 leading-snug">
			<img class="m-auto pb-4" src="https://placekitten.com/80/80" alt="" />
			<p class="-mt-3 text-center">{capitalize(itemDrop.item.name)}</p>
			<p class="">Type: {capitalize(itemDrop.item.type)}</p>
			<p class="">State: {capitalize(itemDrop.item.state)}</p>
			<p class="">Drop chance: {itemDrop.dropRate * 100}%</p>
		</div>
		{#if i < unit.dropTable.length - 1}
			<hr class="w-10/12 p-4 m-auto border-gray-200" />
		{/if}
	{/each}
</div>
