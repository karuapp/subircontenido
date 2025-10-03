<template>
  <div>
    <q-header class="bg-white text-grey-10 no-border-radius">
      <q-toolbar style="min-height: 60px; height: 60px;"
        class="no-border-radius q-pa-none ">
        <q-btn flat
          dense
          round
          icon="mdi-menu"
          v-if="$q.screen.lt.md"
          class="q-mx-xs-none q-ml-md"
          :color="$q.dark.isActive ? 'white' : ''"
          @click="emitMenuAction" />
        <q-item clickable
          v-ripple
          class="q-ma-none q-pa-none full"
          style="min-height: 60px; height: 60px; width: 300px;"
          @click="emitInfoContatoAction">
          <q-item-section avatar
            class="q-pl-sm">
            <q-btn round
              flat>
              <q-avatar class="bg-grey blur-effect">
                <q-img :src="Value(cticket.contact, 'profilePicUrl')">
                </q-img>
              </q-avatar>
            </q-btn>
          </q-item-section>
          <q-item-section id="InfoCabecalhoChat">
            <q-item-label class="text-bold blur-effect">
              {{ Value(cticket.contact, 'name') }}
              <q-skeleton v-if="!Value(cticket.contact, 'name')"
                animation="none"
                style="width: 230px" />
            </q-item-label>
            <q-item-label caption
              lines="1"
              style="margin-top: 2px !important;"
              :style="$q.screen.width < 500 ? 'max-width: 170px' : ''">
              <span v-if="Value(cticket.user, 'name')"> 
                <!-- Atribuido à: {{ Value(cticket.user, 'name') }}  -->
                {{ $t('atendimentoInfoCabecalho.assignedTo') }} {{ Value(cticket.user, 'name') }}
              </span>
              <q-skeleton v-else
                type="text"
                class="text-caption"
                animation="none"
                style="width: 150px" />
            </q-item-label>
            <q-item-label lines="1"
              style="margin-top: 0px !important;">
              <span v-if="Value(cticket.contact, 'name')"
                class=""
                style="font-size: 11px"> 
                <!-- Ticket: {{ cticket.id }} -->
                {{ $t('atendimentoInfoCabecalho.ticket') }}: {{ cticket.id }}
              </span>
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-space />
        <div class="q-gutter-xs q-pr-sm"
          v-if="Value(cticket.contact, 'name')">
          <template v-if="!$q.screen.xs">
            <q-btn @click="$emit('updateTicket:reabrir')"
              flat
              autofocus
              icon="mdi-reload"
              color="primary"
              class="bg-padrao btn-rounded"
              :disable="cticket.status == 'open'">
              <q-tooltip content-class="bg-primary text-bold">
                {{ $t('atendimentoInfoCabecalho.reopenTicket') }}
              </q-tooltip>
            </q-btn>
            <q-btn @click="$emit('abrir:modalAgendamentoMensagem')"
              v-if="ticketFocado.channel !== 'instagram' && ticketFocado.channel !== 'telegram' && !desabilitarInputWebchat"
              flat
              icon="mdi-message-text-clock-outline"
              color="primary"
              class="bg-padrao btn-rounded"
              :disable="cticket.status == 'closed' || desabilitarInput">
              <q-tooltip content-class="bg-primary text-bold">
                {{ $t('atendimentoInfoCabecalho.scheduleMessage') }}
              </q-tooltip>
            </q-btn>
            <q-btn @click="$emit('updateTicket:retornar')"
              flat
              icon="mdi-replay"
              color="primary"
              class="bg-padrao btn-rounded"
              :disable="cticket.status == 'closed'">
              <q-tooltip content-class="bg-primary text-bold">
                {{ $t('atendimentoInfoCabecalho.returnToQueue') }}
              </q-tooltip>
            </q-btn>
            <q-btn @click="$emit('updateTicket:resolver')"
              color="primary"
              flat
              class="bg-padrao btn-rounded"
              icon="mdi-comment-check"
              :disable="cticket.status == 'closed'">
              <q-tooltip content-class="bg-primary text-bold">
                {{ $t('atendimentoInfoCabecalho.resolve') }}
              </q-tooltip>
            </q-btn>
            <q-btn @click="listarFilas"
              flat
              color="primary"
              class="bg-padrao btn-rounded"
              :disable="cticket.status == 'closed'">
              <q-icon name="mdi-transfer" />
              <q-tooltip content-class="bg-primary text-bold">
                {{ $t('atendimentoInfoCabecalho.transfer') }}
              </q-tooltip>
            </q-btn>
            <q-btn @click="listarChatbots"
              v-if="ticketFocado.channel !== 'instagram' && ticketFocado.channel !== 'telegram'"
              flat
              color="primary"
              class="bg-padrao btn-rounded"
              :disable="cticket.status == 'closed' || desabilitarInput">
              <q-icon name="mdi-robot" />
              <q-tooltip content-class="bg-primary text-bold">
                {{ $t('atendimentoInfoCabecalho.chatbot') }}
              </q-tooltip>
            </q-btn>
            <q-btn @click="listarCanais"
              v-if="ticketFocado.channel !== 'instagram' && ticketFocado.channel !== 'telegram' && !desabilitarInputWebchat"
              flat
              color="primary"
              class="bg-padrao btn-rounded"
              :disable="cticket.status == 'closed' || desabilitarInput">
              <q-icon name="mdi-cellphone-wireless" />
              <q-tooltip content-class="bg-primary text-bold">
                {{ $t('atendimentoInfoCabecalho.channel') }}
              </q-tooltip>
            </q-btn>
            <q-btn @click="togglePause"
              v-if="allowPause === 'enabled'"
              flat
              color="primary"
              class="bg-padrao btn-rounded"
              :disable="cticket.status == 'closed'">
              <q-icon :name="cticket.isPaused ? 'mdi-play' : 'mdi-pause'" />
              <q-tooltip content-class="bg-primary text-bold">
                {{ cticket.isPaused ? $t('atendimentoInfoCabecalho.resumeAttendance') : $t('atendimentoInfoCabecalho.pauseAttendance') }}
              </q-tooltip>
            </q-btn>
            <q-btn @click="reopenWebphone"
              v-if="ticketFocado.channel === 'baileys'"
              flat
              color="primary"
              class="bg-padrao btn-rounded"
              :disable="cticket.status == 'closed'">
              <q-icon name="mdi-phone-in-talk" />
              <q-tooltip content-class="bg-primary text-bold">
                {{ $t('atendimentoInfoCabecalho.reopenCall') }}
              </q-tooltip>
            </q-btn>
            <q-btn @click="abrirModalCompartilhamento"
              v-if="!cticket.isGroup"
              flat
              color="primary"
              class="bg-padrao btn-rounded"
              :disable="cticket.status == 'closed'">
              <q-icon name="mdi-share-variant" />
              <q-badge
                v-if="temConviteCompartilhamento"
                color="positive"
                floating
                rounded
                size="xs" />
              <q-tooltip content-class="bg-primary text-bold">
                {{ $t('ticketCompartilhado.compartilharTicket') }}
              </q-tooltip>
            </q-btn>
          </template>
          <template v-else>
            <q-fab
              color="primary"
              flat
              dense
              class="bg-padrao text-bold "
              icon="keyboard_arrow_left"
              direction="down"
              padding="5px"
              :label="$t('atendimentoInfoCabecalho.actions')"
              :class="{
                'bg-black': $q.dark.isActive

              }">
              <q-fab-action @click="$emit('updateTicket:reabrir')"
                color="primary"
                flat
                class="bg-padrao q-pa-xs "
                icon="mdi-reload"
                :class="{
                  'bg-black': $q.dark.isActive

                }">
                <q-tooltip content-class="bg-primary text-bold">
                  {{ $t('atendimentoInfoCabecalho.reopenTicket') }}
                </q-tooltip>
              </q-fab-action>
              <q-fab-action @click="$emit('updateTicket:resolver')"
                :disable="cticket.status == 'closed'"
                color="primary"
                flat
                class="bg-padrao q-pa-xs "
                icon="mdi-comment-check"
                :class="{
                  'bg-black': $q.dark.isActive

                }">
                <q-tooltip content-class="bg-primary text-bold">
                  {{ $t('atendimentoInfoCabecalho.resolve') }}
                </q-tooltip>
              </q-fab-action>
              <q-fab-action @click="$emit('updateTicket:retornar')"
                flat
                icon="mdi-replay"
                color="primary"
                class="bg-padrao q-pa-xs "
                :class="{
                  'bg-black': $q.dark.isActive

                }">
                <q-tooltip content-class="bg-primary text-bold">
                  {{ $t('atendimentoInfoCabecalho.returnToQueue') }}
                </q-tooltip>
              </q-fab-action>

              <q-fab-action @click="listarFilas"
                :disable="cticket.status == 'closed'"
                flat
                color="primary"
                class="bg-padrao q-pa-xs "
                :class="{
                  'bg-black-dark': $q.dark.isActive
                }">
                <q-icon name="mdi-transfer" />
                <q-tooltip content-class="bg-primary text-bold">
                  {{ $t('atendimentoInfoCabecalho.transfer') }}
                </q-tooltip>
              </q-fab-action>
              <q-fab-action @click="listarChatbots"
                :disable="cticket.status == 'closed'"
                v-if="ticketFocado.channel !== 'instagram' && ticketFocado.channel !== 'telegram' && !ticketFocado.channel.includes('hub')"
                flat
                color="primary"
                class="bg-padrao q-pa-xs "
                :class="{
                  'bg-black-dark': $q.dark.isActive
                }">
                <q-icon name="mdi-robot" />
                <q-tooltip content-class="bg-primary text-bold">
                  {{ $t('atendimentoInfoCabecalho.chatbot') }}
                </q-tooltip>
              </q-fab-action>
              <q-fab-action @click="listarCanais"
                :disable="cticket.status == 'closed'"
                v-if="ticketFocado.channel !== 'instagram' && ticketFocado.channel !== 'telegram' && !ticketFocado.channel.includes('hub')"
                flat
                color="primary"
                class="bg-padrao q-pa-xs "
                :class="{
                  'bg-black-dark': $q.dark.isActive
                }">
                <q-icon name="mdi-cellphone-wireless" />
                <q-tooltip content-class="bg-primary text-bold">
                  {{ $t('atendimentoInfoCabecalho.channels') }}
                </q-tooltip>
              </q-fab-action>
              <q-fab-action @click="togglePause"
                v-if="allowPause === 'enabled'"
                :disable="cticket.status == 'closed'"
                flat
                color="primary"
                class="bg-padrao q-pa-xs"
                :class="{
                  'bg-black-dark': $q.dark.isActive
                }">
                <q-icon :name="cticket.isPaused ? 'mdi-play' : 'mdi-pause'" />
                <q-tooltip content-class="bg-primary text-bold">
                  {{ cticket.isPaused ? $t('atendimentoInfoCabecalho.resumeAttendance') : $t('atendimentoInfoCabecalho.pauseAttendance') }}
                </q-tooltip>
              </q-fab-action>
              <q-fab-action @click="reopenWebphone"
                :disable="cticket.status == 'closed'"
                v-if="ticketFocado.channel !== 'baileys'"
                flat
                color="primary"
                :class="['bg-padrao', 'btn-rounded', {'bg-black-dark': $q.dark.isActive}]">
                <q-icon name="mdi-phone-in-talk" />
                <q-tooltip content-class="bg-primary text-bold">
                  {{ $t('atendimentoInfoCabecalho.reopenCall') }}
                </q-tooltip>
              </q-fab-action>
              <q-fab-action @click="abrirModalCompartilhamento"
                v-if="!cticket.isGroup"
                :disable="cticket.status == 'closed'"
                flat
                color="primary"
                class="bg-padrao q-pa-xs"
                :class="{
                  'bg-black-dark': $q.dark.isActive
                }">
                <q-icon name="mdi-share-variant" />
                <q-badge
                  v-if="temConviteCompartilhamento"
                  color="positive"
                  floating
                  rounded
                  size="xs" />
                <q-tooltip content-class="bg-primary text-bold">
                  {{ $t('ticketCompartilhado.compartilharTicket') }}
                </q-tooltip>
              </q-fab-action>
              <q-fab-action @click="$emit('abrir:modalAgendamentoMensagem')"
                :disable="cticket.status == 'closed'"
                v-if="this.ticketFocado.channel !== 'waba'"
                flat
                color="primary"
                class="bg-padrao q-pa-xs "
                :class="{
                  'bg-black': $q.dark.isActive

                }">
                <q-icon name="mdi-message-text-clock-outline" />
                <q-tooltip content-class="bg-primary text-bold">
                  {{ $t('atendimentoInfoCabecalho.messageScheduling') }}
                </q-tooltip>
              </q-fab-action>
            </q-fab>
          </template>

          <!-- <q-btn
            round
            flat
            icon="mdi-text-box-search-outline"
          />
          <q-btn
            round
            flat
          >
            <q-icon
              name="mdi-attachment"
              class="rotate-135"
            />
          </q-btn>
          <q-btn
            round
            flat
            icon="mdi-dots-vertical"
          >
            <q-menu
              auto-close
              :offset="[110, 0]"
            >
              <q-list style="min-width: 150px">
                <q-item clickable>
                  <q-item-section>Datos de contacto</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Bloquear</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Seleccionar mensajes</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Silenciar</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Borrar mensajes</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Borrar mensajes</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn> -->
        </div>
      </q-toolbar>
      <q-separator />
    </q-header>

    <q-dialog v-model="modalTransferirTicket"
      @hide="modalTransferirTicket = false"
      persistent>
      <q-card class="q-pa-md"
        style="width: 500px">
        <q-card-section>
          <div class="text-h6">{{ $t('atendimentoInfoCabecalho.selectDestination') }}</div>
        </q-card-section>
        <q-card-section>
          <q-select square
            outlined
            v-model="filaSelecionada"
            :options="filas"
            emit-value
            map-options
            option-value="id"
            option-label="queue"
            :label="$t('atendimentoInfoCabecalho.destinationQueue')"
            />
        </q-card-section>
        <q-card-section>
          <q-select square
            outlined
            v-model="usuarioSelecionado"
            :options="usuarios.filter(filterUsers)"
            emit-value
            map-options
            option-value="id"
            option-label="name"
            :label="$t('atendimentoInfoCabecalho.destinationUser')"
            />
        </q-card-section>
        <q-card-actions align="right">
          <q-btn
            :label="$t('common.out')"
            color="negative"
            v-close-popup
            class="q-mr-lg" />
          <q-btn
            :label="$t('common.save')"
            color="primary"
            @click="confirmarTransferenciaTicket" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="modalTransferirChatbot"
      @hide="modalTransferirChatbot = false"
      persistent>
      <q-card class="q-pa-md"
        style="width: 500px">
        <q-card-section>
          <div class="text-h6">{{ $t('atendimentoInfoCabecalho.selectDestination') }}</div>
        </q-card-section>
        <q-card-section>
          <q-select square
            outlined
            v-model="chatflowSelecionado"
            :options="chatflows"
            emit-value
            map-options
            option-value="id"
            option-label="name"
            :label="$t('atendimentoInfoCabecalho.destinationChatbot')" />
        </q-card-section>
        <q-card-actions align="right">
          <q-btn
            :label="$t('common.out')"
            color="negative"
            v-close-popup
            class="q-mr-lg" />
          <q-btn
            :label="$t('common.save')"
            color="primary"
            @click="confirmarTransferenciaChatbot" />
        </q-card-actions>
      </q-card>
    </q-dialog>
    
    <q-dialog v-model="modalTransferirCanal"
      @hide="modalTransferirCanal = false"
      persistent>
      <q-card class="q-pa-md"
        style="width: 500px">
        <q-card-section>
          <div class="text-h6">{{ $t('atendimentoInfoCabecalho.selectDestination') }}</div>
        </q-card-section>
        <q-card-section>
          <q-select square
            outlined
            v-model="canalSelecionado"
            :options="cSessionsOptions"
            map-options
            :label="$t('atendimentoInfoCabecalho.destinationChannel')" />
        </q-card-section>
        <q-card-actions align="right">
          <q-btn
            :label="$t('common.out')"
            color="negative"
            v-close-popup
            class="q-mr-lg" />
          <q-btn
            :label="$t('common.save')"
            color="primary"
            @click="confirmarTransferenciaCanal" />
        </q-card-actions>
      </q-card>
    </q-dialog>
    
    <q-dialog v-model="modalCompartilhamento"
      @hide="modalCompartilhamento = false"
      persistent>
      <q-card class="q-pa-md"
        style="width: 600px; max-height: 80vh;">
        <q-card-section>
          <div class="text-h6">{{ conviteEditando ? $t('ticketCompartilhado.editarCompartilhamento') : $t('ticketCompartilhado.compartilharTicket') }}</div>
          <div class="text-caption q-mt-sm">
            {{ conviteEditando ? $t('ticketCompartilhado.editeOsUsuariosQueTeraoAcessoAEsteTicket') : $t('ticketCompartilhado.selecioneOsUsuariosQueTeraoAcessoAEsteTicket') }}
          </div>
        </q-card-section>
        <q-card-section class="q-pa-none">
          <q-list>
            <q-item v-for="usuario in usuariosCompartilhamento" :key="usuario.id">
              <q-item-section avatar>
                <q-checkbox v-model="usuario.selecionado" />
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ usuario.name }}</q-item-label>
                <q-item-label caption>{{ usuario.email }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
        <!-- <q-card-section class="q-pa-none" style="margin: 10px;">
          <div v-if="linkCompartilhamento">
            <q-input 
              v-model="linkCompartilhamento" 
              label="Compartir enlace" 
              readonly 
              dense
              outlined>
              <template v-slot:append>
                <q-btn
                  round
                  dense
                  flat
                  icon="mdi-content-copy"
                  @click="copiarLink"
                  color="primary">
                  <q-tooltip content-class="bg-primary text-bold">
                    Copiar link
                  </q-tooltip>
                </q-btn>
              </template>
            </q-input>
          </div>
        </q-card-section> -->
        <q-card-actions align="right">
          <q-btn
            :label="$t('common.cancel')"
            color="negative"
            v-close-popup
            class="q-mr-lg" />
          <q-btn
            v-if="conviteEditando"
            :label="$t('common.delete')"
            color="warning"
            @click="deletarConvite"
            class="q-mr-lg" />
          <q-btn
            :label="conviteEditando ? $t('ticketCompartilhado.update') : $t('ticketCompartilhado.compartilhar')"
            color="primary"
            @click="confirmarCompartilhamento"
            :disable="!usuariosSelecionados.length" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
const userId = +localStorage.getItem('userId')
import { mapGetters } from 'vuex'
import { ListarUsuarios } from 'src/service/user.js'
import { ListarFilas } from 'src/service/filas.js'
import { AtualizarTicket, AtualizarChatbotTicket, AtualizarCanalTicket, EmitirNotificacaoTicket, AtualizarTicketNaoLido, IniciarPausaTicket, FinalizarPausaTicket } from 'src/service/tickets.js'
import { ListarChatFlow } from 'src/service/chatFlow.js'
import { CriarTicketCompartilhado, VerificarTicketCompartilhado, DeletarTicketCompartilhado, AtualizarTicketCompartilhado } from 'src/service/ticketcompartilhado.js'
import eventBus from 'src/utils/eventBus.js'
export default {
  name: 'InfoCabecalhoMensagens',
  data () {
    return {
      modalTransferirTicket: false,
      modalTransferirChatbot: false,
      modalTransferirCanal: false,
      modalCompartilhamento: false,
      usuarioSelecionado: null,
      filaSelecionada: null,
      usuarios: [],
      filas: [],
      chatflows: [],
      canais: [],
      chatflowSelecionado: null,
      canalSelecionado: null,
      allowPause: null,
      usuariosCompartilhamento: [],
      conviteEditando: null,
      linkCompartilhamento: null
    }
  },
  watch: {
    getCallInfo(newInfo) {
      this.isCallActive = ['offer', 'outcoming_calling', 'accept'].includes(newInfo.status);
    },
    ticketFocado: {
      handler(newTicket) {
        if (newTicket && newTicket.id) {
          this.verificarConviteExistente();
        }
      },
      immediate: true
    }
  },
  computed: {
    ...mapGetters(['ticketFocado', 'whatsapps']),
    ...mapGetters({
      uiFlags: 'webphone/getUIFlags',
      callInfo: 'webphone/getCallInfo',
      inboxes: 'whatsapps',
      wavoip: 'webphone/getWavoip',
    }),
    isCallActive() {
      // Return true only for specific statuses
      return ['offer', 'outcoming_calling', 'accept'].includes(this.callInfo.status);
    },
    cticket () {
      const infoDefault = {
        contact: { profilePicUrl: '', name: '' },
        user: { name: '' }
      }
      return Object.keys(this.ticketFocado).includes('contact') ? this.ticketFocado : infoDefault
    },
    cSessions() {
      return this.whatsapps.filter(w => ["whatsapp", "baileys", "meow", "waba", "evo"].includes(w.type) && !w.isDeleted && w.status === 'CONNECTED');
    },
    cSessionsOptions() {
      return this.cSessions.map(w => ({ label: w.name, value: w.id, channel: w.type }))
    },
    desabilitarInputWebchat() {
      if (this.ticketFocado.channel === 'webchat') {
        return true;
      }
      return false;
    },
    desabilitarInput() {
      if (this.ticketFocado.channel !== 'waba' && !this.ticketFocado.channel.includes('hub') && this.ticketFocado.channel !== 'webmail') {
        return false;
      }
      else if(this.ticketFocado.channel === 'webmail') {
        return true;
      }
      else if (this.ticketFocado.channel === 'hub_email') {
        return true;
      }
      const agora = new Date();
      const ultimaMensagem = new Date(Number(this.ticketFocado.lastMessageReceived));
      const diferencaEmHoras = (agora.getTime() - ultimaMensagem.getTime()) / (1000 * 60 * 60);
      this.openWindow = diferencaEmHoras > 24;
      return diferencaEmHoras > 24
      // const diferenca = diferencaEmHoras > 24
      //return !diferenca && !this.ticketFocado.answered;
    },
    usuariosSelecionados() {
      return this.usuariosCompartilhamento
        .filter(usuario => usuario.selecionado)
        .map(usuario => usuario.id);
    },
    temConviteCompartilhamento() {
      return (this.linkCompartilhamento !== null && this.linkCompartilhamento !== undefined) || 
             (this.conviteEditando !== null && this.conviteEditando !== undefined);
    }
  },
  methods: {
    emitMenuAction() {
      eventBus.emit('infor-cabecalo-chat:acao-menu');
    },
    emitInfoContatoAction() {
      eventBus.emit('update-ticket:info-contato');
    },
    ...mapActions('webphone', ['updateWebphoneVisible']),
    async togglePause() {
      try {
        if (this.cticket.isPaused) {
          await FinalizarPausaTicket(this.ticketFocado.id);
          // Atualiza o estado local do ticket
          this.$store.commit('TICKET_FOCADO', {
            ...this.ticketFocado,
            isPaused: false
          });
          this.$q.notify({
            type: 'positive',
            message: this.$t('atendimentoInfoCabecalho.attendanceResumed'),
            progress: true,
            actions: [{
              icon: 'close',
              round: true,
              color: 'white'
            }]
          });
        } else {
          await IniciarPausaTicket(this.ticketFocado.id);
          // Atualiza o estado local do ticket
          this.$store.commit('TICKET_FOCADO', {
            ...this.ticketFocado,
            isPaused: true
          });
          this.$q.notify({
            type: 'info',
            message: this.$t('atendimentoInfoCabecalho.attendancePaused'),
            progress: true,
            actions: [{
              icon: 'close',
              round: true,
              color: 'white'
            }]
          });
        }
      } catch (error) {
        console.error(error);
        this.$q.notify({
          type: 'negative',
          message: this.$t('atendimentoInfoCabecalho.pauseError'),
          progress: true,
          actions: [{
            icon: 'close',
            round: true,
            color: 'white'
          }]
        });
      }
    },
    reopenWebphone() {
      this.updateWebphoneVisible({ isOpen: true });
    },
    Value (obj, prop) {
      try {
        return obj[prop]
      } catch (error) {
        return ''
      }
    },
    filterUsers (element, index, array) {
      const fila = this.filaSelecionada
      if (fila == null) return true
      const queues_valid = element.queues.filter(function (element, index, array) {
        return (element.id == fila)
      })
      return (queues_valid.length > 0)
    },
    async listarChatbots(){
      try {
        const { data } = await ListarChatFlow()
        this.chatflows = data.chatFlow.filter(chatFlow => chatFlow.isActive);
        this.modalTransferirChatbot = true
      } catch (error) {
        console.error(error)
        this.$notificarErro(this.$t('atendimentoInfoCabecalho.loadingChatbotsError'), error)
      }
    },
    async listarCanais(){
      try {
        this.modalTransferirCanal = true
      } catch (error) {
        console.error(error)
        this.$notificarErro(this.$t('atendimentoInfoCabecalho.loadingChannelsError'), error)
      }
    },
    async confirmarTransferenciaChatbot () {
      if (!this.chatflowSelecionado) return
      try{
        await AtualizarChatbotTicket(this.ticketFocado.id, {
          chatFlowId: this.chatflowSelecionado,
        })
        this.$q.notify({
          type: 'info',
          message: this.$t('atendimentoInfoCabecalho.transferredToChatbot'),
          progress: true,
          actions: [{
            icon: 'close',
            round: true,
            color: 'white'
          }]
        })
        this.modalTransferirChatbot = false
      } catch(e){
        console.log(this.$t('atendimentoInfoCabecalho.transferError') + e)
        this.modalTransferirChatbot = false
      }
    },
    async confirmarTransferenciaCanal () {
      if (!this.canalSelecionado) return
      console.log(this.canalSelecionado)
      try{
        await AtualizarCanalTicket(this.ticketFocado.id, {
          channel: this.canalSelecionado.channel,
          whatsappId: this.canalSelecionado.value
        })
        this.$q.notify({
          type: 'info',
          message: this.$t('atendimentoInfoCabecalho.transferredToChannel'),
          progress: true,
          actions: [{
            icon: 'close',
            round: true,
            color: 'white'
          }]
        })
        this.modalTransferirCanal = false
      } catch(e){
        console.log(this.$t('atendimentoInfoCabecalho.transferError') + e)
        if (e.status === 409) {
          console.log('tkc >>>>>>>>>>>>> 10', e)
          this.$q.notify({
            type: 'warning',
            message: this.$t('atendimentoInfoCabecalho.checkTicketError'),
            progress: true,
            actions: [{
              icon: 'close',
              round: true,
              color: 'white'
            }]
          })
          }
        this.modalTransferirCanal = false
      }
    },
    async listarFilas () {
      try {
        const { data } = await ListarFilas()
        this.filas = data.filter(fila => fila.isActive);
        this.modalTransferirTicket = true
        this.listarUsuarios()
      } catch (error) {
        console.error(error)
        this.$notificarErro(this.$t('atendimentoInfoCabecalho.loadingQueuesError'), error)
      }
    },
    async listarUsuarios() {
      try {
        let usuarios = [];
        let hasMore = true;
        let pageNumber = 1; // Página inicial.

        while (hasMore) {
          const { data } = await ListarUsuarios({ pageNumber });

          const novosUsuarios = data.users.filter(user => user.profile !== 'superadmin');
          usuarios = [...usuarios, ...novosUsuarios];

          hasMore = data.hasMore;
          pageNumber += 1;
        }

        this.usuarios = usuarios;
        this.modalTransferirTicket = true;
      } catch (error) {
        console.error(error);
        this.$notificarErro(this.$t('atendimentoInfoCabecalho.loadingUsersError'), error);
      }
    },
    async confirmarTransferenciaTicket () {
      if (!this.filaSelecionada) return
      // if (!this.usuarioSelecionado) return
      if (this.ticketFocado.userId === this.usuarioSelecionado && this.ticketFocado.userId != null) {
        this.$q.notify({
          type: 'info',
          message: this.$t('atendimentoInfoCabecalho.alreadyAssigned'),
          progress: true,
          actions: [{
            icon: 'close',
            round: true,
            color: 'white'
          }]
        })
        return
      }
      if (this.ticketFocado.userId === userId && userId === this.usuarioSelecionado) {
        this.$q.notify({
          type: 'info',
          message: this.$t('atendimentoInfoCabecalho.alreadyAssignedToYou'),
          progress: true,
          actions: [{
            icon: 'close',
            round: true,
            color: 'white'
          }]
        })
        return
      }
      if (this.ticketFocado.queueId === this.filaSelecionada && this.ticketFocado.userId === this.usuarioSelecionado) {
        this.$q.notify({
          type: 'info',
          message: this.$t('atendimentoInfoCabecalho.alreadyInQueueAndUser'),
          progress: true,
          actions: [{
            icon: 'close',
            round: true,
            color: 'white'
          }]
        })
        return
      }
      await AtualizarTicket(this.ticketFocado.id, {
        userId: this.usuarioSelecionado,
        queueId: this.filaSelecionada,
        status: this.usuarioSelecionado == null ? 'pending' : 'open',
        isTransference: 1
      })

      await AtualizarTicketNaoLido(this.ticketFocado.id, 1)

      // Emitir notificação após a transferência
      await EmitirNotificacaoTicket(this.ticketFocado.id, 'notification:new')

      this.$q.notify({
        type: 'positive',
        message: this.$t('atendimentoInfoCabecalho.transferredToQueue'),
        progress: true,
        actions: [{
          icon: 'close',
          round: true,
          color: 'white'
        }]
      })
      this.modalTransferirTicket = false
      this.$store.commit('TICKET_FOCADO', {})
    },
    async abrirModalCompartilhamento() {
      try {
        if(!this.ticketFocado || !this.ticketFocado.id) return;
        // Verificar se já existe um convite para este ticket
        const { existe, data } = await VerificarTicketCompartilhado(this.ticketFocado.id);
        
        if (existe && data) {

          // Carregar dados do convite existente para edição
          await this.carregarUsuariosCompartilhamento(data);

        } else {
          // Se não existe, criar novo convite
          this.carregarUsuariosCompartilhamento();
        }
      } catch (error) {
        // console.error('Erro ao verificar convite:', error);
        
        // Se o erro for 404 (não encontrado), criar novo convite
        if (error.status === 404 || error.response?.status === 404) {
          this.carregarUsuariosCompartilhamento();
        } else {
          // Para outros erros, mostrar notificação
          this.$q.notify({
            type: 'negative',
            message: this.$t('ticketCompartilhado.erroAoVerificarConviteExistente'),
            progress: true,
            actions: [{
              icon: 'close',
              round: true,
              color: 'white'
            }]
          });
        }
      }
    },
    
    async carregarUsuariosCompartilhamento(conviteExistente = null) {
      try {
        // Carregar usuários se ainda não foram carregados
        if (this.usuarios.length === 0) {
          await this.carregarUsuariosParaCompartilhamento();
        }
        
        // Preparar lista de usuários para compartilhamento
        this.usuariosCompartilhamento = this.usuarios
          .filter(user => user.id !== userId) // Excluir o usuário atual
          .map(user => ({
            ...user,
            selecionado: conviteExistente && this.ticketFocado.userIdArray && Array.isArray(this.ticketFocado.userIdArray) 
              ? this.ticketFocado.userIdArray.includes(user.id) 
              : false
          }));
        
        // Se estamos editando um convite existente, armazenar o ID para atualização
        if (conviteExistente) {
          this.conviteEditando = conviteExistente.id;
          this.linkCompartilhamento = conviteExistente.inviteUrl;
        } else {
          this.conviteEditando = null;
          this.linkCompartilhamento = null;
        }
        
        this.modalCompartilhamento = true;
      } catch (error) {
        console.error('Error al cargar usuarios:', error);
        this.$q.notify({
          type: 'negative',
          message: this.$t('ticketCompartilhado.erroAoCarregarUsuarios'),
          progress: true,
          actions: [{
            icon: 'close',
            round: true,
            color: 'white'
          }]
        });
      }
    },
    
    async carregarUsuariosParaCompartilhamento() {
      try {
        let usuarios = [];
        let hasMore = true;
        let pageNumber = 1; // Página inicial.

        while (hasMore) {
          const { data } = await ListarUsuarios({ pageNumber });

          const novosUsuarios = data.users.filter(user => user.profile !== 'superadmin');
          usuarios = [...usuarios, ...novosUsuarios];

          hasMore = data.hasMore;
          pageNumber += 1;
        }

        this.usuarios = usuarios;
        // NÃO definir modalTransferirTicket = true aqui
      } catch (error) {
        console.error(error);
        this.$notificarErro(this.$t('atendimentoInfoCabecalho.loadingUsersError'), error);
      }
    },
    
    async confirmarCompartilhamento() {
      if (this.usuariosSelecionados.length === 0) {
        this.$q.notify({
          type: 'warning',
          message: this.$t('ticketCompartilhado.selecionePeloMenosUmUsuarioParaCompartilhar'),
          progress: true,
          actions: [{
            icon: 'close',
            round: true,
            color: 'white'
          }]
        });
        return;
      }

      try {
        // Usar a URL atual do ticket que está sendo atendido
        const inviteUrl = window.location.href;
        
        if (this.conviteEditando) {
          // Atualizar convite existente
          await AtualizarTicketCompartilhado(this.conviteEditando, {
            inviteUrl: inviteUrl,
            ticketId: this.ticketFocado.id,
            userIdArray: this.usuariosSelecionados
          });

          this.$q.notify({
            type: 'positive',
            message: this.$t('ticketCompartilhado.conviteAtualizadoCom', { length: this.usuariosSelecionados.length }),
            progress: true,
            actions: [{
              icon: 'close',
              round: true,
              color: 'white'
            }]
          });
        } else {
          // Criar novo convite
          await CriarTicketCompartilhado({
            inviteUrl: inviteUrl,
            ticketId: this.ticketFocado.id,
            userIdArray: this.usuariosSelecionados
          });

          this.$q.notify({
            type: 'positive',
            message: this.$t('ticketCompartilhado.ticketCompartilhadoCom', { length: this.usuariosSelecionados.length }),
            progress: true,
            actions: [{
              icon: 'close',
              round: true,
              color: 'white'
            }]
          });
        }

        this.modalCompartilhamento = false;
        this.conviteEditando = null; // Resetar o estado de edição
      } catch (error) {
        console.error('Erro ao compartilhar ticket:', error);
        
        let errorMessage = this.$t('ticketCompartilhado.erroAoCompartilharTicket');
        if (error.response && error.response.data && error.response.data.error) {
          errorMessage = error.response.data.error;
        }
        
        this.$q.notify({
          type: 'negative',
          message: errorMessage,
          progress: true,
          actions: [{
            icon: 'close',
            round: true,
            color: 'white'
          }]
        });
      }
    },
    async deletarConvite() {
      try {
        await DeletarTicketCompartilhado(this.conviteEditando);
        this.$q.notify({
          type: 'info',
          message: this.$t('ticketCompartilhado.conviteDeletadoComSucesso'),
          progress: true,
          actions: [{
            icon: 'close',
            round: true,
            color: 'white'
          }]
        });
        this.modalCompartilhamento = false;
        this.conviteEditando = null;
      } catch (error) {
        console.error('Erro ao deletar convite:', error);
        this.$q.notify({
          type: 'negative',
          message: this.$t('ticketCompartilhado.erroAoDeletarConvite'),
          progress: true,
          actions: [{
            icon: 'close',
            round: true,
            color: 'white'
          }]
        });
      }
    },
    copiarLink() {
      const link = this.linkCompartilhamento;
      if (link) {
        navigator.clipboard.writeText(link).then(() => {
          this.$q.notify({
            type: 'positive',
            message: this.$t('ticketCompartilhado.linkCopiadoParaAreaDeTransferencia'),
            progress: true,
            actions: [{
              icon: 'close',
              round: true,
              color: 'white'
            }]
          });
        }).catch(err => {
          console.error('Erro ao copiar link:', err);
          this.$q.notify({
            type: 'negative',
            message: this.$t('ticketCompartilhado.naoFoiPossivelCopiarLink'),
            progress: true,
            actions: [{
              icon: 'close',
              round: true,
              color: 'white'
            }]
          });
        });
      }
    },
    async verificarConviteExistente() {
      try {
        if (!this.ticketFocado || !this.ticketFocado.id || !this.ticketFocade.shared) {
          this.conviteEditando = null;
          this.linkCompartilhamento = null;
          return;
        }

        const { existe, data } = await VerificarTicketCompartilhado(this.ticketFocado.id);
        if (existe && data) {
          this.conviteEditando = data.id;
          this.linkCompartilhamento = data.inviteUrl;
        } else {
          this.conviteEditando = null;
          this.linkCompartilhamento = null;
        }
      } catch (error) {
        // console.error('Erro ao verificar convite existente:', error);
        // Não mostrar notificação de erro para não incomodar o usuário
        this.conviteEditando = null;
        this.linkCompartilhamento = null;
      }
    }
  },
  mounted(){
    this.allowPause = JSON.parse(localStorage.getItem('allowPause') || 'disabled')
  }
}
</script>

<!-- <style lang="scss" scoped>
.webphone-button-container {
  display: inline-block;
}

.activeCall {
  animation: blink 1s step-start infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style> -->
