const actions = {
  async fetchItems({ commit, dispatch }, params) {
    dispatch('wait/start', 'z', { root: true })

    const data = await this.$axios.$get('/shops', params)

    commit('UPDATE_LIST', data.records)

    dispatch('wait/end', 'z', { root: true })
  },
  async fetchItem({ dispatch }, id) {
    dispatch('wait/start', 'z', { root: true })

    const data = await this.$axios.$get(`/shops/${id}`)

    dispatch('wait/end', 'z', { root: true })

    return data.fields
  },
  async patchItem(_, { id, fields }) {
    const data = await this.$axios.$patch(`/shops/${id}`, {
      fields
    })

    return data.id
  }
}

export default actions
