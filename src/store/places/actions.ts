import { ActionTree } from 'vuex';
import { PlacesState } from './state';
import { StateInterface } from '../index';
import { searchApi } from '@/apis';
import { Feature, PlacesResponse } from '@/interfaces/places';

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

  async searchPlacesByTerm({ commit, state }, query: string ): Promise<Feature[]> {
    console.log('vuex:', query);

    if ( query.length === 0 ) {
      commit('setPlaces', [])
      return []
    }

    if ( !state.userLocation ) {
      throw new Error('Location not found')
    }

    const response = await searchApi.get<PlacesResponse>(`/${query}.json`, {
      params: {
        proximity: state.userLocation?.join(',')
      }
    })
    console.log(response.data.features);

    commit('setPlaces', response.data.features);

    return response.data.features;
  }
};

export default actions;
