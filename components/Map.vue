<template>
  <map-loader 
    :map-config="mapConfig"
    api-key="AIzaSyBLM1CTnoUOebTSSfF9yy6p6OSLRjqh7Ao"
  >
    <map-marker
      v-for="(marker, i) in markers"
      :key="i"
      :position="marker"
    />
  </map-loader>
</template>

<script>
import MapLoader from './MapLoader.vue'
import MapMarker from './MapMarker.vue'

export default {
  components: {
    MapLoader,
    MapMarker
  },
  props: {
    markers: {
      type: Array,
      required: false,
      default() {
        return []
      }
    },
    center: {
      type: Object,
      required: true,
      default: null
    }
  },
  data() {
    return {
      mapConfig: {
        zoom: 15,
        center: this.center
      }
    }
  }
}
</script>
