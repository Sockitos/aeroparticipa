<script lang="ts">
	import { base } from '$app/paths';
</script>

<div class="relative">
	<div class="absolute w-full h-full flex flex-row bg-grey">
		<div class="grow" />
		<img
			src="{base}/svgs/header_decoration_alt.svg"
			alt="decoration"
			height="334.89"
			width="116.07"
			class="h-full w-auto p-2"
		/>
	</div>
	<div class="relative container min-h-[16rem] flex items-center justify-center">
		<h1 class="max-w-4xl text-3xl md:text-5xl font-bold text-center text-black"><slot /></h1>
	</div>
</div>
