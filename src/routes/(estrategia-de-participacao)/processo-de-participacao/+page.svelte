<script>
	import { base } from '$app/paths';
	import FramedImage from '@/components/FramedImage.svelte';
	import PageContainer from '@/components/PageContainer.svelte';
	import PageHeader from '@/components/PageHeader.svelte';
</script>

<svelte:head>
	<title>AeroParticipa - Processo de Participação</title>
</svelte:head>

<PageHeader>Processo de<br />Participação</PageHeader>
<PageContainer>
	<p>Convidamos à participação neste processo, ao longo de três fases, com objetivos distintos.</p>
	<p class="pt-4">
		<b>
			<span class="text-blue-accent">Fase 1 –</span> Contribuir para selecionar as opções estratégicas
			viáveis
		</b>
	</p>
	<p>
		Os vossos contributos, preocupações e prioridades serão considerados pela Comissão Técnica
		Independente na construção de critérios de viabilidade técnico-científica, que irão ser
		utilizados na triagem das opções estratégicas a avaliar mais aprofundadamente.
	</p>
	<p class="pt-4">
		<b>
			<span class="text-blue-accent">Fase 2 –</span> Contribuir para definir os fatores críticos de decisão
			e o respectivo quadro de avaliação estratégico</b
		>
	</p>
	<p>
		As preocupações e os temas prioritários que nos forem apresentados vão concorrer para definir os
		fatores críticos de decisão que vão estruturar a avaliação ambiental estratégica.
	</p>
	<p class="pt-4">
		<b>
			<span class="text-blue-accent">Fase 3 –</span> Contribuir para a avaliação final das opções estratégicas</b
		>
	</p>
	<p>
		A avaliação das oportunidades e riscos para o ambiente e para a sustentabilidade das opções
		estratégicas poderá ser enriquecida com os vossos contributos. Fique atento(a) para saber como
		poderá vir a colaborar nesta fase mais avançada da avaliação.
	</p>
	<div class="py-8">
		<FramedImage
			src="{base}/images/faseamento_aae.png"
			alt="Faseamento do processo de participação"
			height="1129"
			width="2002"
			index="1"
			caption="Faseamento do processo de participação"
		/>
	</div>
</PageContainer>
