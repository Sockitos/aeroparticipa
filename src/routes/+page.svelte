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
		<h2 class="text-3xl font-bold text-white pb-5">2º Conferência CTI</h2>
		<div class="max-w-3xl text-white text-xl space-y-5">
			<p>
				Vai ter lugar no dia 11 de julho de 2023 a 2ª Conferência da CTI para apresentar o Quadro de
				Avaliação Estratégica, que inclui os Fatores Críticos de Decisão, os Critérios de Avaliação
				e os indicadores, que vão ser usados na avaliação das opções estratégicas na 3ª fase da
				Avaliação Ambiental Estratégica. Esta sessão é aberta ao público, mediante inscrição prévia
				e obrigatória, uma vez que a capacidade do espaço onde se realiza a conferência é limitada.
			</p>
			<h3 class="text-2xl font-bold text-white">Aberto o período de Consulta do RFCD</h3>
			<p>
				Está aberto o período de consulta pública e institucional, nos termos dos números 3 e 4 do
				artigo 5º do DL 232/2007, de 15 de junho, na sua redação atual, que encerra a 4 de Agosto.
				Todos os comentários/pareceres devem ser enviados por email para cti.aeroporto@lnec.pt.
			</p>
		</div>
		<div class="pt-10 pb-8 flex flex-col space-y-4 items-start">
			<ArrowLink
				label="Formulário de Inscrição"
				href="https://forms.gle/eSoVf3nRbE2QqrXc8"
				isLight
			/>
			<ArrowLink label="2º Relatório RFCD" href="{base}/relatorios" isLight />
		</div>
	</div>
</div>
<div class="bg-blue">
	<h2 class="text-3xl font-bold text-center text-white p-6">
		Conheça as opções estratégicas em debate
	</h2>
	<IMap />
</div>
