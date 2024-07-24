// tests/unit/contador.spec.js
import { mount } from '@vue/test-utils';
import Contador from '@/components/Contador.vue';

describe('Contador.vue', () => {
  it('incrementa el contador al hacer clic en el botón', async () => {
    const wrapper = mount(Contador);

    const boton = wrapper.find('button');
    await boton.trigger('click');

    const parrafoContador = wrapper.find('p');
    expect(parrafoContador.text()).toContain('Contador: 1');
  });
});



