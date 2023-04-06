<script lang="ts">
	import { getContext } from 'svelte';
	import { slide } from 'svelte/transition';
	import type { AccordionCtx } from './Accordion.svelte';

	export let label: string;
	export let key: string;

	const store = getContext<AccordionCtx>('accordion-ctx').expanded;

	$: expanded = $store == key;

	function handleToggle() {
		if ($store == key) {
			store.set(undefined);
		} else {
			store.set(key);
		}
	}
</script>

<div class="bg-grey rounded-r-2xl border-2 border-white">
	<button on:click={handleToggle} class="flex flex-row items-center justify-between w-full p-5"
		><span class="text-2xl font-bold">{label}</span>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 96 960 960"
			class="fill-blue-light h-8 transition-transform"
			class:rotate-90={expanded}
		>
			<path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
		</svg>
	</button>
	{#if expanded}
		<div transition:slide class="px-5 flex flex-col space-y-3">
			<slot />
		</div>
	{/if}
</div>
