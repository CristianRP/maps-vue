import { useStore } from 'vuex';
import { StateInterface } from '../store/index';
import { computed } from 'vue';
import Mapboxgl from 'mapbox-gl';
export const useMapStore = () => {
  const store = useStore<StateInterface>()

  return {
    map: computed( () => store.state.map.map ),
    distance: computed( () => store.state.map.distance ),
    duration: computed( () => store.state.map.duration ),

    // Mutations
    setMap: ( map: Mapboxgl.Map ) => store.commit('map/setMap', map),

    // Actions
  }
}

