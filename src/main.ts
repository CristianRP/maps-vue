import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = 'pk.eyJ1IjoiY3Jpc3RpYW5ycCIsImEiOiJjbDd5djk2YzQxNW1pM29yN3pocGJuZnVjIn0.D43fTkVqXXsgzLPvxH2tfw'

if ( !navigator.geolocation ) {
  throw new Error('Your browser doesn\'t support the GeoLocation');
}

createApp(App).use(store).use(router).mount('#app')
