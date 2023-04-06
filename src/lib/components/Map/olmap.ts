import type Map from 'ol/Map';

export const key = Symbol();

export type OLMapContext = {
    getMap: () => Map | undefined;
};
