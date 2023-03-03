<script lang="ts">
	import { base } from '$app/paths';
	import PageContainer from '@/components/PageContainer.svelte';
	import PageHeader from '@/components/PageHeader.svelte';
</script>

<svelte:head>
	<title>AeroParticipa - O que é a Avaliação Ambiental Estratégica?</title>
</svelte:head>

<PageHeader>O que é a<br />Avaliação Ambiental Estratégica?</PageHeader>
<PageContainer>
	<p>
		A Avaliação Ambiental Estratégica (AAE) é um instrumento de apoio à decisão estratégica para
		assegurar que as preocupações ambientais e de sustentabilidade são integradas na avaliação e
		decisão sobre políticas públicas.
	</p>
	<p>
		De acordo com o Guia de melhores práticas para AAE, publicado em 2012 pela Agência Portuguesa do
		Ambiente (APA) e pela REN – Redes Energéticas Nacionais SA, a AAE é um instrumento de avaliação
		de natureza estratégica que ajuda a criar um contexto de desenvolvimento para a
		sustentabilidade, integrando as questões ambientais na decisão e avaliando opções estratégicas
		de investimento e desenvolvimento face às condições de contexto.
	</p>
	<p>
		A AAE não é uma avaliação de impacte ambiental (AIA), com a qual é frequentemente confundida. A
		AAE avalia as condições políticas e socio-económicas de desenvolvimento, que geram projetos, de
		forma integrada com as preocupações ambientais. A AIA avalia os efeitos ambientais e sociais de
		propostas de desenvolvimento, normalmente projetos, em relação à sua localização, dimensão,
		natureza e características. Uma das grandes vantagens da AAE é reduzir a incerteza na AIA.
	</p>
	<p>
		No caso da avaliação das opções estratégicas para o aumento da capacidade aeroportuária da
		região de Lisboa, a AAE tem vindo a discutir em mesas temáticas dimensões que são estratégicas
		para a decisão. Estas dimensões estratégicas incluem a importância do novo aeroporto para o
		desenvolvimento nacional, a articulação de um novo aeroporto com o sistema e rede de
		transportes, designadamente com a ferrovia, os riscos naturais e tecnológicos que podem
		condicionar a localização de um aeroporto e a reflexão sobre que modelo de aeroporto se pretende
		para a região de Lisboa (ver figura 1).
	</p>
	<div class="py-8">
		<img
			src="{base}/images/dimensoes_estrategicas.png"
			alt="Dimensões estratégicas para esta AAE discutidas nas mesas temáticas"
			class="w-full p-4 bg-grey"
		/>
		<p class="text-center pt-4">
			Figura 1 - Dimensões estratégicas nesta AAE discutidas nas mesas temáticas
		</p>
	</div>
	<h3 class="text-2xl font-bold pt-6">Processo e metodologia de AAE</h3>
	<p>
		A Avaliação Ambiental Estratégica (AAE) tem como objetivo explorar, entender e avaliar as opções
		estratégicas para o aumento da capacidade aeroportuária da região de Lisboa.
	</p>
	<p>Este processo de AAE estrutura-se em três fases (figura 2):</p>
	<ul class="marker:text-blue-accent list-disc list-inside pl-5">
		<li>
			<span class="text-blue-accent font-bold">Fase 1 –</span> Reconhecimento e triagem: destina-se a
			mapear as opções estratégicas que têm vindo a ser sugeridas, incluindo opções que não constam da
			RCM (reconhecimento), e a selecção prévia (triagem) daquelas opções com base em critérios de viabilidade
			técnico-científicos.
		</li>
		<li>
			<span class="text-blue-accent font-bold">Fase 2 –</span> Focagem: destina-se à identificação de
			Fatores Críticos de Decisão (FCD) e ao desenvolvimento do quadro de avaliação estratégico que irá
			ser utilizado na fase 3 na avaliação das opções estratégicas viáveis.
		</li>
		<li>
			<span class="text-blue-accent font-bold">Fase 3 –</span> Avaliação de opções: avaliação das oportunidades
			e riscos das opções selecionadas como viáveis na fase 1 utilizando o quadro de avaliação estratégico
			definido na fase 2.
		</li>
	</ul>
	<div class="py-8">
		<img
			src="{base}/images/faseamento_aae_alt.png"
			alt="Faseamento da AAE"
			class="w-full p-4 bg-grey"
		/>
		<p class="text-center pt-4">Figura 2 - Faseamento da AAE</p>
	</div>
	<p>
		No final das fases 2 e 3 serão cumpridos os procedimentos legais constantes do decreto-lei nº
		232/2007 com a preparação de relatórios que serão objeto de consulta pública e institucional. No
		final da fase 3 será preparada a Declaração Ambiental a submeter à Agência Portuguesa do
		Ambiente.
	</p>
	<p>
		Nesta AAE segue-se uma abordagem metodológica com pensamento estratégico, de acordo com o Guia
		de melhores práticas para AAE, publicado em 2012 pela Agência Portuguesa do Ambiente (APA) e
		pela REN – Redes Energéticas Nacionais SA. Uma componente fundamental da metodologia de AAE com
		pensamento estratégico é a existência de diálogos com os atores fundamentais (administração
		pública nacional, local e desconcentrada, setor aeronáutico, setores privados, academia,
		organizações não governamentais, cidadãos) ao longo de todo o processo, seguindo uma estratégia
		de comunicação. São privilegiadas as ferramentas digitais para acesso ao público mais alargado.
	</p>
	<p>
		Os diálogos desde já previstos incluem: uma página de internet para informação e colocação de
		questões que serão respondidas de forma sistemática e agregada; uma plataforma interativa
		dirigida por objetivos em diferentes fases do processo; mesas temáticas, construídas e
		desenvolvidas em função de temas estratégicos de natureza técnico-científica; e as consultas
		institucionais e públicas nos momentos previstos pela legislação em vigor.
	</p>
</PageContainer>
