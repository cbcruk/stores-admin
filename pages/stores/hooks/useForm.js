import { ref, onMounted } from '@vue/composition-api'

export default (id, hasId, root) => {
  const initialState = {
    image: [{}],
    tel: '',
    hours_start: '',
    hours_end: '',
    closed: '',
    area: '',
    geo: '',
    name_ko: '',
    name_en: '',
    name_ja: '',
    name_zh_hans: '',
    name_zh_hant: '',
    address_ko: '',
    address_en: '',
    address_ja: '',
    address_zh_hans: '',
    address_zh_hant: ''
  }

  const store = ref({
    form: {
      ...initialState
    }
  })

  async function onSubmit() {
    if (hasId) {
      await root.$store.dispatch('stores/patchItem', {
        id,
        fields: store.value.form
      })

      root.$router.push('/stores')
    }
  }

  onMounted(async () => {
    store.value.form = await root.$store.dispatch('stores/fetchItem', id)
  })

  return {
    store,
    onSubmit
  }
}
