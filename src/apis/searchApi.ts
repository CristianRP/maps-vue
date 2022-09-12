import axios from 'axios';

const searchApi = axios.create({
  baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
  params: {
    limit: 5,
    languague: 'en',
    access_token: 'pk.eyJ1IjoiY3Jpc3RpYW5ycCIsImEiOiJjbDd5djk2YzQxNW1pM29yN3pocGJuZnVjIn0.D43fTkVqXXsgzLPvxH2tfw'
  }
})

export default searchApi
