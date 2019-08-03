<template>
  <div class="container">
    <form @submit.prevent="onSubmit">
      <FormImage v-model="store.form.image[0].url" />
      <FormNames>
        <FormName
          v-for="item in i18n"
          :id="`name_${item.k}`"
          :key="item.k"
          v-model="store.form[`name_${item.k}`]"
          :button="item.v"
        />
      </FormNames>
      <FormPhone v-model="store.form.tel" />
      <FormHours>
        <FormHour v-model="store.form.hours_start" is-start is-far />
        <FormHour v-model="store.form.hours_end" is-start />
      </FormHours>
      <FormAddresses>
        <FormAddress
          v-for="item in i18n"
          :key="item.k"
          v-model="store.form[`address_${item.k}`]"
          :button="item.v"
        />
      </FormAddresses>
      <FormArea v-model="store.form.area" />
      <FormMaps v-model="store.form.href" />
      <FormMapsCanvas
        v-if="store.form.geo"
        v-model="store.form.geo"
        :has-id="hasId"
      />

      <FormSubmit />
    </form>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import store from '~/components/Stores/Form/store'
import components from '~/components/Stores/Form/components'

const { mapActions } = createNamespacedHelpers('stores')

export default {
  name: 'StoresDetail',
  components,
  data() {
    return {
      store
    }
  },
  computed: {
    id() {
      return this.$route.params.id
    },
    hasId() {
      return Boolean(this.id)
    },
    i18n() {
      return [
        { k: 'ko', v: '한국어' },
        { k: 'en', v: 'English' },
        { k: 'ja', v: '日本語' },
        { k: 'zh-Hans', v: '中文(简体)' },
        { k: 'zh-Hant', v: '中文(繁體)' }
      ].map(item => ({
        k: item.k,
        v: item.v
      }))
    }
  },
  async fetch({ store, params }) {
    await store.dispatch('stores/fetchItem', params.id)
  },
  async mounted() {
    if (this.hasId) {
      const form = await this.fetchItem(this.id)
      store.form = form
    }
  },
  methods: {
    ...mapActions(['fetchItem', 'patchItem']),
    async onSubmit() {
      if (this.hasId) {
        await this.patchItem({
          id: this.id,
          fields: this.store.form
        })

        this.$router.push('/stores')
      }
    }
  }
}
</script>
