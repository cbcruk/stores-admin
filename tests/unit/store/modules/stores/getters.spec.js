import getters from '@/store/modules/stores/getters'

test('total returns state.items length', () => {
  const state = {
    items: []
  }

  expect(getters.total(state)).toBe(0)
})
