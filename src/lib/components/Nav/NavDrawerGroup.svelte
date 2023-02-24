<script lang="ts">
	export let label: string = '';
</script>

<div>
	<span>{label}</span>
	<div class="ml-6 mt-2 space-y-2"><slot /></div>
</div>
