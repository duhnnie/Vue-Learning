import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    cart: [],
    parts: null,
  },
  mutations: {
    addRobotToCart(state, robot) {
      state.cart.push(robot);
    },
    updateParts(state, parts) {
      state.parts = parts;
    },
  },
  actions: {
    getParts({ commit }) {
      axios.get('/api/parts')
        .then((response) => commit('updateParts', response.data));
    },
  },
  getters: {
    robotsOnSale(state) {
      return state.cart.filter((item) => item.head.onSale);
    },
  },
});
