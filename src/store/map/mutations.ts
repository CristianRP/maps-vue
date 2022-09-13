import { MutationTree } from 'vuex';
import { MapState } from './state';
import Mapboxgl, { Marker, Popup } from 'mapbox-gl';
import { Feature } from '@/interfaces/places';


const mutation: MutationTree<MapState> = {
    setMap( state, map: Mapboxgl.Map ) {
        state.map = map
    },

    setPlaceMarkers( state, places: Feature[] ) {
        state.markers.forEach( marker => marker.remove() )
        state.markers = []

        if (!state.map) return;

        for (const place of places) {
            const [lng, lat] = place.center

            const popup = new Popup({ offset: [0, -35] })
                .setHTML(`
                <h4>${place.text}</h4>
                <p>${place.place_name}</p>
                `)

            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const myLocationMarker = new Marker()
                .setLngLat( [lng, lat] )
                .setPopup(popup)
                .addTo(state.map)
        }
    }
}


export default mutation;