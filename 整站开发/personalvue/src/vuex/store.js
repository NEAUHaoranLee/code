import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  path: ['index', 'introduce', 'school', 'skills', 'production', 'contect'],
  index: 0
}

const mutations = {
  front(state) {
    if (state.index > 0) {
      state.index--;
    }
  },
  back(state) {
    if (state.index < 5) {
      state.index++;
    }
  }
}
export default new Vuex.Store({
  state,
  mutations
})
