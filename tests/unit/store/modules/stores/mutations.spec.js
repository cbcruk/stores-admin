import mutations from '@/store/modules/stores/mutations'

test('change field', () => {
  const state = {
    items: []
  }

  mutations.UPDATE_LIST(state, [0])

  expect(state.items.length).toBe(1)
})
