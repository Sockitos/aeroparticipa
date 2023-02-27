<script>
	import { base } from '$app/paths';
	import PageContainer from '@/components/PageContainer.svelte';
	import PageHeader from '@/components/PageHeader.svelte';
</script>

<PageHeader>Processo de<br />Participação</PageHeader>
<PageContainer>
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
		<span class="text-blue-accent">Fase 2 –</span> Definir fatores críticos de decisão e respectivo quadro
		de avaliação estratégico
	</p>
	<p>
		Priorizar os temas que devem ser centrais na decisão, que definem os fatores críticos de decisão
		e que vão estruturar o quadro de avaliação estratégica.
	</p>
	<p class="font-bold pt-4">
		<span class="text-blue-accent">Fase 3 –</span> Avaliação das opções estratégicas
	</p>
	<p>
		Aplicação do quadro de avaliação estratégica para avaliar as opções estratégias em relação às
		oportunidades e riscos para o ambiente e para a sustentabilidade e estabelecimento de
		diretrizes. Recomendações para a decisão.
	</p>
	<div class="py-8">
		<img src="{base}/images/faseamento_aae.png" alt="Faseamento" class="w-full p-4 bg-grey" />
		<p class="text-center pt-4">Figura 1 - Faseamento</p>
	</div>
</PageContainer>
