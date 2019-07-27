import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    freeSlots: [
      {
        name: 'free1',
        cards: []
      },
      {
        name: 'free2',
        cards: []
      },
      {
        name: 'free2',
        cards: []
      },
      {
        name: 'free3',
        cards: []
      }
    ],
    targetSlots: [
      {
        name: 'target1',
        cards: []
      },
      {
        name: 'target2',
        cards: []
      },
      {
        name: 'target2',
        cards: []
      },
      {
        name: 'target3',
        cards: []
      }
    ],
    bottomPokeSlots: [
      {
        name: 'slot1',
        cards: []
      },
      {
        name: 'slot2',
        cards: []
      },
      {
        name: 'slot3',
        cards: []
      },
      {
        name: 'slot4',
        cards: []
      },
      {
        name: 'slot5',
        cards: []
      },
      {
        name: 'slot6',
        cards: []
      },
      {
        name: 'slot7',
        cards: []
      },
      {
        name: 'slot8',
        cards: []
      }
    ]
  },
  mutations: {},
  actions: {}
})
