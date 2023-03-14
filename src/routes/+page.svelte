<script>
	import { base } from '$app/paths';
	import ArrowLink from '@/components/ArrowLink.svelte';
</script>

<svelte:head>
	<title>AeroParticipa</title>
</svelte:head>

<div class="relative">
	<div class="absolute w-full h-full flex flex-row ">
		<div class="bg-grey grow" />
		<img
			src="{base}/svgs/header_decoration.svg"
			alt=""
			height="649.89"
			width="190.06"
			class="h-full w-auto p-2"
		/>
	</div>
	<div class="relative container py-10 md:py-16 pr-24 md:pr-32">
		<img
			src="{base}/svgs/espaco_de_dialogo.svg"
			alt="Espaço de diálogo sobre o novo aeroporto de Lisboa"
			height="392.93"
			width="1538.89"
			class="pb-4 max-w-4xl w-full h-auto hidden md:block"
		/>
		<img
			src="{base}/svgs/espaco_de_dialogo_alt.svg"
			alt="Espaço de diálogo sobre o novo aeroporto de Lisboa"
			height="511.93"
			width="1172.16"
			class="pb-4 max-w-4xl w-full h-auto md:hidden"
		/>
	</div>
</div>
<div class="bg-plane bg-cover bg-center bg-blue bg-blend-multiply">
	<div class="container py-10 md:py-16">
		<img
			src="{base}/svgs/opiniao.svg"
			alt="Queremos a sua opinião"
			height="148.33"
			width="765.08"
			class="max-w-xl w-full h-auto pb-10"
		/>
		<div class="max-w-3xl text-white text-xl space-y-5">
			<p>
				Os estudos técnico-científicos dão-nos factos e evidências, mas a percepção dos problemas,
				as preferências e as prioridades exprimem-se frequentemente pela opinião dos interessados,
				que são igualmente importantes quando se trata de decisões estratégicas.
			</p>
			<p>Este espaço de diálogo é para falarmos consigo! Dê-nos a sua opinião, participe!</p>
		</div>

		<div class="pt-10 pb-8 flex justify-start">
			<ArrowLink label="Quero participar" href="https://aeroparticipa.eu.consider.it/" isLight />
		</div>
	</div>
</div>
<div class="bg-grey">
	<div class="container py-10 md:py-16">
		<img
			src="{base}/svgs/participacao.svg"
			alt="Processo de Participação"
			height="78.01"
			width="697.5"
			class="max-w-2xl w-full h-auto pb-10"
		/>
		<p class="max-w-3xl text-black text-xl pb-8">
			Convidamos à participação neste processo, ao longo de três fases.
		</p>
		<img
			src="{base}/images/faseamento_aae_min.png"
			alt="Faseamento do processo de participação"
			height="773"
			width="2002"
			class="w-full h-auto max-w-4xl"
		/>
		<div class="pt-10 pb-8 flex justify-start">
			<ArrowLink label="Saber mais" href="{base}/processo-de-participacao" />
		</div>
	</div>
</div>
