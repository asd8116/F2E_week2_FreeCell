<template>
  <div class="poke_card" :style="{backgroundImage: `url('${ imgUrl }')`,top: top + 'px'}"></div>
</template>

<script>
export default {
  props: ['cardData', 'top'],
  computed: {
    imgUrl() {
      return require('../assets/image/pokes/' + this.cardData.id + '.svg')
    }
  }
}
</script>

<style lang="scss" scoped>
.poke_card {
  width: 110px;
  height: 160px;
  border-radius: 5px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
}
</style>