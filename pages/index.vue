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
        },
        {
          lat: 35.6590249,
          lng: 139.70351300000004,
          title: 'DeNA オフィス'
        },
        {
          lat: 35.6587806,
          lng: 139.70525799999996,
          title: 'ビズリーチ オフィス'
        },
        {
          lat: 35.6579595,
          lng: 139.70892830000003,
          title: 'ミクシィ オフィス'
        },
        {
          lat: 35.65645560000001,
          lng: 139.6994178,
          title: 'シナジーカフェ GMO Yours'
        },
        {
          lat: 35.6614809,
          lng: 139.70310240000003,
          title: 'HOLSTER'
        },
        {
          lat: 35.6565632,
          lng: 139.69500629999993,
          title: 'サイバーエージェント オフィス'
        },
        {
          lat: 35.6566777,
          lng: 139.6963624,
          title: 'CINRA オフィス'
        },
        {
          lat: 35.6560307,
          lng: 139.69470709999996,
          title: 'BANK オフィス'
        },
        {
          lat: 35.659931,
          lng: 139.700317,
          title: 'CAFE「WIRED TOKYO 1999」'
        },
        {
          lat: 35.659931,
          lng: 139.700317,
          title: 'ライゾマティクス オフィス'
        },
        {
          lat: 35.65417,
          lng: 139.704117,
          title: 'Goodpatch オフィス'
        },
        {
          lat: 35.6560643,
          lng: 139.69550490000006,
          title: 'ロフトワーク オフィス'
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
