import type { Point } from "ol/geom";
import type { StyleLike } from "ol/style/Style";

export type MapAero = {
    id: number;
    coords: Point;
    label: string;
    offsetX?: number;
    offsetY?: number;
    textBaseline?: CanvasTextBaseline;
    textAlign?: CanvasTextAlign;
}

export type MapOption = {
    id: number;
    label: string;
    isDual: boolean;
    isOfficial: boolean;
    info: MapOptionInfoGroup[];
    layers: MapLayer[];
    aeros: number[];
}

export type MapOptionInfoGroup = {
    label: string;
    info: MapOptionInfo[];
}

export type MapOptionInfo = {
    label: string;
    value: string;
}

export type MapLayer = {
    id: string;
    label: string;
    url: string;
    style: StyleLike;
    stroke: string;
    fill?: string;
}

export type MapLayerGroup = {
    label: string;
    layers: MapLayer[];
}