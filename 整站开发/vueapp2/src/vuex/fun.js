import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
    title: 'Movie'
}
export default new Vuex.Store({
    state
})