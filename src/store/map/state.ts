import Mapboxgl, { Marker } from 'mapbox-gl';

export interface MapState {
  map?: Mapboxgl.Map;
  markers: Marker[];
  distance?: number;
  duration?: number;
}

function state(): MapState {
  return {
      map: undefined,
      markers: [],
      distance: undefined,
      duration: undefined
  }
}

export default state;