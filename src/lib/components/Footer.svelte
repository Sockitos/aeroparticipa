<script>
	import { base } from '$app/paths';
	import ArrowLink from './ArrowLink.svelte';
</script>

<footer>
	<div class="bg-blue-dark">
		<div class="container py-12 flex flex-col items-stretch justify-between space-y-10">
			<div
				class="flex flex-col space-y-10 md:flex-row items-center md:justify-between md:space-x-10"
			>
				<img src="{base}/svgs/logo_alt.svg" alt="AeroParticipa" class="h-24" />
				<img src="{base}/svgs/cti_logo.svg" alt="CTI" class="h-14" />
			</div>
			<div
				class="flex flex-col space-y-4 items-center md:flex-row md:items-end md:justify-between md:space-x-10"
			>
				<p class="basis-2/4 text-lg text-white text-center md:text-left md:max-w-lg">
					Promove a análise estratégica, multidisciplinar e participativa do aumento da capacidade
					aeroportuária da região de Lisboa.
				</p>
				<div class="basis-2/4 flex flex-row space-x-2 items-center">
					<p class="text-lg text-white md:ml-auto">Dúvidas ou sugestões?</p>
					<ArrowLink label="Contacte-nos" href="mailto:cti.aeroporto@lnec.pt" isSmall isLight />
				</div>
			</div>
		</div>
		<div class="bg-blue-darker">
			<div class="container py-3">
				<p class="text-sm text-white/70 text-center">
					AeroParticipa © 2023. Todos os direitos reservados.
				</p>
			</div>
		</div>
	</div>
</footer>
