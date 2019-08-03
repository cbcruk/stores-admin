import VueRouter from 'vue-router'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Nav from '@/components/Layout/Nav/Nav.vue'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

describe('Nav.vue', () => {
  it('Nav', () => {
    const wrapper = shallowMount(Nav, {
      localVue,
      router
    })
    const isShowNavbar = wrapper.vm.isShowNavbar

    const button = wrapper.find('.navbar-burger')
    button.trigger('click')

    expect(wrapper.isVueInstance()).toBe(true)
    expect(wrapper.classes('navbar')).toBe(true)
    expect(wrapper.vm.isShowNavbar).toBe(!isShowNavbar)
  })
})
