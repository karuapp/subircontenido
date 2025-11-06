<template>
  <q-dialog
    persistent
    :value="modalTutorial"
    @hide="fecharModal"
    @show="abrirModal"
  >
    <q-card
      style="width: 500px"
      class="q-pa-lg"
    >
      <q-card-section>
        <div class="text-h6">{{ tutorialEdicao.id ? $t('configuracaoTutoriais.edit') : $t('configuracaoTutoriais.create') }}</div>
      </q-card-section>
      <q-card-section>
        <q-input
          class="row col"
          square
          outlined
          v-model="tutorial.title"
          :label="$t('configuracaoTutoriais.title')"
        />
      </q-card-section>
      <q-card-section>
        <q-input
          class="row col"
          square
          outlined
          v-model="tutorial.description"
          :label="$t('configuracaoTutoriais.description')"
          type="textarea"
        />
      </q-card-section>
      <q-card-section>
        <q-input
          class="row col"
          square
          outlined
          v-model="tutorial.link"
          :label="$t('configuracaoTutoriais.link')"
        />
      </q-card-section>
      <q-card-section>
        <q-toggle
          v-model="tutorial.isActive"
          :label="$t('configuracaoTutoriais.isActive')"
          color="primary"
        />
      </q-card-section>
      <q-card-section>
        <q-file
          v-model="thumbnail"
          :label="$t('configuracaoTutoriais.thumbnail')"
          outlined
          square
          accept="image/*"
          @update:model-value="handleThumbnailChange"
        >
          <template v-slot:prepend>
            <q-icon name="attach_file" />
          </template>
        </q-file>
        <q-img
          v-if="thumbnail || tutorial.thumbnailUrl"
          :src="thumbnail ? URL.createObjectURL(thumbnail) : tutorial.thumbnailUrl"
          style="max-width: 200px; margin-top: 10px"
        />
      </q-card-section>
      <q-card-actions
        align="right"
        class="q-mt-md"
      >
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
          @click="handleTutorial"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { CriarTutorial, AtualizarTutorial } from 'src/service/tutorials.js'

export default {
  name: 'ModalTutorial',
  props: {
    modalTutorial: {
      type: Boolean,
      default: false
    },
    tutorialEdicao: {
      type: Object,
      default: () => {
        return { id: null }
      }
    }
  },
  data () {
    return {
      tutorial: {
        id: null,
        title: null,
        description: null,
        link: null,
        thumbnail: null,
        isActive: false
      },
      thumbnail: null
    }
  },
  methods: {
    resetarTutorial () {
      this.tutorial = {
        id: null,
        title: null,
        description: null,
        link: null,
        thumbnail: null,
        isActive: false
      }
      this.thumbnail = null
    },
    fecharModal () {
      this.resetarTutorial()
      this.$emit('update:tutorialEdicao', { id: null })
      this.$emit('update:modalTutorial', false)
    },
    abrirModal () {
      if (this.tutorialEdicao.id) {
        this.tutorial = { ...this.tutorialEdicao }
      } else {
        this.resetarTutorial()
      }
    },
    handleThumbnailChange (file) {
      if (file) {
        this.tutorial.thumbnail = file
      }
    },
    async handleTutorial () {
      try {
        this.loading = true
        const formData = new FormData()
        formData.append('title', this.tutorial.title)
        formData.append('description', this.tutorial.description)
        formData.append('link', this.tutorial.link)
        formData.append('isActive', this.tutorial.isActive)
        if (this.thumbnail) {
          formData.append('thumbnail', this.thumbnail)
        }

        if (this.tutorial.id) {
          const { data } = await AtualizarTutorial(this.tutorial.id, formData)
          this.$emit('modal-tutorial:editada', data)
          this.$q.notify({
            type: 'info',
            progress: true,
            position: 'top',
            textColor: 'black',
            message: this.$t('common.updated'),
            actions: [{
              icon: 'close',
              round: true,
              color: 'white'
            }]
          })
        } else {
          const { data } = await CriarTutorial(formData)
          this.$emit('modal-tutorial:criada', data)
          this.$q.notify({
            type: 'positive',
            progress: true,
            position: 'top',
            message: this.$t('configuracaoTutoriais.notifications.created'),
            actions: [{
              icon: 'close',
              round: true,
              color: 'white'
            }]
          })
        }
        this.loading = false
        this.fecharModal()
      } catch (error) {
        console.error(error)
        this.$notificarErro(this.$t('common.notifications.error'), error)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.q-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 18px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.12);
  border: 1px solid rgba(0,0,0,0.04);
  transition: all 0.3s ease;
}

.q-card-section {
  padding: 18px 24px;
}

.q-input {
  .q-field__control {
    background: rgba(255,255,255,0.7);
    border-radius: 8px;
    transition: all 0.3s ease;
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
  padding: 16px 24px;
  border-top: 1px solid rgba(0,0,0,0.06);
}

/* Modo Escuro */
body.body--dark {
  .q-card {
    background: rgba(30, 30, 30, 0.95);
    border-color: rgba(255,255,255,0.08);
    box-shadow: 0 8px 32px rgba(0,0,0,0.25);
  }
  .q-input {
    .q-field__control {
      background: rgba(255,255,255,0.05);
      &:hover {
        background: rgba(255,255,255,0.10);
      }
    }
    &.q-field--focused .q-field__control {
      background: rgba(255,255,255,0.15);
    }
  }
}

@media (max-width: 600px) {
  .q-card {
    width: 98vw !important;
    min-width: unset !important;
    border-radius: 10px;
    padding: 0;
  }
  .q-card-section, .q-card-actions {
    padding: 10px 8px;
  }
}
</style> 