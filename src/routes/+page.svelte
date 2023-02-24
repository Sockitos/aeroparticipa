<script>
	import { base } from '$app/paths';
	import ArrowLink from '@/components/ArrowLink.svelte';
</script>

<div class="relative">
	<div class="absolute w-full h-full flex flex-row ">
		<div class="bg-background grow" />
		<img src="{base}/svgs/header_decoration.svg" alt="" class="g-white h-full p-2" />
	</div>
	<div class="relative container py-10 md:py-16">
		<img
			src="{base}/svgs/espaco_de_dialogo.svg"
			alt="Espaço de diálogo sobre o novo aeroporto de Lisboa"
			class="pb-4 pr-20 max-w-4xl"
		/>
	</div>
</div>
<div class="bg-plane bg-cover bg-center bg-blue bg-blend-multiply">
	<div class="container py-10 md:py-16">
		<img src="{base}/svgs/opiniao.svg" alt="Queremos a sua opinião" class="max-w-2xl pb-10" />
		<p class="max-w-3xl text-white text-xl">
			Os estudos técnico-científicos dão-nos factos e evidências, mas a percepção sobre os
			problemas, as preferências, as prioridades exprimem-se frequentemente pela opinião dos
			interessados. E são igualmente importantes quando se trata de decisões estratégicas. Este
			espaço de diálogo é para falarmos consigo! Contribua! Responda às perguntas para nos ajudar a
			identificar as principais preocupações e prioridades.
		</p>
		<div class="pt-10 pb-8 flex justify-start">
			<ArrowLink label="Quero participar" href="{base}/participe" isLight />
		</div>
	</div>
</div>
<div class="bg-background">
	<div class="container py-12 lg:py-20">
		<div class="bg-grey p-12 md:p-16 lg:p-20 flex flex-col">
			<img
				src="{base}/svgs/participacao.svg"
				alt="Processo de Participação"
				class="max-w-2xl pb-10"
			/>
			<div class="max-w-3xl text-black text-xl space-y-2 pb-10">
				<p>Convidamos à participação neste processo, em três fases com objetivos distintos.</p>
				<p class="font-bold pt-4">
					<span class="text-blue-accent">Fase 1 –</span> Contribuir para selecionar as opções estratégicas
					mais viáveis
				</p>
				<p>
					Os vossos contributos, preocupações e prioridades serão considerados pela Comissão Técnica
					Independente na construção de critérios de viabilidade técnico-científica, os quais vão
					identificar as opções estratégicas a avaliar mais aprofundadamente.
				</p>
				<p class="font-bold pt-4">
					<span class="text-blue-accent">Fase 2 –</span> Definir fatores críticos de decisão e respectivo
					quadro de avaliação estratégico
				</p>
				<p>
					Priorizar os temas que devem ser centrais na decisão, que definem os fatores críticos de
					decisão e que vão estruturar o quadro de avaliação estratégica
				</p>
				<p class="font-bold pt-4">
					<span class="text-blue-accent">Fase 3 –</span> Avaliação das opções estratégicas
				</p>
				<p>
					Aplicação do quadro de avaliação estratégica para avaliar as opções estratégias em relação
					às oportunidades e riscos para o ambiente e para a sustentabilidade e estabelecimento de
					diretrizes. Recomendações para a decisão.
				</p>
			</div>
			<img src="{base}/svgs/fases.svg" alt="Fases" class="py-14" />
			<ArrowLink label="Saber mais" />
		</div>
	</div>
</div>
