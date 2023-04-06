<script lang="ts">
	import GeoJSON from 'ol/format/GeoJSON';
	import VectorLayer from 'ol/layer/Vector';
	import VectorSource from 'ol/source/Vector';
	import type { StyleLike } from 'ol/style/Style';
	import { getContext, onDestroy } from 'svelte';
	import { key, type OLMapContext } from './olmap';

	const { getMap } = getContext<OLMapContext>(key);

	export let url: string;
	export let style: StyleLike;
	export let visiblity: boolean = false;

	const vectorLayer = new VectorLayer({
		source: new VectorSource({
			url: url,
			format: new GeoJSON()
		}),
		visible: visiblity,
		style: style
	});

	let layer: VectorLayer<VectorSource>;

	$: {
		if (!layer) {
			layer = vectorLayer;
			getMap()?.addLayer(layer);
		}
		layer?.setStyle(style);
		layer?.setVisible(visiblity);
	}

	onDestroy(() => {
		getMap()?.removeLayer(layer);
	});
</script>
