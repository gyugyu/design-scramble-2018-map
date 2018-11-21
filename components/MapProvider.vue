<template>
  <div>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    google: {
      type: Object,
      default: null,
      required: true
    },
    map: {
      type: Object,
      default: null,
      required: true
    }
  },
  provide() {
    return {
      google: this.google,
      map: this.map
    }
  }
}
</script>
