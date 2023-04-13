import { Point } from "ol/geom";
import { transform } from "ol/proj";
import { Fill, Stroke, Style } from "ol/style";
import type { MapAero, MapLayerGroup, MapOption } from "./types";

export const aeros: MapAero[] = [

    {
        id: 1,
        coords: new Point(transform([-8.732431991246143, 38.7762478658769], 'EPSG:4326', 'EPSG:3857')),
        label: 'Alcochete',
        offsetX: 35,
        textBaseline: 'middle',
        textAlign: 'left'
    },
    {
        id: 2,
        coords: new Point(transform([-9.031448, 38.869207], 'EPSG:4326', 'EPSG:3857')),
        label: 'Alverca',
        offsetX: -35,
        textBaseline: 'middle',
        textAlign: 'right'
    },
    {
        id: 3,
        coords: new Point(transform([-7.930144, 38.078946], 'EPSG:4326', 'EPSG:3857')),
        label: 'Beja',
        offsetX: -35,
        textBaseline: 'middle',
        textAlign: 'right'
    },
    {
        id: 4,
        coords: new Point(transform([-8.888024, 39.829927], 'EPSG:4326', 'EPSG:3857')),
        label: 'Monte Real',
        offsetX: 35,
        textBaseline: 'middle',
        textAlign: 'left'
    },
    {
        id: 5,
        coords: new Point(transform([-9.033175, 38.710661], 'EPSG:4326', 'EPSG:3857')),
        label: 'Montijo',
        offsetY: 25,
        textBaseline: 'top'
    },
    {
        id: 6,
        coords: new Point(transform([-9.134984, 38.776773], 'EPSG:4326', 'EPSG:3857')),
        label: 'Portela',
        offsetX: -35,
        textBaseline: 'middle',
        textAlign: 'right'
    },
    {
        id: 7,
        coords: new Point(transform([-8.617701, 39.362707], 'EPSG:4326', 'EPSG:3857')),
        label: 'Santarém',
        offsetX: 35,
        textBaseline: 'middle',
        textAlign: 'left'
    }
];

export const options: MapOption[] = [
    {
        id: 1,
        label: 'Montijo + Portela',
        isDual: true,
        isOfficial: true,
        info: [
            {
                label: 'Ferrovia',
                info: [
                    { label: 'Frequência num sentido', value: 'Não Existe' },
                    { label: 'Tempo a Lisboa (atual)', value: 'Não Existe' },
                    { label: 'Tempo a Lisboa (infraestrutura prevista em PNI 2030 e PFN)', value: 'Não existe' }
                ]
            },
            {
                label: 'Rodovia (nas principais vias)',
                info: [
                    { label: 'Distância a Lisboa', value: '26 km' },
                    { label: 'Tempo a Lisboa', value: '30 mins' }
                ]
            },
            {
                label: 'Aeroporto',
                info: [
                    { label: 'Nº de pistas', value: '2+1' },
                    { label: 'Capacidade de Movimentos / Hora', value: '60+20' },
                    { label: 'Capacidade de Expansão', value: 'Não' }
                ]
            },
            {
                label: 'População Afetada pelo Ruído',
                info: [
                    { label: 'População total', value: '≈1293000' },
                    { label: 'População residente', value: '≈835000' }
                ]
            }
        ],
        layers: [
            { id: 'ca3', label: 'Cones de Aproximação', url: 'layers/cones3-4.json', style: new Style({ stroke: new Stroke({ color: 'rgba(50, 50, 50, 1)' }), fill: new Fill({ color: 'rgba(50, 50, 50, 0.2)' }), }), stroke: 'rgba(50, 50, 50, 1)', fill: 'rgba(50, 50, 50, 0.2)' },
        ],
        aeros: [5, 6],
    },
    {
        id: 2,
        label: 'Portela + Montijo',
        isDual: true,
        isOfficial: true,
        info: [
            {
                label: 'Ferrovia',
                info: [
                    { label: 'Frequência num sentido', value: 'Não Existe' },
                    { label: 'Tempo a Lisboa (atual)', value: 'Não Existe' },
                    { label: 'Tempo a Lisboa (infraestrutura prevista em PNI 2030 e PFN)', value: 'Não existe' }
                ]
            },
            {
                label: 'Rodovia (nas principais vias)',
                info: [
                    { label: 'Distância a Lisboa', value: '26 km' },
                    { label: 'Tempo a Lisboa', value: '30 mins' }
                ]
            },
            {
                label: 'Aeroporto',
                info: [
                    { label: 'Nº de pistas', value: '1+1' },
                    { label: 'Capacidade de Movimentos / Hora', value: '48+26' },
                    { label: 'Capacidade de Expansão', value: 'Não' }
                ]
            },
            {
                label: 'População Afetada pelo Ruído',
                info: [
                    { label: 'População total', value: '≈1293000' },
                    { label: 'População residente', value: '≈835000' }
                ]
            }
        ],
        layers: [
            { id: 'ca4', label: 'Cones de Aproximação', url: 'layers/cones3-4.json', style: new Style({ stroke: new Stroke({ color: 'rgba(50, 50, 50, 1)' }), fill: new Fill({ color: 'rgba(50, 50, 50, 0.2)' }), }), stroke: 'rgba(50, 50, 50, 1)', fill: 'rgba(50, 50, 50, 0.2)' },
        ],
        aeros: [6, 5],
    },
    {
        id: 3,
        label: 'CT Alcochete',
        isDual: false,
        isOfficial: true,
        info: [
            {
                label: 'Ferrovia',
                info: [
                    { label: 'Frequência num sentido', value: 'Não Existe' },
                    { label: 'Tempo a Lisboa (atual)', value: 'Não Existe' },
                    { label: 'Tempo a Lisboa (infraestrutura prevista em PNI 2030 e PFN)', value: '22 mins' }
                ]
            },
            {
                label: 'Rodovia (nas principais vias)',
                info: [
                    { label: 'Distância a Lisboa', value: '38 km' },
                    { label: 'Tempo a Lisboa', value: '39 mins' }
                ]
            },
            {
                label: 'Aeroporto',
                info: [
                    { label: 'Nº de pistas', value: '2' },
                    { label: 'Capacidade de Movimentos / Hora', value: '80' },
                    { label: 'Capacidade de Expansão', value: 'Sim (até 4)' }
                ]
            },
            {
                label: 'População Afetada pelo Ruído',
                info: [
                    { label: 'População total', value: '≈15000' },
                    { label: 'População residente', value: '≈6000' }
                ]
            }
        ],
        layers: [
            { id: 'ca6', label: 'Cones de Aproximação', url: 'layers/cones6.json', style: new Style({ stroke: new Stroke({ color: 'rgba(50, 50, 50, 1)' }), fill: new Fill({ color: 'rgba(50, 50, 50, 0.2)' }), }), stroke: 'rgba(50, 50, 50, 1)', fill: 'rgba(50, 50, 50, 0.2)' },
        ],
        aeros: [1],
    },
    {
        id: 4,
        label: 'Portela + Santarém',
        isDual: true,
        isOfficial: true,
        info: [
            {
                label: 'Ferrovia',
                info: [
                    { label: 'Frequência num sentido', value: '93 mov/dia' },
                    { label: 'Tempo a Lisboa (atual)', value: '1h 23 mins' },
                    { label: 'Tempo a Lisboa (infraestrutura prevista em PNI 2030 e PFN)', value: '29 mins' }
                ]
            },
            {
                label: 'Rodovia (nas principais vias)',
                info: [
                    { label: 'Distância a Lisboa', value: '91 km' },
                    { label: 'Tempo a Lisboa', value: '1h 01 mins' }
                ]
            },
            {
                label: 'Aeroporto',
                info: [
                    { label: 'Nº de pistas', value: '1+1' },
                    { label: 'Capacidade de Movimentos / Hora', value: '20+40' },
                    { label: 'Capacidade de Expansão', value: 'Sim (até 1+3)' }
                ]
            },
            {
                label: 'População Afetada pelo Ruído',
                info: [
                    { label: 'População total', value: '≈1041500' },
                    { label: 'População residente', value: '≈607500' }
                ]
            }
        ],
        layers: [
            { id: 'ca2', label: 'Cones de Aproximação', url: 'layers/cones2.json', style: new Style({ stroke: new Stroke({ color: 'rgba(50, 50, 50, 1)' }), fill: new Fill({ color: 'rgba(50, 50, 50, 0.2)' }), }), stroke: 'rgba(50, 50, 50, 1)', fill: 'rgba(50, 50, 50, 0.2)' },
        ],
        aeros: [7, 6],
    },
    {
        id: 5,
        label: 'Santarém',
        isDual: false,
        isOfficial: true,
        info: [
            {
                label: 'Ferrovia',
                info: [
                    { label: 'Frequência num sentido', value: '25 mov/dia' },
                    { label: 'Tempo a Lisboa (atual)', value: '1h 23 mins' },
                    { label: 'Tempo a Lisboa (infraestrutura prevista em PNI 2030 e PFN)', value: '29 mins' }
                ]
            },
            {
                label: 'Rodovia (nas principais vias)',
                info: [
                    { label: 'Distância a Lisboa', value: '91 km' },
                    { label: 'Tempo a Lisboa', value: '1h 01 mins' }
                ]
            },
            {
                label: 'Aeroporto',
                info: [
                    { label: 'Nº de pistas', value: '2' },
                    { label: 'Capacidade de Movimentos / Hora', value: '60' },
                    { label: 'Capacidade de Expansão', value: 'Sim (até 3)' }
                ]
            },
            {
                label: 'População Afetada pelo Ruído',
                info: [
                    { label: 'População total', value: '≈21200' },
                    { label: 'População residente', value: '≈13200' }
                ]
            }
        ],
        layers: [
            { id: 'ca1', label: 'Cones de Aproximação', url: 'layers/cones1.json', style: new Style({ stroke: new Stroke({ color: 'rgba(50, 50, 50, 1)' }), fill: new Fill({ color: 'rgba(50, 50, 50, 0.2)' }), }), stroke: 'rgba(50, 50, 50, 1)', fill: 'rgba(50, 50, 50, 0.2)' },
        ],
        aeros: [7],
    },
    {
        id: 6,
        label: 'CT Alcochete + Portela',
        isDual: true,
        isOfficial: false,
        info: [
            {
                label: 'Ferrovia',
                info: [
                    { label: 'Frequência num sentido', value: 'Não Existe' },
                    { label: 'Tempo a Lisboa (atual)', value: 'Não Existe' },
                    { label: 'Tempo a Lisboa (infraestrutura prevista em PNI 2030 e PFN)', value: '22 mins' }
                ]
            },
            {
                label: 'Rodovia (nas principais vias)',
                info: [
                    { label: 'Distância a Lisboa', value: '38 km' },
                    { label: 'Tempo a Lisboa', value: '39 mins' }
                ]
            },
            {
                label: 'Aeroporto',
                info: [
                    { label: 'Nº de pistas', value: '1+1' },
                    { label: 'Capacidade de Movimentos / Hora', value: '40+20' },
                    { label: 'Capacidade de Expansão', value: 'Sim' }
                ]
            },
            {
                label: 'População Afetada pelo Ruído',
                info: [
                    { label: 'População total', value: '≈647500' },
                    { label: 'População residente', value: '≈604000' }
                ]
            }
        ],
        layers: [
            { id: 'ca7', label: 'Cones de Aproximação', url: 'layers/cones7.json', style: new Style({ stroke: new Stroke({ color: 'rgba(50, 50, 50, 1)' }), fill: new Fill({ color: 'rgba(50, 50, 50, 0.2)' }), }), stroke: 'rgba(50, 50, 50, 1)', fill: 'rgba(50, 50, 50, 0.2)' },
        ],
        aeros: [1, 6],
    },
    {
        id: 7,
        label: 'Alverca + Portela',
        isDual: true,
        isOfficial: false,
        info: [
            {
                label: 'Ferrovia',
                info: [
                    { label: 'Frequência num sentido', value: '93 mov/dia' },
                    { label: 'Tempo a Lisboa (atual)', value: '10 mins' },
                    { label: 'Tempo a Lisboa (infraestrutura prevista em PNI 2030 e PFN)', value: '10 mins' }
                ]
            },
            {
                label: 'Rodovia (nas principais vias)',
                info: [
                    { label: 'Distância a Lisboa', value: '24 km' },
                    { label: 'Tempo a Lisboa', value: '24 mins' }
                ]
            },
            {
                label: 'Aeroporto',
                info: [
                    { label: 'Nº de pistas', value: '1+1' },
                    { label: 'Capacidade de Movimentos / Hora', value: '30+20' },
                    { label: 'Capacidade de Expansão', value: 'Não' }
                ]
            },
            {
                label: 'População Afetada pelo Ruído',
                info: [
                    { label: 'População total', value: '≈1312500' },
                    { label: 'População residente', value: '≈862000' }
                ]
            }
        ],
        layers: [
            { id: 'ca5', label: 'Cones de Aproximação', url: 'layers/cones5.json', style: new Style({ stroke: new Stroke({ color: 'rgba(50, 50, 50, 1)' }), fill: new Fill({ color: 'rgba(50, 50, 50, 0.2)' }), }), stroke: 'rgba(50, 50, 50, 1)', fill: 'rgba(50, 50, 50, 0.2)' },
        ],
        aeros: [2, 6],
    },
    {
        id: 8,
        label: 'Beja',
        isDual: false,
        isOfficial: false,
        info: [
            {
                label: 'Ferrovia',
                info: [
                    { label: 'Frequência num sentido', value: '5 mov/dia' },
                    { label: 'Tempo a Lisboa (atual)', value: '2h 13 mins' },
                    { label: 'Tempo a Lisboa (infraestrutura prevista em PNI 2030 e PFN)', value: '1h 25 mins' }
                ]
            },
            {
                label: 'Rodovia (nas principais vias)',
                info: [
                    { label: 'Distância a Lisboa', value: '174 km' },
                    { label: 'Tempo a Lisboa', value: '1h 40 mins' }
                ]
            },
            {
                label: 'Aeroporto',
                info: [
                    { label: 'Nº de pistas', value: '2' },
                    { label: 'Capacidade de Movimentos / Hora', value: '80' },
                    { label: 'Capacidade de Expansão', value: 'Sim (até 4)' }
                ]
            },
            {
                label: 'População Afetada pelo Ruído',
                info: [
                    { label: 'População total', value: '≈7700' },
                    { label: 'População residente', value: '≈5000' }
                ]
            }
        ],
        layers: [
            { id: 'ca8', label: 'Cones de Aproximação', url: 'layers/cones8.json', style: new Style({ stroke: new Stroke({ color: 'rgba(50, 50, 50, 1)' }), fill: new Fill({ color: 'rgba(50, 50, 50, 0.2)' }), }), stroke: 'rgba(50, 50, 50, 1)', fill: 'rgba(50, 50, 50, 0.2)' },
        ],
        aeros: [3],
    },
    {
        id: 9,
        label: 'Monte Real',
        isDual: false,
        isOfficial: false,
        info: [
            {
                label: 'Ferrovia',
                info: [
                    { label: 'Frequência num sentido', value: '6 mov/dia' },
                    { label: 'Tempo a Lisboa (atual)', value: '3h 16 mins' },
                    { label: 'Tempo a Lisboa (infraestrutura prevista em PNI 2030 e PFN)', value: '45 mins' }
                ]
            },
            {
                label: 'Rodovia (nas principais vias)',
                info: [
                    { label: 'Distância a Lisboa', value: '155 km' },
                    { label: 'Tempo a Lisboa', value: '1h 47 mins' }
                ]
            },
            {
                label: 'Aeroporto',
                info: [
                    { label: 'Nº de pistas', value: '1' },
                    { label: 'Capacidade de Movimentos / Hora', value: '40' },
                    { label: 'Capacidade de Expansão', value: 'Não' }
                ]
            },
            {
                label: 'População Afetada pelo Ruído',
                info: [
                    { label: 'População total', value: '≈70000' },
                    { label: 'População residente', value: '≈54000' }
                ],

            }
        ],
        layers: [
            { id: 'ca9', label: 'Cones de Aproximação', url: 'layers/cones9.json', style: new Style({ stroke: new Stroke({ color: 'rgba(50, 50, 50, 1)' }), fill: new Fill({ color: 'rgba(50, 50, 50, 0.2)' }), }), stroke: 'rgba(50, 50, 50, 1)', fill: 'rgba(50, 50, 50, 0.2)' },
        ],
        aeros: [4],
    }
];

export const layerGroups: MapLayerGroup[] = [
    {
        label: 'Zonas Protegidas',
        layers: [
            { id: 'rnap', label: 'Rede Nacional de Áreas Protegidas', url: 'layers/rnap.json', style: new Style({ stroke: new Stroke({ color: 'rgba(16, 92, 6, 1)' }), fill: new Fill({ color: 'rgba(16, 92, 6, 0.2)' }), }), stroke: 'rgba(16, 92, 6, 1)', fill: 'rgba(16, 92, 6, 0.2)' },
            { id: 'zpe', label: 'Zona de proteção especial', url: 'layers/zpe.json', style: new Style({ stroke: new Stroke({ color: 'rgba(53, 138, 20, 1)' }), fill: new Fill({ color: 'rgba(53, 138, 20, 0.2)' }), }), stroke: 'rgba(53, 138, 20, 1)', fill: 'rgba(53, 138, 20, 0.2)' },
            { id: 'zec', label: 'Zona especial de conservação', url: 'layers/sic.json', style: new Style({ stroke: new Stroke({ color: 'rgba(245, 174, 20, 1)' }), fill: new Fill({ color: 'rgba(245, 174, 20, 0.2)' }), }), stroke: 'rgba(245, 174, 20, 1)', fill: 'rgba(245, 174, 20, 0.2)' },
            { id: 'ramsar', label: 'Sítios RAMSAR', url: 'layers/ramsar.json', style: new Style({ stroke: new Stroke({ color: 'rgba(10, 183, 209, 1)' }), fill: new Fill({ color: 'rgba(10, 183, 209, 0.2)' }), }), stroke: 'rgba(10, 183, 209, 1)', fill: 'rgba(10, 183, 209, 0.2)' },
            { id: 'rb', label: 'Reserva de Biosfera', url: 'layers/biosfera.json', style: new Style({ stroke: new Stroke({ color: 'rgba(117, 66, 6, 1)' }), fill: new Fill({ color: 'rgba(117, 66, 6, 0.2)' }), }), stroke: 'rgba(117, 66, 6, 1)', fill: 'rgba(117, 66, 6, 0.2)' },
        ]
    },
    {
        label: 'Transportes',
        layers: [
            { id: 'rodo', label: 'Rodovia', url: 'layers/rodovia.json', style: new Style({ stroke: new Stroke({ color: '#000000', width: 2 }), }), stroke: '#000000', },
            { id: 'ferro', label: 'Ferrovia', url: 'layers/ferrovia.json', style: new Style({ stroke: new Stroke({ color: '#0000ff', width: 2 }), }), stroke: '#0000ff', },
            { id: 'ferrop', label: 'Ferrovia prevista', url: 'layers/ferrovia_prev.json', style: new Style({ stroke: new Stroke({ color: '#0000ff', width: 2, lineDash: [5, 5], }), }), stroke: '#0000ff', dashed: true },
        ]
    },
    {
        label: 'Restrição aérea',
        layers: [
            { id: 'ra', label: 'Restrição aérea', url: 'layers/restricao.json', style: new Style({ stroke: new Stroke({ color: 'rgba(231, 92, 0, 1)' }), fill: new Fill({ color: 'rgba(231, 92, 0, 0.1)' }), }), stroke: 'rgba(231, 92, 0, 1)', fill: 'rgba(231, 92, 0, 0.2)' },
        ]
    },
];

export const icons = new Map<string, string>([
    ['Zonas Protegidas', '<path d="M12.26,.09s-.03-.01-.04-.02c-.02-.01-.04-.03-.07-.04-.02-.01-.05-.02-.08-.02-.02,0-.05,0-.07,0-.03,0-.05,0-.08,0-.02,0-.05,.01-.07,.02-.03,.01-.05,.02-.07,.04-.01,0-.03,.01-.04,.02-.27,.22-6.57,5.59-5.84,12.81,.58,5.76,4.63,8,5.69,8.5v2.21c0,.22,.18,.4,.4,.4s.4-.18,.4-.4v-2.21c1.06-.49,5.11-2.74,5.69-8.5C18.82,5.67,12.52,.31,12.26,.09ZM7.81,6.7l3.79,3.79v5.13l-4.89-4.89c.14-1.45,.55-2.81,1.1-4.03Zm4.58,3.79l3.79-3.79c.55,1.22,.96,2.57,1.1,4.03l-4.89,4.89v-5.13Zm3.42-4.55l-3.42,3.42V1.31c.83,.83,2.3,2.46,3.42,4.62ZM11.6,1.32V9.36l-3.42-3.42c1.12-2.16,2.59-3.79,3.42-4.62ZM6.7,12.82c-.03-.34-.04-.68-.04-1.01l4.94,4.94v3.75c-1.28-.7-4.41-2.88-4.9-7.68Zm5.7,7.69v-3.76l4.94-4.94c0,.33,0,.67-.04,1.01-.49,4.85-3.62,7-4.9,7.69Z"/>'],
    ['Transportes', '<path d="M16.98,0H7.02C4.5,0,2.46,2.04,2.46,4.56v11.44c0,2.52,2.04,4.56,4.56,4.56h9.95c2.52,0,4.56-2.04,4.56-4.56V4.56c0-2.52-2.04-4.56-4.56-4.56ZM6.19,17.28c-.73,0-1.33-.6-1.33-1.33s.6-1.33,1.33-1.33,1.33,.6,1.33,1.33-.6,1.33-1.33,1.33Zm4.98-8.06c0,.62-.51,1.13-1.13,1.13H5.58c-.62,0-1.13-.51-1.13-1.13v-2.83c0-.61,.5-1.11,1.11-1.11h4.49c.61,0,1.11,.5,1.11,1.11v2.83Zm-.5-6.9c0-.73,.6-1.33,1.33-1.33s1.33,.6,1.33,1.33-.6,1.33-1.33,1.33-1.33-.6-1.33-1.33Zm7.14,14.97c-.73,0-1.33-.6-1.33-1.33s.6-1.33,1.33-1.33,1.33,.6,1.33,1.33-.6,1.33-1.33,1.33Zm1.73-8.06c0,.62-.51,1.13-1.13,1.13h-4.45c-.62,0-1.13-.51-1.13-1.13v-2.83c0-.61,.5-1.11,1.11-1.11h4.49c.61,0,1.11,.5,1.11,1.11v2.83Z"/><rect x="7.81" y="22.18" width="8.76" height="1.82"/>'],
    ['Uso e ocupação do solo', '<path d="M20.35,21.41c.55-.03,1.02-.2,1.39-.6,.25-.27,.51-.49,.91-.53,.33-.03,.52-.32,.48-.62-.04-.29-.3-.49-.63-.47-.51,.03-.97,.21-1.31,.6-.54,.64-1.11,.63-1.68,0-.75-.83-2.03-.83-2.78,0-.57,.64-1.12,.6-1.66,0-.77-.85-2.04-.85-2.81,0-.54,.6-1.1,.59-1.63,0-.78-.86-2.04-.87-2.83,0-.55,.6-1.1,.58-1.63,0-.78-.86-2.01-.84-2.82-.02-.61,.63-.89,.64-1.56,.09-.23-.19-.53-.19-.74,0-.22,.2-.24,.5-.07,.75,.44,.63,1.39,.92,2.12,.68,.43-.14,.74-.42,1.03-.73,.36-.37,.87-.37,1.24,0,.1,.1,.19,.2,.29,.3,.55,.49,1.19,.63,1.9,.43,.39-.11,.69-.36,.96-.65,.45-.48,.93-.47,1.39,0,.07,.07,.13,.14,.2,.2,.56,.5,1.19,.65,1.92,.44,.42-.12,.72-.39,1-.7,.38-.4,.9-.4,1.28,0,.09,.09,.17,.18,.26,.27,.56,.51,1.2,.65,1.92,.44,.42-.12,.73-.4,1.02-.71,.36-.38,.88-.38,1.25,0,.08,.08,.16,.17,.24,.25,.38,.39,.85,.54,1.36,.57Z"/><path d="M20.35,21.41c-.51-.02-.98-.18-1.36-.57-.08-.08-.16-.17-.24-.25-.37-.37-.89-.38-1.25,0-.29,.31-.6,.59-1.02,.71-.72,.2-1.36,.06-1.92-.44-.09-.08-.17-.18-.26-.27-.38-.39-.9-.4-1.28,0-.29,.31-.59,.58-1,.7-.72,.21-1.36,.06-1.92-.44-.07-.06-.13-.13-.2-.2-.46-.47-.94-.48-1.39,0-.27,.29-.57,.54-.96,.65-.71,.2-1.35,.06-1.9-.43-.1-.09-.19-.2-.29-.3-.36-.37-.88-.37-1.24,0-.3,.31-.61,.59-1.03,.73-.73,.24-1.68-.05-2.12-.68-.18-.25-.15-.55,.07-.75,.2-.18,.51-.18,.74,0,.67,.55,.95,.53,1.56-.09,.81-.82,2.04-.84,2.82,.02,.53,.58,1.09,.6,1.63,0,.79-.87,2.04-.86,2.83,0,.53,.58,1.09,.6,1.63,0,.77-.85,2.04-.86,2.81,0,.54,.6,1.09,.63,1.66,0,.75-.83,2.03-.83,2.78,0,.57,.63,1.13,.64,1.68,0,.33-.39,.8-.57,1.31-.6,.33-.02,.59,.18,.63,.47,.04,.3-.15,.58-.48,.62-.4,.04-.66,.26-.91,.53-.37,.4-.85,.57-1.39,.6Z"/><path d="M20.35,24c.55-.03,1.02-.2,1.39-.6,.25-.27,.51-.49,.91-.53,.33-.03,.52-.32,.48-.62-.04-.29-.3-.49-.63-.47-.51,.03-.97,.21-1.31,.6-.54,.64-1.11,.63-1.68,0-.75-.83-2.03-.83-2.78,0-.57,.64-1.12,.6-1.66,0-.77-.85-2.04-.85-2.81,0-.54,.6-1.1,.59-1.63,0-.78-.86-2.04-.87-2.83,0-.55,.6-1.1,.58-1.63,0-.78-.86-2.01-.84-2.82-.02-.61,.63-.89,.64-1.56,.09-.23-.19-.53-.19-.74,0-.22,.2-.24,.5-.07,.75,.44,.63,1.39,.92,2.12,.68,.43-.14,.74-.42,1.03-.73,.36-.37,.87-.37,1.24,0,.1,.1,.19,.2,.29,.3,.55,.49,1.19,.63,1.9,.43,.39-.11,.69-.36,.96-.65,.45-.48,.93-.47,1.39,0,.07,.07,.13,.14,.2,.2,.56,.5,1.19,.65,1.92,.44,.42-.12,.72-.39,1-.7,.38-.4,.9-.4,1.28,0,.09,.09,.17,.18,.26,.27,.56,.51,1.2,.65,1.92,.44,.42-.12,.73-.4,1.02-.71,.36-.38,.88-.38,1.25,0,.08,.08,.16,.17,.24,.25,.38,.39,.85,.54,1.36,.57Z"/><path d="M20.35,24c-.51-.02-.98-.18-1.36-.57-.08-.08-.16-.17-.24-.25-.37-.37-.89-.38-1.25,0-.29,.31-.6,.59-1.02,.71-.72,.2-1.36,.06-1.92-.44-.09-.08-.17-.18-.26-.27-.38-.39-.9-.4-1.28,0-.29,.31-.59,.58-1,.7-.72,.21-1.36,.06-1.92-.44-.07-.06-.13-.13-.2-.2-.46-.47-.94-.48-1.39,0-.27,.29-.57,.54-.96,.65-.71,.2-1.35,.06-1.9-.43-.1-.09-.19-.2-.29-.3-.36-.37-.88-.37-1.24,0-.3,.31-.61,.59-1.03,.73-.73,.24-1.68-.05-2.12-.68-.18-.25-.15-.55,.07-.75,.2-.18,.51-.18,.74,0,.67,.55,.95,.53,1.56-.09,.81-.82,2.04-.84,2.82,.02,.53,.58,1.09,.6,1.63,0,.79-.87,2.04-.86,2.83,0,.53,.58,1.09,.6,1.63,0,.77-.85,2.04-.86,2.81,0,.54,.6,1.09,.63,1.66,0,.75-.83,2.03-.83,2.78,0,.57,.63,1.13,.64,1.68,0,.33-.39,.8-.57,1.31-.6,.33-.02,.59,.18,.63,.47,.04,.3-.15,.58-.48,.62-.4,.04-.66,.26-.91,.53-.37,.4-.85,.57-1.39,.6Z"/><path d="M22.84,18.14H1.16c-.33,0-.59-.27-.59-.59s.27-.59,.59-.59H22.84c.33,0,.59,.27,.59,.59s-.27,.59-.59,.59Z"/><path d="M12,17.93c-.33,0-.59-.27-.59-.59V6.6c0-.33,.27-.59,.59-.59s.59,.27,.59,.59v10.73c0,.33-.27,.59-.59,.59Z"/><path d="M12,13.88c-3.83,0-6.94-3.11-6.94-6.94S8.17,0,12,0s6.94,3.11,6.94,6.94-3.11,6.94-6.94,6.94Zm0-12.7c-3.17,0-5.76,2.58-5.76,5.76s2.58,5.76,5.76,5.76,5.76-2.58,5.76-5.76S15.17,1.19,12,1.19Z"/><path d="M12,11.05h0c-.16,0-.31-.06-.42-.17l-3.26-3.26c-.23-.23-.23-.61,0-.84,.23-.23,.61-.23,.84,0l2.84,2.84,2.84-2.84c.23-.23,.61-.23,.84,0,.23,.23,.23,.61,0,.84l-3.26,3.26c-.11,.11-.26,.17-.42,.17Z"/>'],
    ['Ferrovia', '<path d="M16.98,0H7.02C4.5,0,2.46,2.04,2.46,4.56v11.44c0,2.52,2.04,4.56,4.56,4.56h9.95c2.52,0,4.56-2.04,4.56-4.56V4.56c0-2.52-2.04-4.56-4.56-4.56ZM6.19,17.28c-.73,0-1.33-.6-1.33-1.33s.6-1.33,1.33-1.33,1.33,.6,1.33,1.33-.6,1.33-1.33,1.33Zm4.98-8.06c0,.62-.51,1.13-1.13,1.13H5.58c-.62,0-1.13-.51-1.13-1.13v-2.83c0-.61,.5-1.11,1.11-1.11h4.49c.61,0,1.11,.5,1.11,1.11v2.83Zm-.5-6.9c0-.73,.6-1.33,1.33-1.33s1.33,.6,1.33,1.33-.6,1.33-1.33,1.33-1.33-.6-1.33-1.33Zm7.14,14.97c-.73,0-1.33-.6-1.33-1.33s.6-1.33,1.33-1.33,1.33,.6,1.33,1.33-.6,1.33-1.33,1.33Zm1.73-8.06c0,.62-.51,1.13-1.13,1.13h-4.45c-.62,0-1.13-.51-1.13-1.13v-2.83c0-.61,.5-1.11,1.11-1.11h4.49c.61,0,1.11,.5,1.11,1.11v2.83Z"/><rect x="7.81" y="22.18" width="8.76" height="1.82"/>'],
    ['Rodovia (nas principais vias)', '<path d="M23.3,12.24l-1.06-2.09h.62c.51,0,.92-.41,.92-.92s-.41-.92-.92-.92h-1.44l-1.64-5.42c-.36-1.18-1.42-1.97-2.65-1.97H6.88c-1.23,0-2.29,.79-2.65,1.97l-1.64,5.42H1.15c-.51,0-.92,.41-.92,.92s.41,.92,.92,.92h.61l-1.06,2.09c-.46,.9-.7,1.92-.7,2.93v2.37c0,1.52,1.25,2.77,2.77,2.77v.92c0,1.02,.83,1.85,1.85,1.85s1.85-.83,1.85-1.85v-.92h11.08v.92c0,1.02,.83,1.85,1.85,1.85s1.85-.83,1.85-1.85v-.92c.71,0,1.36-.27,1.85-.71,.57-.51,.92-1.24,.92-2.06v-2.36c0-1.01-.24-2.03-.7-2.93ZM5.13,14.77H2.9c-.51,0-.92-.41-.92-.92s.41-.92,.92-.92h2.24c.51,0,.92,.41,.92,.92s-.41,.92-.92,.92Zm.62-6.46c-.62,0-1.06-.6-.88-1.19l1.12-3.69c.12-.39,.48-.66,.88-.66h10.25c.41,0,.77,.27,.88,.66l1.12,3.69c.18,.59-.27,1.19-.88,1.19H5.76Zm10.86,10.15H7.38c-.51,0-.92-.41-.92-.92v-.14c0-.94,.76-1.7,1.7-1.7h7.53c1.02,0,1.85,.83,1.85,1.85,0,.51-.41,.92-.92,.92Zm4.57-3.69h-2.32c-.51,0-.92-.41-.92-.92s.41-.92,.92-.92h2.32c.51,0,.92,.41,.92,.92s-.41,.92-.92,.92Z"/>'],
    ['Aeroporto', '<path d="M23.49,.47c-.57-.57-1.55-.62-2.84-.16-.89,.32-1.82,.85-2.26,1.29l-2.37,2.37h-3.32s-.98-.97-.98-.97l-.98,.98L.04,4v3.59l9.03,3.34-1.39,1.39-4.45,.26L.12,15.68l4.83,2.33-1.99,1.99,.99,.99,1.99-1.99,2.33,4.83,3.11-3.11,.26-4.45,1.33-1.33,3.34,9.05h3.59l.02-10.73,1.04-1.04-.99-.99-.04,.04v-3.3s2.42-2.42,2.42-2.42c.44-.44,.98-1.37,1.29-2.26,.46-1.29,.41-2.27-.16-2.84ZM1.44,6.61v-1.21l13.18-.02-4.46,4.46L1.44,6.61Zm17.07,15.99h-1.21l-3.23-8.74,4.47-4.47-.02,13.21Zm-8.23-6.94l-.26,4.45-1.34,1.34-1.69-3.5,1.22-1.22-.99-.99-1.22,1.22-3.5-1.69,1.34-1.34,4.45-.26L19.38,2.59c.26-.26,1-.7,1.74-.97,.85-.3,1.3-.24,1.37-.17,.07,.07,.14,.52-.17,1.37-.27,.75-.71,1.49-.97,1.74"/>'],
    ['População Afetada pelo Ruído', '<path d="M11.84,21.04c-.36,0-.72-.11-1.04-.32-1.85-1.2-3.71-2.4-5.58-3.59-.03-.02-.13-.05-.23-.05-.87,0-1.32,0-1.92,0h-1.05C.72,17.07,0,16.37,0,15.09,0,13.02,0,10.96,0,8.9c0-1.22,.73-1.96,1.95-1.96h1.17c.56,0,1.02,0,1.85,0,.11,0,.22-.04,.27-.07,1.64-1.04,3.27-2.09,4.9-3.15l.68-.44c.59-.38,1.24-.42,1.83-.1,.62,.33,.96,.91,.96,1.61v14.06c0,.23,0,.37,0,.51-.05,.66-.42,1.23-.98,1.51-.24,.12-.51,.18-.78,.18ZM3.55,15.69c.41,0,.82,0,1.45,0,.34,0,.69,.1,.96,.27,1.87,1.19,3.73,2.39,5.59,3.59,.15,.1,.32,.12,.44,.06,.12-.06,.2-.19,.21-.37,0-.11,0-.21,0-.31V4.79c0-.2-.06-.3-.23-.39-.1-.05-.2-.09-.41,.04l-.68,.44c-1.63,1.05-3.27,2.11-4.9,3.15-.28,.18-.64,.28-1,.29-.84,0-1.31,0-1.87,0H1.95c-.45,0-.56,.11-.56,.57,0,2.06,0,4.12,0,6.19,0,.48,.07,.6,.62,.6h1.05c.17,0,.33,0,.49,0Z"/><path d="M24,12.53c-.19,3.12-1.81,5.85-5.15,7.46-.42,.2-.85,.23-1.25-.07-.35-.26-.48-.61-.43-1.04,.05-.43,.35-.64,.67-.86,.72-.49,1.52-.91,2.13-1.52,2.98-3,2.22-8.09-1.46-10.16-.25-.14-.51-.27-.75-.42-.59-.36-.77-.93-.48-1.47,.29-.53,.88-.72,1.49-.46,1.82,.78,3.18,2.08,4.14,3.8,.73,1.31,1.08,2.72,1.09,4.74Z"/><path d="M19.64,12.03c-.14,1.76-.88,3.14-2.52,3.92-.63,.3-1.2,.15-1.51-.37-.32-.52-.18-1.06,.4-1.49,.15-.11,.3-.21,.45-.31,1.35-.92,1.34-2.63-.01-3.55-.19-.13-.38-.25-.55-.4-.46-.39-.57-.9-.29-1.38,.28-.48,.83-.68,1.38-.46,1.45,.58,2.23,1.71,2.57,3.18,.06,.28,.07,.57,.11,.86Z"/>'],
]);