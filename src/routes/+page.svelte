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
					<h2 class="text-3xl font-bold text-white pb-6">Relatório da CTI<h2>
				<p class="max-w-4xl text-white text-xl mt-5">
					A Comissão Técnica Independente disponibiliza o Relatório final, revisto e melhorado com os comentários recebidos na consulta pública que decorreu entre 6 de dezembro e 26 de janeiro de 2024
					Cumprindo o espírito de transparência e abertura, entendeu a CTI divulgar desde já o relatório publicamente.</p>
			<div class="py flex justify-start mt-5">
			<ArrowLink label="Relatório Final da CTI" href="{base}/relatorios" isLight />
		</div>
		
	</div>
</div>
<div class="bg-blue">
	<h2 class="text-3xl font-bold text-center text-white p-6">
		Conheça as opções estratégicas em debate
	</h2>
	<IMap />
</div>