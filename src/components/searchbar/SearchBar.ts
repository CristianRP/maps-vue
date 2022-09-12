import { usePlacesStore } from '@/composables';
import { computed, defineComponent, ref } from 'vue'
import SearchResults from '../search-results/SearchResults.vue';

export default defineComponent({
  name: 'SearchBar',
  components: {
    SearchResults
  },
  setup() {

    const debounceTimeout = ref()
    const debouncedValue = ref('')

    const { searchPlacesByTerm } = usePlacesStore();

    return {
      searchPlacesByTerm,

      searchTerm: computed({
        get() {
          return debouncedValue.value
        },
        set( val: string ) {

          if ( debounceTimeout.value ) clearTimeout( debounceTimeout.value )

          debounceTimeout.value = setTimeout(() => {
            debouncedValue.value = val
            searchPlacesByTerm( val )
          }, 500);
        }
      })
    }
  }
})
