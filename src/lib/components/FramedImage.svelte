<script lang="ts">
	export let src: string;
	export let alt: string;
	export let height: string;
	export let width: string;
	export let index: string;
	export let caption: string;
</script>

<div class="p-4 bg-grey">
	<img {src} {alt} {height} {width} class="w-full h-auto" />
</div>
<p class="text-center">Figura {index} - {@html caption}</p>
