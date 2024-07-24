// tests/unit/store.spec.js

import store from '@/store'; // Ajusta la ruta según donde tengas definido tu store Vuex

describe('Vuex Store', () => {
  it('increments contador when mutation is committed', () => {
    // Inicializa el contador en 0 (esto puede no ser necesario si ya está inicializado en el store)
    store.state.contador = 0;

    // Llama a la mutación directamente
    store.commit('increment');

    // Verifica que el contador se haya incrementado a 1
    expect(store.state.contador).toBe(1);
  });
});








