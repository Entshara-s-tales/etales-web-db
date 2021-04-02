<script lang="ts">
	import type { Unit } from '../../db/units';

	import Button from '../Button.svelte';
	import DropTable from '../DropTable/DropTable.svelte';

	export let unit: Unit;
	$: table = false;
	function openTable() {
		table = !table;
	}
</script>

<!-- href={`/units/${unit.id}`} -->

<!-- NOTE: This should not be necessary, seems like a bug in SvelteKit trying to render elements on server even without them being used -->
{#if unit}
	<div class="grid grid-cols-min shadow p-2 m-4">
		<a class="grid grid-cols-2" href="/#">
			<div>
				<h3 class="text-black">{unit.name}</h3>
				<span class="">Level: {unit.level}</span>
			</div>
			<img src="https://placekitten.com/40/40" alt="" />
		</a>
		<div class="relative">
			<Button><span on:click={openTable}>Drop table</span></Button>
			{#if table}
				<DropTable {unit} />
			{/if}
		</div>
	</div>
{/if}
