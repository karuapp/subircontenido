<template>
  <div id="app" class="q-pa-sm" v-if="(userProfile === 'admin' || pageAllowed)">
    <div class="q-my-md">
      <q-card flat bordered class="full-width kanban-container">
        <q-card-section class="text-h6 text-bold">
          <div class="kanban-title"> {{ $t('tagsKanban.title') }}</div>
        </q-card-section>
        <p>{{ $t("tagsKanban.description") }}</p>
        <div v-if="loading">{{ $t("tagsKanban.loading") }}</div>
        <div v-if="loading" class="loading-bar">
          <div class="bar"></div>
        </div>
      </q-card>
    </div>
    <q-card class="q-my-md" flat bordered>
      <div class="q-pa-md">
        <div class="row q-col-gutter-md">
          <!-- Lista de contatos sem tag -->
          <div class="col-12 col-md-3">
            <div class="dd-drop-container">{{ this.$t('tagsKanban.contacts') }}</div>
            <Draggable
              v-model="stories"
              group="tags"
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
                  @abrirTicketZapi="handleSaveTicket(element, 'zapi')"
                  @abrirTicketUazapi="handleSaveTicket(element, 'uazapi')"
                  @done="doneMarked"
                />
              </template>
            </Draggable>
          </div>

          <!-- Colunas por Tag -->
          <div
            class="col-12 col-md-3"
            v-for="lane in dropGroups"
            :key="lane.id"
          >
            <div class="dd-drop-container">{{ lane.name }}</div>
            <Draggable
              v-model="lane.children"
              group="tags"
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
                  @abrirTicketZapi="handleSaveTicket(element, 'zapi')"
                  @abrirTicketUazapi="handleSaveTicket(element, 'uazapi')"
                  @done="doneMarked"
                />
              </template>
            </Draggable>
          </div>
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
import Cards from './CardsTags.vue'
import { ListarContatosKanbanTags, EditarContato } from 'src/service/contatos.js'
import { ListarKanbans } from 'src/service/kanban.js'
import { CriarTicket } from 'src/service/tickets.js'
import DefaultProfile from '../../assets/default-profile.png'
import { MostrarCores } from 'src/service/empresas.js';
import { mapGetters } from 'vuex'
import { ListarEtiquetas } from 'src/service/etiquetas.js'
import { ListarConfiguracoes } from 'src/service/configuracoes.js'
import { DadosUsuario } from 'src/service/user.js'
import { ListarTenantPorId } from 'src/service/tenants.js'
import eventBus from 'src/utils/eventBus.js'

export default {
  components: {
    Draggable,
    Cards
  },
  data() {
    return {
      userProfile: 'user',
      pageAllowed: true,
      isNotViewAssignedTickets: 'disabled',
      colors: {},
      dropGroups: [],
      stories: [],
      loading: false,
      params: {
        pageNumber: 1,
        searchParam: null,
        hasMore: true
      },
    }
  },
  computed: {
    ...mapGetters(['whatsapps'])
  },
  methods: {
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
        console.error('Error al cargar los colores:', error)
        this.colors = {}
      }
    },
    async doneMarked(item) {
      const contato = {
        number: item.description,
        kanban: null
      }

      this.$q.dialog({
        title: this.$t('tagsKanban.removeTitle'),
        message: this.$t('tagsKanban.removeMessage'),
        ok: {
          push: true,
          color: 'positive',
          label: this.$t('common.start')
        },
        cancel: {
          push: true,
          color: 'negative',
          label: this.$t('common.cancel')
        },
        persistent: true
      }).onOk(async () => {
        await EditarContato(contato)
        this.$q.notify({
          type: 'positive',
          progress: true,
          position: 'top',
          message: this.$t('tagsKanban.removeSuccess'),
          actions: [{
            icon: 'close',
            round: true,
            color: 'white'
          }]
        });
      }).onCancel(() => {
        this.$q.notify({
          type: 'warning',
          progress: true,
          position: 'top',
          textColor: 'black',
          message: this.$t('tagsKanban.unhandledOption'),
          actions: [{
            icon: 'close',
            round: true,
            color: 'white'
          }]
        });
      })
    },
    async handleSaveTicket(cardData, type) {
      const userAndTenants = await DadosUsuario(userId);
      const usuario = userAndTenants.data.user;
      const tenant = userAndTenants.data.tenants && userAndTenants.data.tenants[0] ? userAndTenants.data.tenants[0] : null;

      const { data } = await ListarTenantPorId(tenant?.id);
      const whatsId = data.whatsapps.find(w => w.name === usuario.name);

      const canalBaileys = {
        label: this.$t('tagsKanban.canalBaileys'),
        value: "baileys"
      }
      const canalMeow = {
        label: this.$t('tagsKanban.canalMeow'),
        value: "meow"
      }
      const canalEvo = {
        label: this.$t('tagsKanban.canalEvo'),
        value: "evo"
      }
      const canalZapi = {
        label: this.$t('tagsKanban.canalZapi'),
        value: "zapi"
      }
      const canalUazapi = {
        label: this.$t('tagsKanban.canalUazapi'),
        value: "uazapi"
      }

      const itens = [
        ...this.whatsapps.filter(p => p.channel === "whatsapp")
          .map(({ id, name, status, channel }) => {
            return { label: `${name} [${status}] - [${channel}]`, value: id }
          }),
        canalBaileys,
        canalMeow,
        canalEvo,
        canalZapi,
        canalUazapi
      ]

      let channelId = whatsId ? whatsId.id : itens[0]?.value

      this.$q.dialog({
        title: this.$t('tagsKanban.startServiceTitle'),
        message: this.$t('tagsKanban.startService'),
        options: {
          type: 'radio',
          model: channelId,
          // inline: true
          isValid: v => !!v,
          items: itens
        },
        ok: {
          push: true,
          color: 'positive',
          label: this.$t('common.start')
        },
        cancel: {
          push: true,
          color: 'negative',
          label: this.$t('common.cancel')
        },
        persistent: true
      }).onOk(async () => {
        const canal =
          (channelId === 'baileys' || channelId === 'meow' || channelId === 'evo' || channelId === 'zapi' || channelId === 'uazapi')
            ? channelId
            : 'whatsapp'

        const waba = this.whatsapps.find(whats => whats.id === channelId);
        const whats = canal === 'whatsapp'
          ? this.whatsapps.find(whats => whats.id === channelId)
          : null

        const data = {
          contactId: cardData.id,
          channel: canal === 'whatsapp' ? whats.name : canal
        }

        await CriarTicket(data)

        this.$q.notify({
          type: 'positive',
          progress: true,
          position: 'top',
          message: this.$t('tagsKanban.createdTicket'),
          actions: [{
            icon: 'close',
            round: true,
            color: 'white'
          }]
        });
      }).onCancel(() => {
        this.$q.notify({
          type: 'warning',
          progress: true,
          position: 'top',
          textColor: 'black',
          message: this.$t('tagsKanban.canceledTicket'),
          actions: [{
            icon: 'close',
            round: true,
            color: 'white'
          }]
        });
      })
    },
    async onDragEnd () {
      // opcional: manipular algo ao fim do drag
    },
    async listarKanbans() {
      const { data } = await ListarEtiquetas()
      this.kanbans = data
      this.kanbans.sort((a, b) => a.id - b.id)
      this.kanbans.forEach(kanban => {
        this.dropGroups.push({
          id: kanban.id,
          name: kanban.tag,
          children: []
        })
      })
    },
    async listarConfiguracoes() {
      const { data } = await ListarConfiguracoes();
      localStorage.setItem('configuracoes', JSON.stringify(data));
      const conf = data.find(c => c.key === 'NotViewAssignedTickets');
      this.isNotViewAssignedTickets = conf?.value;
    },
    async listarContatos () {
      try {
        this.loading = true;
        while (this.params.hasMore) {
          const { data } = await ListarContatosKanbanTags(this.params)

          data.contacts.sort((a, b) => a.id - b.id);
          if (data.contacts && Array.isArray(data.contacts)) {
            data.contacts.forEach(async (contato) => {
              if(contato.number === null) return
              if(!contato.isGroup || contato.tags !== null){
                const newContact = {
                  title: contato.name || contato.pushname || this.$t("tagsKanban.noName"),
                  description: contato.number,
                  id: contato.id,
                  profilePicUrl: contato.profilePicUrl || DefaultProfile,
                  tags: contato.tags,
                  wallet: contato.wallet,
                  done: false
                }
                if (contato.tags === null) {
                  return null
                } else {
                  for (const tag of contato.tags){
                    const kanbanId = tag.tagid
                    const kanbanLane = this.dropGroups.find(group => group.id === kanbanId)
                    if (kanbanLane) {
                      kanbanLane.children.push(newContact)
                    }
                    else {
                      return null
                    }
                  }
                }
              }
            })
          }

          const { pageNumber, count, hasMore } = data
          if (hasMore) {
            this.params.hasMore = hasMore;
            this.params.pageNumber = pageNumber + 1
          } else {
            this.params.hasMore = false
          }
        }

        this.$q.notify({
          type: 'info',
          progress: true,
          position: 'top',
          textColor: 'black',
          message: this.$t('tagsKanban.cardsSaved'),
          actions: [{
            icon: 'close',
            round: true,
            color: 'white'
          }]
        });
      } catch (error) {
        console.error(error);
        this.$notificarErro('Se produjo un error al editar los contactos', error);
      } finally {
        this.loading = false;
      }
    },
  },
  async mounted () {
    this.usuario = JSON.parse(localStorage.getItem('usuario'))
    this.userProfile = localStorage.getItem('profile')
    const menuPermissions = JSON.parse(localStorage.getItem('menuPermissions'))
    this.pageAllowed = menuPermissions?.kanban === true;
    await this.listarConfiguracoes()
    this.listarKanbans()
    this.listarContatos()
    const storedColors = localStorage.getItem('storedColors')
    if (storedColors) {
      try {
        const arr = JSON.parse(storedColors)
        this.colors = (Array.isArray(arr) ? arr : []).reduce((acc, colorObj = {}) => {
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
          if (typeof value === 'string' && value) acc[key] = value
          return acc
        }, {})
      } catch (e) {
        await this.loadColors()
      }
    } else {
      await this.loadColors()
    }
    this._onNewTag = (newTag) => {
      this.dropGroups.push({ id: newTag.id, name: newTag.tag, children: [] })
    }
    eventBus.on('newTagCreated', this._onNewTag)
  },
  beforeUnmount() {
    if (this._onNewTag) eventBus.off('newTagCreated', this._onNewTag)
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

.view-title
  color: #5c67f2
  font-weight: bold
  letter-spacing: 1px
  text-transform: uppercase
  margin: 12px 0

.drag-ghost
  opacity: .6

.dragging
  transform: rotate(1deg)

.dd-drop-container
  color: white
  background-color: #5c67f2
  border-radius: 8px
  text-align: left
  padding: 8px 12px
  border-bottom: 2px solid #5c67f2
  display: flex
  align-items: center

#app
  text-align: center
  color: $primary
  margin-top: 0px

  h2
    color: $primary

  dd-card
    display: inline-block
    width: 100px
    font-size: 12px
    padding: 12px
    border: 1px solid #cccccc
    margin: 10px
    border-radius: 4px
    background: white

.loading-bar
  position: relative
  background-color: #f0f0f0
  height: 4px
  overflow: hidden

.loading-bar .bar
  position: absolute
  top: 0
  left: 0
  animation: loadingAnimation 1s infinite

@keyframes loadingAnimation
  0%
    width: 0
  100%
    width: 100%

</style>
<!-- .dd-drop-actions .dd-save::before
  content: "Salvar"

.dd-drop-actions .dd-cancel::before
  content: "Cancelado" -->
