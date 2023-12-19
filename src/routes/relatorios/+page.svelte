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
	<h3>Relatório Preliminar da CTI</h3>
	<p>
		A Comissão Técnica Independente disponibiliza o Relatório Ambiental preliminar que foi apresentado na 3º conferência da CTI, 
		no dia 05 de dezembro de 2023. Está aberta a consulta pública até ao dia 26 de Janeiro de 2024. 
		Os pareceres e comentários deverão ser enviados para cti.aeroporto@lnec.pt
	</p>
	
	<div class="flex flex-col gap-4 mt-5">
		<DocumentLink href="https://drive.google.com/file/d/17gQXvazcGkpMkvFwgCHDSB6LKBGtEAvK/view?usp=sharing">Relatório Preliminar Completo (inclui RTC e anexos)</DocumentLink>
	</div>
	<h3>Relatório Ambiental Preliminar</h3>
	<div class="flex flex-col gap-4 mt-5">
		<DocumentLink href="{base}/relatorios/relatorio_ambiental.pdf">Relatório Ambiental Preliminar</DocumentLink>
		<DocumentLink href="{base}/relatorios/resumo_nao_tecnico.pdf">Resumo Não Técnico</DocumentLink>
		<DocumentLink href="{base}/relatorios/relatorio_ambiental_sumario.pdf">Sumário Executivo</DocumentLink>
	</div>
<h3>Relatório Técnicos Complementáres (RTC) ao Relatório Ambiental</h3>
		<div class="flex flex-col gap-4 mt-5">
		<DocumentLink href="{base}/relatorios/PT1_Relatorio_Sintese.pdf">PT1 - Relatório Sintese (sem Anexos)</DocumentLink>
	</div>
			<ul class="flex flex-col gap-2 mt-5">
				<DocumentLink href="{base}/relatorios/PT1-Anexo1.pdf">PT1 - Anexo 1 - Estudo da evolução histórica AHD</DocumentLink>
				<DocumentLink href="{base}/relatorios/PT1-Anexo2.pdf">PT1 - Anexo 2 - Projeção da procura aeroportuária agregada </DocumentLink>
				<DocumentLink href="{base}/relatorios/PT1-Anexo3.pdf">PT1 - Anexo 3 - Projeção da procura aeroportuária com constrangimentos</DocumentLink>
				<DocumentLink href="{base}/relatorios/PT1-Anexo4.pdf">PT1 - Anexo 4 - Projeções da procura nos acessos terrestres </DocumentLink>
			</ul>
			<div class="flex flex-col gap-4 mt-5">
		<DocumentLink href="{base}/relatorios/PT2_Relatorio_Sintese.pdf">PT2 - Relatório Sintese (PACARL) (sem Anexos)</DocumentLink>
			</div>
			<ul class="flex flex-col gap-2 mt-5"> 
				<DocumentLink href="{base}/relatorios/PT2-Anexo1.pdf">PT2 - Anexo 1 - Análise de Ventos</DocumentLink>
				<DocumentLink href="{base}/relatorios/PT2-Anexo2.pdf">PT2 - Anexo 2 - Capacidade e Dimensionamento</DocumentLink>
				<DocumentLink href="{base}/relatorios/PT2-Anexo3.pdf">PT2 - Anexo 3 - Carga Aérea </DocumentLink>
				<DocumentLink href="{base}/relatorios/PT2-Anexo4.pdf">PT2 - Anexo 4 - Cronograma de Execução das Opções Estratégicas </DocumentLink>
				<DocumentLink href="{base}/relatorios/PT2-Anexo5.pdf">PT2 - Anexo 5 - CAPEX das Opções Estratégicas </DocumentLink>
				<DocumentLink href="{base}/relatorios/PT2-Anexo6.pdf">PT2 - Anexo 6 - Cronograma Financeiro</DocumentLink>
				<DocumentLink href="{base}/relatorios/PT2-Anexo7.pdf">PT2 - Anexo 7 - Transição Energética</DocumentLink>
				<DocumentLink href="{base}/relatorios/PT2-Anexo8.pdf">PT2 - Anexo 8 - Classificação de Aeronaves</DocumentLink>
				<DocumentLink href="{base}/relatorios/PT2-Anexo9.pdf">PT2 - Anexo 9 - Espaço Aéreo, Procedimentos e Infraestruturas de Navegação </DocumentLink>
				<DocumentLink href="{base}/relatorios/PT2-Anexo10.pdf">PT2 - Anexo 10 - Relatório da Análise de Curto Prazo</DocumentLink>
				<DocumentLink href="{base}/relatorios/PT2-Anexo11.pdf">PT2 - Anexo 11 - Vertiport</DocumentLink>
				<DocumentLink href="{base}/relatorios/PT2-Anexo12.pdf">PT2 - Anexo 12 - Layouts </DocumentLink>
			</ul>
					<div class="flex flex-col gap-4 mt-5">
		<DocumentLink href="{base}/relatorios/PT3_relatorio_sintese.pdf">PT3 - Relatório Sintese (sem Anexos)</DocumentLink>
			</div>
			<ul class="flex flex-col gap-2 mt-5">
				<DocumentLink href="{base}/relatorios/PT3-Anexo1.pdf">PT3 - Anexo 1 - Território e Acessibilidades Rodo e Ferroviárias 1 </DocumentLink>
				<DocumentLink href="{base}/relatorios/PT3-Anexo2.pdf">PT3 - Anexo 2 - Território e Acessibilidades Rodo e Ferroviárias 2 </DocumentLink>
			</ul>
			<div class="flex flex-col gap-4 mt-5">
		<DocumentLink href="{base}/relatorios/PT4_relatorio_sintese.pdf">PT4 - Relatório Sintese (sem Anexos)</DocumentLink>
			</div>
			<ul class="flex flex-col gap-2 mt-5">
				<DocumentLink href="{base}/relatorios/PT4-Anexo1.pdf">PT4 - Anexo 1 - Condicionalismos nos domínios das dinâmicas sociais </DocumentLink>
				<DocumentLink href="{base}/relatorios/PT4-Anexo2.pdf">PT4 - Anexo 2 - Condicionalismos nos domínios da biodiversidade, áreas naturais e avifauna </DocumentLink>
				<DocumentLink href="{base}/relatorios/PT4-Anexo3.pdf">PT4 - Anexo 3 - Condicionalismos nos domínios da floresta de montado </DocumentLink>
				<DocumentLink href="{base}/relatorios/PT4-Anexo4.pdf">PT4 - Anexo 4 - Condicionalismos nos domínios dos  riscos naturais e tecnológicos </DocumentLink>
				<DocumentLink href="{base}/relatorios/PT4-Anexo5.pdf">PT4 - Anexo 5 - Estrutura e conteúdos do sistema de informação geográfica de suporte </DocumentLink>
			</ul>
			<div class="flex flex-col gap-4 mt-5">
		<DocumentLink href="{base}/relatorios/PT5_relatorio_sintese.pdf">PT5 - Relatório Sintese (sem Anexos)</DocumentLink>
			</div>
			<ul class="flex flex-col gap-2 mt-5">
				<DocumentLink href="{base}/relatorios/PT5-Anexo1.pdf">PT5 - Anexo 1 - Conectividade Aeroportuária e Comércio Internacional </DocumentLink>
				<DocumentLink href="{base}/relatorios/PT5-Anexo2.pdf">PT5 - Anexo 2 - Conectividade aérea e desenvolvimento regional </DocumentLink>
				<DocumentLink href="{base}/relatorios/PT5-Anexo3.pdf">PT5 - Anexo 3 - Análise Input-Output </DocumentLink>
				<DocumentLink href="{base}/relatorios/PT5-Anexo4.pdf">PT5 - Anexo 4 - Estudo Económico da Desativação e Renaturalização do AHD </DocumentLink>
				<DocumentLink href="{base}/relatorios/PT5-Anexo5.pdf">PT5 - Anexo 5 - Análise Financeira </DocumentLink>
				<DocumentLink href="{base}/relatorios/PT5-Anexo6.pdf">PT5 - Anexo 6 - Estudo Económico do Contrato de Concessão </DocumentLink>
				<DocumentLink href="{base}/relatorios/PT5-Anexo7.pdf">PT5 - Anexo 7 - Análise custo-benefício </DocumentLink>
			</ul>
			<div class="flex flex-col gap-4 mt-5">
		<DocumentLink href="{base}/relatorios/PT6_relatorio_sintese.pdf">PT6 - Relatório Sintese (sem Anexos)</DocumentLink>
					</div>
			<ul class="flex flex-col gap-2 mt-5">
				<DocumentLink href="{base}/relatorios/PT6-AnexoA.pdf">PT6 - Anexo A - Análise legal do modelo de financiamento face aos regulamentos europeus </DocumentLink>
				<DocumentLink href="{base}/relatorios/PT6-AnexoB.pdf">PT6 - Anexo B - Análise e enquadramento das opções segundo o Contrato de Concessão </DocumentLink>
				<DocumentLink href="{base}/relatorios/PT6-AnexoC.pdf">PT6 - Anexo C - Restrições legais, designadamente ambientais, que impeçam a realização do projeto ou que impliquem riscos </DocumentLink>
				<DocumentLink href="{base}/relatorios/PT6-AnexoD.pdf">PT6 - Anexo D - Análise do regime de expropriações </DocumentLink>
				<DocumentLink href="{base}/relatorios/PT6-AnexoE.pdf">PT6 - Anexo E - Estudo dos direitos dos antigos proprietários dos terrenos do AHD </DocumentLink>
				<DocumentLink href="{base}/relatorios/PT6-AnexoF.pdf">PT6 - Anexo F - Ações necessárias ao nível governamental e a legislação aplicável para o desenvolvimento do Projeto </DocumentLink>
			</ul>
	<h3>Relatório da Fase I - Reconhecimento e Triagem</h3>
	<p>
		A comissão técnica independente tem o prazer de disponibilizar o relatório referente à primeira
		fase da avaliação ambiental estratégia, na sequência da 1ª Conferência da CTI, referente aos
		resultados obtidos no Reconhecimento e Triagem de opções estratégicas.
	</p>
	<div class="flex flex-col gap-4 mt-5">
		<DocumentLink href="{base}/relatorios/relatorio_1.pdf">Relatório de Reconhecimento e Triagem</DocumentLink>
	</div>
	<h3>Relatório da Fase II - Fatores Críticos de Decisão</h3>
	<p>
		A comissão técnica independente disponibiliza o Relatório dos Fatores Críticos de Decisão, que
		será apresentado na 2º conferência da CTI, no dia 11 de julho, entre as 14h30 e as 17h30.
	</p>
	<div class="flex flex-col gap-4 mt-5">
		<DocumentLink href="{base}/relatorios/relatorio_2.pdf">Relatório dos Fatores Críticos de Decisão</DocumentLink>
		<DocumentLink href="{base}/relatorios/relatorio_2_sumario.pdf">Sumário Executivo</DocumentLink>
		<DocumentLink href="{base}/relatorios/relatorio_2_1.pdf">Relatório dos Fatores Críticos de Decisão pós Consulta Pública</DocumentLink>
	</div>
	<h3>Relatório da Análise de Curto Prazo</h3>
	<p>
		A comissão técnica independente disponibiliza o Relatório da Análise de Curto Prazo da situação
		atual do Aeroporto Humberto Delgado (AHD), onde consta uma proposta de ações de melhoria da sua
		eficiência e eficácia operacional.
	</p>
	<div class="flex flex-col gap-4 mt-5">
		<DocumentLink href="{base}/relatorios/relatorio_AHD.pdf">Relatório da Análise de Curto Prazo</DocumentLink>
	</div>
	
</PageContainer>