<script lang="ts">
	import { slide } from 'svelte/transition';

	export let label: string;
	let expanded = false;
</script>

<button
	on:click={() => (expanded = !expanded)}
	class="text-blue-accent text-xl font-bold hover:text-blue-light flex flex-row items-center justify-center gap-x-2"
>
	{label}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 96 960 960"
		class="fill-blue-accent h-5 transition-transform"
		class:rotate-90={expanded}
	>
		<path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
	</svg>
</button>

{#if expanded}
	<div transition:slide>
		<slot />
	</div>
{/if}
