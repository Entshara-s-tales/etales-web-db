<script lang="ts">
	import { MockUnits } from '$lib/db/units';

	export let unitId: number;
	const unit = MockUnits.find((x) => x.id === unitId);
</script>

{#if unit}
	<div class="flex flex-row">
		<h3 class="flex-grow text-black">{unit.name}</h3>
		<img src="https://placekitten.com/120/120" alt="" />
	</div>
{/if}
