<template>
  <div class="bg-white no-scroll hide-scrollbar overflow-hidden" :style="style">
    <InforCabecalhoChat
      @updateTicket:resolver="atualizarStatusTicket('closed')"
      @updateTicket:retornar="atualizarStatusTicket('pending')"
      @updateTicket:reabrir="atualizarStatusTicket('open')"
      @abrir:modalAgendamentoMensagem="onClickOpenAgendamentoMensagem()"
    />

    <q-scroll-area ref="scrollContainer" class="scroll-y" :style="cStyleScroll" @scroll="scrollArea">
      <transition appear enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <q-infinite-scroll v-if="cMessages.length" reverse :offset="100" @load="onLoadMoreQInfinite">
          <template v-slot:loading>
            <div class="row justify-center q-my-sm">
              <q-spinner color="primary" size="2em" />
            </div>
          </template>
        </q-infinite-scroll>
      </transition>
      <MensagemChat
        v-model:replyingMessage="replyingMessage"
        :mensagens="cMessages"
        v-if="cMessages.length && ticketFocado.id"
        @mensagem-chat:encaminhar-mensagem="abrirModalEncaminharMensagem"
        @mensagem-chat:rolar-para-topo="scrollToTop"
        v-model:ativarMultiEncaminhamento="ativarMultiEncaminhamento"
        v-model:mensagensParaEncaminhar="mensagensParaEncaminhar"
      />
      <div id="inicioListaMensagensChat"></div>
    </q-scroll-area>
    <div
      class="absolute-center items-center"
      :class="{
        'row col text-center q-col-gutter-lg': !$q.screen.xs,
        'full-width text-center': $q.screen.xs,
      }"
      v-if="!ticketFocado.id"
    >
      <q-icon
        style="margin-left: 30vw"
        size="6em"
        color="grey-6"
        name="mdi-emoticon-wink-outline"
        class="row col text-center"
        :class="{
          'row col text-center q-mr-lg': !$q.screen.xs,
          'full-width text-center center-block': $q.screen.xs,
        }"
      >
      </q-icon>
      <h1
        class="text-grey-6 row col justify-center"
        :class="{
          'full-width': $q.screen.xs,
        }"
      >
      {{ $t("atendimentoChat.selectTicket") }}
      </h1>
    </div>
    <div v-if="cMessages.length" class="relative-position">
      <transition appear enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <div v-if="scrollIcon">
          <q-btn class="vac-icon-scroll" color="white" text-color="black" icon="mdi-arrow-down" round push ripple dense @click="scrollToBottom" />
        </div>
      </transition>
    </div>

    <q-footer class="bg-white">
      <q-separator class="bg-grey-4" />
      <q-list
        v-if="replyingMessage"
        :style="`border-top: 1px solid #; max-height: 140px; width: 100%;`"
        style="max-height: 100px"
        class="q-pa-none q-py-md text-black row items-center col justify-center full-width"
        :class="{
          'bg-grey-1': !$q.dark.isActive,
          'bg-grey-10': $q.dark.isActive,
        }"
      >
        <q-item
          class="q-card--bordered q-pb-sm btn-rounded"
          :style="`
            width: 460px;
            min-width: 460px;
            max-width: 460px;
            max-height: 110px;
          `"
          :class="{
            'bg-blue-1': !replyingMessage.fromMe && !$q.dark.isActive,
            'bg-blue-2 text-black': !replyingMessage.fromMe && $q.dark.isActive,
            'bg-grey-2 text-black': replyingMessage.fromMe,
          }"
        >
          <q-item-section>
            <q-item-label v-if="!replyingMessage.fromMe" :class="{ 'text-black': $q.dark.isActive }" caption>
              <!-- {{ replyingMessage.contact && replyingMessage.contact.name }} -->
              {{ replyingMessage.contact && replyingMessage.contact.name.length > 10 
                ? replyingMessage.contact.name.substring(0, 10) + '...' 
                : replyingMessage.contact.name }}
            </q-item-label>
            <q-item-label lines="4" v-html="formatarMensagemWhatsapp(replyingMessage.body)"> </q-item-label>
          </q-item-section>
          <q-btn @click="replyingMessage = null" dense flat round icon="close" class="float-right absolute-top-right z-max" :disabled="loading || ticketFocado.status !== 'open'" />
        </q-item>
      </q-list>

      <q-banner class="text-grey-8" v-if="mensagensParaEncaminhar.length > 0">
        <span class="text-bold text-h5">
          {{ $t('atendimentoChat.forwardMessages', { count: mensagensParaEncaminhar.length }) }}
        </span>
        <!-- <span class="text-bold text-h5"> {{ mensagensParaEncaminhar.length }} de 10 mensagens</span>
        selecionadas para serem encaminhadas. -->
        <q-separator class="bg-grey-4" />
        <q-select
          dense
          class="q-my-md"
          ref="selectAutoCompleteContato"
          autofocus
          outlined
          rounded
          hide-dropdown-icon
          :loading="loading"
          v-model="contatoSelecionado"
          :options="contatos"
          input-debounce="700"
          @filter="localizarContato"
          use-input
          hide-selected
          fill-input
          clearable
          option-label="name"
          option-value="id"
          :label="$t('atendimentoChat.forwardHint')"
          :hint="$t('atendimentoChat.forwardLimit')"
        >
          <template v-slot:option="scope">
            <q-item v-bind="scope.itemProps" v-on="scope.itemEvents" v-if="scope.opt.name">
              <q-item-section>
                <q-item-label> {{ scope.opt.name }}</q-item-label>
                <q-item-label caption>{{ scope.opt.number }}</q-item-label>
              </q-item-section>
            </q-item>
          </template>
        </q-select>
        <template v-slot:action>
          <q-btn class="bg-padrao q-px-sm" flat color="negative" :label="$t('common.cancel')" @click="cancelarMultiEncaminhamento" />
          <q-btn class="bg-padrao q-px-sm" flat color="positive" :label="$t('common.send')" icon="mdi-send" @click="confirmarEncaminhamentoMensagem(mensagensParaEncaminhar)" />
        </template>
      </q-banner>

      <InputMensagem v-if="!mensagensParaEncaminhar.length" :mensagensRapidas="mensagensRapidas" v-model:replyingMessage="replyingMessage" :mensagens="cMessages" />
      <q-resize-observer @resize="onResizeInputMensagem" />
    </q-footer>

    <q-dialog v-model="modalEncaminhamentoMensagem" persistent @hide="mensagemEncaminhamento = {}">
      <q-card :style="$q.screen.width < 770 ? `min-width: 98vw; max-width: 98vw` : 'min-width: 50vw; max-width: 50vw'">
        <q-card-section>
          <div class="text-h6">
            {{ $t("atendimentoChat.forwardMessage") }}
            <q-btn flat class="bg-padrao btn-rounded float-right" color="negative" icon="close" v-close-popup />
          </div>
        </q-card-section>
        <q-separator inset />
        <q-card-section>
          <MensagemChat :isShowOptions="false" v-model:replyingMessage="replyingMessage" :mensagens="[mensagemEncaminhamento]" />
        </q-card-section>
        <q-card-section>
          <q-select
            class="q-px-lg"
            ref="selectAutoCompleteContato"
            autofocus
            outlined
            rounded
            hide-dropdown-icon
            :loading="loading"
            v-model="contatoSelecionado"
            :options="contatos"
            input-debounce="700"
            @filter="localizarContato"
            use-input
            hide-selected
            fill-input
            clearable
            option-label="name"
            option-value="id"
            :label="$t('common.search')"
            :hint="$t('atendimentoChat.forwardHint')"
          >
            <template v-slot:option="scope">
              <q-item v-bind="scope.itemProps" v-on="scope.itemEvents" v-if="scope.opt.name">
                <q-item-section>
                  <q-item-label> {{ scope.opt.name }}</q-item-label>
                  <q-item-label caption>{{ scope.opt.number }}</q-item-label>
                </q-item-section>
              </q-item>
            </template>
          </q-select>
        </q-card-section>
        <q-card-actions align="right" class="q-pa-md">
          <q-btn class="bg-padrao q-px-sm" flat color="positive" :label="$t('common.send')" icon="mdi-send" @click="confirmarEncaminhamentoMensagem([mensagemEncaminhamento])" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import mixinCommon from '../mixinCommon.js'
import InforCabecalhoChat from '../InforCabecalhoChat.vue'
import DialogAgendamentoMensagem from './DialogAgendamentoMensagem.vue'
// import parser from 'vdata-parser'
import MensagemChat from '../MensagemChat.vue'
import InputMensagem from '../InputMensagem.vue'
import mixinAtualizarStatusTicket from '../mixinAtualizarStatusTicket.js'
import mixinSockets from '../mixinSockets.js'
import { ListarContatos } from 'src/service/contatos.js'
import { EncaminharMensagem } from 'src/service/tickets.js'
import whatsBackground from 'src/assets/wa-background.png'
import whatsBackgroundDark from 'src/assets/wa-background-dark.jpg'
import eventBus from 'src/utils/eventBus.js'

export default {
  name: 'Chat',
  mixins: [mixinCommon, mixinAtualizarStatusTicket, mixinSockets],
  props: {
    mensagensRapidas: Array,
  },
  components: {
    InforCabecalhoChat,
    MensagemChat,
    InputMensagem,
    
  },
  data() {
    return {
      scrollIcon: false,
      loading: false,
      exibirContato: false,
      heigthInputMensagem: 0,
      params: {
        ticketId: null,
        pageNumber: 1,
      },
      agendamentoMensagem: {
        scheduleDate: '',
      },
      replyingMessage: null,
      modalEncaminhamentoMensagem: false,
      mensagemEncaminhamento: {},
      mensagensParaEncaminhar: [],
      ativarMultiEncaminhamento: false,
      contatoSelecionado: {
        id: '',
        name: '',
      },
      contatos: [],
      // Sistema de gerenciamento de memória
      timers: [],
    }
  },
  computed: {
    cMessages() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.replyingMessage = null
      return this.mensagensTicket
    },
    style() {
      return {
        backgroundImage: this.$q.dark.isActive ? `url(${whatsBackgroundDark}) !important` : `url(${whatsBackground}) !important`,
        // backgroundRepeat: 'no-repeat !important',
        backgroundPosition: 'center !important',
        // backgroundSize: '50% !important',
      }
    },
    cStyleScroll() {
      const loading = 0 // this.loading ? 72 : 0
      const add = this.heigthInputMensagem + loading
      return `min-height: calc(100vh - ${62 + add}px); height: calc(100vh - ${62 + add}px); width: 100%`
    },
  },
  methods: {
    // Sistema de gerenciamento de memória
    addTimer(timerId) {
      this.timers.push(timerId);
    },
    // Adicionar este método dentro de methods: { ... } em Chat.vue
    handlerNotifications(data) {
      // Se a notificação não for para o ticket que está em foco, não faz nada.
      if (this.ticketFocado.id !== data.ticket.id) {
        return;
      }

      const options = {
        body: `${data.body} - ${this.formatarData(new Date(), 'HH:mm')}`,
        icon: data.ticket.contact.profilePicUrl,
        tag: data.ticket.id,
        renotify: true,
      }

      const notification = new Notification(
        `Mensaje de ${data.ticket.contact.name}`,
        options
      )

      notification.onclick = (e) => {
        e.preventDefault()
        window.focus()
      }
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
    scrollToTop() {
      this.$nextTick(() => {
        const timerId = setTimeout(() => {
          const scrollArea = this.$refs.scrollContainer;
          if (scrollArea && typeof scrollArea.setScrollPosition === 'function') {
            // Quasar v2 signature: setScrollPosition(axis, offset, duration)
            try {
              scrollArea.setScrollPosition('vertical', 0, 10)
            } catch (e) {
              // Fallback for legacy signature
              scrollArea.setScrollPosition(0, 10)
            }
          }
        }, 100);
        this.addTimer(timerId);
      });
    },
    onClickOpenAgendamentoMensagem() {
      this.$q.dialog({
        component: DialogAgendamentoMensagem,
        componentProps: {
          mensagensRapidas: this.mensagensRapidas,
          replyingMessage: this.replyingMessage
        }
      })
    },
    async onResizeInputMensagem(size) {
      this.heigthInputMensagem = size.height
    },
    async onLoadMoreQInfinite(index, done) {
      if (this.loading) return done()

      if (!this.hasMore || !this.ticketFocado?.id) {
        return done()
      }

      try {
        this.loading = true
        this.params.ticketId = this.ticketFocado.id
        this.params.pageNumber += 1
        await this.$store.dispatch('LocalizarMensagensTicket', this.params)
      } catch (error) {
        // no-op
      }
      this.loading = false
      done()
    },
    scrollArea(e) {
      this.hideOptions = true
      const timerId = setTimeout(() => {
        if (!e) return
        this.scrollIcon = e.verticalSize - (e.verticalPosition + e.verticalContainerSize) > 2000 // e.verticalPercentage < 0.8
      }, 200)
      this.addTimer(timerId);
    },
    scrollToBottom() {
      document.getElementById('inicioListaMensagensChat').scrollIntoView()
    },
    abrirModalEncaminharMensagem(msg) {
      this.mensagemEncaminhamento = msg
      this.modalEncaminhamentoMensagem = true
    },
    async localizarContato(search, update, abort) {
      if (search.length < 2) {
        if (this.contatos.length)
          update(() => {
            this.contatos = [...this.contatos]
          })
        abort()
        return
      }
      this.loading = true
      const { data } = await ListarContatos({
        searchParam: search,
      })

      update(() => {
        if (data.contacts.length) {
          this.contatos = data.contacts
        } else {
          this.contatos = [{}]
          // this.$refs.selectAutoCompleteContato.toggleOption({}, true)
        }
      })
      this.loading = false
    },
    cancelarMultiEncaminhamento() {
      this.mensagensParaEncaminhar = []
      this.ativarMultiEncaminhamento = false
    },
    confirmarEncaminhamentoMensagem(data) {
      if (!this.contatoSelecionado.id) {
        this.$notificarErro(this.$t('atendimentoChat.contactNotSelected'));
        return
      }
      EncaminharMensagem(data, this.contatoSelecionado)
        .then((r) => {
          this.$notificarSucesso(this.$t('atendimentoChat.messageSent'));
          // this.$notificarSucesso(`Mensaje reenviado a ${this.contatoSelecionado.name} | Número: ${this.contatoSelecionado.number}`)
          this.mensagensParaEncaminhar = []
          this.ativarMultiEncaminhamento = false
        })
        .catch((e) => {
          this.$notificarErro(this.$t('atendimentoChat.messageFailed'))
        })
    },
  },
  beforeUnmount() {
    // Limpeza completa de memória
    this.cleanupMemory();
    if (this.rootListeners) {
      this.rootListeners.forEach(({ event, handler }) => {
        eventBus.off(event, handler);
      });
      this.rootListeners = [];
    }
  },
  created() {
    this.__offScroll = eventBus.on('scrollToBottomMessageChat', this.scrollToBottom)
    this.socketTicket()
  },
  mounted() {
    this.socketMessagesList()
    eventBus.on('handlerNotifications', this.handlerNotifications);
    if (!this.rootListeners) this.rootListeners = [];
    this.rootListeners.push({ event: 'handlerNotifications', handler: this.handlerNotifications });
  },
  unmounted() {
    try { this.__offScroll && this.__offScroll() } catch (e) {}
  },
}
</script>

<style lang="scss">
audio {
  height: 40px;
  width: 264px;
}

.mostar-btn-opcoes-chat {
  display: none;
  transition: width 2s transform 2s;
}

.q-message-text:hover .mostar-btn-opcoes-chat {
  display: block;
  float: right;
  position: absolute;
  z-index: 999;
}

.hr-text {
  line-height: 1em;
  position: relative;
  outline: 0;
  border: 0;
  color: black;
  text-align: center;
  height: 1.5em;
  opacity: 0.8;

  &:before {
    content: '';
    // use the linear-gradient for the fading effect
    // use a solid background color for a solid bar
    background: linear-gradient(to right, transparent, #818078, transparent);
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 1px;
  }

  &:after {
    content: attr(data-content);
    position: relative;
    display: inline-block;
    color: black;
    font-size: 16px;
    font-weight: 600;
    padding: 0 0.5em;
    line-height: 1.5em;
    background-color: $grey;
    border-radius: 15px;
  }
}

.textContentItem {
  overflow-wrap: break-word;
  // padding: 3px 80px 6px 6px;
}

.textContentItemDeleted {
  font-style: italic;
  color: rgba(0, 0, 0, 0.36);
  overflow-wrap: break-word;
  // padding: 3px 80px 6px 6px;
}

.replyginContactMsgSideColor {
  flex: none;
  width: 4px;
  background-color: #35cd96;
}

.replyginSelfMsgSideColor {
  flex: none;
  width: 4px;
  background-color: #6bcbef;
}

.replyginMsgBody {
  padding: 10;
  height: auto;
  display: block;
  white-space: pre-wrap;
  overflow: hidden;
}

.messageContactName {
  display: flex;
  color: #6bcbef;
  font-weight: 500;
}

.vac-icon-scroll {
  position: absolute;
  bottom: 20px;
  right: 20px;
  box-shadow: 0 1px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 2px 0 rgba(0, 0, 0, 0.12);
  display: flex;
  cursor: pointer;
  z-index: 99;
}

// /* CSS Logilcs */
// #message-box {
//   &:empty ~ #submit-button {
//     display: none;
//   } /*when textbox empty show microhpone*/
//   &:not(:empty) ~ #voice-button {
//     display: none;
//   } /*when textbox with texy show submit button*/
// }

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
