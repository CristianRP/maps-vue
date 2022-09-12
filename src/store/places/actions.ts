import { ActionTree } from 'vuex';
import { PlacesState } from './state';
import { StateInterface } from '../index';

const actions: ActionTree<PlacesState, StateInterface> = {
  getInitialLocation({ commit }) {
    // TODO: set loading
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => commit('setLngLat', { lng: coords.longitude, lat: coords.latitude }),
      ( error ) => {
        console.log(error);
        throw new Error('No geolocation');
      }
    );
  },

  async searchPlacesByTerm({ commit, state }, query: string ) {
    console.log('vuex:', query);
  }
};

export default actions;
