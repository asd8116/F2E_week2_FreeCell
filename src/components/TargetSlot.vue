<template>
  <div class="target_slot_panel">
    <div class="target-slot" v-for="(slot, index) in targetSlots" :key="index">
      <div class="inner-block">A</div>
      <PokeCard v-for="card in slot.cards" :key="card.id" :cardData="card" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PokeCard from '@/components/PokeCard.vue'

export default {
  computed: {
    ...mapState(['targetSlots'])
  },
  components: {
    PokeCard
  }
}
</script>

<style lang="scss" scoped>
.target_slot_panel {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  margin-left: 12.5px;
  .target-slot {
    width: 110px;
    height: 160px;
    border: 1px solid white;
    border-radius: 5px;
    .inner-block {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 75px;
      font-weight: bold;
      color: rgba(white, 0.5);
    }
  }
}
</style>