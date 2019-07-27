<template>
  <div id="app">
    <transition name="fadeOut">
      <LoadingPage v-if="showLoading" />
    </transition>
    <div class="main">
      <Header />

      <div class="top_slot">
        <FreeSlot />
        <TargetSlot />
      </div>
      <div class="bottom_slot">
        <CardSlot />
      </div>
    </div>
    <div class="slide">
      <RightToolsBar />
    </div>
  </div>
</template>

<script>
import LoadingPage from '@/components/LoadingPage.vue'
import RightToolsBar from '@/components/RightToolsBar.vue'
import Header from '@/components/Header.vue'
import FreeSlot from '@/components/FreeSlot.vue'
import TargetSlot from '@/components/TargetSlot.vue'
import CardSlot from '@/components/CardSlot.vue'

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
    // setTimeout(() => {
    //   this.showLoading = false
    // })
  },
  components: {
    Header,
    LoadingPage,
    RightToolsBar,
    FreeSlot,
    TargetSlot,
    CardSlot
  }
}
</script>

<style lang="scss">
#app {
  width: 100%;
  min-width: 1280px;
  height: 100%;
  background: rgb(82, 82, 82);
  background: linear-gradient(180deg, rgba(82, 82, 82, 1) 0%, rgba(0, 31, 29, 1) 100%);
  display: flex;
  .main {
    width: calc(100% - 105px);
    max-width: 1160px;
    margin: 0 auto;
    height: 100%;
    padding: 0 2.5rem;
  }
  .slide {
    z-index: 2;
    background-color: #001f1d;
    width: 105px;
    height: 100%;
  }
  .top_slot {
    margin-top: 1rem;
    width: 100%;
    display: flex;
  }
}
</style>