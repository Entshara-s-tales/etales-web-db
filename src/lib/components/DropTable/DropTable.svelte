<script lang="ts">
	import type { DropTable } from '$lib/db/units';
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	export let dropTable: DropTable[];
</script>

<div
	class="mt-10 absolute left-0 top-0 shadow p-2"
	transition:slide={{ delay: 100, duration: 300, easing: quintOut }}
>
	{#each dropTable as itemDrop}
		<p>Item: {itemDrop.item.name}</p>
		<p>Type: {itemDrop.item.type}</p>
		<p>State: {itemDrop.item.state}</p>
		<p>DropRate: {itemDrop.dropRate * 100}</p>
	{/each}
</div>
