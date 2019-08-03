import Vue from 'vue'

export const initialForm = {
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

const store = Vue.observable({
  form: {
    ...initialForm
  }
})

export const mutations = {
  setForm(form) {
    store.form = {
      ...store.form,
      ...form
    }
  },
  resetForm() {
    store.form = {
      ...initialForm
    }
  }
}

export default store
