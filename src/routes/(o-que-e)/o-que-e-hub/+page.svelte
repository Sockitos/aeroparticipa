<script>
	import { base } from '$app/paths';
	import PageContainer from '@/components/PageContainer.svelte';
	import PageHeader from '@/components/PageHeader.svelte';
</script>

<PageHeader>O que é<br />um HUB Aeroportuário?</PageHeader>
<PageContainer>
	<p>
		Existem várias definições para um HUB. De uma forma simples considera-se um hub como uma place
		giratória onde se concentra grande número de voos a determinadas horas.
	</p>
	<p>
		O Hub Aeroportuário é assim um ponto de concentração estruturada de operações de voos
		comerciais, num determinado período de tempo.
	</p>
	<div class="py-8">
		<img
			src="{base}/images/hub_1.png"
			alt="Esquema representativo de um hub"
			class="w-full p-4 bg-grey"
		/>
		<p class="text-center pt-4">Figura 1 - Esquema representativo de um hub</p>
	</div>
	<h3 class="text-2xl font-bold pt-6">
		Como se define a estrutura funcional de um hub aeroportuário?
	</h3>
	<p>
		A estrutura funcional de um hub aeroportuário é definida por ondas de chegadas e partidas de
		voos, dentro de uma faixa horária estreita, tipicamente entre 1 a 2 horas. Nesse período os voos
		chegam de um lado do mundo e distribuem os passageiros que trazem a bordo para outros voos,
		noutras partes do mundo. Por exemplo, no hub da TAP em Lisboa os passageiros do Brasil chegam a
		Lisboa nos voos da TAP e são distribuídos para outros destinos, na Europa, Africa, Ásia, etc.,
		também com a TAP ou com outras companhias.
	</p>
	<p>
		Na perspetiva dos passageiros a qualidade de um HUB é dada por três fatores básicos: reduzido
		tempo de transferência (1 a 2h), conforto dos espaços durante essa transferência, diversidade de
		atividades oferecidas durante essas transferências. Muitos passageiros frequentes, conhecedores
		dos vários hubs existentes nas redes de transporte aéreo, escolhem as suas viagens em função do
		hub onde querem fazer a transferência.
	</p>
	<h3 class="text-2xl font-bold pt-6">Porquê que é que o hub de Lisboa é importante?</h3>
	<p>
		Na rede mundial de transporte aéreo os hubs são os nós da rede mundial de transporte aéreo, onde
		se realizam as transferências de tráfego (passageiros e mercadorias). Na Europa as cidades que
		detêm os principais Hubs são Madrid, Londres, Paris, Frankfurt, Schiphol, Munique.
	</p>
	<p>
		Do ponto de vista do funcionamento de um aeroporto, o hub é uma operação com muito interesse.
		Concentra passageiros, mercadorias e movimentos de aviões, todos eles elementos da receita
		aeroportuária, e aumenta a conectividade. Um aeroporto hub com muito movimento oferece várias
		ondas de transferência de tráfego ao longo do dia. A imagem 2 tenta mostrar esse efeito.
	</p>
	<div class="py-8">
		<img src="{base}/images/hub_2.png" alt="" class="w-full p-4 bg-grey" />
		<p class="text-center pt-4">Figura 2 -</p>
	</div>
	<p>
		Durante essas ondas do Hub a pressão sobre serviços é muito elevada. O aeroporto tem de oferecer
		um desempenho exemplar em todas as dimensões. Qualquer elemento que falhe, gera perturbações no
		fluxo de passageiros que recorrem ao hub, colocando em risco a chegada ao destino final.
	</p>
	<p>
		O hub é uma operação complexa, que pode usar a quase totalidade da capacidade aeroportuária no
		período de maior utilização, tendo assim implicações para o dimensionamento das instalações.
	</p>
</PageContainer>
