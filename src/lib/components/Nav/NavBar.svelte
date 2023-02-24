<script>
	import NavBarDropdown from './NavBarDropdown.svelte';
	import NavBarDropdownItem from './NavBarDropdownItem.svelte';
	import NavBarItem from './NavBarItem.svelte';
	import NavDrawerButton from './NavDrawerButton.svelte';
</script>

<nav>
	<div class="bg-blue-dark">
		<div class="container py-2 flex items-center justify-between">
			<a href="/"><img src="svgs/logo.svg" alt="AeroParticipa" class="h-12 pb-1" /></a>
			<div class="md:hidden h-8">
				<NavDrawerButton />
			</div>
			<div class="w-full hidden md:block md:w-auto">
				<ul class="flex space-x-4 text-white text-lg">
					<NavBarItem href="/participe" label="Participe!" />
					<NavBarDropdown label="Estratégia de Participação">
						<NavBarDropdownItem href="/mesas-tematicas" label="Mesas temáticas" />
						<NavBarDropdownItem href="/participacao-publica" label="Participação pública" />
					</NavBarDropdown>
					<NavBarDropdown label="O que é...">
						<NavBarDropdownItem href="/o-que-e-aeroporto" label="Aeroporto" />
						<NavBarDropdownItem href="/o-que-e-hub" label="HUB" />
						<NavBarDropdownItem href="/o-que-e-aae" label="AAE" />
						<NavBarDropdownItem href="/o-que-e-seguranca" label="Segurança" />
					</NavBarDropdown>
					<NavBarItem href="/sobre-a-cti" label="Sobre a CTI" />
				</ul>
			</div>
		</div>
	</div>
</nav>
