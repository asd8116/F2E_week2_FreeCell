<template>
  <div class="poke_card_slot_panel">
    <div class="card_slot" v-for="(slot, index) in bottomPokeSlots" :key="index" :style="{height: slotHeight(slot) + 'px'}">
      <PokeCard v-for="(card, cindex) in slot.cards" :key="card.id" :cardData="card" :top="cindex * 35" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PokeCard from '@/components/PokeCard.vue'

export default {
  computed: {
    ...mapState(['bottomPokeSlots'])
  },
  methods: {
    slotHeight(slot) {
      if (slot.cards.length === 0) return 160
      return (slot.cards.length - 1) * 35 + 160
    }
  },
  components: {
    PokeCard
  }
}
</script>

<style lang="scss" scoped>
.poke_card_slot_panel {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 3.25rem;
  .card_slot {
    width: 110px;
    border: 1px dotted rgba(white, 0.2);
    border-radius: 5px;
  }
}
</style>