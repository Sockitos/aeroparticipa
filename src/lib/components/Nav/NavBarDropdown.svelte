<script lang="ts">
	import { navigating } from '$app/stores';

	export let label: string = '';

	let hidden = true;

	$: if ($navigating && !hidden) hidden = !hidden;
</script>

<li on:mouseleave={() => (hidden = true)} class="relative">
	<button on:mouseenter={() => (hidden = false)} class="hover:text-blue-light">{label}</button>
	<div class:hidden class="bg-blue-dark absolute pt-4 -ml-4 min-w-[calc(100%+2rem)] z-10">
		<ul>
			<slot />
		</ul>
	</div>
</li>
