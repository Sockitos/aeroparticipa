<script lang="ts">
	export let label: string = '';
	export let href: string = '';
	export let isLight: boolean = false;
	export let isSmall: boolean = false;
</script>

<a {href}>
	<div
		class="flex flex-row {isSmall ? 'space-x-1' : 'space-x-2'}  items-center justify-center {isLight
			? 'text-blue-light hover:text-white fill-blue-light hover:fill-white'
			: 'fill-blue-accent hover:fill-blue-light text-blue-accent hover:text-blue-light'}"
	>
		<span
			class="underline {isSmall ? 'text-lg underline-offset-4' : 'text-2xl underline-offset-8'}"
		>
			{label}
		</span>
		<svg
			class={isSmall ? 'h-6 w-6' : 'h-10 w-10'}
			viewBox="0 96 960 960"
			xmlns="http://www.w3.org/2000/svg"
			><path d="m561 814-43-42 168-168H160v-60h526L517 375l43-42 241 241-240 240Z" />
		</svg>
	</div>
</a>
