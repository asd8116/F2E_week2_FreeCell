<template>
  <div class="poke_card_slot_panel">
    <div class="card_slot" v-for="(slot, index) in bottomPokeSlots" :key="index"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['bottomPokeSlots'])
  }
}
</script>

<style lang="scss" scoped>
.poke_card_slot_panel {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3.25rem;
  .card_slot {
    width: 110px;
    height: 160px;
    border: 1px dotted rgba(white, 0.2);
    border-radius: 5px;
  }
}
</style>