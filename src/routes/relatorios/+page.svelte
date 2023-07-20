<script>
	import { base } from '$app/paths';
	import PageContainer from '@/components/PageContainer.svelte';
	import PageHeader from '@/components/PageHeader.svelte';
</script>

<svelte:head>
	<title>AeroParticipa - Relatórios</title>
</svelte:head>

<PageHeader>Relatórios</PageHeader>
<PageContainer>
	<h3 class="text-2xl font-bold">1º Relatório</h3>
	<p class="pb-5">
		A comissão técnica independente tem o prazer de disponibilizar o relatório referente à primeira
		fase da avaliação ambiental estratégia, na sequência da 1ª Conferência da CTI, referente aos
		resultados obtidos no Reconhecimento e Triagem de opções estratégicas.
	</p>
	<a
		href="{base}/relatorios/relatorio_1.pdf"
		download
		class="text-blue-accent text-xl font-bold underline underline-offset-8 hover:text-blue-light"
	>
		Documento
	</a>
	<h3 class="pt-10 text-2xl font-bold">2º Relatório</h3>
	<p class="pb-5">
		A comissão técnica independente disponibiliza o Relatório dos Fatores Críticos de Decisão, que
		será apresentado na 2º conferência da CTI, no dia 11 de julho, entre as 14h30 e as 17h30.
	</p>
	<a
		href="{base}/relatorios/relatorio_2.pdf"
		download
		class="block text-blue-accent text-xl font-bold underline underline-offset-8 hover:text-blue-light"
	>
		Documento
	</a>
	<a
		href="{base}/relatorios/relatorio_2_sumario.pdf"
		download
		class="block text-blue-accent text-xl font-bold underline underline-offset-8 hover:text-blue-light"
	>
		Sumário Executivo
	</a>
</PageContainer>
