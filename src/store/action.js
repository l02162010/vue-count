import Vue from 'vue'
import mutations from './mutations'
import * as types from './mutation_type.js'

export const actionIncrease = ({ commit }) => {
    console.log('actionIncrease');
    commit(types.INCREASE);
}
export const actionDecrease = ({ commit }) => {
    console.log('actionDecrease');
    commit(types.DECREASE);   
}
export const actionZero = ({ commit }) => {
    console.log('actionZero');
    commit(types.ZERO);   
}