<script lang="ts">
	import { noop } from 'lodash';
	export let type: 'link' | 'button' = 'link';
	export let onClick: () => void = undefined;
</script>

<button on:click={onClick} type="button" class="text-black rounded">
	<slot>Missing content</slot>
</button>
