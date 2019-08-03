import actions from '@/store/modules/stores/actions'

let url = ''
let body = {}
let mockError = false

jest.mock('axios', () => ({
  create: () => ({
    get: (_url, _body) => {
      return new Promise(resolve => {
        if (mockError) {
          throw Error('Mock error')
        }

        url = _url
        body = _body

        resolve({
          data: {
            records: []
          }
        })
      })
    }
  })
}))

test('get items', async () => {
  const commit = jest.fn()
  const dispatch = jest.fn()

  await actions.fetchItems({ commit, dispatch }, {})

  expect(url).toBe('/shops')
  expect(body).toEqual({ params: {} })
  expect(commit).toHaveBeenCalledWith('UPDATE_LIST', [])
})
