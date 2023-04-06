<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import Footer from '@/components/Footer.svelte';
	import Header from '@/components/Header.svelte';
	import Popup from '@/components/Popup.svelte';
	import '../app.css';
</script>

<div class="min-h-screen flex flex-col">
	<a href="#main" class="sr-only">Saltar para o conteúdo principal da página</a>
	<Header />
	<main id="main" class="grow bg-background"><slot /></main>
	<Footer />
</div>
{#if $page.url.pathname != base + '/'}
	<Popup />
{/if}
