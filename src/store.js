import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pokeCards: [],
    freeSlots: [
      {
        name: 'free1',
        cards: [
          {
            id: 'spade_5',
            number: '5',
            color: 'black',
            flower: 'spade'
          }
        ]
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
        cards: [
          {
            id: 'spade_1',
            number: '1',
            color: 'black',
            flower: 'spade'
          }
        ]
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
        cards: [
          {
            id: 'spade_2',
            number: '2',
            color: 'black',
            flower: 'spade'
          },
          {
            id: 'spade_4',
            number: '4',
            color: 'black',
            flower: 'spade'
          }
        ]
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
        cards: [
          {
            id: 'spade_3',
            number: '3',
            color: 'black',
            flower: 'spade'
          }
        ]
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
