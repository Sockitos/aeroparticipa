<script>
	import Footer from '@/components/Footer.svelte';
	import Header from '@/components/Header.svelte';
	import '../app.postcss';
</script>

<div class="min-h-screen flex flex-col">
	<Header />
	<div class="grow bg-background"><slot /></div>
	<Footer />
</div>
