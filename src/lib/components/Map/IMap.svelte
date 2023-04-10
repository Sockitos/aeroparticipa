<script lang="ts">
	import type { Coordinate } from 'ol/coordinate';
	import Accordion from './Accordion/Accordion.svelte';
	import AccordionItem from './Accordion/AccordionItem.svelte';
	import OlLayer from './OLLayer.svelte';
	import OlMap from './OLMap.svelte';
	import OlMarker from './OLMarker.svelte';
	import PlaneLayer from './PlaneLayer.svelte';
	import { icons, layerGroups, options } from './constants';
	import type { MapOption } from './types';

	const email = 'andresilva_ctina@lnec.pt';
	const emailSubject = 'Nova%20op%C3%A7%C3%A3o%20estrat%C3%A9gica';
	const emailBody = (coords: Coordinate) =>
		`Para%20confirmar%20a%20localiza%C3%A7%C3%A3o%20que%20acaba%20de%20colocar%20no%20mapa%20agradecemos%20que%20partilhe%20um%20m%C3%ADnimo%20de%20informa%C3%A7%C3%A3o%20que%20nos%20permita%20analisar%20e%20considerar%20se%20a%20sua%20proposta%20re%C3%BAne%20condi%C3%A7%C3%B5es%20para%20ser%20avaliada%20pela%20Comiss%C3%A3o%20T%C3%A9cnica%20Independente.%20Caso%20n%C3%A3o%20seja%20poss%C3%ADvel%20responder%20na%20totalidade%20%C3%A0s%20quest%C3%B5es%20abaixo%2C%20lamentamos%20mas%20n%C3%A3o%20poderemos%20considerar%20a%20sua%20proposta.%0A%0ANome%20do%20proponente%3A%0ALocaliza%C3%A7%C3%A3o%3A%20${coords}%20%0ALocalidade%3A%0AN%C3%BAmero%20e%20dimens%C3%A3o%20das%20Pistas%3A%0ACapacidade%20de%20expans%C3%A3o%20em%20hectares%3A%0AEncontra-se%20limitado%20por%20alguma%20restri%C3%A7%C3%A3o%20aeron%C3%A1utica%3F%20Se%20sim%20qual%3F%0AEncontra-se%20sobre%20alguma%20restri%C3%A7%C3%A3o%20de%20%C3%A1rea%20protegida%3F%20Se%20sim%20qual%3F%0AEsta%20op%C3%A7%C3%A3o%20estrat%C3%A9gica%20destaca-se%20das%20restantes%20na%20medida%20em%20que%E2%80%A6.%0ANome%20e%20descri%C3%A7%C3%A3o%20dos%20documentos%20de%20viabilidade%20t%C3%A9cnica%20em%20anexo%3A%0A%0A%0AAo%20enviar%20este%20email%20afirmo%20que%20concordo%20com%20a%20partilha%20de%20informa%C3%A7%C3%A3o%20com%20as%20equipas%20alocadas%20%C3%A0%20comiss%C3%A3o%20t%C3%A9cnica%20independente%2C%20assim%20como%20o%20tratamento%20da%20informa%C3%A7%C3%A3o%20para%20partilha%20no%20site%20aeroparticipa.pt.%0A`;

	let selectedOption: MapOption | undefined;
	let selectedLayers: string[] = [];
	let selectedOLayers: string[] = [];
	let voteCoords: Coordinate | undefined;
	let expandedPanel: string | undefined;

	$: if (expandedPanel == 'options') selectedOption = undefined;
</script>

<div class="h-screen min-h-[50rem] relative">
	<OlMap>
		{#each layerGroups as group}
			{#each group.layers as l}
				<OlLayer url={l.url} style={l.style} visiblity={selectedLayers.includes(l.id)} />
			{/each}
		{/each}
		{#if selectedOption}
			{#each selectedOption.layers as l}
				<OlLayer url={l.url} style={l.style} visiblity={selectedOLayers.includes(l.id)} />
			{/each}
		{/if}
		<PlaneLayer aerosIds={selectedOption?.aeros} />
		<OlMarker bind:coords={voteCoords} />
	</OlMap>
	<div
		class="absolute z-10 right-0 bottom-5 w-64 bg-blue-light p-4 flex flex-col space-y-2 rounded-l-2xl"
	>
		<span class="text-xl font-bold text-white">Quer sugerir outra opção estratégica viável?</span>
		<div class="flex flex-row items-center space-x-3">
			<div>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.63 22.66" class="ml-2 mb-2 h-5"
					><path
						d="M23.63,.67C13.77,.67,5.78,8.67,5.78,18.53v2.19"
						style="fill:none; stroke:#073682; stroke-linejoin:round; stroke-width:1.34px;"
					/><polyline
						points="11.11 16.39 5.79 21.71 .47 16.39"
						style="fill:none; stroke:#073682; stroke-miterlimit:10; stroke-width:1.34px;"
					/></svg
				>
				<div class="border-2 border-blue bg-white rounded-full p-1">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.87 25.96" class="h-4 fill-blue"
						><path
							d="M25.36,.51c-.61-.61-1.67-.67-3.07-.17-.96,.34-1.96,.92-2.44,1.4l-2.56,2.56h-3.59s-1.06-1.05-1.06-1.05l-1.06,1.06-11.58,.02v3.88l9.77,3.61-1.5,1.5-4.82,.28L.09,16.96l5.23,2.52-2.16,2.16,1.07,1.07,2.15-2.15,2.52,5.22,3.37-3.37,.28-4.82,1.44-1.44,3.62,9.79h3.88l.02-11.6,1.12-1.12-1.07-1.07-.04,.04v-3.57s2.62-2.61,2.62-2.61c.48-.48,1.06-1.49,1.4-2.44,.5-1.39,.44-2.45-.17-3.07ZM1.52,7.15v-1.31l14.26-.02-4.82,4.82L1.52,7.15ZM19.98,24.44h-1.31l-3.49-9.46,4.83-4.83-.02,14.29ZM24.11,3.07c-.29,.81-.77,1.61-1.05,1.88l-11.99,11.99-.28,4.82-1.45,1.45-1.83-3.78,1.32-1.32-1.07-1.07-1.32,1.32-3.78-1.82,1.45-1.45,4.82-.28L20.92,2.81c.28-.28,1.08-.76,1.88-1.05,.92-.33,1.4-.26,1.48-.18,.08,.08,.15,.57-.18,1.48Z"
						/>
					</svg>
				</div>
			</div>
			<span class="text-white"
				>Clique no mapa,<br />mova o avião para o local e<br />
				{#if voteCoords}
					<a
						href="mailto:{email}?subject={emailSubject}&body={emailBody(voteCoords)}"
						class="underline underline-offset-2"
						>envie-nos a sua proposta.
					</a>
				{:else}
					envie-nos a sua proposta.
				{/if}
			</span>
		</div>
	</div>
	<div class="absolute z-10 top-0 md:top-[10%] w-[26rem] max-w-full">
		<Accordion bind:expanded={expandedPanel}>
			<AccordionItem label={'Visualização'} key={'visualizations'}>
				{#each layerGroups as group}
					<div>
						{#if group.layers.length != 1}
							<div class="flex flex-row items-center space-x-2 ml-7">
								<svg
									id="Layer_1"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									class="h-5 fill-blue-light mb-1"
									>{@html icons.get(group.label)}
								</svg>
								<span class="font-bold">{group.label}</span>
							</div>
						{/if}
						{#each group.layers as l}
							<label class="flex flex-row items-center space-x-2">
								<div class="p-1 border-blue border-2 rounded-full">
									<input
										type="checkbox"
										bind:group={selectedLayers}
										value={l.id}
										class="sr-only peer"
									/>
									<div class="h-2 w-2 rounded-full peer-checked:bg-blue" />
								</div>
								{#if l.fill}
									<div
										class="h-5 w-5 border-2 rounded-full"
										style="background-color: {l.fill};border-color: {l.stroke}"
									/>
								{:else}
									<div class="h-5 w-5">
										<div class="h-full w-1 mx-auto" style="background-color: {l.stroke}" />
									</div>
								{/if}
								<span class:font-bold={group.layers.length == 1}>{l.label}</span>
							</label>
						{/each}
					</div>
				{/each}
				<div class="pb-4" />
			</AccordionItem>
			<AccordionItem label={'Opções Estratégicas'} key={'options'}
				>{#each options as o}
					<button
						on:click={() => {
							selectedOption = o;
							expandedPanel = 'selected-option-' + o.id;
						}}
						class="flex flex-row space-x-3 items-center px-2"
					>
						<div class="inline-flex flex-row">
							{#if o.isDual}
								<div class="relative h-8 w-8 rounded-full border-2 border-blue-light" />
							{/if}
							<div
								class="relative p-2 {o.isDual ? '-ml-5' : 'ml-2 mr-1'} {o.isOfficial
									? 'bg-blue'
									: 'bg-blue-light'} rounded-full"
							>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.87 25.96" class="h-4"
									><path
										d="M25.36,.51c-.61-.61-1.67-.67-3.07-.17-.96,.34-1.96,.92-2.44,1.4l-2.56,2.56h-3.59s-1.06-1.05-1.06-1.05l-1.06,1.06-11.58,.02v3.88l9.77,3.61-1.5,1.5-4.82,.28L.09,16.96l5.23,2.52-2.16,2.16,1.07,1.07,2.15-2.15,2.52,5.22,3.37-3.37,.28-4.82,1.44-1.44,3.62,9.79h3.88l.02-11.6,1.12-1.12-1.07-1.07-.04,.04v-3.57s2.62-2.61,2.62-2.61c.48-.48,1.06-1.49,1.4-2.44,.5-1.39,.44-2.45-.17-3.07ZM1.52,7.15v-1.31l14.26-.02-4.82,4.82L1.52,7.15ZM19.98,24.44h-1.31l-3.49-9.46,4.83-4.83-.02,14.29ZM24.11,3.07c-.29,.81-.77,1.61-1.05,1.88l-11.99,11.99-.28,4.82-1.45,1.45-1.83-3.78,1.32-1.32-1.07-1.07-1.32,1.32-3.78-1.82,1.45-1.45,4.82-.28L20.92,2.81c.28-.28,1.08-.76,1.88-1.05,.92-.33,1.4-.26,1.48-.18,.08,.08,.15,.57-.18,1.48Z"
										style="fill:#fff;"
									/>
								</svg>
							</div>
						</div>

						<span class="text-xl">{o.label}</span>
					</button>
				{/each}
				<div class="py-5">
					<div class="flex flex-row items-center space-x-2">
						<div class="h-4 w-4 bg-blue rounded-full" />
						<span class="text-sm">Opções presentes no resolução do conselho de Ministros</span>
					</div>
					<div class="flex flex-row items-center space-x-2">
						<div class="h-4 w-4 bg-blue-light rounded-full" />
						<span class="text-sm">Outras opções estratégicas em análise</span>
					</div>
				</div>
			</AccordionItem>
			{#if selectedOption}
				<AccordionItem label={selectedOption.label} key={'selected-option-' + selectedOption.id}>
					{#each selectedOption.info as infoGroup}
						<div class="pr-10">
							<div class="flex flex-row items-center space-x-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									class="h-5 fill-blue-light mb-1"
									>{@html icons.get(infoGroup.label)}
								</svg>
								<span class="font-bold">{infoGroup.label}</span>
							</div>
							{#each infoGroup.info as i}
								<p class="ml-7">
									<span>{i.label}</span> <span class="text-blue-light">{i.value}</span>
								</p>
							{/each}
						</div>
					{/each}
					<div>
						{#each selectedOption.layers as l}
							<label class="flex flex-row items-center space-x-2">
								<div class="p-1 border-blue border-2 rounded-full">
									<input
										type="checkbox"
										bind:group={selectedOLayers}
										value={l.id}
										class="sr-only peer"
									/>
									<div class="h-2 w-2 rounded-full peer-checked:bg-blue" />
								</div>
								{#if l.fill}
									<div
										class="h-5 w-5 border-2 rounded-full"
										style="background-color: {l.fill};border-color: {l.stroke}"
									/>
								{:else}
									<div class="h-5 w-5">
										<div class="h-full w-1 mx-auto" style="background-color: {l.stroke}" />
									</div>
								{/if}
								<span>{l.label}</span>
							</label>
						{/each}
					</div>
					<div class="pb-4" />
				</AccordionItem>
			{/if}
		</Accordion>
	</div>
</div>
