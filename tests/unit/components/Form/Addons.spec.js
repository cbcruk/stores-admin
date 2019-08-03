import { shallowMount } from '@vue/test-utils'
import Addons from '@/components/Form/Addons.vue'

describe('Addons.vue', () => {
  it('Addons', () => {
    const wrapper = shallowMount(Addons)

    const input = wrapper.find('.input')

    wrapper.setProps({
      button: 'BUTTON',
      value: 'bar'
    })

    expect(wrapper.isVueInstance()).toBe(true)
    expect(wrapper.text()).toBe('BUTTON')
    expect(input.element.value).toBe('bar')
  })
})
