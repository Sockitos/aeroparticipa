<script lang="ts">
	import { page } from '$app/stores';
	export let href: string = '/';
	export let label: string = '';
</script>

<li class="px-4 py-2 border-t-2 border-blue-light">
	<a {href} class:underlinex={$page.url.pathname === href} class="hover:text-blue-light">{label}</a>
</li>
