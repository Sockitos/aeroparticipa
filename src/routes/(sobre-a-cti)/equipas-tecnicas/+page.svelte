<script lang="ts">
    import { base } from '$app/paths';
    import PageContainer from '@/components/PageContainer.svelte';
    import PageHeader from '@/components/PageHeader.svelte';
    import TeamMember from '@/components/TeamMember.svelte';
</script>

<svelte:head>
    <title>AeroParticipa - Equipas Técnicas</title>
</svelte:head>

<PageHeader>Equipas Técnicas<br />Comissão Técnica Independente</PageHeader>
<PageContainer>
    <div class="not-prose space-y-14">
        <h2 class="text-2xl font-bold text-blue pb-6">PT1 - Estudos de Procura</h2>
        <TeamMember
            imageSrc="{base}/images/bios/PT1ANA.png"
            name="Ana Vasconcelos"
            description="Licenciada em Engenharia do Ambiente (2003), mestre em Transportes (2006) e doutorada em Sistemas de Transportes em 2011, sempre no Instituto Superior Técnico. Foi investigadora durante cerca de 15 anos no Instituto de Engenharia Mecânica do Instituto Superior Técnico, desenvolvendo projetos de investigação na área da mobilidade sustentável, veículos alternativos, impactos energéticos e ambientais no setor dos transportes e na área da acessibilidade urbana e exposição a poluentes locais. Tem desenvolvido atividade na área do planeamento da mobilidade e acessibilidade urbanas, bem como na monitorização e avaliação dos sistemas de mobilidade, ou ainda na área dos estudos de procura, incluindo cálculo de benefícios sociais e ambientais e análise custo-benefício de projetos de transporte."/>
        <TeamMember
            imageSrc="{base}/images/bios/PT1FATIMA.png"
            name="Fátima Santos"
            description="Licenciada em Engenharia Civil e Mestre em Transportes, Pós-graduada em Marketing Research e CRM. Na TIS desde 1999, assume atualmente a Coordenação do Núcleo de Negócios e Desempenho. Tem desenvolvido as suas competências técnicas e profissionais na coordenação e execução de projetos em Portugal, Europa, Brasil e Cabo Verde nas áreas de Planeamento de Redes de Transportes, Estudos de Procura (incluindo procura aeroportuária) e de Viabilidade, de Mobilidade Urbana e Empresarial, Estudos de Impacte Ambiental, Áreas de Negócio Aeroportuárias e Estudos de Mercado no sector dos transportes e da mobilidade. Tem também participado no desenvolvimento de novos produtos de mobilidade (MaaS, apps e serviços de transporte). Ao longo dos anos participou em diversos projetos internacionais: Europa, Brasil e Cabo Verde."/>
        <TeamMember
            imageSrc="{base}/images/bios/PT1JOSE.png"       
            name="José Manuel Viegas"
            description="Doutor em Engenharia Civil, foi Professor Catedrático do Instituto Superior Técnico da Universidade de Lisboa, tendo chefiado o núcleo de investigação em Infraestruturas, Sistemas e Políticas de Transportes. Foi diretor nacional da Área de Sistemas de Transportes do programa MIT-Portugal entre 2007 e 2012. Foi secretário-geral do ITF (International Transport Forum na OCDE), uma organização intergovernamental com 59 países membros (2012-2017). Foi fundador e primeiro diretor-geral da Transportnet, um grupo de oito principais universidades europeias com estudos avançados em transportes. Foi ainda vice-presidente da Sociedade para a Conferência Mundial de Investigação sobre Transportes, de 1998 a 2007. Atualmente é Partner e Chairman da TIS.pt, do qual foi fundador em 1992, e na qual foi responsável por numerosos estudos de procura para todos os modos e em diferentes fases dos projetos respetivos. É consultor independente de várias organizações e empresas internacionais."/>
        <TeamMember
            imageSrc="{base}/images/bios/PT1PEDRO.png"      
            name="Pedro Santos"
            description="Licenciado em Geografia e Planeamento Regional e Mestre em Transportes (1995). Integra a equipa da TIS desde 1992, assumindo atualmente a Coordenação do Núcleo de Planeamento de Transportes. Ao longo da sua carreira tem desenvolvido as suas competências técnicas e profissionais na coordenação e execução de projetos em Portugal, Europa, Argélia e Brasil em áreas como: planeamento de redes de transportes, planos estratégicos de ordenamento do território e de mobilidade, modelação de procura e impactos de tráfego, estudos de procura para vários modos de transporte, incluindo a estimativa de benefícios sociais e ambientais de projetos de transporte."/>
        <h2 class="text-2xl font-bold text-blue pb-6">PT2 - Planeamento Aeroportuario</h2>
        <TeamMember
            imageSrc="{base}/images/bios/PT2JOAO.png"       
            name="João Mendonça"
            description="36 anos de experiência Aeronáutica. Atualmente técnico de Informação e Comunicações Aeronáuticas no Centro de Controlo Oceânico de Santa Maria e Centro de Controlo de Lisboa. 15 anos de experiência como Flight Procedure Designer na NAV Portugal."/>
        <TeamMember
            imageSrc="{base}/images/bios/PT2MANUEL.png"
            name="Manuel Araújo"
            description="36 anos de experiência Aeronáutica. Controlador de tráfego Aéreo da NAV Portugal tendo exercido funções na Área Oceânica de Santa Maria, Torre de Lisboa e Aproximação Radar de Lisboa. Actual responsável pelo Serviço de Procedimentos Aeronáuticos e de Espaço Aéreo da NAV Portugal."/>
        <TeamMember
            imageSrc="{base}/images/bios/PT2PATRICIA.png"       
            name="Patrícia Ferreira"
            description="Arquiteta Urbanista, com mais de 10 anos de experiência. Trabalhou a nível nacional e internacional, para países como Angola, Gabão, Namíbia e Marrocos, na elaboração de Projetos de Loteamento, Planos de Urbanização e de Pormenor, participando pontualmente em Projetos de Arquitetura. Experiência em Estudos de Viabilidade de Ocupação do Solo, Estudos Urbanísticos, Propostas de Ocupação de Unidades de Execução e Projetos de Loteamento. "/>
        <TeamMember
            imageSrc="{base}/images/bios/PT2SARA.png"
            name="Sara Silva"
            description="12 anos de experiência Aeronáutica. 10 anos como Controladora de Tráfego Aéreo. 2 anos como Flight Procedure Designer na NAV Portugal."/>
        <TeamMember
            imageSrc="{base}/images/bios/PT2VASCO.png"      
            name="Vasco Afonso"
            description="Engenheiro Civil, tem mais de 40 anos de experiência em desenvolvimento de infraestrutura aeronautica e fiscalização da sua construção, em Portugal e no estrangeiro. Especializado pela Universidade de Loughborough no Reino Unido. "/>
        <TeamMember
            imageSrc="{base}/images/bios/PT2VASCOM.png"
            name="Vasco Martins"
            description="Engenheiro Civil e Arquiteto, especialista em medição e orçamentação de projectos de construção, com mais de 30 anos de experiência."/>
        <TeamMember
            imageSrc="{base}/images/bios/PT2VASCOR.png"     
            name="Vasco Reis"
            description="Investigador no Centro de Investigação e Inovação em Engenharia Civil para a Sustentabilidade (CERIS) do Instituto Superior Técnico. Engenheiro Civil, Doutorado em Sistemas de Transportes com especialização em carga aérea, tem vindo a desenvolver o seu trabalho nos domínios do transporte aéreo e de mercadorias. Tem diversas publicações científicas e participação em mais de 30 projetos de investigação a nível nacional e internacional. É membro do comité de carga da Association for European Transport."/>
        <TeamMember
            imageSrc="{base}/images/bios/PT2VITOR.png"
            name="Vitor Rocha"
            description="Engenheiro Civil, Mestre em Investigação Operacional, especializado em Infraestruturas aeroportuárias pelas Universidades de Loughborough e Westminster no Reino Unido, tem mais de  40 anos de experiência em planeamento e desenvolvimento aeroportuário aplicada em Portugal e no estrangeiro.  "/>
        <h2 class="text-2xl font-bold text-blue pb-6">PT3 - Acessibilidades</h2>
        <TeamMember
            imageSrc="{base}/images/bios/PT3ANTONIO.png"        
            name="António Pais Antunes"
            description="Professor Catedrático da Universidade de Coimbra (UC), no Departamento de Engenharia Civil. É licenciado em Engenharia Civil pela UC (1978) e doutorado em Ciências Aplicadas pela Universidade de Lovaina (1994). Foi Investigador Visitante na Universidade de Princeton (1997/98), Professor Convidado na EPF Lausanne (2010/11), Professor Visitante no MIT (2013/14) e Investigador Convidado da Universidade de Bergamo (2018/19 e 2022/23). É membro da Direção do CITTA (Centro de Investigação do Território, Transportes e Ambiente), onde coordena o grupo de Análise e Planeamento de Transportes. Ao longo da carreira, os seus principais temas de investigação foram o planeamento de equipamentos coletivos e o planeamento de transportes, nomeadamente, nos últimos 15 anos, de transportes aéreos (companhias aéreas e aeroportos)."/>
        <TeamMember
            imageSrc="{base}/images/bios/PT3ANTONIOC.png"
            name="António Couto"
            description="Professor Catedrático da Faculdade de Engenharia da Universidade do Porto. Licenciado em Engenharia Civil, Doutorado e Agregado em Vias de Comunicação e Transportes, é atualmente Diretor do Centro de Investigação do Território, Transportes e Ambiente (CITTA-UP/UC). Foi desde 2018 Diretor do Mestrado em Gestão da Mobilidade Urbana. Entre 2019 e 2023 foi Membro da Direcção Laboratório de Ensaio de Materiais de Construção. É desde 2007 responsável pedagógico da área de sistemas ferroviários da licenciatura e atual Mestrado em Engenharia Civil. Como consultor do instituto de interface da Faculdade de Engenharia da Universidade do Porto, Instituto da Construção, colaborou e coordenou diversos projetos na área dos transportes, com especial foco em estudos no âmbito do transporte ferroviário. "/>
        <TeamMember
            imageSrc="{base}/images/bios/PT3JOAO.png"       
            name="José Pedro Tavares"
            description="licenciado em Engenharia Civil pela Faculdade de Engenharia da Universidade do Porto (1989), mestre em Transportes pelo Instituto Superior Técnico (1995) e doutorado em Engenharia Civil pela Faculdade de Engenharia da Universidade do Porto, 2004. Ingressou na Faculdade de Engenharia da Universidade do Porto, na Secção de Vias de Comunicação do Departamento de Engenharia Civil (!993), tendo estado envolvido na docência, onde tem lecionado diferentes unidades curriculares da área dos Transportes e Vias de Comunicação nos diferentes ciclos. Foi Diretor do Laboratório de Análise de Tráfego sendo o atual coordenador da Secção de Vias de Comunicação e Transportes. Na sua investigação, dedica-se à área da Modelação de Sistemas de Transporte com principal enfoque à Gestão e Controlo de Tráfego, tendo colaborado/coordenado vários projetos de investigação nacionais e europeus. A nível profissional realizou diferentes estudos e consultorias no âmbito da mobilidade e tráfego, designadamente nas áreas de modelação de redes e de gestão e controlo de tráfego, tendo colaborado com diversas entidades públicas e privadas."/>
        <TeamMember
            imageSrc="{base}/images/bios/PT3MIGUEL.png"
            name="Miguel Serra"
            description="Licenciado em Arquitetura pela FAUP (1999), Mestre em Planeamento e Projecto do Ambiente Urbano (2008) e Doutorado em Engenharia Civil – Planeamento do Território e Ambiente (2014), graus conferidos pela Faculdade de Engenharia da Universidade do Porto. Foi Senior Research Associate no Space Syntax Laboratory, University College London (2013-2016) e, posteriormente (2016-2020), Honorary Research Associate no mesmo laboratório. Entre 2016 e 2022 foi Bolseiro de Pos-Doutoramento FCT no Centro de Investigação do Território, Transportes e Ambiente (CITTA-UP/UC), onde é atualmente Investigador Integrado. O seu trabalho centra-se na análise quantitativa de formas urbanas, através de sistemas de informação geográfica associados a técnicas de reconhecimento de padrões.."/>
        <TeamMember
            imageSrc="{base}/images/bios/PT3NELSOL.png"     
            name="Nelson Vila Pouca"
            description="Licenciado em Engenharia Civil pela Faculdade de Engenharia da Universidade do Porto (1983), Mestre em Estruturas (1992) e Doutorado em Engenharia Civil (2002) pela Faculdade de Engenharia da Universidade do Porto. Ingressou na atividade docente na Faculdade de Engenharia da Universidade do Porto em 1983 sendo atualmente Professor Auxiliar do DEC-Faculdade de Engenharia da Universidade do Porto. É Diretor do Núcleo de Reabilitação do Instituto para a Construção Sustentável (ICS) da UP e foi membro da Direção da Sociedade Portuguesa de Engenharia Sísmica (SPES) entre 2018 e 2022. Desenvolve trabalho de investigação aplicada na área das estruturas, especialmente dirigida para as áreas da engenharia sísmica e da reabilitação e reforço de estruturas, tendo colaborado em diversos projetos de investigação nacionais e internacionais. Na componente de consultoria na área de estruturas esteve envolvido em diversas obras relevantes com estruturas especiais, tais como, Metro Ligeiro do Porto (MP), Reabilitação da Linha Ferroviária da Beira Alta (IP) e Terminal de Cruzeiros de Lisboa (APL)."/>
        <TeamMember
            imageSrc="{base}/images/bios/PT3PEDRO.png"
            name="Pedro Mêda"
            description="Pedro Nuno Mêda Magalhães é Investigador no Instituto para a Construção Sustentável e Professor Convidado da Faculdade de Engenharia da Universidade do Porto. Licenciado em Eng. Civil, Mestre Integrado em Eng. Civil e PhD Candidate, desenvolve atividade de investigação, consultoria e formação na área da gestão de projetos, contratação pública, custos ciclo de vida, gestão da informação e sustentabilidade das construções. É membro do comité de normalização da ISO (TC 59 SC 13) e é autor e coautor de várias publicações na área da ferrovia."/>
        <h2 class="text-2xl font-bold text-blue pb-6">PT4 - Ambiente</h2>
        <TeamMember
            imageSrc="{base}/images/bios/PT4ALEX.png"       
            name="Alexandre Domingos"
            description="Mestrando em SIG e Modelação Territorial aplicados ao Ordenamento, no Instituto de Geografia e Ordenamento do Território. Integra o Centro de Estudos Geográficos como bolseiro de investigação do grupo RISKam. As suas áreas de atuação incidem na modelação espacial e análise de risco nos domínios da hidrologia, climatologia e geomorfologia"/>
        <TeamMember
            imageSrc="{base}/images/bios/PT4ANA.png"
            name="Ana Isabel Miranda"
            description="Professora Catedrática no Departamento de Ambiente e Ordenamento (DAO) da Universidade de Aveiro (UA). É membro do Laboratório Associado Centro de Estudos do Mar e Ambiente (CESAM) da UA, sendo a coordenadora da Linha Temática Sistemas Ambientais Integrados. É Diretora do Mestrado em Ambiente e Saúde. A sua área de atividade inclui os tópicos: incêndios florestais, modelação da qualidade do ar, avaliação de impacto ambiental, qualidade do ar em zonas urbanas, alterações climáticas e efeitos da poluição atmosférica na saúde. Tem vasta experiência de coordenação e participação em projetos de investigação na área da qualidade do ar."/>
        <TeamMember
            imageSrc="{base}/images/bios/PT4BEA.png"        
            name="Beatriz Rufino"
            description="Licenciada em Geografia e Planeamento Regional pela Faculdade de Ciências Sociais e Humanas e Mestranda em SIG e Modelação Territorial Aplicados ao Ordenamento, pelo Instituto de Geografia e Ordenamento do Território (IGOT). Tem desempenhado funções na área dos Sistemas de Informação Geográfica e do Ordenamento do Território, nomeadamente na produção de cartografia temática ambiental e territorial."/>
        <TeamMember
            imageSrc="{base}/images/bios/PT4EDU.png"
            name="Eduardo Silva"
            description="Professor Catedrático do Departamento de Geociências da Universidade de Aveiro e Investigador do Centro de Investigação GeoBioTec – Geobiociências, Geotecnologias e Geoengenharias; Licenciado em Engenharia Geológica; Doutor em Geociências; Coordenador do Grupo de Investigação Sistemas Ambientais Complexos do Centro de Investigação GeoBioTec; Coordenador do Observatório OHM – Estarreja financiado pelo CNRS (França) e do Portuguese Chapter on Medical Geology."/>
        <TeamMember
            imageSrc="{base}/images/bios/PT4HELDER.png"     
            name="Helder Relvas"
            description="Doutor em Ciências e Engenharia do Ambiente pela Universidade de Aveiro. Investigador Júnior e membro integrado do CESAM - Centro de Estudos do Ambiente e do Mar. Possui uma vasta experiência em projetos de I&D relacionados com a poluição atmosférica e os seus impactos na saúde, tanto a nível nacional como internacional."/>
        <TeamMember
            imageSrc="{base}/images/bios/PT4JOAO.png"       
            name="João Lourenço Marques"
            description="Professor Associado com Agregação do Departamento de Ciências Sociais, Políticas e do Território da Universidade de Aveiro e diretor do Mestrado de Ciência de Dados para Ciências Socais. É investigador e membro integrado da Unidade de Investigação em Governação, Competitividade e Políticas Públicas (GOVCOPP), coordenando o Grupo de Sistemas de Apoio à Decisão."/>
        <TeamMember
            imageSrc="{base}/images/bios/PT4JORGE.png"
            name="Jorge Cancela"
            description="Professor Auxiliar da Faculdade de Arquitetura da Universidade de Lisboa. Arquiteto-paisagista, Mestre em Gestão Ambiental, Doutor em Urbanismo.  Foi Presidente da Associação Portuguesa de Arquitetos Paisagistas (APAP), e membro do Conselho Nacional de Ambiente e Desenvolvimento Sustentável (CNADS). Larga experiência de elaboração e coordenação de estudos biofísicos, planos de ordenamento do território, gestão e conservação de áreas rurais e classificadas e projetos de valorização sócio-ambiental da paisagem."/>
        <TeamMember
            imageSrc="{base}/images/bios/PT4JOSELZ.png"     
            name="José Luís Zêzere"
            description="Professor Catedrático do Instituto de Geografia e Ordenamento do Território da Universidade de Lisboa e Diretor do Centro de Estudos Geográficos. Vice-Presidente do CERG (European Centre on Geomorphological Hazards), do Conselho da Europa. Coordenador das equipas de Riscos e Proteção Civil na elaboração dos Planos Regionais de Ordenamento do Território (PROT) do Oeste e Vale do Tejo e Área Metropolitana de Lisboa."/>
        <TeamMember
            imageSrc="{base}/images/bios/PT4SANDRA.png"
            name="Sandra Rafael"
            description="Doutora em Ciências e Engenharia do Ambiente pela Universidade de Aveiro. É responsável técnica no Instituto do Ambiente e Desenvolvimento. Tem vasta experiência na área da modelação da qualidade do ar e alterações climáticas, e nas suas áreas de interface, nomeadamente saúde humana e mobilidade, tendo integrado vários projetos de investigação nacionais e internacionais. Tem integrado equipas multidisciplinares em contexto de Avaliação Ambiental Estratégica. É membro da rede MedECC - Rede de Especialistas do Mediterrâneo em Alterações Ambientais e Climáticas"/>
        <TeamMember
            imageSrc="{base}/images/bios/PT4SERGIO.png"     
            name="Sergio Bento"
            description="Licenciado em Planeamento Regional e Urbano pela Universidade de Aveiro e com Pós-Graduação em Engenharia e Planeamento de Recursos Naturais, pela Faculdade de Ciências da Universidade Católica Portuguesa. Desde 1997, que integra a equipa do IDAD, desempenhando funções na área da consultadoria em Avaliação de Impacte Ambiental, Avaliação Ambiental Estratégica, Sistemas de Informação Geográfica. Com 26 anos de experiência como consultor ambiental nas áreas de ordenamento do território, sócio-economia e consultor em Sistemas de Informação Geográfica, nomeadamente no desenvolvimento de bases de dados geográficas."/>
        <TeamMember
            imageSrc="{base}/images/bios/PT4SONIA.png"
            name="Sónia Rodrigues"
            description="Professora Auxiliar no Departamento de Ambiente e Ordenamento da Universidade de Aveiro. Licenciada em Engenharia do Ambiente, Mestre em Gestão e Políticas Ambientais, e Doutora em Ciências e Engenharia do Ambiente. Membro integrado do CESAM (Centro de Estudos do Ambiente e do Mar), coordenou o grupo de investigação de “Processos Biogeoquímicos e Poluentes” entre 2018 e 2023. Experiência em coordenação e participação em projetos nacionais e internacionais na área da qualidade de solos, proteção de solos agrícolas, e recuperação de solos degradados."/>
        <TeamMember
            imageSrc="{base}/images/bios/PT4TERESA.png"
            name="Teresa Condesso de Melo"
            description="Professora Auxiliar, com doutoramento em Geociências e especialização em Hidrogeologia, no Departamento de Engenharia de Recursos Minerais e Energéticos do Instituto Superior Técnico, Universidade de Lisboa. É membro efetivo da unidade de investigação CERIS - Investigação e Inovação em Engenharia Civil para a Sustentabilidade e co-coordenadora do programa de Mestrado Erasmus Mundus Groundwater and Global Changes (GroundwatCH). Experiência internacional em diversos projetos de investigação e consultoria sobre gestão integrada de recursos hídricos."/>
            <h2 class="text-2xl font-bold text-blue pb-6">PT5 - Estudos Economico-Financeiros</h2>
        <TeamMember
            imageSrc="{base}/images/bios/PT5AMILCAR.png"        
            name="Amilcar Arantes"
            description="Professor Auxiliar do Instituto Superior Técnico da Universidade de Lisboa da área de Sistemas e Gestão do Departamento de Engenharia Civil, Arquitetura e Georrecursos. Foi Professor Convidado da UNL/FE (1999-2010) e do ISCTE-IUL (2017-2019), e Vogal do Conselho Diretivo do Instituto Nacional de Administração, I.P. (2006-2007). As suas áreas de investigação incluem Políticas Públicas, Processos de decisão, Gestão de projetos, Gestão logística, Gestão da cadeia de abastecimento e Compras. Tem desempenhado atividades de cooperação e consultoria em vários projetos com instituições nacionais e estrangeiras. "/>
        <TeamMember
            imageSrc="{base}/images/bios/PT5CARLOS.png"
            name="Carlos Oliveira Cruz"
            description="Professor Associado com Agregação no Departamento de Engenharia Civil do Instituto Superior Técnico (Universidade de Lisboa) e Professor Convidado da Fundação Getúlio Vargas (Rio de Janeiro). Consultor de entidades nacionais e internacionais em projetos de avaliação de investimentos em transportes. Foi Visiting Scholar na Kennedy School of Government (Harvard University) e coordenou em 2021 o estudo sobre Sistema de Transportes em Portugal da Fundação Francisco Manuel dos Santos."/>
        <TeamMember
            imageSrc="{base}/images/bios/PT5DIOGO.png"      
            name="Diogo Ferreira"
            description="Mestre em Economia pela Universidade do Minho, tendo sido laureado com o “Prémio Mérito Escolar”. A sua tese de mestrado, intitulada “Innovation and produbiosvity: impact assessment of copromotion projects”, foi distinguida entre as dez melhores no Prémio José da Silva Lopes de 2022 atribuído pelo Banco de Portugal. Atualmente, encontra-se inscrito no programa doutoral de Economia na UMinho, na qual desempenha funções como Assistente Convidado."/>
        <TeamMember
            imageSrc="{base}/images/bios/PT5JOAO.png"
            name="João Fragoso Januário"
            description="Mestre em Engenharia Civil pelo Instituto Superior Técnico (IST), no ramo de Urbanismo, Transportes e Sistemas, pós-graduado em Enterprise Data Science & Analytics pela Universidade Nova de Lisboa (Nova IMS) e doutorando em Engenharia Civil no IST. É investigador no Civil Engineering Research and Innovation for Sustainability (CERIS) e docente convidado no IST. É autor de publicações em revistas internacionais nas áreas de economia de transportes e do imobiliário. Desenvolveu ainda estudos científicos para a Fundação Francisco Manuel dos Santos na área das infraestruturas de transporte em Portugal. "/>
        <TeamMember
            imageSrc="{base}/images/bios/PT5MIGUEL.png"
            name="Miguel Portela"
            description="Doutorado em Economia pela Universidade de Amesterdão. É Professor Catedrático na Universidade do Minho, Diretor do Núcleo de Investigação em Políticas Económicas e Empresariais (NIPE) e Coeditor do Portuguese Economic Journal. É consultor do Banco de Portugal e é membro do Conselho Português para a Produtividade. Produziu também relatórios de avaliação e de apoio à definição de políticas públicas."/>
        <h2 class="text-2xl font-bold text-blue pb-6">PT6 - Juridico</h2>
        <TeamMember
            imageSrc="{base}/images/bios/PT6JOANA.png"      
            name="Joana Neto dos Anjos"
            description="Assistente Convidada da Faculdade de Direito da Universidade de Coimbra onde leciona, desde 2016, as disciplinas de Direito Constitucional e Direito Fiscal. Leciona ainda, desde 2023, a disciplina de Direito Administrativo na Faculdade de Direito da Universidade Católica Portuguesa – Escola do Porto. Doutoranda em Direito Público, conta com várias participações em congressos e conferências, com obra publicada no domínio do direito administrativo regulatório, direito ambiental, direito constitucional e direito tributário."/>
        <TeamMember
            imageSrc="{base}/images/bios/PT6MANUEL.png"
            name="Manuel Fontaine Campos"
            description="Professor Associado na Escola do Porto da Faculdade de Direito da Universidade Católica Portuguesa, onde exerce, desde 2013, as funções de Diretor. Foi, de 2017 a 2021, Vice-Presidente do Centro Regional do Porto da Universidade Católica. Professor Convidado na Escola de Direito da Universidade do Minho, na Universidade de São José (Macau) e na Universidade Pontifícia Comillas (Madrid). Foi advogado e é jurisconsulto. Autor de diversos artigos e livros publicados em Direito Público, Direito da União Europeia e Direito Mundial do Comércio. Especialista em Auxílios de Estado e Subvenções."/>
        <TeamMember
            imageSrc="{base}/images/bios/PT6MARIA.png"      
            name="Maria Zagallo"
            description="Advogada, sócia da PLMJ Advogados, SP, RL, Coordenadora da Unidade Técnica de Acompanhamento de Projetos (UTAP) e membro do Conselho Permanente do Conselho Superior de Obras Públicas até 2021, especialista em direito administrativo, contratos públicos e parcerias público-privadas, tendo estado envolvida e representado o Estado Português no acompanhamento de diversos projetos públicos, incluindo no sector aeroportuário e no que respeita à execução e renegociação dos contratos de concessão celebrados com a ANA – Aeroportos de Portugal, S.A. e a ANAM, S.A.."/>
        <TeamMember
            imageSrc="{base}/images/bios/PT6PEDRO.png"
            name="Pedro Santos Azevedo"
            description="Licenciado, Mestre e Doutorando na Faculdade de Direito da Universidade de Lisboa. É assistente convidado na referida instituição e investigador do Lisbon Public Law Research Centre. Tem vasta obra publicada nas áreas do direito administrativo e da contratação pública, disciplinas nas quais intervém frequentemente como orador em conferências e cursos."/>
        <h2 class="text-2xl font-bold text-blue pb-6">PT7 – Organização Geral da AAE</h2>
        <TeamMember
            imageSrc="{base}/images/bios/PT7MARTA.png"      
            name="Marta"
            description="Designer de comunicação e investigadora em design. Em 2016, decidiu dedicar-se à sua prática independente (studio-m.design) e à investigação. É licenciada em Design de Comunicação e mestre em Práticas Tipográficas e Editoriais pela Faculdade de Belas Artes, U. Lisboa. Encontra-se a terminar o doutoramento em Digital Media pelo Técnico, U. Lisboa, no Interactive Technologies Institute (ITI). Os seus interesses de investigação residem na intersecção entre diferentes meios e o seu potencial comunicacional. O seu doutoramento foca-se em projetos de interação relacionados com a sustentabilidade, concentrando-se particularmente em comunicar as alterações climáticas de forma positiva, personalizada, e focada em acção."/>
        <TeamMember
            imageSrc="{base}/images/bios/PT7NUNO.png"       
            name="Nuno Jardim Nunes"
            description="Professor Catedrático do Técnico da Universidade de Lisboa onde preside ao Instituto de Tecnologias Interactivas (ITI) do LARSyS uma unidade de investigação de excelência na interseção entre o design, a interação e as tecnologias digitais. Nuno é co-Director da parceria internacional com a Universidade de Carnegie Mellon onde é professor convidado no Human-Computer Interaction Institute (HCII). Nuno é um defensor do papel do design na cultura participada e na sustentabilidade. A sua investigação influencia como as tecnologias digitais (de sensores a inteligência artificial, histórias interactivas e realidade mista) podem envolver e inspirar a cidadania inclusiva e sustentável. Os seus contributos levaram à criação da visão para uma Bauhaus do Mar que será proposta como uma das cinco redes temáticas Europeias."/>
        <TeamMember
            imageSrc="{base}/images/bios/PT7TRAVIS.png"     
            name="Travis Kriplean"
            description="Travis has been working in the democratic / consensus-building space for 18 years. His primary contribution is the open source deliberation and opinion visualization platform Consider.it, which has been used by thousands of communities worldwide, from cities like Seattle and Denver engaging the public on contentious planning issues to organizations like Mozilla Foundation engaging their community on strategic pivots. Travis created Consider.it and several other tools as part of his Computer Science dissertation at the University of Washington where he explored Designing for Reflective Public Dialogue. The animating spirit of his work is the observation that we've largely designed our communication technology to be easy to speak into, but difficult to actively listen through, missing out on the important roles that listening plays in creating common ground."/>
            </div>
</PageContainer>
