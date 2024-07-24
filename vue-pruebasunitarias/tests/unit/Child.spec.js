// tests/unit/Child.spec.js
import { mount } from '@vue/test-utils';
import Child from '@/components/Child.vue';

describe('Child.vue', () => {
  it('renderiza el componente Hijo correctamente', () => {
    const wrapper = mount(Child);

    const parrafo = wrapper.find('p');
    expect(parrafo.text()).toBe('Componente Hijo');
  });
});



