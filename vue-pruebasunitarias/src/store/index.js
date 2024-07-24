// store/index.js

import { createStore } from 'vuex';

export default createStore({
  state: {
    contador: 0, // Inicializa el contador en 0
  },
  mutations: {
    increment(state) {
      state.contador++;
    },
  },
});











