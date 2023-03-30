<script>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import ArrowLink from './ArrowLink.svelte';

	let show = false;

	onMount(() => setTimeout(() => (show = true), 15000));
</script>

{#if show}
	<div
		class="flex fixed right-0 top-1/3 h-96 w-96 max-w-full rounded-l-3xl bg-popup bg-cover bg-center bg-blue bg-blend-multiply flex-col justify-between items-start px-10 pt-20 pb-10"
		transition:fly={{ x: '100%' }}
	>
		<span class="text-white text-4xl font-bold">Vai ficar<br />a ver aviões?</span>
		<ArrowLink label="Participe" isLight href="https://participe.aeroparticipa.pt/" />
	</div>
{/if}
