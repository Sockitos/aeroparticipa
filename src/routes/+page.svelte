<script>
	import { base } from '$app/paths';
	import ArrowLink from '@/components/ArrowLink.svelte';
	import IMap from '@/components/Map/IMap.svelte';
</script>

<svelte:head>
	<title>AeroParticipa</title>
</svelte:head>

<div class="relative">
	<div class="absolute w-full h-full flex flex-row">
		<div class="bg-grey grow" />
		<img
			src="{base}/svgs/header_decoration.svg"
			alt="decoration"
			height="649.89"
			width="190.06"
			class="h-full w-auto p-2"
		/>
	</div>
	<div class="relative container py-10 md:py-16 pr-24 md:pr-32">
		<h1>
			<img
				src="{base}/svgs/espaco_de_dialogo.svg"
				alt="Espaço de diálogo sobre o novo aeroporto de Lisboa"
				height="392.93"
				width="1538.89"
				class="pb-4 max-w-4xl w-full h-auto hidden md:block"
			/>
			<img
				src="{base}/svgs/espaco_de_dialogo_alt.svg"
				alt="Espaço de diálogo sobre o novo aeroporto de Lisboa"
				height="511.93"
				width="1172.16"
				class="pb-4 max-w-4xl w-full h-auto md:hidden"
			/>
		</h1>
	</div>
</div>
<div class="bg-plane bg-cover bg-center bg-blue bg-blend-multiply">
	<div class="container py-10 md:py-16">
		<h2 class="text-3xl font-bold text-white pb-6">3º Conferência CTI<h2>
			<p class="max-w-4xl text-white text-xl mt-5">
				A comissão técnica independente realizou a sua terceira conferência no dia 5 de dezembro de 2023, para apresentação dos resultados da terceira fase da AAE - Avaliação de Oportunidades e Riscos das Opções Estratégicas. Nesta fase foi aplicada a ferramenta de avaliação estratégica que inclui os Fatores Críticos para a Decisão, Critérios de Avaliação e Indicadores, que foram adoptados pela CTI, após ampla participação, na segunda fase do processo de avaliação.
			</p>
			<p class="max-w-4xl text-white text-xl mt-5">
				Está aberto o período de consulta pública e institucional, nos termos dos números 3 e 4 do
				artigo 5º do DL 232/2007, de 15 de junho, na sua redação atual, que encerra a 19 de Janeiro de 2024.
				Todos os pareceres/comentários devem ser enviados por email para cti.aeroporto@lnec.pt. 
				Encontra-se disponível no separador PARTICIPE uma ferramenta de discussão sobre o Relatório Ambiental
		</p>
			<div class="py flex justify-start mt-5">
			<ArrowLink label="Relatório Preliminar CTI" href="{base}/relatorios" isLight />
		</div>
		<div class="py flex justify-start mt-5">
			<ArrowLink label="PARTICIPE" href=https://participe.aeroparticipa.pt/ isLight />
		</div>
	</div>
</div>
<div class="bg-blue">
	<h2 class="text-3xl font-bold text-center text-white p-6">
		Conheça as opções estratégicas em debate
	</h2>
	<IMap />
</div>