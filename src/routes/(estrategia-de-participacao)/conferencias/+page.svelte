<script>
	import { base } from '$app/paths';
	import PageContainer from '@/components/PageContainer.svelte';
	import PageHeader from '@/components/PageHeader.svelte';
</script>

<svelte:head>
	<title>AeroParticipa - Conferências CTI</title>
</svelte:head>

<PageHeader>Conferências CTI</PageHeader>
<PageContainer>
	<h3 class="text-2xl font-bold">1ª Conferência</h3>
	<p class="pb-5">
		A comissão técnica independente realizou a sua primeira conferência no dia 27 de abril, para
		apresentação dos resultados da primeira fase da AAE. Concluiu-se assim a fase de Reconhecimento
		e Triagem, onde às cinco opções estratégicas estabelecidas na Resolução do Conselho de Ministros
		se adicionaram quatro novas opções estratégicas correspondentes a duas novas localizações.
	</p>
	<a
		href="{base}/conferencias/conferencia_1.pdf"
		download
		class="text-blue-accent text-xl font-bold underline underline-offset-8 hover:text-blue-light"
	>
		Apresentação
	</a>
	<h3 class="pt-10 text-2xl font-bold">2ª Conferência</h3>
	<p class="pb-5">
		A comissão técnica independente realizou a sua segunda conferência no dia 11 de julho, para
		apresentação dos resultados da segunda fase da AAE. Concluiu-se assim a fase de Focagem - Quadro
		de Avaliação Estratégica, em que foi criada a ferramenta de avaliação estratégica que inclui os
		Fatores Críticos para a Decisão, Critérios de Avaliação e Indicadores. Esta ferramenta designada
		Quadro de Avaliação Estratégica, será usada na 3ª fase para avaliar as cinco opções estratégicas
		estabelecidas na Resolução do Conselho de Ministros e as quatro opções estratégicas adicionadas
		pela CTI.
	</p>
	<a
		href="{base}/conferencias/conferencia_2.pdf"
		download
		class="text-blue-accent text-xl font-bold underline underline-offset-8 hover:text-blue-light"
	>
		Apresentação
	</a>
</PageContainer>
