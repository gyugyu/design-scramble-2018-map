<template>
  <section>
    <div>
      <design-scramble-map
        :center="center"
        :markers="markers"
      />
    </div>
  </section>
</template>

<script>
import { default as DesignScrambleMap } from '~/components/Map.vue'

export default {
  components: {
    DesignScrambleMap
  },
  data() {
    return {
      center: {
        lat: 35.658034,
        lng: 139.701636
      },
      markers: [
        {
          lat: 35.6590249,
          lng: 139.70347300000003,
          title: '渋谷ヒカリエ「8/ COURT」'
        }
      ]
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
