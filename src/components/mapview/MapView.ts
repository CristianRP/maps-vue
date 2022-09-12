import { usePlacesStore, useMapStore } from '@/composables';
import { defineComponent, onMounted, ref, watch } from 'vue';
import Mapboxgl, { Marker, Popup } from 'mapbox-gl';

export default defineComponent({
  name: 'MapView',
  setup() {

    const mapElement = ref<HTMLDivElement>();
    const { userLocation, isUserLocationReady } = usePlacesStore();
    const { setMap } = useMapStore();

    const initMap = async () => {
      if ( !mapElement.value ) throw new Error('Div Element doesn\'t exists')
      if ( !userLocation.value ) throw new Error('User location doesn\'t exists')

      await Promise.resolve()

      const map = new Mapboxgl.Map({
        container: mapElement.value, // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: userLocation.value, // starting position [lng, lat]
        zoom: 15, // starting zoom
        projection: { name: 'globe' } // display the map as a 3D globe
      });

      const myLocationPopup = new Popup({ offset: [0, -35] })
        .setHTML(`
          <h4>I'm here</h4>
          <p>Je suis ici</p>
          <p>${ userLocation.value }</p>
        `)

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const myLocationMarker = new Marker()
        .setLngLat( userLocation.value )
        .setPopup(myLocationPopup)
        .addTo(map)

      setMap(map)
    }

    onMounted(() => {
      if ( isUserLocationReady.value )
        return initMap()
    })

    watch( isUserLocationReady, () => {
      if (isUserLocationReady.value) initMap()
    })

    return {
      isUserLocationReady,
      mapElement
    }
  }
});
