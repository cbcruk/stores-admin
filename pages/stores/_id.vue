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
import { i18n } from './constants'
import useId from './hooks/useId'
import useForm from './hooks/useForm'
import components from '~/components/Stores/Form/components'

export default {
  name: 'StoresDetail',
  components,
  setup(_, { root }) {
    const { id, hasId } = useId(root)
    const { store, onSubmit } = useForm(id, hasId, root)

    return {
      i18n,
      hasId,
      store,
      onSubmit
    }
  }
}
</script>
