import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    photolist: [],
    aa: 'aa'
}
const mutations = {
    getList(state, list) {
        state.photolist = list
        console.log(list);
    }
}

export default new Vuex.Store({
    state,
    mutations
})