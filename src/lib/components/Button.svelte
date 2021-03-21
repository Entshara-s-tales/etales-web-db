<script lang="ts">
	export let type: "link" | "button" = "button";
</script>

<button type="button" class="text-black rounded">
	<slot>Missing content</slot>
</button>
