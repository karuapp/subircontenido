<template>
  <q-dialog
    persistent
    v-model="showDialog"
    @hide="fecharModal"
    @show="abrirModal"
  >
    <q-card
      :style="$q.screen.width < 500 ? 'width: 95vw' : 'min-width: 700px; max-width: 700px'"
      class="q-pa-lg"
    >
      <q-card-section>
        <div class="text-h6">
          {{ mensagemRapida.id ? $t('modalMensagemRapida.editTitle') : $t('modalMensagemRapida.createTitle') }}
          {{ mensagemRapida.id ? `(${$t('modalMensagemRapida.idLabel')}: ${mensagemRapida.id})` : '' }}
        </div>
      </q-card-section>
      <q-card-section class="q-pa-none">
        <div class="row q-my-md">
          <div class="col">
            <q-input
              style="width: 200px; margin-left: 62px"
              square
              outlined
              v-model="mensagemRapida.key"
              :label="$t('modalMensagemRapida.keyLabel')"
            />
            <p style="margin-left: 62px; font-size: 10px; margin-top: 3px;">
              {{ $t('modalMensagemRapida.keyHint') }}
            </p>
          </div>
        </div>
        <div class="row items-center">
          <div class="col-xs-3 col-sm-2 col-md-1">
            <q-btn round flat>
              <q-icon size="2em" name="mdi-emoticon-happy-outline" />
              <q-tooltip>{{ $t('modalMensagemRapida.emojiLabel') }}</q-tooltip>
              <q-menu anchor="top right" self="bottom middle" :offset="[5, 40]">
                <VEmojiPicker
                  style="width: 40vw"
                  :showSearch="false"
                  :emojisByRow="20"
                  :labelSearch="$t('common.search')"
                  lang="pt-BR"
                  @select="onInsertSelectEmoji"
                />
              </q-menu>
            </q-btn>
            <q-btn round flat dense>
              <q-icon size="2em" name="mdi-variable" />
              <q-tooltip>{{ $t('modalMensagemRapida.variablesLabel') }}</q-tooltip>
              <q-menu touch-position>
                <q-list dense style="min-width: 100px">
                  <q-item
                    v-for="variavel in variaveis"
                    :key="variavel.label"
                    clickable
                    @click="onInsertSelectVariable(variavel.value)"
                    v-close-popup
                  >
                    <q-item-section>{{ variavel.label }}</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </div>
          <div class="col-xs-8 col-sm-10 col-md-11 q-pl-sm">
            <label class="text-caption">{{ $t('modalMensagemRapida.messageLabel') }}</label>
            <textarea
              ref="inputEnvioMensagem"
              style="min-height: 15vh; max-height: 15vh;"
              class="q-pa-sm bg-white full-width"
              :placeholder="$t('modalMensagemRapida.placeholder')"
              autogrow
              dense
              outlined
              @input="(v) => mensagemRapida.message = v.target.value"
              :value="mensagemRapida.message"
            />
          </div>
          <div class="col-xs-3 col-sm-2 col-md-1">
            <q-checkbox v-model="isVoz" />
            <q-tooltip>{{ $t('modalMensagemRapida.sendAsAudio') }}</q-tooltip>
          </div>
          <div class="col-xs-8 col-sm-10 col-md-11 q-pl-sm">
            <q-file
              dense
              outlined
              v-model="arquivoCarregado"
              :label="$t('modalMensagemRapida.fileLabel')"
              filled
            />
          </div>
        </div>
      </q-card-section>
      <q-card-actions align="right" class="q-mt-md">
        <q-btn flat :label="$t('modalMensagemRapida.removeFile')" color="primary" @click="limparArquivo" />
        <q-btn
          flat
          :label="$t('common.cancel')"
          color="negative"
          v-close-popup
          class="q-mr-md"
        />
        <q-btn
          flat
          :label="$t('common.save')"
          color="primary"
          @click="handleMensagemRapida"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { VEmojiPicker } from 'src/components/VEmojiPicker.js'

import { CriarMensagemRapida, AlterarMensagemRapida } from 'src/service/mensagensRapidas.js'
export default {
  name: 'ModalMensagemRapida',
  components: { VEmojiPicker },
  props: {
    modalMensagemRapida: {
      type: Boolean,
      default: false
    },
    mensagemRapidaEmEdicao: {
      type: Object,
      default: () => {
        return { id: null, key: '', message: '', medias: '', voice: '' }
      }
    }
  },
  emits: ['update:modalMensagemRapida', 'update:mensagemRapidaEmEdicao', 'mensagemRapida:criada', 'mensagemRapida:editada'],
  data () {
    return {
      mensagemRapida: {
        key: null,
        message: null,
        medias: null,
        voice: null
      },
      arquivoCarregado: null,
      isVoz: false,
      variaveis: this.$t('modalMensagemRapida.variablesList'),
      // variaveis: [
      //   { label: 'Nome', value: '{{name}}' },
      //   { label: 'Saudação', value: '{{greeting}}' },
      //   { label: 'Protocolo', value: '{{protocol}}' },
      //   { label: 'E-mail (se existir)', value: '{{email}}' },
      //   { label: 'Telefone', value: '{{phoneNumber}}' },
      //   { label: 'Kanban (se existir)', value: '{{kanban}}' },
      //   { label: 'Atendente (se em atendimento)', value: '{{user}}' },
      //   { label: 'E-mail Atendente (se em atendimento)', value: '{{userEmail}}' },
      //   { label: 'Primeiro Nome (se existir)', value: '{{firstName}}' },
      //   { label: 'Sobrenome (se existir)', value: '{{lastName}}' },
      //   { label: 'Empresa (se existir)', value: '{{businessName}}' }
      // ]
      // Sistema de gerenciamento de memória
      timers: []
    }
  },
  computed: {
    showDialog: {
      get () {
        return this.modalMensagemRapida
      },
      set (val) {
        this.$emit('update:modalMensagemRapida', val)
      }
    }
  },
  methods: {
    // Sistema de gerenciamento de memória
    addTimer(timerId) {
      this.timers.push(timerId);
    },
    clearAllTimers() {
      this.timers.forEach(timerId => {
        clearTimeout(timerId);
        clearInterval(timerId);
      });
      this.timers = [];
    },
    cleanupMemory() {
      this.clearAllTimers();
    },
    limparArquivo(){
      this.arquivoCarregado = null
      this.mensagemRapida.medias = null;
    },
    onInsertSelectEmoji (emoji) {
      const self = this
      var tArea = this.$refs.inputEnvioMensagem
      // get cursor's position:
      var startPos = tArea.selectionStart,
        endPos = tArea.selectionEnd,
        cursorPos = startPos,
        tmpStr = tArea.value
      // filter:
      if (!emoji.data) {
        return
      }
      // insert:
      self.txtContent = this.mensagemRapida.message
      self.txtContent = tmpStr.substring(0, startPos) + emoji.data + tmpStr.substring(endPos, tmpStr.length)
      this.mensagemRapida.message = self.txtContent
      // move cursor:
      const timerId = setTimeout(() => {
        tArea.selectionStart = tArea.selectionEnd = cursorPos + emoji.data.length
      }, 10)
      this.addTimer(timerId);
    },
    fecharModal () {
      this.arquivoCarregado = null
      this.$emit('update:mensagemRapidaEmEdicao', { id: null })
    },
    abrirModal () {
      if (this.mensagemRapidaEmEdicao.id) {
        this.mensagemRapida = { ...this.mensagemRapidaEmEdicao }
        this.arquivoCarregado = [{ name: this.mensagemRapidaEmEdicao.media }];
      } else {
        this.mensagemRapida = {
          key: null,
          message: null,
          medias: null,
          voice: null
        }
        this.arquivoCarregado = null
        this.isVoz = false
      }
    },
    async handleMensagemRapida () {
      this.loading = true;
      try {
        let data;
        if (this.mensagemRapida.id) {
          const formData = new FormData();
          formData.append("key", this.mensagemRapida.key);
          formData.append("message", this.mensagemRapida.message?.toString());
          if (this.arquivoCarregado) {
            formData.append("medias", this.arquivoCarregado);
          }
          else {
            formData.append("medias", null);
          }
          formData.append("voice", this.isVoz ? "enabled" : "disabled");
          data = await AlterarMensagemRapida(this.mensagemRapida.id, formData);
          this.$emit('mensagemRapida:editada', { ...this.mensagemRapida, ...data.data })
        } else {
          const formData = new FormData();
          formData.append("key", this.mensagemRapida.key);
          formData.append("message", this.mensagemRapida.message);
          if (this.arquivoCarregado) {
            formData.append("medias", this.arquivoCarregado);
          }
          if (!this.arquivoCarregado) {
            formData.append("medias", null);
          }
          formData.append("voice", this.isVoz ? "enabled" : "disabled");
          data = await CriarMensagemRapida(formData);
          this.$emit('mensagemRapida:criada', { ...this.mensagemRapida, ...data.data })
        }
        this.$q.notify({
          type: 'positive',
          message: this.mensagemRapida.id ? this.$t('modalMensagemRapida.saveSuccess.update') : this.$t('modalMensagemRapida.saveSuccess.create')
        });
        // this.$emit('updateListaMensagens');
        this.showDialog = false
      } catch (error) {
        console.error(error);
        this.$q.notify({
          type: 'negative',
          message: this.$t('modalMensagemRapida.saveError')
        });
      }
      this.loading = false;
    },
    onInsertSelectVariable (variable) {
      const self = this
      var tArea = this.$refs.inputEnvioMensagem
      // get cursor's position:
      var startPos = tArea.selectionStart,
        endPos = tArea.selectionEnd,
        cursorPos = startPos,
        tmpStr = tArea.value
      // filter:
      if (!variable) {
        return
      }
      // insert:
      self.txtContent = this.mensagemRapida.message
      self.txtContent = tmpStr.substring(0, startPos) + variable + tmpStr.substring(endPos, tmpStr.length)
      this.mensagemRapida.message = self.txtContent
      // move cursor:
      const timerId2 = setTimeout(() => {
        tArea.selectionStart = tArea.selectionEnd = cursorPos + 1
      }, 10)
      this.addTimer(timerId2);
    }
  },
  
  beforeUnmount() {
    // Limpeza completa de memória
    this.cleanupMemory();
  },
  
  unmounted() {
    // Limpeza completa de memória
    this.cleanupMemory();
  }
}
</script>

<style scoped lang="scss">
.q-dialog {
  .q-card {
    background: rgba(255,255,255,0.92);
    border-radius: 20px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.12);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.18);
    transition: all 0.3s;
    max-width: 95vw;
    margin: 0 auto;
  }

  .q-card-section {
    padding: 1.5rem 1.5rem 0.5rem 1.5rem;
    .text-h6 {
      color: var(--q-primary);
      font-weight: 600;
      font-size: 1.2rem;
    }
  }

  .q-input, .q-file, textarea {
    margin-bottom: 1rem;
    .q-field__control {
      border-radius: 10px;
      background: rgba(255,255,255,0.7);
      transition: background 0.2s;
      &:hover {
        background: rgba(255,255,255,0.9);
      }
    }
    &.q-field--focused .q-field__control {
      background: rgba(255,255,255,0.95);
      box-shadow: 0 4px 12px rgba(0,0,0,0.10);
    }
  }

  .q-card-actions {
    padding: 1rem 1.5rem;
    border-top: 1px solid rgba(0,0,0,0.05);
    .q-btn {
      border-radius: 8px;
      padding: 0.3rem 1rem;
      font-size: 0.9rem;
      min-height: 32px;
      transition: box-shadow 0.2s;
      &:hover {
        box-shadow: 0 4px 12px rgba(0,0,0,0.13);
      }
    }
  }
}

body.body--dark {
  .q-dialog .q-card {
    background: rgba(30,30,30,0.97);
    border: 1px solid rgba(255,255,255,0.08);
  }
  .q-card-section .text-h6 {
    color: var(--q-primary);
  }
  .q-input .q-field__control, .q-file .q-field__control, textarea {
    background: rgba(255,255,255,0.08);
    &:hover {
      background: rgba(255,255,255,0.13);
    }
  }
  .q-input.q-field--focused .q-field__control, .q-file.q-field--focused .q-field__control, textarea:focus {
    background: rgba(255,255,255,0.15);
  }
}

@media (max-width: 600px) {
  .q-dialog .q-card {
    width: 98vw !important;
    border-radius: 12px;
    padding: 0.5rem;
  }
  .q-card-section {
    padding: 1rem !important;
  }
  .q-card-actions {
    padding: 0.7rem 1rem !important;
    flex-direction: column;
    gap: 0.5rem;
    .q-btn {
      width: 100%;
    }
  }
}
</style>
