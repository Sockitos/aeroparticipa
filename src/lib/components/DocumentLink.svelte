<script lang="ts">
	export let href: string;
</script>

<a
	{href}
	download
	class="block text-blue-accent text-xl font-bold underline underline-offset-8 hover:text-blue-light"
>
	<slot />
</a>
