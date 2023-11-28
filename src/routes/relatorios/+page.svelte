<script>
	import { base } from '$app/paths';
	import DocumentAccordion from '@/components/DocumentAccordion.svelte';
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
		<DocumentLink href="{base}/relatorios/relatorio_2_1.pdf"
			>Documento pós Consulta Pública</DocumentLink
		>
	</div>
	<h3>Relatório da Análise de Curto Prazo</h3>
	<p>
		A comissão técnica independente disponibiliza o Relatório da Análise de Curto Prazo da situação
		atual do Aeroporto Humberto Delgado (AHD), onde consta uma proposta de ações de melhoria da sua
		eficiência e eficácia operacional.
	</p>
	<div class="flex flex-col gap-4 mt-5">
		<DocumentLink href="{base}/relatorios/relatorio_AHD.pdf">Documento</DocumentLink>
	</div>
	<h3>Relatório Exemplo</h3>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
		laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
		voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
		non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	</p>
	<DocumentAccordion label="Ver Documentos">
		<div class="flex flex-col gap-4 mt-5">
			<DocumentLink href="{base}/relatorios/relatorio_AHD.pdf">Documento</DocumentLink>
			<DocumentLink href="{base}/relatorios/relatorio_AHD.pdf">Documento</DocumentLink>
			<DocumentLink href="{base}/relatorios/relatorio_AHD.pdf">Documento</DocumentLink>
			<DocumentLink href="{base}/relatorios/relatorio_AHD.pdf">Documento</DocumentLink>
		</div>
	</DocumentAccordion>
</PageContainer>
