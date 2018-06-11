import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  path: ['index', 'introduce', 'school', 'skills', 'production', 'contect'],
  index: 1
}

const mutations = {

}
export default new Vuex.Store({
  state,
  mutations
})
