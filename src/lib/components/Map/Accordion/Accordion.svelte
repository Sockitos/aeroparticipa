<script context="module" lang="ts">
	export type AccordionCtx = {
		expanded: Writable<string | undefined>;
	};
</script>

<script lang="ts">
	import { onDestroy, setContext } from 'svelte';
	import { writable, type Writable } from 'svelte/store';

	export let expanded: string | undefined;

	const store = writable(expanded);

	const unsubscribe = store.subscribe((value) => {
		expanded = value;
	});

	const ctx: AccordionCtx = { expanded: store };

	setContext<AccordionCtx>('accordion-ctx', ctx);

	onDestroy(unsubscribe);

	$: ctx.expanded.set(expanded);
</script>

<div>
	<slot />
</div>
