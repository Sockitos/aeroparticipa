<script lang="ts">
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
		<button on:click={() => (show = false)} class="absolute top-5 left-9 h-10">
			<svg
				class="h-8 fill-blue-light hover:fill-white"
				viewBox="0 96 960 960"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"
				/>
			</svg>
		</button>
	</div>
{/if}
