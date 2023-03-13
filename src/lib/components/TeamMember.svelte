<script lang="ts">
	export let title: string = '';
	export let name: string = '';
	export let description: string = '';
	export let imageSrc: string = '';
</script>

<div
	class="flex flex-col items-center space-y-6 text-center md:flex-row md:items-start md:justify-between md:space-y-0 md:space-x-12 md:text-start"
>
	<img src={imageSrc} alt={name} height="600" width="600" class="w-40 h-40" />
	<div class="grow flex flex-col">
		<span class="text-blue-accent font-bold">{title}</span>
		<span class="font-bold pb-4">{name}</span>
		<span>{@html description}</span>
	</div>
</div>
