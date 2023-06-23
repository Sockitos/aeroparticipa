<script>
	import { base } from '$app/paths';
	import PageContainer from '@/components/PageContainer.svelte';
	import PageHeader from '@/components/PageHeader.svelte';
</script>

<svelte:head>
	<title>AeroParticipa - Relatórios</title>
</svelte:head>

<PageHeader>Relatórios</PageHeader>
<PageContainer>
	<h3 class="text-2xl font-bold">1º Relatório</h3>
	<p class="pb-5">
		A comissão técnica independente tem o prazer de enviar o relatório referente à primeira fase da
		avaliação ambiental estratégia, na sequência da 1ª Conferência da CTI, referente aos resultados
		obtidos no Reconhecimento e Triagem de opções estratégicas.
	</p>
	<a
		href="{base}/relatorios/relatorio_1.pdf"
		download
		class="text-blue-accent text-xl font-bold underline underline-offset-8 hover:text-blue-light"
	>
		Documento
	</a>
</PageContainer>
