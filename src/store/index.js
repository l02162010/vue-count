import Vue from 'vue'
import Vuex from 'vuex'
import { state, mutations } from './mutations.js'
import * as getters from './getter.js'
import * as actions from './action.js'


Vue.use( Vuex );

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions,

    strict: true
})