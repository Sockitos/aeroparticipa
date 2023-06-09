<script lang="ts">
	import { base } from '$app/paths';
	import PageContainer from '@/components/PageContainer.svelte';
	import PageHeader from '@/components/PageHeader.svelte';
	import TeamMember from '@/components/TeamMember.svelte';
</script>

<svelte:head>
	<title>AeroParticipa - Composição da Comissão Técnica Independente</title>
</svelte:head>

<PageHeader>Composição da<br />Comissão Técnica Independente</PageHeader>
<PageContainer>
	<div class="space-y-14">
		<TeamMember
			imageSrc="{base}/images/cti/MRP.png"
			title="Coordenação-Geral"
			name="Professora Maria do Rosário Partidário"
			description="Professora Catedrática do IST-UL em Planeamento, Urbanismo e Ambiente no Departamento de Engenharia Civil, especialista em avaliação ambiental estratégica (AAE), autora da metodologia de pensamento estratégico para a sustentabilidade - ST4S (<i>Strategic thinking for sustainability</i>), recebeu o <i>Life-Time Achievement Award</i> da <i>International Association for Impact Assessment</i> em 2015 pelos seus contributos internacionais para o desenvolvimento da AAE."
		/>
		<TeamMember
			imageSrc="{base}/images/cti/NMC.png"
			title="PT1"
			name="Professor Nuno Marques da Costa "
			description="Professor Associado do instituto de Geografia e Ordenamento do Território da Universidade de Lisboa (IGOT-UL) e investigador do Centro de Estudos Geográficos do IGOT-UL , Licenciado em Geografia; Mestre em Geografia Humana e Planeamento Regional e Local, Doutor em Geografia; Coordenador do Mestrado de SIG e Modelação Territorial aplicados ao Ordenamento do Território; Co-coordenador da Rede-Mov UL."
		/>
		<TeamMember
			imageSrc="{base}/images/cti/RM.png"
			title="PT2"
			name="Professora Rosário Macário"
			description="Professora Associada do IST-UL, Doutorada em Sistemas de Transportes e Agregada em Engenharia Civil. Professora (convidada) de Transporte Aéreo da Faculdade de Economia Aplicada, Universidade de Antuérpia. Tem Licença ICAO de oficial de operações de voo, e 20 anos de experiência em planificação e supervisão de operações de transporte aéreo."
		/>
		<TeamMember
			imageSrc="{base}/images/cti/PP.png"
			title="PT3"
			name="Professor Paulo Pinho"
			description="Professor Catedrático Aposentado da FEUP. Licenciado em Engª Civil, Doutorado e Agregado em Planeamento e Ambiente, foi o Fundador e Diretor, até à sua aposentação, do CITTA-UP/UC. Foi ainda Secretário-Geral da AESOP, Membro do CSOP, Consultor da CE-DGXI, Consultor do MAOT e Assessor da CCDRN."
		/>
		<TeamMember
			imageSrc="{base}/images/cti/TF.png"
			title="PT4"
			name="Professora Teresa Fidelis"
			description="Professora Auxiliar com Agregação em Ciências e Engenharia do Ambiente (ramo Planeamento e Governação Ambiental) no Dep. de Ambiente e Ordenamento, Universidade de Aveiro e investigadora no GOVCOPP. Foi Presidente da ARH do Centro, IP., do Polis Litoral Ria de Aveiro, SA., e Diretora Regional do Centro do ICNF, IP. Integrou projetos internacionais de investigação sobre território e recursos hídricos, avaliações ambientais estratégicas e avaliações ex-ante."
		/>
		<TeamMember
			imageSrc="{base}/images/cti/FA.png"
			title="PT5"
			name="Professor Fernando Alexandre"
			description="Doutorado em Economia pela Universidade de Londres. Professor Associado com Agregação da Universidade do Minho e vice-presidente do Conselho Económico e Social. Autor de oito livros sobre a economia portuguesa. Em 2022, recebeu o Prémio de Mérito Científico da Universidade do Minho."
		/>
	</div>
</PageContainer>
