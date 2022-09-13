import axios from 'axios';

const directionsApi = axios.create({
  baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
  params: {
    alternatives: false,
    geometries: 'geojson',
    overview: 'simplified',
    steps: false,
    access_token: 'pk.eyJ1IjoiY3Jpc3RpYW5ycCIsImEiOiJjbDd5djk2YzQxNW1pM29yN3pocGJuZnVjIn0.D43fTkVqXXsgzLPvxH2tfw'
  }
})

export default directionsApi
