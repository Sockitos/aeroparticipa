<script lang="ts">
	import { page } from '$app/stores';
	export let href: string = '/';
	export let label: string = '';
</script>

<li class:underlinex={$page.url.pathname === href}>
	<a {href} class="hover:text-blue-light">{label}</a>
</li>
