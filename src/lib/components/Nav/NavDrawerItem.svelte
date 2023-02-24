<script lang="ts">
	import { page } from '$app/stores';
	export let href: string = '/';
	export let label: string = '';
</script>

<li class:underline={$page.url.pathname === href} class="underline-offset-8">
	<a {href}>{label}</a>
</li>
