<script>
	import { base } from '$app/paths';
	import ArrowLink from '@/components/ArrowLink.svelte';
</script>

<div class="relative">
	<div class="absolute w-full h-full flex flex-row ">
		<div class="bg-background grow" />
		<img src="{base}/svgs/header_decoration.svg" alt="" class="bg-white h-full p-2" />
	</div>
	<div class="relative container py-10 md:py-16 pr-24 md:pr-32">
		<img
			src="{base}/svgs/espaco_de_dialogo.svg"
			alt="Espaço de diálogo sobre o novo aeroporto de Lisboa"
			class="pb-4 max-w-4xl hidden md:block"
		/>
		<img
			src="{base}/svgs/espaco_de_dialogo_alt.svg"
			alt="Espaço de diálogo sobre o novo aeroporto de Lisboa"
			class="pb-4 max-w-4xl md:hidden"
		/>
	</div>
</div>
<div class="bg-plane bg-cover bg-center bg-blue bg-blend-multiply">
	<div class="container py-10 md:py-16">
		<img src="{base}/svgs/opiniao.svg" alt="Queremos a sua opinião" class="max-w-xl pb-10" />
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
			class="max-w-2xl pb-10"
		/>
		<p class="max-w-3xl text-black text-xl">
			Convidamos à participação neste processo, ao longo de três fases.
		</p>
		<img
			src="{base}/images/faseamento_aae.png"
			alt="Faseamento do processo de participaçã"
			class="w-full max-w-4xl p-4"
		/>
		<div class="pt-10 pb-8 flex justify-start">
			<ArrowLink label="Saber mais" href="{base}/processo-de-participacao" />
		</div>
	</div>
</div>
