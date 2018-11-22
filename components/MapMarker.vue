<template>
  <div />
</template>

<script>
export default {
  inject: ['google', 'map'],
  props: {
    open: {
      type: Boolean,
      required: true,
      default: false
    },
    position: {
      type: Object,
      required: true,
      default: null
    }
  },
  data() {
    return {
      infoWindow: null,
      marker: null
    }
  },
  computed: {
    infoContent() {
      // prettier-ignore
      return `
        <h2 class="title is-4">${this.position.title}</h2>
        <p><a href="https://www.google.com/maps/dir/?api=1&destination=${this.position.lat},${this.position.lng}">Launch Google Maps</a></p>
      `
    }
  },
  mounted() {
    const { InfoWindow, Marker } = this.google.maps
    this.infoWindow = new InfoWindow({
      content: this.infoContent
    })
    this.marker = new Marker({
      position: this.position,
      map: this.map,
      title: this.position.title
    })
    this.marker.addListener('click', () => {
      this.infoWindow.open(this.map, this.marker)
    })

    if (this.open) {
      this.infoWindow.open(this.map, this.marker)
    }
  },
  beforeDestroy() {
    this.marker.setMap(null)
  }
}
</script>
