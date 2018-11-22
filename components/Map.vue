<template>
  <map-loader 
    :map-config="mapConfig"
    api-key="AIzaSyBLM1CTnoUOebTSSfF9yy6p6OSLRjqh7Ao"
  >
    <div v-if="selectedMarker == null">
      <map-marker
        v-for="(marker, i) in markers"
        :key="i"
        :open="false"
        :position="marker"
      />
    </div>
    <map-marker
      v-if="selectedMarker != null"
      :open="true"
      :position="markers[selectedMarker]"
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
    },
    selectedMarker: {
      type: Number,
      required: false,
      default: null
    }
  },
  data() {
    return {
      mapConfig: {
        center: this.center,
        gestureHandling: 'greedy',
        zoom: 15
      }
    }
  }
}
</script>
