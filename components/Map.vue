<template>
  <map-loader 
    :map-config="mapConfig"
    api-key="AIzaSyBLM1CTnoUOebTSSfF9yy6p6OSLRjqh7Ao"
  />
</template>

<script>
import MapLoader from './MapLoader.vue'

export default {
  components: {
    MapLoader
  },
  props: {
    markers: {
      type: Array,
      required: false,
      default() {
        return [{ lat: 35.6432027, lng: 139.6729435 }]
      }
    }
  },
  data() {
    console.log('this')
    return {
      mapConfig: {
        zoom: 12,
        center: this.markers[0]
      }
    }
  }
}
</script>
