<script>
	import { base } from '$app/paths';
	import PageContainer from '@/components/PageContainer.svelte';
	import PageHeader from '@/components/PageHeader.svelte';
</script>

<svelte:head>
	<title>AeroParticipa - Mesas Temáticas</title>
</svelte:head>

<PageHeader>Mesas<br />Temáticas</PageHeader>
<PageContainer>
	<p>
		As mesas temáticas são grupos de reflexão sobre temas identificados pela Comissão Técnica
		Independente como estratégicos para a avaliação das opções para aumento da capacidade
		aeroportuária para a região de Lisboa. São quatro as mesas temáticas:
	</p>
	<ol>
		<li>
			<a href="{base}/mesas-tematicas/1/">
				<b>Que estratégia de desenvolvimento o aeroporto vai servir?</b>
			</a>
			<br />Coordenador: Fernando Alexandre, UMInho
		</li>
		<li>
			<a href="{base}/mesas-tematicas/2/">
				<b>Como articular os principais sistemas de transporte na região de Lisboa?</b>
			</a>
			<br />Coordenador: Paulo Pinho, FEUPorto
		</li>
		<li>
			<a href="{base}/mesas-tematicas/3/">
				<b
					>Que fatores ambientais e climáticos condicionam a expansão aeroportuária na região de
					Lisboa?</b
				>
			</a>
			<br />Coordenador: Teresa Fidélis, UAveiro
		</li>
		<li>
			<a href="{base}/mesas-tematicas/4/">
				<b>Que modelo de aeroporto queremos?</b>
			</a>
			<br />Coordenador: Rosário Macário, IST-ULisboa
		</li>
	</ol>
	<p>
		As mesas temáticas contam com cerca de 20 participantes cada uma, cobrindo um amplo conjunto de
		perspectivas plurais sobre os temas em discussão. As perspectivas representam as preocupações
		territoriais e ambientais, o interesse público e privado e o interesse da sociedade civil. Todos
		os membros da Comissão Técnica Independente participam nas mesas temáticas como observadores,
		exceto o seu coordenador que lidera a sessão. Cada mesa temática terá duas a três sessões até ao
		final de março de 2023. O diálogo numa mesa temática poderá eventualmente prolongar-se nos meses
		seguintes se se justificar.
	</p>
	<p>
		Pretende-se com cada mesa temática alimentar um diálogo e uma discussão criativa, mantendo um
		olhar estratégico sobre o tema da respetiva mesa e a sua relevância para a avaliação estratégica
		e a decisão sobre a capacidade aeroportuária da Região de Lisboa. Os resultados das mesas
		temáticas deverão contribuir para a definição e consolidação dos critérios de viabilidade
		técnico-científica que irão permitir a triagem das opções estratégicas, concluindo a fase 1 da
		AAE.
	</p>
	<h3>Lista de participantes de todas as mesas temáticas</h3>
	<p>
		<b>Participantes:</b> Acácio Pires, Ana Cristina Dourado, António Menezes, António Ramos Andrade,
		Augusto Mateus, Cabaço Martins, Carlos Antunes, Carlos Fernandes, Carlos Gaspar, Carlos Matias Ramos,
		Sergio Morais, Cristina Branquinho, Cristina Laginha, Daniel Traça, Duarte Silva, Emanuel Valpaços,
		Ernesto Martins de Brito, Faustino Gomes, Fernanda do Carmo, Fernando Marques, Fernando Santo, Filipe
		Moura, Francisco Calheiros, Francisco Ferreira, Francisco Furtado, Gonçalo Matos, Isabel Colher,
		Jaime Rodrigues Valadares, Joana Silva, João Amador, João Cabral, João Dias Coelho, João Moutinho,
		João Seixas, Joaquim Teodósio, Jorge Cancela, Jorge Palmeirim, José Alberto Rio Fernandes, José António
		Cortez, José Encarnação, José Félix Ribeiro, José Figueiredo, José Lopes, José Luís Zêzere, José
		Mendes, Luís Araújo, Luís Castro Henriques, Luís Picado Santos, Maria Albuquerque Silva, Maria Teresa
		Almeida, Marina Ferreira, Miguel Laranjeiro, Miguel Miranda, Nuno Bento, Paulo Teixeira, Pedro Ginjeira,
		Pedro Guedes Moreira, Ramiro Sequeira, Rodrigo Proença de Oliveira, Roger Vickerman, Rosário Oliveira,
		Rui Nobre Sequeira, Rui Ramos, Sérgio Barroso, Sofia Kalakou, Tomás Ribeiro, Tomaz Leiria Pinto,
		Vítor Domingues dos Santos, Vítor Pelado.
	</p>
</PageContainer>
