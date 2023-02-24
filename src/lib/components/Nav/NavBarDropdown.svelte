<script lang="ts">
	import { navigating } from '$app/stores';
	import { clickOutside } from '@/utils/clickOutside';

	export let label: string = '';

	let hidden = true;

	const handleDropdown = () => {
		hidden = !hidden;
	};

	$: if ($navigating && !hidden) hidden = !hidden;
</script>

<li use:clickOutside={() => !hidden && handleDropdown()} class="relative">
	<button on:click={() => handleDropdown()}>{label}</button>
	<div class:hidden class="bg-blue-dark absolute mt-4 -ml-4 min-w-[calc(100%+2rem)] z-10">
		<slot>
			<ul>
				<slot />
			</ul>
		</slot>
	</div>
</li>
