import { h, defineComponent } from 'vue'
import VuePhoneNumberInput from 'vue3-phone-number-input'
import 'vue3-phone-number-input/dist/vue3-phone-number-input.css'

// Wrapper para manter compatibilidade de evento "update" e v-model
export default defineComponent({
  name: 'VuePhoneNumberInputCompat',
  inheritAttrs: false,
  props: {
    modelValue: { type: [String, Object], default: '' }
  },
  emits: ['update:modelValue', 'update'],
  setup(props, { emit, attrs }) {
    const onUpdateModel = (val) => {
      emit('update:modelValue', val)
      // compat: alguns trechos usam @update
      emit('update', val)
    }
    return () => h(VuePhoneNumberInput, {
      ...attrs,
      modelValue: props.modelValue,
      'onUpdate:modelValue': onUpdateModel
    })
  }
})

