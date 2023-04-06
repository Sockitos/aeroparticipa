<script lang="ts">
	import { defaults as defaultControls } from 'ol/control/defaults';
	import { defaults as defaultInteraction } from 'ol/interaction/defaults';
	import TileLayer from 'ol/layer/Tile';
	import Map from 'ol/Map';
	import 'ol/ol.css';
	import OSM from 'ol/source/OSM';
	import View from 'ol/View';
	import { setContext } from 'svelte';
	import { key, type OLMapContext } from './olmap';

	let map: Map | undefined;

	setContext<OLMapContext>(key, {
		getMap: () => map
	});

	function initialize(node: HTMLElement) {
		map = new Map({
			layers: [
				new TileLayer({
					source: new OSM()
				})
			],
			target: node,
			view: new View({
				center: [-992500.3646622685, 4710230.728908487],
				zoom: 9,
				minZoom: 7.5,
				maxZoom: 15
			}),
			interactions: defaultInteraction({ mouseWheelZoom: false }),
			controls: defaultControls()
		});

		return {
			destroy() {
				map?.dispose();
				map?.setTarget(undefined);
				map = undefined;
			}
		};
	}
</script>

<div id="map" style="height: 100%; width: 100%;" use:initialize>
	{#if map}
		<slot />
	{/if}
</div>
