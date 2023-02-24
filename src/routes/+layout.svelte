<script lang="ts">
	import '../app.css';
	import Footer from '@/components/Footer.svelte';
	import Header from '@/components/Header.svelte';
</script>

<div class="min-h-screen flex flex-col">
	<Header />
	<div class="grow bg-background"><slot /></div>
	<Footer />
</div>
