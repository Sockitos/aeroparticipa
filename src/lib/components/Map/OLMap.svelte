<script lang="ts">
	import Map from 'ol/Map';
	import View from 'ol/View';
	import { defaults as defaultControls } from 'ol/control/defaults';
	import { boundingExtent, buffer } from 'ol/extent';
	import { defaults as defaultInteraction } from 'ol/interaction/defaults';
	import TileLayer from 'ol/layer/Tile';
	import 'ol/ol.css';
	import OSM from 'ol/source/OSM';
	import { setContext } from 'svelte';
	import { aeros } from './constants';
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
				zoom: 7,
				minZoom: 7,
				maxZoom: 15
			}),
			interactions: defaultInteraction({ mouseWheelZoom: false }),
			controls: defaultControls()
		});
		map.getView().fit(buffer(boundingExtent(aeros.map((a) => a.coords.getCoordinates())), 50000), {
			duration: 200
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
