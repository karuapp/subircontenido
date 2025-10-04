<template>
  <q-dialog
    v-model="showDialog"
    @hide="fecharModal"
    persistent
  >
    <q-card
      style="min-width: 400px; width: 60vw"
      class="q-pa-lg"
    >
      <q-card-section>
        <div class="text-h6">{{ autoRespostaEdicao.id ? 'Editar respuesta automática' : 'Nueva respuesta automática' }}</div>
      </q-card-section>
      <q-card-section>
        <q-input
          class="row col"
          outlined
          v-model="autoResposta.name"
          label="Nombre"
        />
        <q-select
          outlined
          class="row col q-mt-md"
          v-model="autoResposta.action"
          :options="tipoAutoResposta"
          label="Tipo"
          emit-value
          map-options
        />
        <q-input
          class="row col q-mt-md"
          outlined
          v-model="autoResposta.celularTeste"
          label="Teléfono de prueba"
          placeholder="0031999999999"
        />
        <q-toggle
          class="q-mt-md"
          v-model="autoResposta.isActive"
          label="Ativo"
          :true-value="true"
          :false-value="false"
        />

      </q-card-section>
      <q-card-actions
        align="right"
        class="q-mt-md"
      >
        <q-btn
          flat
          label="Cancelar"
          color="negative"
          v-close-popup
          class="q-mr-md"
        />
        <q-btn
          flat
          label="Salvar"
          color="primary"
          @click="handleAutoResposta"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { CriarAutoResposta, EditarAutoResposta } from 'src/service/autoResposta.js'
export default {
  name: 'ModalAutoResposta',
  props: {
    modalAutoResposta: {
      type: Boolean,
      default: false
    },
    autoRespostaEdicao: {
      type: Object,
      default: () => {
        return { id: null }
      }
    }
  },
  emits: ['update:modalAutoResposta', 'update:autoRespostaEdicao', 'autoResposta:criada', 'autoResposta:editado'],
  data () {
    return {
      autoResposta: {
        name: null,
        action: null,
        celularTeste: null,
        isActive: true
      },
      tipoAutoResposta: [
        { value: '0', label: 'Entrada (Creación de ticket)' },
        { value: '1', label: 'Cierre (Resolución de ticket)' }
      ]
    }
  },
  computed: {
    showDialog: {
      get () {
        return this.modalAutoResposta
      },
      set (val) {
        this.$emit('update:modalAutoResposta', val)
      }
    }
  },
  methods: {
    resetarAutoResposta () {
      this.autoResposta = {
        name: null,
        action: null,
        celularTeste: null,
        isActive: true
      }
    },
    fecharModal () {
      this.resetarAutoResposta()
      this.$emit('update:autoRespostaEdicao', { id: null })
    },
    abrirModal () {
      if (this.autoRespostaEdicao.id) {
        this.autoResposta = { ...this.autoRespostaEdicao }
      } else {
        this.resetarAutoResposta()
      }
    },
    async handleAutoResposta () {
      try {
        this.loading = true
        if (this.autoResposta.id) {
          const { data } = await EditarAutoResposta(this.autoResposta)
          this.$emit('autoResposta:editado', data)
          this.$q.notify({
            type: 'info',
            progress: true,
            position: 'top',
            textColor: 'black',
            message: 'Respuesta automática editada correctamente.',
            actions: [{
              icon: 'close',
              round: true,
              color: 'white'
            }]
          })
        } else {
          const { data } = await CriarAutoResposta(this.autoResposta)
          this.$emit('autoResposta:criada', data)
          this.$q.notify({
            type: 'positive',
            progress: true,
            position: 'top',
            message: 'Respuesta automática creada correctamente.',
            actions: [{
              icon: 'close',
              round: true,
              color: 'white'
            }]
          })
        }
        this.loading = false
        this.showDialog = false
      } catch (error) {
        console.error(error)
        this.$notificarErro('Se produjo un error al guardar la respuesta automática.', error)
      }
    }
  },
  watch: {
    modalAutoResposta: {
      handler (newValue, oldValue) {
        if (newValue === true) {
          this.abrirModal()
        }
      },
      immediate: true
    }
  }

}
</script>

<style lang="scss" scoped>
</style>