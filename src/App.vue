<template>
  <div id="app">
    <Header />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  data() {
    return {
      pokeCards: [
        {
          id: 0,
          number: 1,
          color: 'pitch'
        }
      ]
    }
  },
  components: {
    Header
  }
}
</script>

<style lang="scss">
#app {
  width: 100%;
}
</style>