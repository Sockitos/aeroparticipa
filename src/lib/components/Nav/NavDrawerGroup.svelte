<script lang="ts">
	export let label: string = '';
</script>

<li>
	<span>{label}</span>
	<ul class="ml-6 mt-2 space-y-2"><slot /></ul>
</li>
