
<template>
  <div id="app" class="q-pa-sm" v-if="(userProfile === 'admin' || pageAllowed)">
    <div class="q-my-md">
      <q-card flat bordered class="full-width kanban-container">
        <q-card-section class="text-h6 text-bold">
          <div class="kanban-title">{{ $t('kanbans.title') }}</div>
        </q-card-section>
        <div v-if="loading">{{ $t('kanbans.loadingMessage') }}</div>
        <div v-if="loading" class="loading-bar"><div class="bar" /></div>
      </q-card>
    </div>

    <q-card class="q-my-md" flat bordered>
      <div class="q-pa-md">
        <div class="row q-col-gutter-md">

          <!-- Coluna base: contatos sem kanban (stories) -->
          <div class="col-12 col-md-3">
            <div class="dd-drop-container">
              {{ $t('kanbans.contacts') }}
            </div>

            <Draggable
              v-model="stories"
              group="kanban"
              item-key="id"
              :animation="180"
              ghost-class="drag-ghost"
              drag-class="dragging"
              @end="onDragEnd"
            >
              <template #item="{ element }">
                <cards
                  :data="element"
                  @abrirTicket="handleSaveTicket(element, 'whatsapp')"
                  @abrirTicketWaba="handleSaveTicket(element, 'waba')"
                  @abrirTicketBaileys="handleSaveTicket(element, 'baileys')"
                  @abrirTicketMeow="handleSaveTicket(element, 'meow')"
                  @abrirTicketEvo="handleSaveTicket(element, 'evo')"
                  @done="doneMarked"
                />
              </template>
            </Draggable>
          </div>

          <!-- Colunas do Kanban -->
          <div
            class="col-12 col-md-3"
            v-for="lane in dropGroups"
            :key="lane.id"
          >
            <div class="dd-drop-container">
              {{ lane.name }}
            </div>

            <Draggable
              v-model="lane.children"
              group="kanban"
              item-key="id"
              :animation="180"
              ghost-class="drag-ghost"
              drag-class="dragging"
              @end="onDragEnd"
            >
              <template #item="{ element }">
                <cards
                  :data="element"
                  @abrirTicket="handleSaveTicket(element, 'whatsapp')"
                  @abrirTicketWaba="handleSaveTicket(element, 'waba')"
                  @abrirTicketBaileys="handleSaveTicket(element, 'baileys')"
                  @abrirTicketMeow="handleSaveTicket(element, 'meow')"
                  @abrirTicketEvo="handleSaveTicket(element, 'evo')"
                  @done="doneMarked"
                />
              </template>
            </Draggable>
          </div>

        </div>

        <div class="q-pa-md q-gutter-sm dd-drop-actions">
          <q-btn color="primary" class="dd-save" :label="$t('common.save')" @click="saveState" />
          <q-btn flat class="dd-cancel" :label="$t('common.cancel')" @click="cancel" />
        </div>
      </div>
    </q-card>
  </div>

  <div v-else>
    <q-banner class="bg-red text-white" inline-actions>
      <q-icon name="warning" />
      <span>{{ $t('common.accessDenied') }}</span>
    </q-banner>
  </div>
</template>

<script>
const userId = +localStorage.getItem('userId')

import Draggable from 'vuedraggable'
import Cards from './Cards.vue'

import { ListarContatosKanban, EditarContato } from 'src/service/contatos.js'
import { ListarKanbans } from 'src/service/kanban.js'
import { CriarTicket } from 'src/service/tickets.js'
import { MostrarCores } from 'src/service/empresas.js'
import { ListarConfiguracoes } from 'src/service/configuracoes.js'
import { DadosUsuario } from 'src/service/user.js'
import { ListarTenantPorId } from 'src/service/tenants.js'

import DefaultProfile from '../../assets/default-profile.png'
import { mapGetters } from 'vuex'

export default {
  name: 'Kanbans',
  components: { Draggable, Cards },
  // Não usa composer local; usa $t de injeção global
  data () {
    return {
      userProfile: 'user',
      pageAllowed: true,

      loading: false,
      colors: {},

      // Estruturas do kanban
      stories: [],        // contatos sem kanban
      dropGroups: [],     // [{ id, name, children: [] }]
      originalSnapshot: null,

      // paginação/busca para ListarContatosKanban()
      params: {
        pageNumber: 1,
        searchParam: null,
        hasMore: true
      },

      // config adicionais
      isNotViewAssignedTickets: 'disabled'
    }
  },

  computed: {
    ...mapGetters(['whatsapps'])
  },

  created () {
    this.bootstrap()
  },

  methods: {
    async bootstrap () {
      try {
        this.loading = true
        await this.listarConfiguracoes()
        await this.loadColors()
        await this.listarKanbans()
        await this.listarContatos()
        this.originalSnapshot = this.serializeState()
      } catch (e) {
        console.error(e)
      } finally {
        this.loading = false
      }
    },

    async listarConfiguracoes () {
      const { data } = await ListarConfiguracoes()
      localStorage.setItem('configuracoes', JSON.stringify(data))
      const conf = data.find(c => c.key === 'NotViewAssignedTickets')
      this.isNotViewAssignedTickets = conf?.value
      // permissões de página
      this.userProfile = localStorage.getItem('profile') || 'user'
      const menuPermissions = JSON.parse(localStorage.getItem('menuPermissions'))
      this.pageAllowed = menuPermissions?.kanban === true
    },

    async loadColors () {
      try {
        const empresaId = localStorage.getItem('companyId')
        const { data } = await MostrarCores(empresaId)
        const list = Array.isArray(data)
          ? data
          : Array.isArray(data?.colors)
            ? data.colors
            : []

        this.colors = list.reduce((acc, colorObj = {}) => {
          const rawLabel =
            (typeof colorObj.label === 'string' && colorObj.label) ||
            (typeof colorObj.name === 'string' && colorObj.name) ||
            (typeof colorObj.key === 'string' && colorObj.key) ||
            ''

          if (!rawLabel) return acc
          const key = rawLabel.toLowerCase().trim()
          const value =
            colorObj.value ??
            (rawLabel in colorObj ? colorObj[rawLabel] : undefined) ??
            colorObj.hex ??
            colorObj.color ??
            null

          if (typeof value === 'string' && value) {
            acc[key] = value
          }
          return acc
        }, {})

        localStorage.setItem('storedColors', JSON.stringify(list))
      } catch (error) {
        console.error('Erro ao carregar as cores:', error)
        this.colors = {} 
      }
    },

    async listarKanbans () {
      // Esperado: data = [{ id, tag/name, position? }, ...] ou data.kanban
      const { data } = await ListarKanbans()
      const lanes = Array.isArray(data?.kanban) ? data.kanban : Array.isArray(data) ? data : []

      lanes.sort((a, b) => {
        const ap = (a.position ?? Number.POSITIVE_INFINITY)
        const bp = (b.position ?? Number.POSITIVE_INFINITY)
        return ap === bp ? (a.id - b.id) : (ap - bp)
      })

      this.dropGroups = lanes.map(l => ({
        id: l.id,
        name: l.name || l.tag || `#${l.id}`,
        children: []
      }))
    },

    async listarContatos () {
      // Popula "stories" (sem kanban) e as colunas por id de kanban
      try {
        while (this.params.hasMore) {
          const { data } = await ListarContatosKanban(this.params)
          const contacts = Array.isArray(data?.contacts) ? data.contacts : []

          contacts.sort((a, b) => a.id - b.id)

          for (const contato of contacts) {
            if (contato?.number == null) continue
            // Monta o cartão padrão do seu componente Cards.vue
            const newContact = {
              title: contato.name || contato.pushname || this.$t('kanbans.noName'),
              description: contato.number,
              id: contato.id,
              profilePicUrl: contato.profilePicUrl || DefaultProfile,
              tags: contato.tags,
              wallet: contato.wallet,
              done: false
            }

            // Se não tem kanban => vai para stories; se tem, distribui nas lanes
            const kanbanId = contato.kanbanId || contato.kanban?.id || null
            if (!kanbanId) {
              this.stories.push(newContact)
            } else {
              const lane = this.dropGroups.find(g => g.id === kanbanId)
              if (lane) lane.children.push(newContact)
            }
          }

          const { pageNumber, hasMore } = data || {}
          if (hasMore) {
            this.params.pageNumber = (pageNumber || this.params.pageNumber) + 1
            this.params.hasMore = true
          } else {
            this.params.hasMore = false
          }
        }

        this.$q.notify({
          type: 'info',
          progress: true,
          position: 'top',
          textColor: 'black',
          message: this.$t('kanbans.cardsLoaded'),
          actions: [{ icon: 'close', round: true, color: 'white' }]
        })
      } catch (e) {
        console.error(e)
        this.$q.notify({ type: 'negative', message: this.$t('kanbans.loadError') })
      }
    },

    onDragEnd () {
      // opcional: marcar estado sujo para habilitar salvar
    },

    serializeState () {
      return {
        stories: JSON.parse(JSON.stringify(this.stories)),
        dropGroups: JSON.parse(JSON.stringify(this.dropGroups))
      }
    },

    restoreState (snap) {
      this.stories = JSON.parse(JSON.stringify(snap.stories))
      this.dropGroups = JSON.parse(JSON.stringify(snap.dropGroups))
    },

    async saveState () {
      // Monte o payload conforme sua API de persistência
      const payload = {
        originalBucket: this.stories.map(x => x.id),
        dropzones: this.dropGroups.map(z => ({
          id: z.id,
          name: z.name,
          children: (z.children || []).map(x => x.id)
        }))
      }
      // Ex.: await SalvarOrdenacaoKanban(payload)

      this.originalSnapshot = this.serializeState()
      this.$q.notify({ type: 'positive', message: this.$t('common.saved') })
    },

    cancel () {
      if (this.originalSnapshot) this.restoreState(this.originalSnapshot)
    },

    async doneMarked (item) {
      // Exemplo: remover kanban do contato
      const contato = { number: item.description, kanban: null }
      try {
        await EditarContato(contato)
        this.$q.notify({
          type: 'positive',
          progress: true,
          position: 'top',
          message: this.$t('kanbans.removeSuccess'),
          actions: [{ icon: 'close', round: true, color: 'white' }]
        })
      } catch (e) {
        this.$q.notify({
          type: 'warning',
          progress: true,
          position: 'top',
          textColor: 'black',
          message: this.$t('kanbans.unhandledOption'),
          actions: [{ icon: 'close', round: true, color: 'white' }]
        })
      }
    },

    async handleSaveTicket (element, canal) {
      try {
        const userAndTenants = await DadosUsuario(userId)
        const usuario = userAndTenants.data.user
        const tenant = userAndTenants.data.tenants && userAndTenants.data.tenants[0] ? userAndTenants.data.tenants[0] : null

        const { data } = await ListarTenantPorId(tenant?.id)
        const whatsId = data.whatsapps.find(w => w.name === usuario.name)

        const canalBaileys = { label: this.$t('kanbans.canalBaileys'), value: 'baileys' }
        const canalMeow   = { label: this.$t('kanbans.canalMeow'),   value: 'meow' }
        const canalEvo    = { label: this.$t('kanbans.canalEvo'),    value: 'evo' }

        const itens = [
          ...this.whatsapps
            .filter(p => p.channel === 'whatsapp')
            .map(({ id, name, status, channel }) => ({ label: `${name} [${status}] - [${channel}]`, value: id })),
          canalBaileys, canalMeow, canalEvo
        ]

        let channelId = whatsId ? whatsId.id : itens[0]?.value

        this.$q.dialog({
          title: this.$t('kanbans.startServiceTitle'),
          message: this.$t('kanbans.startService'),
          options: {
            type: 'radio',
            model: channelId,
            isValid: v => !!v,
            items: itens
          },
          ok: { push: true, color: 'positive', label: this.$t('common.start') },
          cancel: { push: true, color: 'negative', label: this.$t('common.cancel') },
          persistent: true
        }).onOk(async () => {
          const canal =
            (channelId === 'baileys' || channelId === 'meow' || channelId === 'evo')
              ? channelId
              : 'whatsapp'

          const whats = canal === 'whatsapp'
            ? this.whatsapps.find(wh => wh.id === channelId)
            : null

          const payload = {
            contactId: element.id,
            channel: canal === 'whatsapp' ? (whats?.name || 'whatsapp') : canal
          }

          await CriarTicket(payload)

          this.$q.notify({
            type: 'positive',
            progress: true,
            position: 'top',
            message: this.$t('kanbans.createdTicket'),
            actions: [{ icon: 'close', round: true, color: 'white' }]
          })
        }).onCancel(() => {
          this.$q.notify({
            type: 'warning',
            progress: true,
            position: 'top',
            textColor: 'black',
            message: this.$t('kanbans.canceledTicket'),
            actions: [{ icon: 'close', round: true, color: 'white' }]
          })
        })
      } catch (e) {
        console.error(e)
        this.$q.notify({ type: 'negative', message: this.$t('tickets.createError') })
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.dd-drop-actions
  padding: 16px

.dd-save
  color: white
  background: #5c67f2
  margin-right: 8px

.dd-cancel
  color: #5c67f2
  border: 1px solid #5c67f2

.kanban-container
  background: #f8f9fc
  border-radius: 12px
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08)
  padding: 12px

.dd-drop-container
  font-weight: 600
  margin-bottom: 8px

.drag-ghost
  opacity: .6

.dragging
  transform: rotate(1deg)

.loading-bar
  background-color: #f0f0f0
  height: 4px
  overflow: hidden
  border-radius: 2px
  .bar
    height: 100%
    animation: loadingAnimation 1s infinite

@keyframes loadingAnimation
  0%
    width: 0
  100%
    width: 100%
</style>
