<script lang="ts">
	import { base } from '$app/paths';
	import NavBarDropdown from './NavBarDropdown.svelte';
	import NavBarDropdownItem from './NavBarDropdownItem.svelte';
	import NavBarItem from './NavBarItem.svelte';
	import NavDrawerButton from './NavDrawerButton.svelte';
</script>

<nav>
	<div class="bg-blue-dark">
		<div class="container py-2 flex items-center justify-between">
			<a href="{base}/"><img src="{base}/svgs/logo.svg" alt="AeroParticipa" class="h-12 pb-1" /></a>
			<div class="md:hidden h-8">
				<NavDrawerButton />
			</div>
			<div class="w-full hidden md:block md:w-auto">
				<ul class="flex space-x-4 text-white text-lg whitespace-nowrap">
					<NavBarItem href="https://aeroparticipa.eu.consider.it/" label="PARTICIPE!" />
					<NavBarDropdown label="Estratégia de Participação">
						<NavBarDropdownItem href="{base}/participacao-publica" label="Participação Pública" />
						<NavBarDropdownItem
							href="{base}/processo-de-participacao"
							label="Processo de Participação"
						/>
						<NavBarDropdownItem href="{base}/mesas-tematicas" label="Mesas Temáticas" />
					</NavBarDropdown>
					<NavBarDropdown label="O que é...">
						<NavBarDropdownItem href="{base}/o-que-e-aae" label="AAE" />
						<NavBarDropdownItem href="{base}/o-que-e-aeroporto" label="Aeroporto" />
						<NavBarDropdownItem href="{base}/o-que-e-hub" label="HUB" />
						<NavBarDropdownItem href="{base}/o-que-e-seguranca" label="Segurança" />
					</NavBarDropdown>
					<NavBarDropdown label="Sobre a CTI">
						<NavBarDropdownItem href="{base}/composicao-da-cti" label="Composição" />
						<NavBarDropdownItem href="{base}/regimento-da-cti" label="Regimento" />
					</NavBarDropdown>
				</ul>
			</div>
		</div>
	</div>
</nav>
