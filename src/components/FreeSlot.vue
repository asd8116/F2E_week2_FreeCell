<template>
  <div class="free_slot_panel">
    <div class="free-slot" v-for="(slot, index) in freeSlots" :key="index">
      <div class="inner-block"></div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['freeSlots'])
  }
}
</script>

<style lang="scss" scoped>
.free_slot_panel {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  margin-right: 12.5px;
  .free-slot {
    width: 110px;
    height: 160px;
    border: 1px solid white;
    border-radius: 5px;
    .inner-block {
      width: 100px;
      height: 150px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border: 1px solid white;
      border-radius: 5px;
    }
  }
}
</style>