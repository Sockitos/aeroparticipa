<script>
	import { base } from '$app/paths';
	import DocumentLink from '@/components/DocumentLink.svelte';
	import PageContainer from '@/components/PageContainer.svelte';
	import PageHeader from '@/components/PageHeader.svelte';
</script>

<svelte:head>
	<title>AeroParticipa - Relatórios</title>
</svelte:head>

<PageHeader>Relatórios CTI</PageHeader>
<PageContainer>
	<h3>Relatório da CTI</h3>
	<p>
		No dia 11 de março 2024 foi formalmente entregue à Comissão de Acompanhamento o conjunto de
		documentos que integram o Relatório final da Comissão Técnica Independente, para que a Comissão
		de Acompanhamento possa preparar o seu parecer final. Do mesmo foi dado conhecimento ao Gabinete
		do Sr. Primeiro-Ministro e ao Gabinete do Sr. Secretário de Estado das Infraestruturas. Com o
		parecer da Comissão de Acompanhamento a Comissão Técnica Independente entregará formalmente o
		Relatório final ao Governo.
	</p>

	<h3>Relatório Ambiental</h3>
	<div class="flex flex-col gap-4 mt-5">
		<DocumentLink href="{base}/relatorios/declaracaoAmb.pdf">Declaração Ambiental</DocumentLink>
		<DocumentLink href="{base}/relatorios/Parecer_CA.pdf">Parecer da Comissão de Acompanhamento</DocumentLink>
		<DocumentLink href="{base}/relatorios/relatorio_ambiental_sumario.pdf"
			>Sumário Executivo</DocumentLink
		>
		<DocumentLink href="{base}/relatorios/relatorio_ambiental.pdf">Relatório Ambiental</DocumentLink>	
		<DocumentLink href="{base}/relatorios/resumo_nao_tecnico.pdf">Resumo Não Técnico</DocumentLink>
		<DocumentLink href="{base}/relatorios/relatorio_consulta_publica.pdf"
			>Relatório da Consulta Pública</DocumentLink
		>
	</div>
	<h3>Relatório Técnicos Complementares (RTC) ao Relatório Ambiental</h3>
	<div class="flex flex-col gap-4 mt-5">
		<DocumentLink href="{base}/relatorios/PT1_Relatorio_Sintese.pdf"
			>PT1 - Relatório Síntese (sem Anexos)</DocumentLink
		>
	</div>
	<ul class="flex flex-col gap-2 mt-5">
		<DocumentLink href="{base}/relatorios/PT1-Anexo1.pdf"
			>PT1 - Anexo 1 - Estudo da evolução histórica AHD</DocumentLink
		>
		<DocumentLink href="{base}/relatorios/PT1-Anexo2.pdf"
			>PT1 - Anexo 2 - Projeção da procura aeroportuária agregada
		</DocumentLink>
		<DocumentLink href="{base}/relatorios/PT1-Anexo3.pdf"
			>PT1 - Anexo 3 - Projeção da procura aeroportuária com constrangimentos</DocumentLink
		>
		<DocumentLink href="{base}/relatorios/PT1-Anexo4.pdf"
			>PT1 - Anexo 4 - Projeções da procura nos acessos terrestres
		</DocumentLink>
	</ul>
	<div class="flex flex-col gap-4 mt-5">
		<DocumentLink href="{base}/relatorios/PT2_relatorio_sintese.pdf"
			>PT2 - Relatório Síntese (PACARL) (sem Anexos)</DocumentLink
		>
	</div>
	<ul class="flex flex-col gap-2 mt-5">
		<DocumentLink href="{base}/relatorios/PT2-Anexo1.pdf"
			>PT2 - Anexo 1 - Análise de Ventos</DocumentLink
		>
		<DocumentLink href="{base}/relatorios/PT2-Anexo2.pdf"
			>PT2 - Anexo 2 - Capacidade e Dimensionamento</DocumentLink
		>
		<DocumentLink href="{base}/relatorios/PT2-Anexo3.pdf">PT2 - Anexo 3 - Carga Aérea</DocumentLink>
		<DocumentLink href="{base}/relatorios/PT2-Anexo4.pdf"
			>PT2 - Anexo 4 - Cronograma de Execução das Opções Estratégicas
		</DocumentLink>
		<DocumentLink href="{base}/relatorios/PT2-Anexo5.pdf"
			>PT2 - Anexo 5 - CAPEX das Opções Estratégicas
		</DocumentLink>
		<DocumentLink href="{base}/relatorios/PT2-Anexo6.pdf"
			>PT2 - Anexo 6 - Cronograma Financeiro</DocumentLink
		>
		<DocumentLink href="{base}/relatorios/PT2-Anexo7.pdf"
			>PT2 - Anexo 7 - Transição Energética</DocumentLink
		>
		<DocumentLink href="{base}/relatorios/PT2-Anexo8.pdf"
			>PT2 - Anexo 8 - Classificação de Aeronaves</DocumentLink
		>
		<DocumentLink href="{base}/relatorios/PT2-Anexo9.pdf"
			>PT2 - Anexo 9 - Espaço Aéreo, Procedimentos e Infraestruturas de Navegação
		</DocumentLink>
		<DocumentLink href="{base}/relatorios/PT2-Anexo10.pdf"
			>PT2 - Anexo 10 - Relatório da Análise de Curto Prazo</DocumentLink
		>
		<DocumentLink href="{base}/relatorios/PT2-Anexo11.pdf">PT2 - Anexo 11 - Vertiport</DocumentLink>
		<DocumentLink href="{base}/relatorios/PT2-Anexo12.pdf">PT2 - Anexo 12 - Layouts</DocumentLink>
		<DocumentLink href="{base}/relatorios/PT2-Anexo13.pdf"
			>PT2 - Anexo 13 - Oficio EMFA
		</DocumentLink>
	</ul>
	<div class="flex flex-col gap-4 mt-5">
		<DocumentLink href="{base}/relatorios/PT3_relatorio_sintese.pdf"
			>PT3 - Relatório Síntese (sem Anexos)</DocumentLink
		>
	</div>
	<ul class="flex flex-col gap-2 mt-5">
		<DocumentLink href="{base}/relatorios/PT3-Anexo1.pdf"
			>PT3 - Anexo 1 - Território e Acessibilidades Rodo e Ferroviárias 1
		</DocumentLink>
		<DocumentLink href="{base}/relatorios/PT3-Anexo2.pdf"
			>PT3 - Anexo 2 - Território e Acessibilidades Rodo e Ferroviárias 2
		</DocumentLink>
	</ul>
	<div class="flex flex-col gap-4 mt-5">
		<DocumentLink href="{base}/relatorios/PT4_relatorio_sintese.pdf"
			>PT4 - Relatório Síntese (sem Anexos)</DocumentLink
		>
	</div>
	<ul class="flex flex-col gap-2 mt-5">
		<DocumentLink href="{base}/relatorios/PT4-Anexo1.pdf"
			>PT4 - Anexo 1 - Condicionalismos nos domínios das dinâmicas sociais
		</DocumentLink>
		<DocumentLink href="{base}/relatorios/PT4-Anexo2.pdf"
			>PT4 - Anexo 2 - Condicionalismos nos domínios da biodiversidade, áreas naturais e avifauna
		</DocumentLink>
		<DocumentLink href="{base}/relatorios/PT4-Anexo3.pdf"
			>PT4 - Anexo 3 - Condicionalismos nos domínios da floresta de montado
		</DocumentLink>
		<DocumentLink href="{base}/relatorios/PT4-Anexo4.pdf"
			>PT4 - Anexo 4 - Condicionalismos nos domínios dos riscos naturais e tecnológicos
		</DocumentLink>
		<DocumentLink href="{base}/relatorios/PT4-Anexo5.pdf"
			>PT4 - Anexo 5 - Estrutura e conteúdos do sistema de informação geográfica de suporte
		</DocumentLink>
	</ul>
	<div class="flex flex-col gap-4 mt-5">
		<DocumentLink href="{base}/relatorios/PT5_relatorio_sintese.pdf"
			>PT5 - Relatório Síntese (sem Anexos)</DocumentLink
		>
	</div>
	<ul class="flex flex-col gap-2 mt-5">
		<DocumentLink href="{base}/relatorios/PT5-Anexo1.pdf"
			>PT5 - Anexo 1 - Conectividade Aeroportuária e Comércio Internacional
		</DocumentLink>
		<DocumentLink href="{base}/relatorios/PT5-Anexo2.pdf"
			>PT5 - Anexo 2 - Conectividade aérea e desenvolvimento regional
		</DocumentLink>
		<DocumentLink href="{base}/relatorios/PT5-Anexo3.pdf"
			>PT5 - Anexo 3 - Análise Input-Output
		</DocumentLink>
		<DocumentLink href="{base}/relatorios/PT5-Anexo4.pdf"
			>PT5 - Anexo 4 - Estudo Económico da Desativação e Renaturalização do AHD
		</DocumentLink>
		<DocumentLink href="{base}/relatorios/PT5-Anexo5.pdf"
			>PT5 - Anexo 5 - Análise Financeira
		</DocumentLink>
		<DocumentLink href="{base}/relatorios/PT5-Anexo6.pdf"
			>PT5 - Anexo 6 - Estudo Económico do Contrato de Concessão
		</DocumentLink>
		<DocumentLink href="{base}/relatorios/PT5-Anexo7.pdf"
			>PT5 - Anexo 7 - Análise custo-benefício
		</DocumentLink>
	</ul>
	<div class="flex flex-col gap-4 mt-5">
		<DocumentLink href="{base}/relatorios/PT6_relatorio_sintese.pdf"
			>PT6 - Relatório Síntese (sem Anexos)</DocumentLink
		>
	</div>
	<ul class="flex flex-col gap-2 mt-5">
		<DocumentLink href="{base}/relatorios/PT6-AnexoA.pdf"
			>PT6 - Anexo A - Análise legal do modelo de financiamento face aos regulamentos europeus
		</DocumentLink>
		<DocumentLink href="{base}/relatorios/PT6-AnexoB.pdf"
			>PT6 - Anexo B - Análise e enquadramento das opções segundo o Contrato de Concessão
		</DocumentLink>
		<DocumentLink href="{base}/relatorios/PT6-AnexoC.pdf"
			>PT6 - Anexo C - Restrições legais, designadamente ambientais, que impeçam a realização do
			projeto ou que impliquem riscos
		</DocumentLink>
		<DocumentLink href="{base}/relatorios/PT6-AnexoD.pdf"
			>PT6 - Anexo D - Análise do regime de expropriações
		</DocumentLink>
		<DocumentLink href="{base}/relatorios/PT6-AnexoE.pdf"
			>PT6 - Anexo E - Estudo dos direitos dos antigos proprietários dos terrenos do AHD
		</DocumentLink>
		<DocumentLink href="{base}/relatorios/PT6-AnexoF.pdf"
			>PT6 - Anexo F - Ações necessárias ao nível governamental e a legislação aplicável para o
			desenvolvimento do Projeto
		</DocumentLink>
	</ul>
</PageContainer>
