<script>
	import { base } from '$app/paths';
	import DocumentLink from '@/components/DocumentLink.svelte';
	import PageContainer from '@/components/PageContainer.svelte';
	import PageHeader from '@/components/PageHeader.svelte';
</script>

<svelte:head>
	<title>AeroParticipa - Relatórios</title>
</svelte:head>

<PageHeader>Relatórios</PageHeader>
<PageContainer>
	<h3>1º Relatório</h3>
	<p>
		A comissão técnica independente tem o prazer de disponibilizar o relatório referente à primeira
		fase da avaliação ambiental estratégia, na sequência da 1ª Conferência da CTI, referente aos
		resultados obtidos no Reconhecimento e Triagem de opções estratégicas.
	</p>
	<div class="flex flex-col gap-4 mt-5">
		<DocumentLink href="{base}/relatorios/relatorio_1.pdf">Documento</DocumentLink>
	</div>
	<h3>2º Relatório</h3>
	<p>
		A comissão técnica independente disponibiliza o Relatório dos Fatores Críticos de Decisão, que
		será apresentado na 2º conferência da CTI, no dia 11 de julho, entre as 14h30 e as 17h30.
	</p>
	<div class="flex flex-col gap-4 mt-5">
		<DocumentLink href="{base}/relatorios/relatorio_2.pdf">Documento</DocumentLink>
		<DocumentLink href="{base}/relatorios/relatorio_2.pdf">Sumário Executivo</DocumentLink>
	</div>
</PageContainer>
