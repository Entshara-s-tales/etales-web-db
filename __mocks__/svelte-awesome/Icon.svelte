<script lang="ts">
	let className = '';

	export let data;
	export let scale = 1;
	export let spin = false;
	export let inverse = false;
	export let pulse = false;
	export let flip = null;
	export let label = null;
	export let self = null;
	export let style = null;
	export { className as class };

	let width;
	let height;
	let combinedStyle;
	let box;
</script>

<div
	{label}
	{width}
	{height}
	{box}
	style={combinedStyle}
	{spin}
	{flip}
	{inverse}
	{pulse}
	class={className}
>
	<i class={`fa fa-${data}`} />
	<slot />
</div>
