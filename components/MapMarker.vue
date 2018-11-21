<template>
  <div />
</template>

<script>
export default {
  inject: ['google', 'map'],
  props: {
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
        <h2>${this.position.title}</h2>
        <p><a href="comgooglemaps://?daddr=${this.position.lat},${this.position.lng}">Navigate with Google Maps App</a></p>
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
  }
}
</script>
