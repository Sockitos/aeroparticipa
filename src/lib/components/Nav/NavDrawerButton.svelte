<script lang="ts">
	import { base } from '$app/paths';
	import { navigating } from '$app/stores';
	import NavDrawerGroup from './NavDrawerGroup.svelte';
	import NavDrawerItem from './NavDrawerItem.svelte';

	let hidden = true;

	$: if ($navigating && !hidden) hidden = !hidden;
</script>

<button on:click={() => (hidden = false)}>
	<svg
		class="h-8 fill-white hover:fill-blue-light"
		viewBox="0 96 960 960"
		xmlns="http://www.w3.org/2000/svg"
		><path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" />
	</svg>
</button>
<div class:hidden class="fixed top-0 left-0 w-screen h-screen z-20 bg-blue-dark">
	<button on:click={() => (hidden = true)} class="container h-16 flex items-center justify-end">
		<svg
			class="h-8 fill-white hover:fill-blue-light"
			viewBox="0 96 960 960"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"
			/>
		</svg>
	</button>
	<ul class="flex flex-col space-y-4 px-20 pt-4 text-white text-2xl">
		<NavDrawerItem href="https://participe.aeroparticipa.pt/" label="PARTICIPE!" />
		<NavDrawerItem href="{base}/desmistificar/" label="Desmistificar" />
		<NavDrawerGroup label="Estratégia de Participação">
			<NavDrawerItem href="{base}/participacao-publica/" label="Participação Pública" />
			<NavDrawerItem href="{base}/processo-de-participacao/" label="Processo de Participação" />
			<NavDrawerItem href="{base}/mesas-tematicas/" label="Mesas Temáticas" />
			<NavDrawerItem href="{base}/lista-de-entidades/" label="Lista de Entidades" />
		</NavDrawerGroup>
		<NavDrawerGroup label="O que é...">
			<NavDrawerItem href="{base}/o-que-e-aae/" label="AAE" />
			<NavDrawerItem href="{base}/o-que-e-aeroporto/" label="Aeroporto" />
			<NavDrawerItem href="{base}/o-que-e-hub/" label="HUB" />
			<NavDrawerItem href="{base}/o-que-e-seguranca/" label="Segurança" />
		</NavDrawerGroup>
		<NavDrawerGroup label="Sobre a CTI">
			<NavDrawerItem href="{base}/composicao-da-cti/" label="Composição" />
			<NavDrawerItem href="{base}/regimento-da-cti/" label="Regimento" />
		</NavDrawerGroup>
	</ul>
</div>
