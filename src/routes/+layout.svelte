<script lang="ts">
	import { page } from '$app/stores';
	import Footer from '@/components/Footer.svelte';
	import Header from '@/components/Header.svelte';
	import Popup from '@/components/Popup.svelte';
	import '../app.css';
</script>

<div class="min-h-screen flex flex-col">
	<Header />
	<div class="grow bg-background"><slot /></div>
	<Footer />
</div>
{#if $page.url.pathname != '/'}
	<Popup />
{/if}
