<script lang="ts">
	import Feature from 'ol/Feature';
	import type MapBrowserEvent from 'ol/MapBrowserEvent';
	import type { Coordinate } from 'ol/coordinate';
	import { Point } from 'ol/geom';
	import { Modify } from 'ol/interaction';
	import VectorLayer from 'ol/layer/Vector';
	import VectorSource from 'ol/source/Vector';
	import { Circle as CircleStyle, Fill, Icon, Style } from 'ol/style';
	import { getContext, onDestroy } from 'svelte';
	import { key, type OLMapContext } from './olmap';

	export let coords: Coordinate | undefined;

	const { getMap } = getContext<OLMapContext>(key);

	const iconFeature = new Feature({
		geometry: coords ? new Point(coords) : new Point([0, 0])
	});

	const iconStyle = new Style({
		image: new Icon({
			anchor: [0.5, 0.5],
			anchorXUnits: 'fraction',
			anchorYUnits: 'fraction',
			src: 'svgs/plane_vote.svg'
		})
	});

	iconFeature.setStyle(iconStyle);

	const vectorSource = new VectorSource({
		features: [iconFeature]
	});

	const vectorLayer = new VectorLayer({
		source: vectorSource
	});

	const modify = new Modify({
		hitDetection: vectorLayer,
		source: vectorSource,
		style: new Style({
			image: new CircleStyle({ radius: 5, fill: new Fill({ color: '#0b3b9b' }) })
		})
	});

	const target = document.getElementById('map');

	modify.on(['modifystart', 'modifyend'], function (evt) {
		target!.style.cursor = evt.type === 'modifystart' ? 'grabbing' : 'pointer';
	});
	const overlaySource = modify.getOverlay().getSource() as VectorSource;
	overlaySource.on(['addfeature', 'removefeature'], function (evt) {
		target!.style.cursor = evt.type === 'addfeature' ? 'pointer' : '';
	});

	function selectCoords(event: MapBrowserEvent<any>) {
		var point = getMap()!.getCoordinateFromPixel(event.pixel);
		coords = point;
	}

	let layer: VectorLayer<VectorSource>;

	$: {
		if (!layer) {
			layer = vectorLayer;
			getMap()?.addLayer(vectorLayer);
			getMap()?.addInteraction(modify);
			getMap()?.on('singleclick', selectCoords);
		}
		if (coords) {
			iconFeature?.getGeometry()?.setCoordinates(coords);
		}
	}

	onDestroy(() => {
		getMap()?.removeLayer(vectorLayer);
		getMap()?.removeInteraction(modify);
		getMap()?.un('singleclick', selectCoords);
	});
</script>
