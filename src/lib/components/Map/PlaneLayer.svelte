<script lang="ts">
	import Feature, { type FeatureLike } from 'ol/Feature';
	import { boundingExtent, buffer } from 'ol/extent';
	import VectorLayer from 'ol/layer/Vector';
	import VectorSource from 'ol/source/Vector';
	import { Fill, Icon, Stroke, Style, Text as TextStyle } from 'ol/style';
	import { getContext, onDestroy } from 'svelte';
	import { aeros } from './constants';
	import { key, type OLMapContext } from './olmap';

	const { getMap } = getContext<OLMapContext>(key);

	export let aerosIds: number[] | undefined;

	const features = aeros.map(
		(a) =>
			new Feature({
				id: a.id,
				geometry: a.coords,
				name: a.label,
				offsetX: a.offsetX,
				offsetY: a.offsetY,
				textBaseline: a.textBaseline,
				textAlign: a.textAlign
			})
	);

	const styleFunction = function (feature: FeatureLike, resolution: number) {
		let show = aerosIds ? aerosIds.includes(feature.getProperties().id) : true;
		return show
			? new Style({
					image: new Icon({
						src: 'svgs/plane.svg',
						height: 50
					}),
					text: new TextStyle({
						text: feature.getProperties().name,
						font: 'bold 2rem Sofia-Sans,sans-serif',
						fill: new Fill({
							color: '#0b3b9b'
						}),
						stroke: new Stroke({
							color: '#fff',
							width: 2
						}),
						offsetX: feature.getProperties().offsetX,
						offsetY: feature.getProperties().offsetY,
						textBaseline: feature.getProperties().textBaseline,
						textAlign: feature.getProperties().textAlign
					})
			  })
			: new Style();
	};

	const vectorSource = new VectorSource({
		features: features
	});

	const vectorLayer = new VectorLayer({
		source: vectorSource,
		style: styleFunction
	});

	let layer: VectorLayer<VectorSource>;

	$: {
		if (!layer) {
			layer = vectorLayer;
			getMap()?.addLayer(layer);
		}
		getMap()
			?.getView()
			.fit(
				buffer(
					boundingExtent(
						(aerosIds ? aeros.filter((a) => aerosIds?.includes(a.id)) : aeros).map((a) =>
							a.coords.getCoordinates()
						)
					),
					aerosIds ? 5000 : 50000
				),
				{
					maxZoom: 12,
					duration: 200
				}
			);
		layer?.changed();
	}

	onDestroy(() => {
		getMap()?.removeLayer(layer);
	});
</script>
