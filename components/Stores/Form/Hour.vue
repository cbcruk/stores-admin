<template>
  <div class="field">
    <p
      :class="{
        control: true,
        'is-expanded ': true,
        'has-icons-left': isStart,
        'has-icons-right': !isStart
      }"
    >
      <input id="common_hours_start" v-model="field" v-bind="timeAttrs" />

      <span class="icon is-small is-left">
        <i class="fa fa-clock-o" aria-hidden="true"></i>
      </span>
    </p>
  </div>
</template>

<script>
import useInput from '@/components/Form/hooks/useInput'

export default {
  name: 'FormHour',
  props: {
    isStart: {
      type: Boolean,
      default: false
    },
    isFar: {
      type: Boolean,
      default: false
    },
    timeAttrs: {
      type: Object,
      default() {
        return {
          type: 'time',
          class: 'input'
        }
      }
    }
  },
  setup(_, context) {
    return {
      ...useInput(context)
    }
  }
}
</script>
