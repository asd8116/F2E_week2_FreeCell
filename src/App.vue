<template>
  <div id="app">
    <LoadingPage :showPage="showLoading" />
  </div>
</template>

<script>
import LoadingPage from '@/components/LoadingPage.vue'
import { setTimeout } from 'timers'

export default {
  data() {
    return {
      showLoading: true,
      pokeCards: [
        {
          id: 0,
          number: 1,
          color: 'pitch'
        }
      ]
    }
  },
  mounted() {
    setTimeout(() => {
      this.showLoading = false
    })
  },
  components: {
    LoadingPage
  }
}
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  background: rgb(82, 82, 82);
  background: linear-gradient(180deg, rgba(82, 82, 82, 1) 0%, rgba(0, 31, 29, 1) 100%);
}
</style>