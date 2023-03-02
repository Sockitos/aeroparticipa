<script>
	import { base } from '$app/paths';
	import ArrowLink from '@/components/ArrowLink.svelte';
</script>

<div class="relative">
	<div class="absolute w-full h-full flex flex-row ">
		<div class="bg-background grow" />
		<img src="{base}/svgs/header_decoration.svg" alt="" class="g-white h-full p-2" />
	</div>
	<div class="relative container py-10 md:py-16">
		<img
			src="{base}/svgs/espaco_de_dialogo.svg"
			alt="Espaço de diálogo sobre o novo aeroporto de Lisboa"
			class="pb-4 max-w-4xl"
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
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
			voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
			non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</p>

		<div class="pt-10 pb-8 flex justify-start">
			<ArrowLink label="Saber mais" href="{base}/processo-de-participacao" />
		</div>
	</div>
</div>
