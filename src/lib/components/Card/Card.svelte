<script lang="ts">
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import type { Unit } from '../../db/units';
	import Button from '../Button/Button.svelte';

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
	<div class="grid grid-cols-min shadow p-2 m-4 relative">
		<a class="grid grid-cols-2 " href="/#">
			<div>
				<h3 class="">{unit.name}</h3>
				<span class="">Level: {unit.level}</span>
			</div>
			<img src="https://placekitten.com/256/256" alt="" />
		</a>
		<div class="relative">
			<div class="mt-4 self-end place-self-center text-center">
				<Button onClick={openTable}>Drop table</Button>
			</div>
		</div>
		{#if table}
			<div
				class="z-10 w-full absolute left-0 top-0 shadow bg-white"
				transition:slide={{ delay: 100, duration: 300, easing: quintOut }}
			>
				<DropTable onClose={openTable} {unit} />
			</div>
		{/if}
	</div>
{/if}
