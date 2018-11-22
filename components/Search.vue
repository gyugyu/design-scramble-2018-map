<template>
  <div>
    <input
      v-model="search"
      type="text"
      placeholder="Search..."
      class="input"
      @input="searchIndex"
    >
    <div
      v-if="selectedHit != null || hits.length > 0"
      class="panel"
    >
      <div
        v-if="selectedHit != null"
        class="panel-block is-active"
      >
        <button
          class="button hit-close-button"
          @click="deselectHit"
        >x</button>
        <div>
          <div class="is-size-4">{{ selectedHit.title }}</div>
          <div class="hit-subheader is-size-6">{{ selectedHit.area }} | {{ selectedHit.company }}</div>
          <div class="hit-desc is-size-7">{{ selectedHit.desc }}</div>
        </div>
      </div>
      <a
        v-for="(hit, i) in hits"
        :key="i"
        class="panel-block"
        @click="selectHit(hit)"
      >
        <div>
          <div class="is-size-4">{{ hit.title }}</div>
          <div class="hit-subheader is-size-6">{{ hit.area }} | {{ hit.company }}</div>
          <div class="hit-desc is-size-7">{{ hit.desc }}</div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import algoliasearch from 'algoliasearch'

export default {
  props: {
    onDeselectHit: {
      type: Function,
      required: true,
      default: null
    },
    onSelectHit: {
      type: Function,
      required: true,
      default: null
    }
  },
  data() {
    return {
      hits: [],
      index: null,
      search: '',
      selectedHit: null
    }
  },
  mounted() {
    const client = algoliasearch(
      '1W2DK1C5LJ',
      '63778084ad7cbcfcc872b47160867d99'
    )
    this.index = client.initIndex('programs')
  },
  methods: {
    deselectHit() {
      this.selectedHit = null
      this.onDeselectHit()
    },
    searchIndex(evt) {
      this.index.search({ query: evt.target.value }).then(content => {
        this.hits = content.hits
      })
    },
    selectHit(hit) {
      this.selectedHit = hit
      this.hits = []
      this.search = ''
      this.onSelectHit(hit)
    }
  }
}
</script>

<style>
.hit-subheader {
  margin-bottom: 0.5rem;
}

.hit-desc {
  overflow-y: hidden;
  height: 2.4rem;
}

.hit-close-button {
  margin-right: 1rem;
}
</style>
