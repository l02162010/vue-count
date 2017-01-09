import * as types from './mutation_type.js'
import Vue from 'vue'

//state
export const state = {
  count: 0
}

//mutations 是計算邏輯 改變state
export const mutations = {
  [types.INCREASE](state) {
    state.count += 1;
  },
  [types.DECREASE](state) {
    state.count -= 1;
  },
  [types.ZERO](state) {
    state.count = 0;
  }
}
