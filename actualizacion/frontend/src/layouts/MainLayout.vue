<template>
  <div>
  <q-layout view="hHh Lpr lFf">
    <q-header class="bg-white text-grey-8 q-py-xs "
      height-hint="58"
      bordered>
      <q-toolbar>
        <q-btn flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu">
          <q-tooltip>{{ $t('mainLayout.menu') }}</q-tooltip>
        </q-btn>

        <q-btn flat
          no-caps
          no-wrap
          dense
          class="q-ml-sm"
          v-if="$q.screen.gt.xs">
          <q-img :src="$q.dark.isActive ? '/logo_dark.png' : '/logo.png'"
            class="no-cover"
            spinner-color="primary"
            style="height: 50px; width: 140px" />
        </q-btn>

        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">
          <PushNotifications/>
          <q-btn round
            v-if="userProfile !== 'superadmin'"
            dense
            flat
            color="grey-8"
            icon="notifications"
            >
            <q-badge color="red"
              text-color="white"
              floating
              v-if="(parseInt(notifications.count) + parseInt(notifications_p.count)) > 0 || this.notificacaoInternaNaoLida || convitesCount > 0">
              <!-- {{ parseInt(notifications.count) + parseInt(this.notificacaoInternaNaoLida)}} -->
              {{ parseInt(notifications.count) + parseInt(notifications_p.count) + parseInt(this.notificacaoInternaNaoLida) + convitesCount}}
            </q-badge>
            <q-menu>
              <q-list style="min-width: 300px">
                <!--q-item>
                  <q-item-section
                    style="cursor: pointer;">
                    {{ parseInt(notifications.count) }} + {{ parseInt(notifications_p.count) }}
                  </q-item-section>
                </q-item-->
                <q-item v-if="(parseInt(notifications.count) + parseInt(notifications_p.count)) == 0 && parseInt(notificacaoInternaNaoLida) == 0 && convitesCount == 0">
                  <q-item-section style="cursor: pointer;">
                    {{ $t('mainLayout.noNewNotifications') }}
                  </q-item-section>
                </q-item>
                <q-item v-if="parseInt(notificacoesChat) > 0">
                  <q-item-section avatar @click="() => $router.push({ name: 'interno' })" style="cursor: pointer;">
                    <q-avatar style="width: 60px; height: 60px" color="primary" text-color="white">
                      {{ notificacoesChat }}
                    </q-avatar>
                  </q-item-section>
                  <q-item-section @click="() => $router.push({ name: 'chat-privado' })" style="cursor: pointer;">
                    {{ $t('mainLayout.newMessagesInInternalChat') }}
                  </q-item-section>
                </q-item>
                <q-item v-if="parseInt(notificacaoInternaNaoLida) > 0">
                  <q-item-section avatar @click="() => $router.push({ name: 'interno' })" style="cursor: pointer;">
                    <q-avatar style="width: 60px; height: 60px" color="primary" text-color="white">
                      {{ notificacaoInternaNaoLida }}
                    </q-avatar>
                  </q-item-section>
                  <q-item-section @click="() => $router.push({ name: 'chat-privado' })" style="cursor: pointer;">
                    {{ $t('mainLayout.unreadMessagesInInternalChat') }}
                  </q-item-section>
                </q-item>
                <q-item v-if="convitesCount > 0">
                  <q-item-section avatar @click="abrirConvitesTickets" style="cursor: pointer;">
                    <q-avatar style="width: 60px; height: 60px" color="orange" text-color="white">
                      {{ convitesCount }}
                    </q-avatar>
                  </q-item-section>
                  <q-item-section @click="abrirConvitesTickets" style="cursor: pointer;">
                    {{ $t('mainLayout.sharedTicketInvites') }}
                  </q-item-section>
                </q-item>
                <q-item v-if="parseInt(notifications_p.count) > 0">
                  <q-item-section avatar
                    @click="() => $router.push({ name: 'atendimento' })"
                    style="cursor: pointer;">
                    <q-avatar style="width: 60px; height: 60px"
                      color="primary"
                      text-color="white">
                      {{ notifications_p.count }}
                    </q-avatar>
                  </q-item-section>
                  <q-item-section @click="() => $router.push({ name: 'atendimento' })"
                    style="cursor: pointer;">
                    {{ $t('mainLayout.pendingClientsInQueue') }}
                  </q-item-section>
                </q-item>
                <q-item v-for="ticket in notifications.tickets"
                  :key="ticket.id"
                  style="border-bottom: 1px solid #ddd; margin: 5px;">
                  <q-item-section avatar
                    @click="abrirAtendimentoExistente(ticket.name, ticket)"
                    style="cursor: pointer;">
                    <q-avatar style="width: 60px; height: 60px">
                      <img :src="ticket.profilePicUrl">
                    </q-avatar>
                  </q-item-section>
                  <q-item-section @click="abrirAtendimentoExistente(ticket.name, ticket)"
                    style="cursor: pointer;">
                    <q-list>
                      <q-item style="text-align:center; font-size: 17px; font-weight: bold; min-height: 0">{{ ticket.name
                      }}</q-item>
                      <q-item style="min-height: 0; padding-top: 0"><b>Mensaje: </b> {{ ticket.lastMessage }}</q-item>
                    </q-list>
                  </q-item-section>
                </q-item>
                <!-- <q-separator /> -->
                <q-item v-if="(parseInt(notifications.count) + parseInt(notifications_p.count)) > 0 || convitesCount > 0" dense>
                  <q-item-section avatar>
                    <q-icon name="mdi-forum-outline" color="primary" size="sm" />
                  </q-item-section>
                  <q-item-section>
                    <q-btn 
                      flat 
                      no-caps
                      class="full-width text-left text-caption"
                      color="primary" 
                      :label="this.$t('mainLayout.checkAllMessages')"
                      @click="marcarTodasComoLidas"
                    />
                  </q-item-section>
                </q-item>
                <q-item v-if="parseInt(notificacaoInternaNaoLida) > 0" dense>
                  <q-item-section avatar>
                    <q-icon name="mdi-forum" color="primary" size="sm" />
                  </q-item-section>
                  <q-item-section>
                    <q-btn 
                      flat 
                      no-caps
                      class="full-width text-left text-caption"
                      color="primary" 
                      :label="this.$t('mainLayout.checkAllInternalMessages')"
                      @click="MarcarTodasMensagensInternasComoLidas"
                    />
                  </q-item-section>
                </q-item>
              </q-list>
            </q-menu>
            <q-tooltip >{{ $t('mainLayout.notifications') }}</q-tooltip>
          </q-btn>
          <q-btn 
            v-if="userProfile !== 'superadmin'"
            flat 
            dense 
            color="grey-8" 
            icon="mdi-message-text-outline" 
            @click="showModalMensagensInternas = true"
          >
            <q-badge color="red"
              text-color="white"
              floating
              v-if="parseInt(unreadMessagesCount) > 0">
              {{ unreadMessagesCount }}
            </q-badge>
            <q-tooltip>{{ $t('mainLayout.internalMessage') }}</q-tooltip>
          </q-btn>

          <q-btn 
            v-if="userProfile !== 'superadmin'"
            flat 
            dense 
            color="grey-8" 
            icon="mdi-clipboard-list-outline" 
            @click="showModalTarefas = true"
          >
            <q-badge color="red"
              text-color="white"
              floating
              v-if="parseInt(unreadTaks) > 0">
              {{ unreadTaks }}
            </q-badge>
            <q-tooltip>{{ $t('mainLayout.tasks') }}</q-tooltip>
          </q-btn>
          
          <q-btn v-if="userProfile !== 'superadmin' && usuarioDados?.restrictedUser !== 'enabled'" flat dense color="grey-8" icon="mdi-send-outline" @click="showModalMensagem = true">
            <q-tooltip> {{ $t('mainLayout.newChat') }} </q-tooltip>
          </q-btn>

          <q-btn 
            v-if="userProfile === 'admin' || userProfile === 'user' || userProfile === 'super'"
            @click="reopenWebphone"
            dense
            flat
            color="grey-8"
            :class="{ 'activeCall': isCallActive }">
            <q-icon name="mdi-phone-in-talk" />
            <q-tooltip>
              {{ $t('mainLayout.reopenCall') }} 
            </q-tooltip>
          </q-btn>

          <q-btn 
            v-if="userProfile !== 'superadmin' && usuario.sipEnabled"
            @click="toggleWebphone"
            dense
            flat
            color="grey-8">
            <q-icon name="mdi-phone" />
            <q-tooltip>
              {{ $t('mainLayout.webphone') }}
            </q-tooltip>
          </q-btn>

          <!-- Botão de Tutoriais -->
          <q-btn v-if="tutoriaisAtivos.length > 0 && userProfile !== 'superadmin'"
            dense
            flat
            color="grey-8"
            icon="mdi-play-circle-outline"
            @click="mostrarDialogTutoriais = true">
            <q-tooltip>{{ $t('mainLayout.tutoriais') }}</q-tooltip>
          </q-btn>

          <q-avatar :color="usuario.status === 'offline' ? 'negative' : 'positive'"
            text-color="white"
            size="25px"
            :icon="usuario.status === 'offline' ? 'mdi-account-off' : 'mdi-account-check'"
            rounded
            class="q-ml-lg">
            <q-tooltip>
              {{ usuario.status === 'offline' ? $t('mainLayout.userOffline') : $t('mainLayout.userOnline') }}
            </q-tooltip>
          </q-avatar>

          <q-btn round
            flat
            class="bg-padrao text-bold q-mx-sm q-ml-lg">
            <q-avatar size="26px">
              {{ $iniciaisString(username) }}
            </q-avatar>
            <q-menu>
              <q-list style="min-width: 100px">
                <q-item-label header> {{ $t('mainLayout.hello') }} <b> {{ username }} </b> </q-item-label>
                <!-- <q-item
                  clickable
                  v-close-popup
                >
                  <q-item-section>
                    <q-toggle
                      color="blue"
                      :value="$q.dark.isActive"
                      label="Modo escuro"
                      @update:model-value="$setConfigsUsuario({isDark: !$q.dark.isActive})"
                    />
                  </q-item-section>
                </q-item> -->
                <cStatusUsuario @update:usuario="atualizarUsuario"
                  :usuario="usuario" />
                <cLanguageSelector 
                  
                />
                <q-item clickable
                  v-close-popup
                  @click="abrirModalUsuario">
                  <q-item-section>{{ $t('mainLayout.profile') }}</q-item-section>
                </q-item>
                <q-item clickable
                  v-close-popup
                  @click="clearCookies">
                  <q-item-section>{{ $t('mainLayout.cleanCookies') }}</q-item-section>
                </q-item>
                <q-item clickable
                  v-close-popup
                  @click="efetuarLogout">
                  <q-item-section>{{ $t('mainLayout.logout') }}</q-item-section>
                </q-item>
                <!-- <q-item clickable
                  v-close-popup
                  :color="license === 'enabled' ? 'positive' : 'negative'"
                  >
                  <q-item-section>
                    <span>
                      {{ $t('assinatura.license') }} <q-icon :color="license === 'enabled' ? 'positive' : 'negative'" :name="license === 'enabled' ? 'check_circle' : 'block'" />
                      <q-tooltip>
                        {{ $t('assinatura.licenseStatusLabel') }} {{ license === 'enabled' ? $t('assinatura.licenseActive') : $t('assinatura.licenseValidating') }}
                      </q-tooltip>
                    </span>
                  </q-item-section>
                </q-item> -->
                <q-separator />
                <q-item dense v-if="asaasOn === 'enabled'">
                  <q-item-section>
                    <cPaymentStatus />
                  </q-item-section>
                </q-item>
               <!-- <q-item dense >
                  <q-item-section>
                    <cSystemLicense  />
                  </q-item-section>
                </q-item> -->
                <q-item dense >
                  <q-item-section>
                    <cSystemVersion  />
                  </q-item-section>
                </q-item>

              </q-list>
            </q-menu>

            <q-tooltip>{{ $t('mainLayout.user') }}</q-tooltip>
          </q-btn>

          <q-dialog v-model="showModalMensagem" @hide="resetFields">
            <q-card>
              <q-card-section>
                <div class="text-h6">{{ $t('mainLayout.newChat') }}</div>
              </q-card-section>

              <q-card-section>
                <q-select
                  style="margin: 1px;"
                  v-model="whatsappId"
                  :options="cSessionsOptions"
                  label="WhatsApp ID"
                  dense
                  outlined
                />
                <c-input
                  class="col-12 col-md-6"
                  style="margin: 1px; margin-top: 5px"
                  outlined
                  v-model="numero" 
                  mask="+#############"
                  placeholder="+DDI (DDD) 99999 9999"
                  fill-mask
                  unmasked-value
                  dense
                  :hint="$t('generalSupport.hintNumber')"
                  :label="$t('generalSupport.number')"
                />
                <c-input
                  outlined
                  style="margin: 1px; margin-top: 5px"
                  dense 
                  v-model="mensagem" 
                  :label="$t('generalSupport.message')"
                  :disable="whatsappId && whatsappId.type === 'waba'"
                  type="textarea"
                />
                <div v-if="whatsappId && whatsappId.type === 'waba'" class="text-caption text-warning q-mt-xs">
                  <q-icon name="info" size="xs" class="q-mr-xs" />
                  {{ $t('mainLayout.novo.wabaTemplate') }}
                </div>
              </q-card-section>

              <q-card-actions align="right">
                <q-btn :label="$t('common.cancel')" class="q-px-md q-mr-sm" color="negative" @click="showModalMensagem = false" />
                <q-btn :label="$t('common.send')" class="q-px-md q-mr-sm" color="positive" @click="enviarMensagem" :loading="loadingMensagem" :disable="loadingMensagem" />
              </q-card-actions>
            </q-card>
          </q-dialog>

          <q-dialog v-model="showModalMensagensInternas">
            <q-card>
              <q-card-section>
                <div class="text-h6">{{ $t('mainLayout.internalMessages') }}</div>
              </q-card-section>

              <q-card-section>
                <q-list>
                  <q-item 
                    v-for="mensagem in mensagensInternas" 
                    :key="mensagem.id"
                    :class="{ 'mensagem-lida': mensagem.isRead }"
                  >
                    <q-item-section>
                      <q-item-label>{{ mensagem.message }}</q-item-label>
                      <q-item-label caption>{{ formatDate(mensagem.createdAt) }}</q-item-label>
                    </q-item-section>
                    <q-item-section side>
                      <q-btn icon="mdi-check-circle" @click="marcarComoLida(mensagem.id)" v-if="!mensagem.isRead"/>
                      <q-btn icon="mdi-delete" @click="deletarMensagem(mensagem.id)" />
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-card-section>

              <q-card-actions align="right">
                <q-btn :label="$t('common.close')" color="primary" @click="showModalMensagensInternas = false" />
              </q-card-actions>
            </q-card>
          </q-dialog>

          <q-dialog v-model="showModalTarefas">
            <q-card>
              <q-card-section>
                <div class="text-h6">{{ $t('mainLayout.tasks') }}</div>
              </q-card-section>

              <q-card-section>
                <q-list>
                  <q-item 
                    v-for="tarefa in tarefas" 
                    :key="tarefa.id"
                  >
                    <q-item-section>
                      <q-item-label>{{ $t('mainLayout.task') }}: {{  tarefa.name }}</q-item-label>
                      <q-item-label caption>{{ $t('mainLayout.taskLimit') }}: {{ formatDate(tarefa.limitDate) }}</q-item-label>
                      <q-item-label caption>{{ $t('mainLayout.taskStatus') }}: {{ formatStatus(tarefa.status) }}</q-item-label>
                      <q-item-label caption>{{ $t('mainLayout.taskPriority') }}: {{ formatPriority(tarefa.priority) }}</q-item-label>
                    </q-item-section>
                    <!-- <q-item-section side>
                      <q-btn icon="mdi-check-circle" @click="marcarComoLida(mensagem.id)" v-if="!mensagem.isRead"/>
                      <q-btn icon="mdi-delete" @click="deletarMensagem(mensagem.id)" />
                    </q-item-section> -->
                  </q-item>
                </q-list>
              </q-card-section>

              <q-card-actions align="right">
                <q-btn :label="$t('common.close')" color="primary" @click="showModalTarefas = false" />
              </q-card-actions>
            </q-card>
          </q-dialog>

        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen"
      show-if-above
      bordered
      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
      mini-to-overlay
      content-class="bg-white text-grey-9">
      <q-scroll-area class="fit">
        <q-list padding
          :key="userProfile">
          <q-inner-loading :showing="isLoadingMenu">
            <q-spinner color="primary" size="50px" />
            <!-- <q-spinner-dots color="primary" size="40px" /> -->
          </q-inner-loading>
          <template v-if="!isLoadingMenu">
            <EssentialLink 
            v-for="item in menuData"
              :key="item.title"
              v-bind="item" v-if="userProfile === 'admin' || userProfile === 'user' || userProfile === 'super'"/>
            <div v-if="userProfile === 'super'">
              <q-separator spaced />
              <div class="q-mb-lg"></div>
              <!-- <q-item-label header>Administração</q-item-label> -->
              <template v-for="item in menuDataSupervisor" :key="item.title">
                <EssentialLink v-if="exibirMenuBeta(item)"
                  v-bind="item" />
              </template>
            </div>
            <div v-if="userProfile === 'admin'">
              <q-separator spaced />
              <div class="q-mb-lg"></div>
              <!-- <q-item-label header>Administração</q-item-label> -->
              <template v-for="item in menuDataAdmin" :key="item.title">
                <EssentialLink v-if="exibirMenuBeta(item)"
                  v-bind="item" />
              </template>
            </div>
            <div v-if="userProfile === 'superadmin'">
              <!-- <q-separator spaced /> -->
              <div class="q-mb-lg"></div>
              <!-- <q-item-label header>Administração</q-item-label> -->
              <template v-for="item in menuDataSuperAdmin" :key="item.title">
                <EssentialLink v-if="exibirMenuBeta(item)"
                  v-bind="item" />
              </template>
            </div>
            <div style="height: 50px;"></div>
          </template>
        </q-list> 
      </q-scroll-area>
      <div class="absolute-bottom text-center row justify-start"
        :class="{ 'bg-grey-3': $q.dark.isActive }"
        style="height: 40px; margin-bottom: 10px">
        <q-toggle size="xl"
          keep-color
          dense
          class="text-bold q-ml-xs"
          :icon-color="$q.dark.isActive ? 'black' : 'white'"
          :model-value="$q.dark.isActive"
          :color="$q.dark.isActive ? 'grey-3' : 'black'"
          checked-icon="mdi-white-balance-sunny"
          unchecked-icon="mdi-weather-sunny"
          @update:model-value="val => $setConfigsUsuario({ isDark: val })">
          <q-tooltip content-class="text-body1 hide-scrollbar">
            {{ $q.dark.isActive ? $t('generalSupport.deactivate') : $t('generalSupport.activate') }} {{ $t('generalSupport.toggleDarkMode') }}
          </q-tooltip>
        </q-toggle>
      </div>
    </q-drawer>

    <q-page-container>
      <q-page class="q-pa-xs">
        <router-view />
      </q-page>
    </q-page-container>
    <audio ref="audioNotification" v-if="(userProfile === 'admin' || userProfile === 'user') && notificacaoAtivo === 'enabled'">
      <source :src="alertSound"
        type="audio/mp3">
    </audio>
    <ModalUsuario 
      :isProfile="true"
      v-model:modalUsuario="modalUsuario"
      v-model:usuarioEdicao="usuario" />

    <!-- Dialog de Tutoriais -->
    <q-dialog v-model="mostrarDialogTutoriais">
      <q-card style="min-width: 400px; max-width: 90vw;">
        <q-card-section>
          <div class="text-h6">{{ $t('mainLayout.tutoriais') }}</div>
        </q-card-section>
        <q-separator />
        <q-card-section style="max-height: 60vh; overflow-y: auto;">
          <q-list>
            <q-inner-loading :showing="tutoriaisLoading" />
            <div v-for="(tutorial, idx) in tutoriaisAtivos" :key="tutorial.id" class="tutorial-card q-mb-md" :class="{ 'tutorial-card-alt': idx % 2 === 1 }">
              <div class="row no-wrap items-center">
                <div class="tutorial-thumb">
                  <q-img
                    :src="tutorial.thumbnailUrl ? tutorial.thumbnailUrl : '/logo.png'"
                    ratio="1"
                    spinner-color="primary"
                  />
                </div>
                <div class="q-ml-lg">
                  <div class="text-subtitle1 text-bold">{{ tutorial.title }}</div>
                  <div class="text-caption q-mb-xs">{{ tutorial.description }}</div>
                  <div>
                    <q-icon name="mdi-play-circle-outline" color="primary" size="20px" class="q-mr-xs" />
                    <a :href="tutorial.link" target="_blank" style="color: var(--q-primary); text-decoration: underline;">{{ tutorial.link }}</a>
                  </div>
                </div>
              </div>
            </div>
            <q-item v-if="!tutoriaisLoading && tutoriaisAtivos.length === 0">
              <q-item-section>{{ $t('mainLayout.noTutorials') }}</q-item-section>
            </q-item>
          </q-list>
          <div v-if="tutoriaisTotal > 10" class="row justify-center q-mt-md">
          <q-pagination
            v-model="tutoriaisPage"
            :max="Math.ceil(tutoriaisTotal / 10)"
            color="primary"
            input
            @update:model-value="buscarTutoriaisAtivos"
          />
          </div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat color="primary" :label="$t('common.close')" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-layout>

    <div>
      <Webphone />

      <div v-if="isWebphoneVisible && usuario.sipEnabled" class="webphone-overlay"></div>
      <div :class="{ 'webphone-container': true, 'webphone-visible': isWebphoneVisible }">
        <div class="webphone-header">
          <div class="text-h6">{{ $t('mainLayout.webphone') }}</div>
          <q-btn icon="close" flat round dense @click="toggleWebphoneVisibility(false)" />
        </div>
        <div class="webphone-content" v-if="usuario.sipEnabled">
          <AsteriskWebphone @incoming-call="toggleWebphoneVisibility(true)" />
        </div>
      </div>

      <!-- <WebphoneCall /> -->
      <!-- <button v-if="this.usuario.profile === 'superadmin'" @click="aceitarTermos">Consultar términos</button> -->
      <ModalLayout v-if="this.usuario.profile === 'superadmin'" :show="showModal" @close="showModal = false" @aceitar="handleAcceptance"></ModalLayout>
    </div>
  </div>
</template>

<script>
// const userId = +localStorage.getItem('userId')
import { mapActions } from 'vuex';
import eventBus from 'src/utils/eventBus.js'
import cSystemVersion from '../components/cSystemVersion.vue'
import cPaymentStatus from '../components/cPaymentStatus.vue'
import cSystemLicense from '../components/cSystemLicense.vue'
import { ListarWhatsapps } from 'src/service/sessoesWhatsapp.js'
import EssentialLink from 'components/EssentialLink.vue'
import socketInitial from './socketInitial.js'
import alertSound from 'src/assets/sound.mp3'
import alertSound2 from 'src/assets/icq.mp3'
import { format } from 'date-fns'
import ModalUsuario from 'src/pages/usuarios/ModalUsuario.vue'
import { mapGetters } from 'vuex'
import { ListarConfiguracoes } from 'src/service/configuracoes.js'
import { RealizarLogout } from 'src/service/login.js'
import cStatusUsuario from '../components/cStatusUsuario.vue'
import cLanguageSelector from '../components/cLanguageSelector.vue'
import { socketIO } from 'src/utils/socket.js'
import { ConsultarTickets, AtualizarTodasMensagensNaoLidas } from 'src/service/tickets.js'
import ModalLayout from './ModalLayout.vue'
import { ListarTenantPorId, ListarTenantPorAsaas, AceitarTermos, ListarTermos, ListarTenantsPorTermos, ListarTenantsPorLicenca } from 'src/service/tenants.js'
import { listCountUnreadPrivateMessage, listCountUnreadGroupMessage, marcarTodasMensagensComoLidas } from 'src/service/chatPrivado.js'
import { TextoIndividual } from 'src/service/massa.js' 
import { ObterContatoPeloNumero, CriarContato } from 'src/service/contatos.js'
import { CriarTicket, VerificarTicketsAbertos, AtualizarTicket } from 'src/service/tickets.js'
import { listarNotificacoes, deletarNotificacao, marcarMensagemComoLida } from 'src/service/notificacao.js'
import { DadosUsuario, UpdateIsOnlineUsuario } from 'src/service/user.js'
import { DeletarTarefa, ListarTarefas, AlterarTarefa, CriarTarefa } from 'src/service/tarefas.js'
import Webphone from 'src/components/webphoneComponents/Webphone.vue'
import Cookies from 'js-cookie';
// import WebphoneCall from 'src/components/webphoneComponents/WebphoneCall.vue'
import PushNotifications from "src/components/PushNotifications.vue";
// import WebphoneModal from 'src/components/AsteriskWebphone/WebphoneModal.vue'
import AsteriskWebphone from 'src/components/AsteriskWebphone/AsteriskWebphone.vue'
// import WebphoneModal from 'src/components/FreeSwitchWebphone/WebphoneModal.vue'
import { ListarUsersPrivadosPorGrupo } from 'src/service/equipes.js'
import { ListarTutoriais } from 'src/service/tutorials.js'
import { ListarTicketsCompartilhadosPorUsuario } from 'src/service/ticketcompartilhado.js'
// const username = localStorage.getItem('username')
const socket = socketIO()

export default {
  name: 'MainLayout',
  mixins: [socketInitial],
  components: { EssentialLink, ModalUsuario, ModalLayout, cLanguageSelector, cStatusUsuario, cSystemVersion, cPaymentStatus, cSystemLicense, Webphone, PushNotifications, 
    // WebphoneModal,
    AsteriskWebphone,
    // WebphoneCall
  },
  beforeRouteLeave(to, from, next) {
    if (this.isCallActive) {
      this.$q.dialog({
        title: '¡Atención! ¿De verdad quieres salir de esta página?',
        message: `Salir de esta página resultará en la pérdida del control de la llamada.`,
        cancel: {
          label: this.$t('common.no'),
          color: 'primary',
          push: true
        },
        ok: {
          label: this.$t('common.yes'),
          color: 'negative',
          push: true
        },
        persistent: true
      })
      .onOk(() => {
        next();
      })
      .onCancel(() => {
        next(false);
      });
    } else {
      if (!this.isMounted) {
        next();
      } else {
        next();
      }
    }
  },
  data () {
    return {
      isLoadingMenu: true,
      visibilidadeMenu: [],
      asaasOn: 'disabled',
      license: 'enabled',
      usuarioDados: null,
      tenantDados: null,
      notificacaoAtivo: 'enabled',
      isNotViewAssignedTickets: 'disabled',
      showModalMensagensInternas: false,
      showModalTarefas: false,
      mensagensInternas: [],
      tarefas: [],
      convitesTickets: [],
      whatsappId: null,
      showModal: false,
      showModalMensagem: false,
      numero: '',
      mensagem: '',
      username: '',
      domainExperimentalsMenus: ['@'],
      miniState: true,
      userProfile: 'user',
      modalUsuario: false,
      usuario: {},
      alertSound,
      leftDrawerOpen: false,
      // menuData: objMenu,
      // menuDataAdmin: objMenuAdmin,
      // menuDataSupervisor: objMenuSupervisor,
      // menuDataSuperAdmin: objMenuSuperAdmin,
      menuData: null,
      menuDataAdmin: null,
      menuDataSupervisor: null,
      menuDataSuperAdmin: null,
      countTickets: 0,
      ticketsList: [],
      notificacaoInternaNaoLida: '',
      tutoriaisAtivos: [],
      mostrarDialogTutoriais: false,
      tutoriaisPage: 1,
      tutoriaisTotal: 0,
      tutoriaisLoading: false,
      loadingMensagem: false,
      // Sistema de gerenciamento de memória
      timers: [],
      eventListeners: [],
    }
  },
  computed: {
    ...mapGetters(['notifications', 'notifications_p', 'whatsapps', 'showMenu', 'chatFocado', 'notificacaoChatPrivado', 'notificacoesChat', 'notificacaoTicket', 'whatsapps']),
    ...mapGetters({
      uiFlags: 'webphone/getUIFlags',
      callInfo: 'webphone/getCallInfo',
      inboxes: 'whatsapps',
      wavoip: 'webphone/getWavoip',
      isWebphoneVisible: 'asterisk/getWebphoneVisible'
    }),
    isCallActive() {
      return ['offer', 'outcoming_calling', 'accept'].includes(this.callInfo.status);
    },
    isWabaType() {
      return this.whatsappId && this.whatsappId.type === 'waba';
    },
    cProblemaConexao () {
      const idx = this.whatsapps.findIndex(w =>
        ['PAIRING', 'TIMEOUT', 'DISCONNECTED'].includes(w.status)
      )
      return idx !== -1
    },
    cQrCode () {
      const idx = this.whatsapps.findIndex(
        w => w.status === 'qrcode' || w.status === 'DESTROYED'
      )
      return idx !== -1
    },
    cOpening () {
      const idx = this.whatsapps.findIndex(w => w.status === 'OPENING')
      return idx !== -1
    },
    cUsersApp () {
      return this.$store.state.usersApp
    },
    // cObjMenu () {
    //   if (this.cProblemaConexao) {
    //     return objMenu.map(menu => {
    //       if (menu.routeName === 'sessoes') {
    //         menu.color = 'negative'
    //       }
    //       return menu
    //     })
    //   }
    //   return objMenu
    // },
    cSessions() {
      return this.whatsapps.filter(w => ["whatsapp", "baileys", "meow", "evo", "zapi", "uazapi", "waba"].includes(w.type) && !w.isDeleted && w.status === 'CONNECTED');
    },
    cSessionsOptions() {
      if (!this.usuarioDados || !this.tenantDados || !this.cSessions) return [];

      const isAdminOrSuper = this.usuario.profile === 'admin' || 
        (this.usuario.profile === 'super' && this.tenantDados.supervisorAdmin === 'disabled');

      if (isAdminOrSuper) {
        return this.cSessions.map(w => ({ label: w.name, value: w.id, type: w.type }));
      } else {
        return this.cSessions
          .filter(w => this.usuarioDados.whatsappAllowed.some(wa => wa.id === w.id))
          .map(w => ({ label: w.name, value: w.id, type: w.type }));
      }
    },
    // cSessionsOptions() {
    //   return this.cSessions.map(w => ({ label: w.name, value: w.id, type: w.type }))
    // },
    unreadMessagesCount() {
      return this.mensagensInternas.filter(notificacao => !notificacao.isRead).length;
    },
    unreadTaks(){
      return this.tarefas.length;
    },
    convitesCount() {
      return this.convitesTickets ? this.convitesTickets.length : 0;
    }
  },
  watch: {
    getCallInfo(newInfo) {
      this.isCallActive = ['offer', 'outcoming_calling', 'accept'].includes(newInfo.status);
    },
    notificacaoChatPrivado: {
      async handler() {
        if (this.$route.fullPath.indexOf('atendimento-Interno') < 0 || !this.chatFocado.id || this.chatFocado.id !== this.notificacaoChatPrivado.senderId) {
          const usuario = JSON.parse(localStorage.getItem('usuario'))
          this.$store.commit('LIST_PRIVATE_NOTIFICATION', { action: 'update', data: 1 })
          if (this.notificacaoChatPrivado.groupId && this.notificacaoChatPrivado.senderId !== usuario.userId) {
            this.listarMensagensGrupoInterno()
            const grupoUser = await ListarUsersPrivadosPorGrupo(this.notificacaoChatPrivado.groupId)
            const isUserInGroup = grupoUser.data.some(user => user.userId === usuario.userId)
            try {
              if (JSON.parse(localStorage.getItem('recording'))) {
                return
              }
              // Só toca a notificação se o usuário estiver no grupo
              if (isUserInGroup) {
                const audio = new Audio(alertSound2)
                audio.play()
                // this.$refs.audioNotificationPlay.play()
              }
            } catch(e){
              
            }
            return
          }
          if ((!this.chatFocado || this.chatFocado?.id !== this.notificacaoChatPrivado.senderId) && this.notificacaoChatPrivado.senderId !== usuario.userId) {
            this.listarMensagensPrivadoInterno()
            try {
              if (JSON.parse(localStorage.getItem('recording'))) {
                return
              }
              const audio = new Audio(alertSound2)
              audio.play()
              // this.$refs.audioNotificationPlay.play()
            } catch(e){}
          }
          
        //   this.$store.commit('LIST_PRIVATE_NOTIFICATION', { action: 'update', data: 1 })
        //   this.listarMensagens()
        //   if (JSON.parse(localStorage.getItem('recording'))) {
        //     console.log('recording', JSON.parse(localStorage.getItem('recording')))
        //     return
        //   }
        //   const audio = new Audio(alertSound2)
        //   audio.play()
        }
      }
    },
    notificacaoTicket: {
      handler() {
        this.$nextTick(() => {
          if (JSON.parse(localStorage.getItem('recording'))) {
            console.log('recording', JSON.parse(localStorage.getItem('recording')))
            return
          }
          this.$refs.audioNotification.play()
        })
      }
    }
  },
  methods: {
    // Sistema de gerenciamento de memória
    addTimer(timerId) {
      this.timers.push(timerId);
    },
    addEventListener(element, event, handler, options = {}) {
      element.addEventListener(event, handler, options);
      this.eventListeners.push({ element, event, handler, options });
    },
    clearAllTimers() {
      this.timers.forEach(timerId => {
        clearTimeout(timerId);
        clearInterval(timerId);
      });
      this.timers = [];
    },
    removeAllEventListeners() {
      this.eventListeners.forEach(({ element, event, handler, options }) => {
        element.removeEventListener(event, handler, options);
      });
      this.eventListeners = [];
    },
    cleanupMemory() {
      this.clearAllTimers();
      this.removeAllEventListeners();
    },
    ...mapActions('webphone', ['updateWebphoneVisible']),
    ...mapActions('asterisk', ['toggleWebphoneVisibility']),
    reopenWebphone() {
      // console.log('this.callInfo.status',  this.callInfo)
      this.updateWebphoneVisible({ isOpen: true });
    },
    toggleWebphone() {
      this.toggleWebphoneVisibility(true);
    },
    ativarNotificacoesAutomaticamente() {
      if ('Notification' in window && Notification.permission === 'default') {
        this.addEventListener(document, 'click', this.solicitarPermissaoNotificacao, { once: true });
        this.addEventListener(document, 'keydown', this.solicitarPermissaoNotificacao, { once: true });
      }
    },
    solicitarPermissaoNotificacao(event) {
      Notification.requestPermission().then(() => {
        console.log('Permiso de notificación solicitado');
        this.removerListenersNotificacao();
      }).catch((error) => {
        console.error('Error al solicitar permiso de notificación:', error);
      });
    },
    removerListenersNotificacao() {
      console.log('Eliminando oyentes de notificaciones...');
      // Limpeza completa de memória
      this.cleanupMemory();
    },
    clearCookies() {
      localStorage.clear();
      sessionStorage.clear();
      const allCookies = Cookies.get();
      for (const cookie in allCookies) {
        Cookies.remove(cookie);
      }
      localStorage.clear();
      sessionStorage.clear();
      alert(this.$t('mainLayout.cookieWarning'));
      window.location.reload();
    },
    async carregarMensagensInternas() {
      try {
        const response = await listarNotificacoes({ userId: this.usuario.userId });
        this.mensagensInternas = response.data.notifications
          .filter(mensagem => mensagem.userId === this.usuario.userId)
          .map(mensagem => ({
            ...mensagem,
            isRead: mensagem.isRead || false
          }));
      } catch (error) {
        console.error(this.$t('scriptMainLayout.messagesLoadError'), error);
      }
    },
    async carregarTarefas() {
      try {
        const response = await ListarTarefas(); 
        this.tarefas = response?.data
          .filter(tarefa => tarefa.ownerId === this.usuario.userId && (tarefa.status === 'delayed' || tarefa.status === 'pending'))
          .map(tarefa => ({
            ...tarefa,
            // isRead: mensagem.isRead || false
          }));
      } catch (error) {
        console.error(this.$t('scriptMainLayout.tasksLoadError'), error);
      }
    },
    async carregarConvitesTickets() {
      try {
        const response = await ListarTicketsCompartilhadosPorUsuario();
        this.convitesTickets = response.data || [];
      } catch (error) {
        console.error('Error al cargar invitaciones de tickets:', error);
        this.convitesTickets = [];
      }
    },
    formatStatus(value) {
      const statusMap = {
        delayed: this.$t('scriptMainLayout.taskStatus.delayed'),
        pending: this.$t('scriptMainLayout.taskStatus.pending'),
        finished: this.$t('scriptMainLayout.taskStatus.finished'),
      };
      return statusMap[value] || value;
    },
    formatPriority(value) {
      const priorityMap = {
        high: this.$t('scriptMainLayout.priorityStatus.high'),
        medium: this.$t('scriptMainLayout.priorityStatus.medium'),
        low: this.$t('scriptMainLayout.priorityStatus.low'),
        none: this.$t('scriptMainLayout.priorityStatus.none'),
      };
      return priorityMap[value] || value;
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
      const day = date.getDate()?.toString().padStart(2, '0');
      const month = (date.getMonth() + 1)?.toString().padStart(2, '0');
      const year = date.getFullYear();
      return `${day}-${month}-${year}`;
    },
    async marcarComoLida(id) {
      try {
        const userId = this.usuario.userId;
        await marcarMensagemComoLida(id, userId);
        this.mensagensInternas = this.mensagensInternas.map(msg => 
          msg.id === id ? { ...msg, isRead: true } : msg
        );
      } catch (error) {
        console.error(this.$t('scriptMainLayout.markAsReadError'), error);
      }
    },
    async deletarMensagem(id) {
      try {
        await deletarNotificacao(id);
        this.mensagensInternas = this.mensagensInternas.filter(msg => msg.id !== id);
      } catch (error) {
        console.error(this.$t('scriptMainLayout.deleteMessageError'), error);
      }
    },
    async enviarMensagem() {
      this.loadingMensagem = true;
      
      try {
        if (this.isWabaType) {
          await this.enviarMensagemWaba();
        } else {
          await this.enviarMensagemNormal();
        }
      } catch (e) {
        this.$q.notify({
          color: 'negative',
          position: 'top',
          message: this.$t('scriptMainLayout.messageSendError', { error: e.data?.error || e.message }),
        });
      } finally {
        this.loadingMensagem = false;
        this.closeModal();
      }
    },

    async enviarMensagemNormal() {
      const data = {
        whatsappId: this.whatsappId.value,
        whatsappType: this.whatsappId.type,
        number: this.numero,
        message: this.mensagem,
      };
      
      await TextoIndividual(data);
      this.$q.notify({
        color: 'positive',
        position: 'top',
        message: this.$t('scriptMainLayout.messageSent', { number: this.numero }),
      });
    },

    async enviarMensagemWaba() {
      // Limpar mensagem para WABA
      this.mensagem = '';
      
      // Verificar se temos os dados necessários
      if (!this.usuario || !this.usuario.userId) {
        this.$q.notify({
          color: 'negative',
          position: 'top',
          message: this.$t('mainLayout.novo.userNotFound'),
        });
        return;
      }

      if (!this.whatsappId || !this.whatsappId.value) {
        this.$q.notify({
          color: 'negative',
          position: 'top',
          message: this.$t('mainLayout.novo.whatsappNotFound'),
        });
        return;
      }

      if (!this.numero) {
        this.$q.notify({
          color: 'negative',
          position: 'top',
          message: this.$t('mainLayout.novo.numberNotFound'),
        });
        return;
      }
      
      // 1. Verificar se contato existe
      let contato;
      const numeroLimpo = this.numero.replace(/\D/g, '');
      
      if (!numeroLimpo) {
        this.$q.notify({
          color: 'negative',
          position: 'top',
          message: this.$t('mainLayout.novo.numberInvalid'),
        });
        return;
      }
      
      try {
        const { data } = await ObterContatoPeloNumero(numeroLimpo);
        contato = data;
      } catch (error) {
        // Contato não existe, criar um novo
        const novoContato = {
          name: this.numero,
          number: this.numero,
        };
        const { data } = await CriarContato(novoContato);
        contato = data;
      }

      // 2. Verificar se já tem ticket aberto
      let ticketExistente;
      try {
        // Verificar se os IDs são válidos
        if (!contato.id || !this.whatsappId.value) {
          throw new Error(this.$t('mainLayout.novo.invalidIds'));
        }
        
        const response = await VerificarTicketsAbertos(contato.id, this.whatsappId.value);
        
        // Verificar se a resposta contém um ticket válido
        if (response.data && response.data.id && response.data.contactId && response.data.status) {
          ticketExistente = response.data;
        } else {
          ticketExistente = null;
        }
      } catch (error) {
        
        // Se o erro for 409 (Conflict), significa que já existe um ticket
        if (error.status === 409 && error.data) {
          // Verificar se o ticket está na propriedade 'ticket' ou se precisa fazer parse do 'error'
          if (error.data.ticket) {
            ticketExistente = error.data.ticket;
          } else if (error.data.error) {
            const ticketAtual = JSON.parse(error.data.error);
            ticketExistente = ticketAtual;
          }
        } else {
          ticketExistente = null;
        }
      }

      if (ticketExistente && ticketExistente.id) {
        // Se o status for pending, atualizar para open antes de rotear
        const updateData = {}
        const needsStatusUpdate = ticketExistente.status === 'pending'
        
        if (needsStatusUpdate) {
          updateData.status = 'open'
          updateData.userId = this.usuario.userId
          ticketExistente.status = 'open'
          ticketExistente.userId = this.usuario.userId
        }
        
        if (ticketExistente.whatsappId === null) {
          updateData.whatsapp = channelId
        }
        
        // Atualizar ticket se houver mudanças
        if (Object.keys(updateData).length > 0) {
          await AtualizarTicket(ticketExistente.id, updateData)
          
          // Aguardar 250ms para dar tempo de salvar no banco
          await new Promise(resolve => setTimeout(resolve, 250))
        }
        // Abrir ticket existente usando o método abrirAtendimentoExistente
        this.abrirAtendimentoExistente(contato.name, ticketExistente);
      } else {
        
        // Verificar se todos os IDs são válidos
        if (!contato.id || !this.whatsappId.value || !this.usuario.userId) {
          this.$q.notify({
            color: 'negative',
            position: 'top',
            message: this.$t('mainLayout.novo.invalidData'),
          });
          return;
        }
        
        const ticketData = {
          contactId: contato.id,
          isActiveDemand: true,
          userId: this.usuario.userId,
          channel: this.whatsappId.type, // Usar o tipo do WhatsApp selecionado (waba)
          channelId: this.whatsappId.value,
          status: 'open'
        };
        
        const { data: ticket } = await CriarTicket(ticketData);

        if (ticket && ticket.id) {
          await this.$store.dispatch('AbrirChatMensagens', ticket);
          this.$router.push({ name: 'chat', params: { ticketId: ticket.id } });
          this.$q.notify({
            color: 'positive',
            position: 'top',
            message: this.$t('mainLayout.novo.ticketCreated', { contatoName: contato.name, ticketId: ticket.id }),
          });
        } else {
          this.$q.notify({
            color: 'negative',
            position: 'top',
            message: this.$t('mainLayout.novo.ticketCreatedError'),
          });
        }
      }
    },
    closeModal() {
      this.showModalMensagem = false;
      this.resetFields();
    },
    resetFields() {
      this.numero = '';
      this.mensagem = '';
      this.whatsappId = null;
    },
    async listarMensagens() {
      try {
        const privateMessageData = await listCountUnreadPrivateMessage(this.usuario.userId);
        const groupMessageData = await listCountUnreadGroupMessage(this.usuario.userId);
        this.notificacaoInternaNaoLida = privateMessageData.data.count + groupMessageData.data.count.count
      } catch(e){
      }
    },
    async listarMensagensGrupoInterno() {
      try {
        const groupMessageData = await listCountUnreadGroupMessage(this.usuario.userId);
        this.notificacaoInternaNaoLida = groupMessageData.data.count.count
      } catch(e){
      }
    },
    async listarMensagensPrivadoInterno() {
      try {
        const privateMessageData = await listCountUnreadPrivateMessage(this.usuario.userId);
        this.notificacaoInternaNaoLida = privateMessageData.data.count
      } catch(e){
      }
    },
    exibirMenuBeta (itemMenu) {
      if (!itemMenu?.isBeta) return true
      for (const domain of this.domainExperimentalsMenus) {
        if (this.usuario.email.indexOf(domain) !== -1) return true
      }
      return false
    },
    async listarWhatsapps () {
      const { data } = await ListarWhatsapps()
      this.$store.commit('LOAD_WHATSAPPS', data)
    },
    handlerNotifications (data) {
      const { message, contact, ticket } = data

      const options = {
        // body: `${message.body} - ${format(new Date(), 'HH:mm')}`,
        body: this.$t('scriptMainLayout.notifications.notificationBody', {
          messageBody: message.body,
          time: format(new Date(), 'HH:mm'),
        }),
        icon: contact.profilePicUrl,
        tag: ticket.id,
        renotify: true
      }

      const notification = new Notification(
        this.$t('scriptMainLayout.notifications.messageFrom', { contactName: contact.name }),
        // `Mensagem de ${contact.name}`,
        options
      )

      notification.onclick = e => {
        e.preventDefault()
        window.focus()
        this.$store.dispatch('AbrirChatMensagens', ticket)
        this.$router.push({ name: 'atendimento' })

        // history.push(`/tickets/${ticket.id}`);
      }
      this.$nextTick(() => {
        // utilizar refs do layout
        if (JSON.parse(localStorage.getItem('recording'))) {
          console.log('recording', JSON.parse(localStorage.getItem('recording')))
          return
        }
        this.$refs.audioNotification.play()
      })
    },
    async abrirModalUsuario () {
      this.modalUsuario = true
    },
    async efetuarLogout () {
      try {
        await RealizarLogout(this.usuario)
        localStorage.removeItem('dashboardChartPanels');
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        localStorage.removeItem('profile')
        localStorage.removeItem('userId')
        localStorage.removeItem('queues')
        localStorage.removeItem('usuario')
        localStorage.removeItem('filtrosAtendimento')
        localStorage.clear();
        sessionStorage.clear();
        this.$router.go({ name: 'login', replace: true })
      } catch (error) {
        this.$notificarErro(this.$t('scriptMainLayout.logoutError'), error);
      }
    },
    async listarConfiguracoes () {
      const { data } = await ListarConfiguracoes()
      localStorage.setItem('configuracoes', JSON.stringify(data))
      const conf = data.find(c => c.key === 'NotViewAssignedTickets');
      this.isNotViewAssignedTickets = conf?.value;
      const notificationSilenced = data.find(config => config.key === 'notificationSilenced')
      this.notificacaoAtivo = notificationSilenced?.value
    },
    conectarSocket (usuario) {
      socket.on(`${usuario.tenantId}:chat:updateOnlineBubbles`, data => {
        this.$store.commit('SET_USERS_APP', data)
      })
    },
    async atualizarUsuario () {
      this.usuario = JSON.parse(localStorage.getItem('usuario'))
      const { data } = await DadosUsuario(this.usuario.userId)
      this.usuarioDados = data;
      localStorage.setItem(`menuPermissions`, JSON.stringify(data?.menuPermissions));
      this.username = data?.name
      const menuPermissions = JSON.parse(localStorage.getItem('menuPermissions'))
      // console.log('MenuPermissions_Data', data?.menuPermissions)
      // console.log('MenuPermissions_Cache', menuPermissions)
      localStorage.setItem('profile', data?.profile)
      const usuarioAtual = JSON.parse(localStorage.getItem('usuario'))
      const usuarioAtualizado = {
        ...usuarioAtual,
        sipEnabled: data.sipEnabled,
        sipUsername: data.sipUsername,
        sipPassword: data.sipPassword,
        sipServer: data.sipServer,
        sipPort: data.sipPort,
        sipTransport: data.sipTransport
      }
      localStorage.setItem('usuario', JSON.stringify(usuarioAtualizado))
      this.usuario = usuarioAtualizado

      if (!data.isOnline) {
        socket.emit(`${this.usuario.tenantId}:setUserIdle`)
      }
      if (data.isOnline) {
        socket.emit(`${this.usuario.tenantId}:setUserActive`)
      }
      // Atualizar menu após carregar dados do usuário (para verificar restrictedUser)
      this.initializeMenu();
    },
    async dadosTenant () {
      if(this.usuario.profile === "superadmin") return

      const cachedData = localStorage.getItem('tenantData')
      const cachedTimestamp = localStorage.getItem('tenantDataTimestamp')
      const now = new Date().getTime()
      const CACHE_DURATION = 5 * 60 * 1000

      if (cachedData && cachedTimestamp && (now - parseInt(cachedTimestamp)) < CACHE_DURATION) {
        const data = JSON.parse(cachedData)
        this.tenantDados = data[0]
        this.license = data[0]?.tenantLicense
        this.asaasOn = data[0]?.asaas
        this.visibilidadeMenu = data[0]?.menuVisibility?.[0] || {}
        localStorage.setItem('ticketsRain', JSON.stringify(data[0]?.ticketsRain))
        localStorage.setItem('menuVisibility', JSON.stringify(this.visibilidadeMenu))
        localStorage.setItem('forceReason', JSON.stringify(data[0]?.forceReason) || 'disabled')
      } else {
        const { data } = await ListarTenantPorId(this.usuario.tenantId)
        this.tenantDados = data[0]
        this.license = data[0]?.tenantLicense
        this.asaasOn = data[0]?.asaas
        this.visibilidadeMenu = data[0]?.menuVisibility?.[0] || {}
        localStorage.setItem('ticketsRain', JSON.stringify(data[0]?.ticketsRain))
        localStorage.setItem('menuVisibility', JSON.stringify(this.visibilidadeMenu))
        localStorage.setItem('forceReason', JSON.stringify(data[0]?.forceReason) || 'disabled')
        localStorage.setItem('postmanLink', JSON.stringify(data[0]?.postmanLink) || 'https://documenter.getpostman.com/view/48685409/2sB3QDwD7N')
        localStorage.setItem('tenantData', JSON.stringify(data))
        localStorage.setItem('tenantDataTimestamp', now?.toString())
      }

      if (this.asaasOn === 'enabled') {
        const objMenuBloqueioVar = [
          {
            title: this.$t('menuBloqueio.configuracoes.title'),
            caption: this.$t('menuBloqueio.configuracoes.caption'),
            icon: 'mdi-cog',
            routeName: 'configuracoesbloqueio'
          }
        ]
        try {
          const { data } = await ListarTenantPorAsaas(this.usuario.tenantId)
          if (data?.data?.some(item => item.status === 'OVERDUE')) {
            this.menuData = objMenuBloqueioVar
            this.menuDataAdmin = []
            this.$q.notify({
              color: 'warning',
              position: 'top',
              message: this.$t('scriptMainLayout.adminContact'),
            })
          }
        } catch(e) {
          console.error(this.$t('scriptMainLayout.fetchMessagesError'), e)
        }
      }
    },
    async emailTenant(){
      const { data } = await ListarTenantsPorLicenca()
      const tenant = data.find(tenant => tenant.tenantId === this.usuario.tenantId);
      // const hasntLicense = tenant && (!tenant.tenantEmail);
      // if (hasntLicense && this.usuario.profile !== 'superadmin') {
      //   // this.$q.notify({
      //   //   type: 'warning',
      //   //   message: 'Solicite ao Super Administrador a validação do email.',
      //   //   progress: true,
      //   //   actions: [{ icon: 'close', round: true, color: 'white' }],
      //   // });
      // }
      const tenantWithoutLicense = data.find(tenant => !tenant.tenantLicense || tenant.tenantLicense !== 'enabled');
      if (tenantWithoutLicense && this.usuario.profile === 'superadmin') {
        // console.log(console.log(`Tenant com licença inválida: ${tenantWithoutLicense?.tenantId}`));
        // this.$q.notify({
        //   type: 'negative',
        //   message: 'Solicite ao Super Administrador a validação do email ' + tenantWithoutLicense.tenantId + '.',
        //   progress: true,
        //   actions: [{ icon: 'close', round: true, color: 'white' }],
        // });
      }
    },
    async aceitarTermos(){
      const { data } = await ListarTermos(); 
      // Verifica se o usuário atual precisa aceitar os termos
      const hasFalseAcceptTerms = data && !data.acceptTerms;
      if (hasFalseAcceptTerms && this.usuario.profile !== 'superadmin') {
        this.$q.notify({
          type: 'negative',
          message: this.$t('generalSupportScript.termsAcceptanceNotification'),
          progress: true,
          actions: [{ icon: 'close', round: true, color: 'white' }],
        });
        this.showModal = true;
      }

      // Verifica se há termos não aceitos para superadmin
      if (!data.acceptTerms && this.usuario.profile === 'superadmin') {
        console.log(`${this.$t('generalSupportScript.tenantWithFalseAcceptTermsNotification')}: ${this.usuario.tenantId}`);
        this.$q.notify({
          type: 'negative',
          message: `${this.$t('generalSupportScript.tenantWithFalseAcceptTermsNotification')} ${this.usuario.tenantId}`,
          progress: true,
          actions: [{ icon: 'close', round: true, color: 'white' }],
        });
        this.showModal = true;
      }

      if(this.usuario.profile === 'superadmin'){
        await this.aceitarTermosTenant()
        
      }
    },
    async aceitarTermosTenant(){
      const { data } = await ListarTenantsPorTermos();
      const tenant = data.find(tenant => tenant.tenantId === this.usuario.tenantId);
      const hasFalseAcceptTerms = tenant && !tenant.acceptTerms;
      if (hasFalseAcceptTerms && this.usuario.profile !== 'superadmin') {
        this.$q.notify({
          type: 'negative',
          message:  this.$t('scriptMainLayout.acceptTermsError'),
          progress: true,
          actions: [{ icon: 'close', round: true, color: 'white' }],
        });
        this.showModal = true;
      }
      const tenantWithFalseAcceptTerms = data.find(tenant => !tenant.acceptTerms);
      if (tenantWithFalseAcceptTerms  && this.usuario.profile === 'superadmin') {
        console.log(
          `${this.$t('scriptMainLayout.acceptTermsError')} ${tenantWithFalseAcceptTerms.tenantId}`
        );
        this.$q.notify({
          type: 'negative',
          message: tenantWithFalseAcceptTerms
          ? 'Solicitar al superadministrador que acepte las condiciones de uso de la empresa ' + tenantWithFalseAcceptTerms.tenantId + '.'
          : this.$t('scriptMainLayout.acceptTermsError'),
          progress: true,
          actions: [{ icon: 'close', round: true, color: 'white' }],
        });
        this.showModal = true;
      }
    },
    async handleAcceptance() {
      try {
        await AceitarTermos({
          id: this.usuario.tenantId,
          acceptTerms: true,
        })
        this.$q.notify({
          type: 'positive',
          message: this.$t('scriptMainLayout.acceptTermsSuccessForDomain', { domain: process.env.URL_API }),
          progress: true,
          actions: [{ icon: 'close', round: true, color: 'white' }],
        })
        window.location.reload();
      } catch (error) {
        console.error('error - AlterarConfiguracao', error)
        this.$notificarErro(this.$t('common.notifications.error'), error)
      } 
    },
    async consultarTickets () {
      const params = {
        searchParam: '',
        pageNumber: 1,
        status: ['open', 'pending'],
        showAll: false,
        count: null,
        queuesIds: [],
        whatsappIds: [],
        selectedUser: [],
        withUnreadMessages: true,
        isNotAssignedUser: false,
        includeNotQueueDefined: true
        // date: new Date(),
      }
      try {
        const { data } = await ConsultarTickets(params)
        this.countTickets = data.count
        if(this.usuario.profile === 'admin'){
          const openTickets = data.tickets.filter(ticket => ticket.status === 'open' && ticket.unreadMessages > 0)
          const openCount = openTickets?.length
          this.$store.commit('UPDATE_NOTIFICATIONS', { ...data, tickets: openTickets, count: openCount })
          const pendingTickets = data.tickets.filter(ticket => ticket.status === 'pending')
          const pendingCount = pendingTickets?.length
          this.$store.commit('UPDATE_NOTIFICATIONS_P', { ...data, tickets: pendingTickets, count: pendingCount })
        }
        else {
          const openTickets = data.tickets.filter(ticket => ticket.status === 'open' && ticket.userId === this.usuario.userId && ticket.unreadMessages > 0)
          const openCount = openTickets?.length
          this.$store.commit('UPDATE_NOTIFICATIONS', { ...data, tickets: openTickets, count: openCount })
          const pendingTickets = data.tickets.filter(ticket => ticket.status === 'pending' && ticket.userId === this.usuario.userId)
          const pendingCount = pendingTickets?.length
          this.$store.commit('UPDATE_NOTIFICATIONS_P', { ...data, tickets: pendingTickets, count: pendingCount })
        }
        // --------------------------------------------------------------------------------------------------------------
        // const openTickets = data.tickets.filter(ticket => ticket.status === 'open')
        // this.$store.commit('UPDATE_NOTIFICATIONS', { ...data, tickets: openTickets })
        // const pendingTickets = data.tickets.filter(ticket => ticket.status === 'pending')
        // const pendingCount = pendingTickets?.length
        // this.$store.commit('UPDATE_NOTIFICATIONS_P', { ...data, tickets: pendingTickets })
        // --------------------------------------------------------------------------------------------------------------
        // setTimeout(() => {
        //   this.$store.commit('UPDATE_NOTIFICATIONS', { ...data, tickets: openTickets })
        // }, 500);
        // setTimeout(() => {
        //   this.$store.commit('UPDATE_NOTIFICATIONS_P', { ...data, tickets: pendingTickets })
        // }, 500)
        // this.$store.commit('SET_HAS_MORE', data.hasMore)
        // console.log(this.notifications)
      } catch (err) {
        this.$notificarErro(this.$t('common.notifications.error'), err)
        console.error(err)
      }
      // const params2 = {
      //   searchParam: '',
      //   pageNumber: 1,
      //   status: ['pending'],
      //   showAll: false,
      //   count: null,
      //   queuesIds: [],
      //   whatsappIds: [],
      //   selectedUser: [],
      //   withUnreadMessages: false,
      //   isNotAssignedUser: false,
      //   includeNotQueueDefined: true
      //   // date: new Date(),
      // }
      // try {
      //   const { data } = await ConsultarTickets(params2)
      //   this.countTickets = data.count // count total de tickets no status
      //   // this.ticketsList = data.tickets
      //   // console.log(data)
      //   this.$store.commit('UPDATE_NOTIFICATIONS_P', data)
      //   setTimeout(() => {
      //     this.$store.commit('UPDATE_NOTIFICATIONS_P', data)
      //   }, 500);
      //   // this.$store.commit('SET_HAS_MORE', data.hasMore)
      //   // console.log(this.notifications)
      // } catch (err) {
      //   this.$notificarErro(this.$t('common.notifications.error'), err)
      //   console.error(err)
      // }
    },
    abrirChatContato (ticket) {
      // caso esteja em um tamanho mobile, fechar a drawer dos contatos
      if (this.$q.screen.lt.md && ticket.status !== 'pending') {
        eventBus.emit('infor-cabecalo-chat:acao-menu')
      }
      if (!(ticket.status !== 'pending' && (ticket.id !== this.$store.getters.ticketFocado.id || this.$route.name !== 'chat'))) return
      this.$store.commit('SET_HAS_MORE', true)
      this.$store.dispatch('AbrirChatMensagens', ticket)
    },
    abrirAtendimentoExistente (contato, ticket) {
      if(ticket.isGroup){
        this.$q.notify({
          color: 'positive',
          position: 'top',
          message: this.$t('scriptMainLayout.groupTabAccess'),
        });
        return
      }
      if(this.isNotViewAssignedTickets === 'enabled' && this.userProfile === 'user'){
        this.$q.dialog({
          title: this.$t('common.attention'),
          message: this.$t('scriptMainLayout.contactHasOngoingTicket', { contact: contato }) +
          ' ' + this.$t('scriptMainLayout.adminCanAssign'),
          // mensaje: `${contato} Hay una solicitud de servicio en curso. Solo un administrador puede asignársela.`,
          ok: {
            label: this.$t('common.ok'),
            color: 'negative',
            push: true
          },
          persistent: true
        })
        this.loading = false
        return
      }
      this.$q.dialog({
        title: this.$t('common.attention'),
        message: this.$t('scriptMainLayout.openTicketConfirmation', {
          contact: contato,
          ticketId: ticket.id,
          queueId: ticket.queueId || this.$t('scriptMainLayout.noQueue'),
        }),
        // mensaje: `${contato} tiene una solicitud de servicio en curso (Solicitud de servicio: ${ticket.id} - departamento: ${ticket.queueId || 'sin departamento'}). ¿Desea abrir un ticket de soporte?`,
        cancel: {
          label: this.$t('common.no'),
          color: 'primary',
          push: true
        },
        ok: {
          label: this.$t('common.yes'),
          color: 'negative',
          push: true
        },
        persistent: true
      }).onOk(async () => {
        try {
          this.abrirChatContato(ticket)
        } catch (error) {
          this.$notificarErro(
            this.$t('scriptMainLayout.tokenUpdateError'),
            error
          )
        }
      })
    },
    initializeMenu(){
      const isVisible = (routeName) => {
        // Se restrictedUser estiver enabled, ocultar o menu de contatos
        if (routeName === 'contatos' && this.usuarioDados?.restrictedUser === 'enabled') {
          return false;
        }
        if (routeName === 'funil') {
          return this.visibilidadeMenu?.['kanban'] !== false;
        }
        return this.visibilidadeMenu?.[routeName] !== false;
      };

      this.menuData = [
        {
          title: this.$t('menu.dashboard.title'),
          caption: this.$t('menu.dashboard.caption'),
          icon: 'mdi-home',
          routeName: 'home-dashboard'
        },
        {
          title: this.$t('menu.atendimentos.title'),
          caption: this.$t('menu.atendimentos.caption'),
          icon: 'mdi-forum-outline',
          routeName: 'atendimento'
        },
        {
          title: this.$t('menu.contatos.title'),
          caption: this.$t('menu.contatos.caption'),
          icon: 'mdi-card-account-mail',
          routeName: 'contatos'
        },
        {
          title: this.$t('menu.chat.title'),
          caption: this.$t('menu.chat.caption'),
          icon: 'mdi-forum',
          routeName: 'chat-privado'
        },
        {
          title: this.$t('menu.funil.title'),
          caption: this.$t('menu.funil.caption'),
          icon: 'mdi-filter-variant',
          routeName: 'funil'
        },
        {
          title: this.$t('menu.kanban.title'),
          caption: this.$t('menu.kanban.caption'),
          icon: 'mdi-developer-board',
          routeName: 'kanban'
        },
        {
          title: this.$t('menu.tarefas.title'),
          caption: this.$t('menu.tarefas.caption'),
          icon: 'mdi-clipboard-list-outline',
          routeName: 'tarefas'
        },
        {
          title: this.$t('menu.mensagensRapidas.title'),
          caption: this.$t('menu.mensagensRapidas.caption'),
          icon: 'mdi-reply-all-outline',
          routeName: 'mensagens-rapidas'
        },
        {
          title: this.$t('menu.disparoMassa.title'),
          caption: this.$t('menu.disparoMassa.caption'),
          icon: 'mdi-rocket',
          routeName: 'massa'
        },
        {
          title: this.$t('menuSupervisor.campanhas.title'),
          caption: this.$t('menuSupervisor.campanhas.caption'),
          icon: 'mdi-message-bookmark-outline',
          routeName: 'campanhas'
        },
        {
          title: this.$t('menu.grupos.title'),
          caption: this.$t('menu.grupos.caption'),
          icon: 'mdi-hexagon-multiple-outline',
          routeName: 'grupo'
        }
      ].filter(item => isVisible(item.routeName));;

      this.menuDataSupervisor = [
        {
          title: this.$t('menuSupervisor.canais.title'),
          caption: this.$t('menuSupervisor.canais.caption'),
          icon: 'mdi-cellphone-wireless',
          routeName: 'sessoes'
        },
        {
          title: this.$t('menuSupervisor.relatorios.title'),
          caption: this.$t('menuSupervisor.relatorios.caption'),
          icon: 'mdi-file-chart',
          routeName: 'relatorios'
        },
        {
          title: this.$t('menuSupervisor.filas.title'),
          caption: this.$t('menuSupervisor.filas.caption'),
          icon: 'mdi-arrow-decision-outline',
          routeName: 'filas'
        },
        {
          title: this.$t('menuSupervisor.equipes.title'),
          caption: this.$t('menuSupervisor.equipes.caption'),
          icon: 'mdi-account-network-outline',
          routeName: 'equipes'
        },
        // {
        //   title: this.$t('menuSupervisor.mensagensRapidas.title'),
        //   caption: this.$t('menuSupervisor.mensagensRapidas.caption'),
        //   icon: 'mdi-reply-all-outline',
        //   routeName: 'mensagens-rapidas'
        // },
        {
          title: this.$t('menuSupervisor.chatbot.title'),
          caption: this.$t('menuSupervisor.chatbot.caption'),
          icon: 'mdi-robot',
          routeName: 'chat-flow'
        },
        {
          title: this.$t('menuSupervisor.agendamentos.title'),
          caption: this.$t('menuSupervisor.agendamentos.caption'),
          icon: 'mdi-message-text-clock-outline',
          routeName: 'agendamentos'
        },
        {
          title: this.$t('menuSupervisor.fechamento.title'),
          caption: this.$t('menuSupervisor.fechamento.caption'),
          icon: 'mdi-message-arrow-right-outline',
          routeName: 'fechamento'
        },
        {
          title: this.$t('menuSupervisor.etiquetas.title'),
          caption: this.$t('menuSupervisor.etiquetas.caption'),
          icon: 'mdi-tag-text',
          routeName: 'etiquetas'
        },
        {
          title: this.$t('menuSupervisor.notas.title'),
          caption: this.$t('menuSupervisor.notas.caption'),
          icon: 'mdi-clipboard-text-multiple-outline',
          routeName: 'notas'
        },
        {
          title: this.$t('menuSupervisor.protocolos.title'),
          caption: this.$t('menuSupervisor.protocolos.caption'),
          icon: 'mdi-timeline-text-outline',
          routeName: 'protocolos'
        },
        {
          title: this.$t('menuSupervisor.avaliacoes.title'),
          caption: this.$t('menuSupervisor.avaliacoes.caption'),
          icon: 'mdi-account-star-outline',
          routeName: 'avaliacoes'
        },
        {
          title: this.$t('menuSupervisor.horarioAtendimento.title'),
          caption: this.$t('menuSupervisor.horarioAtendimento.caption'),
          icon: 'mdi-calendar-clock',
          routeName: 'horarioAtendimento'
        },
        // {
        //   title: this.$t('menuSupervisor.campanhas.title'),
        //   caption: this.$t('menuSupervisor.campanhas.caption'),
        //   icon: 'mdi-message-bookmark-outline',
        //   routeName: 'campanhas'
        // }
      ].filter(item => isVisible(item.routeName));;

      this.menuDataAdmin = [
        {
          title: this.$t('menuAdmin.canais.title'),
          caption: this.$t('menuAdmin.canais.caption'),
          icon: 'mdi-cellphone-wireless',
          routeName: 'sessoes',
          // isVisible: false
        },
        {
          title: this.$t('menuAdmin.painelAtendimentos.title'),
          caption: this.$t('menuAdmin.painelAtendimentos.caption'),
          icon: 'mdi-view-dashboard-variant',
          routeName: 'painel-atendimentos'
        },
        {
          title: this.$t('menuAdmin.relatorios.title'),
          caption: this.$t('menuAdmin.relatorios.caption'),
          icon: 'mdi-file-chart',
          routeName: 'relatorios'
        },
        {
          title: this.$t('menuAdmin.usuarios.title'),
          caption: this.$t('menuAdmin.usuarios.caption'),
          icon: 'mdi-account-group',
          routeName: 'usuarios'
        },
        {
          title: this.$t('menuAdmin.filas.title'),
          caption: this.$t('menuAdmin.filas.caption'),
          icon: 'mdi-arrow-decision-outline',
          routeName: 'filas'
        },
        {
          title: this.$t('menuAdmin.equipes.title'),
          caption: this.$t('menuAdmin.equipes.caption'),
          icon: 'mdi-account-network-outline',
          routeName: 'equipes'
        },
        // {
        //   title: this.$t('menuAdmin.mensagensRapidas.title'),
        //   caption: this.$t('menuAdmin.mensagensRapidas.caption'),
        //   icon: 'mdi-reply-all-outline',
        //   routeName: 'mensagens-rapidas'
        // },
        {
          title: this.$t('menuAdmin.chatbot.title'),
          caption: this.$t('menuAdmin.chatbot.caption'),
          icon: 'mdi-robot',
          routeName: 'chat-flow'
        },
        {
          title: this.$t('menuAdmin.agendamentos.title'),
          caption: this.$t('menuAdmin.agendamentos.caption'),
          icon: 'mdi-message-text-clock-outline',
          routeName: 'agendamentos'
        },
        {
          title: this.$t('menuAdmin.aniversarios.title'),
          caption: this.$t('menuAdmin.aniversarios.caption'),
          icon: 'mdi-gift-outline',
          routeName: 'aniversarios'
        },
        {
          title: this.$t('menuAdmin.fechamento.title'),
          caption: this.$t('menuAdmin.fechamento.caption'),
          icon: 'mdi-message-arrow-right-outline',
          routeName: 'fechamento'
        },
        {
          title: this.$t('menuAdmin.etiquetas.title'),
          caption: this.$t('menuAdmin.etiquetas.caption'),
          icon: 'mdi-tag-text',
          routeName: 'etiquetas'
        },
        {
          title: this.$t('menuAdmin.notas.title'),
          caption: this.$t('menuAdmin.notas.caption'),
          icon: 'mdi-clipboard-text-multiple-outline',
          routeName: 'notas'
        },
        {
          title: this.$t('menuAdmin.wavoip.title'),
          caption: this.$t('menuAdmin.wavoip.caption'),
          icon: 'mdi-phone-in-talk-outline',
          routeName: 'wavoip'
        },
        {
          title: this.$t('menuAdmin.logligacao.title'),
          caption: this.$t('menuAdmin.logligacao.caption'),
          icon: 'mdi-phone-in-talk',
          routeName: 'logligacao'
        },
        {
          title: this.$t('menuAdmin.protocolos.title'),
          caption: this.$t('menuAdmin.protocolos.caption'),
          icon: 'mdi-timeline-text-outline',
          routeName: 'protocolos'
        },
        {
          title: this.$t('menuAdmin.avaliacoes.title'),
          caption: this.$t('menuAdmin.avaliacoes.caption'),
          icon: 'mdi-account-star-outline',
          routeName: 'avaliacoes'
        },
        {
          title: this.$t('menuAdmin.horarioAtendimento.title'),
          caption: this.$t('menuAdmin.horarioAtendimento.caption'),
          icon: 'mdi-calendar-clock',
          routeName: 'horarioAtendimento'
        },
        // {
        //   title: this.$t('menuAdmin.campanhas.title'),
        //   caption: this.$t('menuAdmin.campanhas.caption'),
        //   icon: 'mdi-message-bookmark-outline',
        //   routeName: 'campanhas'
        // },
        {
          title: this.$t('menuAdmin.api.title'),
          caption: this.$t('menuAdmin.api.caption'),
          icon: 'mdi-call-split',
          routeName: 'api-service'
        },
        {
          title: this.$t('menuAdmin.configuracoes.title'),
          caption: this.$t('menuAdmin.configuracoes.caption'),
          icon: 'mdi-cog',
          routeName: 'configuracoes'
        }
      ].filter(item => isVisible(item.routeName));;

      this.menuDataSuperAdmin = [
        {
          title: this.$t('menuSuperAdmin.assinatura.title'),
          caption: this.$t('menuSuperAdmin.assinatura.caption'),
          icon: 'mdi-license',
          routeName: 'assinatura'
        },
        {
          title: this.$t('menuSuperAdmin.tenants.title'),
          caption: this.$t('menuSuperAdmin.tenants.caption'),
          icon: 'mdi-office-building',
          routeName: 'tenants'
        },
        {
          title: this.$t('menuSuperAdmin.usuarios.title'),
          caption: this.$t('menuSuperAdmin.usuarios.caption'),
          icon: 'mdi-account-group',
          routeName: 'usuariotenants'
        },
        {
          title: this.$t('menuSuperAdmin.email.title'),
          caption: this.$t('menuSuperAdmin.email.caption'),
          icon: 'mdi-email',
          routeName: 'configuracoesTenant'
        },
        {
          title: this.$t('menuSuperAdmin.planos.title'),
          caption: this.$t('menuSuperAdmin.planos.caption'),
          icon: 'mdi-bank-outline',
          routeName: 'planos'
        },
        {
          title: this.$t('menuSuperAdmin.pagamentos.title'),
          caption: this.$t('menuSuperAdmin.pagamentos.caption'),
          icon: 'mdi-credit-card-multiple-outline',
          routeName: 'pagamentostenants'
        },
        {
          title: this.$t('menuSuperAdmin.canais.title'),
          caption: this.$t('menuSuperAdmin.canais.caption'),
          icon: 'mdi-cellphone-wireless',
          routeName: 'sessoestenants'
        },
        {
          title: this.$t('menuSuperAdmin.api.title'),
          caption: this.$t('menuSuperAdmin.api.caption'),
          icon: 'mdi-call-split',
          routeName: 'tenantApi'
        },
        // {
        //   title: this.$t('menuSuperAdmin.atualizar.title'),
        //   caption: this.$t('menuSuperAdmin.atualizar.caption'),
        //   icon: 'mdi-update',
        //   routeName: 'atualizar'
        // },
        {
          title: this.$t('menuSuperAdmin.customizar.title'),
          caption: this.$t('menuSuperAdmin.customizar.caption'),
          icon: 'mdi-format-paint',
          routeName: 'customizar'
        },
        {
          title: this.$t('menuSuperAdmin.notificacao.title'),
          caption: this.$t('menuSuperAdmin.notificacao.caption'),
          icon: 'mdi-message-text-outline',
          routeName: 'notificacao'
        },
        {
          title: this.$t('menuSuperAdmin.filasTarefas.title'),
          caption: this.$t('menuSuperAdmin.filasTarefas.caption'),
          icon: 'mdi-bullseye-arrow',
          routeName: 'tenantsQueue'
        },
        {
          title: this.$t('menuSuperAdmin.dadosInternos.title'),
          caption: this.$t('menuSuperAdmin.dadosInternos.caption'),
          icon: 'mdi-package-variant',
          routeName: 'tenantsPk'
        },
        {
          title: this.$t('menuSuperAdmin.backup.title') || 'Backup',
          caption: this.$t('menuSuperAdmin.backup.caption') || 'Backup',
          icon: 'mdi-backup-restore',
          routeName: 'backup'
        },
        {
          title: this.$t('menuSuperAdmin.monitor.title'),
          caption: this.$t('menuSuperAdmin.monitor.caption'),
          icon: 'mdi-server',
          routeName: 'monitor'
        },
        //{
        //  title: this.$t('menuSuperAdmin.terminal.title'),
        //  caption: this.$t('menuSuperAdmin.terminal.caption'),
        //  icon: 'mdi-console',
        //  routeName: 'terminal'
        //},
      ];
    },
    async marcarTodasComoLidas() {
      try {
        await AtualizarTodasMensagensNaoLidas();
        this.$q.notify({
          type: 'positive',
          message: this.$t('mainLayout.checkAllMessagesSuccess')
        });
        // Atualizar os dados após marcar como lidas
        await this.consultarTickets();
        await this.listarMensagens();
        this.carregarMensagensInternas();
      } catch (error) {
        this.$q.notify({
          type: 'negative',
          message: this.$t('mainLayout.checkAllMessagesError')
        });
      }
    },
    async MarcarTodasMensagensInternasComoLidas() {
      try {
        await marcarTodasMensagensComoLidas();
        this.$q.notify({
          type: 'positive',
          message: this.$t('mainLayout.checkAllInternalMessagesSuccess')
        });
        await this.listarMensagens();
        this.carregarMensagensInternas();
      } catch (error) {
        this.$q.notify({
          type: 'negative',
          message: this.$t('mainLayout.checkAllInternalMessagesError')
        });
      }
    },
    async buscarTutoriaisAtivos (page = 1) {
      try {
        this.tutoriaisLoading = true;
        const { data } = await ListarTutoriais({ isActive: true, pageNumber: page, pageSize: 10 });
        this.tutoriaisAtivos = Array.isArray(data.tutorials)
          ? data.tutorials.filter(t => t.isActive)
          : [];
        this.tutoriaisTotal = data.count || 0;
        this.tutoriaisPage = page;
      } catch (e) {
        this.tutoriaisAtivos = [];
        this.tutoriaisTotal = 0;
      } finally {
        this.tutoriaisLoading = false;
      }
    },
    abrirConvitesTickets() {
      this.$router.push({ name: 'atendimento' });
      // Emitir evento para abrir o modal de convites na página de atendimento
      eventBus.emit('abrir-modal-convites');
    },
  },
  beforeUnmount() {
    // Limpeza completa de memória
    this.cleanupMemory();
  },
  async mounted () {
    window.onbeforeunload = (event) => {
      if (this.isCallActive) {
        event.preventDefault();
        event.stopImmediatePropagation();
        event.returnValue = true;
      }
    }
    this.usuario = JSON.parse(localStorage.getItem('usuario'))
    this.userProfile = localStorage.getItem('profile')
    await this.dadosTenant()
    this.initializeMenu();
    this.isLoadingMenu = false
    this.atualizarUsuario()
    await this.listarWhatsapps()
    await this.listarConfiguracoes()
    await this.consultarTickets()
    if ('Notification' in window) {
      this.ativarNotificacoesAutomaticamente();
    }
    await this.conectarSocket(this.usuario)
    this.carregarMensagensInternas()
    this.carregarTarefas()
    this.carregarConvitesTickets()
    await this.listarMensagens()
    await this.aceitarTermos()
    // this.emailTenant()
    await this.buscarTutoriaisAtivos();
  },
  unmounted() {
    socket.disconnect()
  },
  beforeUnmount() {
    window.onbeforeunload = null;
  },
}
</script>

<style lang="scss" scoped>
.q-img__image {
  background-size: contain;
}

.no-cover .q-img__image {
  background-size: contain !important;
}

.mensagem-lida {
  background-color: #e0e0e0;
  color: #757575;
}

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

/* Modernização do layout */
.q-header {
  background: rgba(255,255,255,0.95) !important;
  backdrop-filter: blur(10px);
  border-radius: 0 0 18px 18px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  border-bottom: 1px solid rgba(0,0,0,0.04);
}

.q-toolbar {
  border-radius: 12px;
  padding: 0.3rem 1.2rem;
}

.q-drawer {
  background: rgba(255,255,255,0.80) !important;
  backdrop-filter: blur(10px);
  border-radius: 0 12px 12px 0;
  box-shadow: 1px 0 8px rgba(0,0,0,0.04);
  border-right: none;
  padding-top: 0.5rem;
}

.q-list {
  padding: 0.2rem 0.1rem;
  border-radius: 6px;
}

.q-item {
  border-radius: 6px;
  margin: 0.1rem 0.2rem;
  padding: 0.45rem 0.7rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.98rem;
  font-weight: 500;
  color: #222;
  background: transparent;
  box-shadow: none;
  transition: background 0.15s, color 0.15s;

  &.q-router-link--active, &.q-item--active {
    background: rgba(var(--q-primary-rgb), 0.12) !important;
    color: var(--q-primary) !important;
    font-weight: 700;
    box-shadow: none;
  }
  &:hover {
    background: rgba(var(--q-primary-rgb), 0.07);
    color: var(--q-primary);
  }
}

.q-item__section--avatar .q-icon, .q-item__section--avatar .q-avatar {
  font-size: 1.3rem !important;
  min-width: 1.5rem;
  min-height: 1.5rem;
  color: var(--q-primary);
}

.q-item__label {
  font-size: 0.98rem;
  font-weight: 600;
  color: #222;
}
.q-item__label + .q-item__label {
  font-size: 0.85rem;
  font-weight: 400;
  color: #b0b0b0;
}

.q-separator {
  margin: 0.4rem 0;
  border-radius: 1px;
  background: #f2f2f2;
}

@media (max-width: 600px) {
  .q-drawer {
    border-radius: 0 6px 6px 0;
    padding-top: 0.2rem;
  }
  .q-list {
    border-radius: 4px;
    padding: 0.1rem 0.05rem;
  }
  .q-item {
    border-radius: 4px;
    padding: 0.3rem 0.4rem;
    font-size: 0.93rem;
  }
  .q-item__section--avatar {
    margin-right: 0.3rem;
    .q-icon, .q-avatar {
      font-size: 1.1rem !important;
      min-width: 1.1rem;
      min-height: 1.1rem;
    }
  }
}

body.body--dark .q-drawer {
  background: rgba(30,30,30,0.85) !important;
  box-shadow: 1px 0 8px rgba(0,0,0,0.10);
}
body.body--dark .q-item {
  color: #eee;
  background: transparent;
}
body.body--dark .q-item__label {
  color: #eee;
}
body.body--dark .q-item__label + .q-item__label {
  color: #888;
}
body.body--dark .q-separator {
  background: #222;
}

.webphone-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1999;
}

.webphone-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2000;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.15);
  min-width: 320px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.webphone-visible {
  opacity: 1;
  visibility: visible;
}

.webphone-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px solid #e0e0e0;
}

.webphone-content {
  padding: 16px;
}

/* Estilos do AsteriskWebphone */
.webphone-content :deep(.asterisk-webphone) {
  max-width: 280px;
  margin: 0 auto;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

.webphone-content :deep(.webphone-container) {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.webphone-content :deep(.status-indicator) {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  font-size: 14px;
  padding: 8px;
  background: #f8f9fa;
  border-radius: 4px;
}

.webphone-content :deep(.number-input) {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  text-align: center;
  outline: none;
}

.webphone-content :deep(.number-input:focus) {
  border-color: #1976d2;
}

.webphone-content :deep(.keypad) {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.webphone-content :deep(.keypad-row) {
  display: flex;
  justify-content: space-between;
  gap: 8px;
}

.webphone-content :deep(.keypad-button) {
  flex: 1;
  aspect-ratio: 1;
  border: none;
  background: none;
  font-size: 24px;
  color: #1976d2;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s;
}

.webphone-content :deep(.keypad-button:hover) {
  background: #f0f0f0;
}

.webphone-content :deep(.keypad-button:active) {
  background: #e0e0e0;
  transform: scale(0.95);
}

.webphone-content :deep(.call-controls) {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-top: 16px;
}

.webphone-content :deep(.call-button),
.webphone-content :deep(.hangup-button) {
  width: 56px;
  height: 56px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.webphone-content :deep(.call-button) {
  background: #4caf50;
  color: white;
}

.webphone-content :deep(.hangup-button) {
  background: #f44336;
  color: white;
}

.webphone-content :deep(.call-button:hover:not(.disabled)) {
  background: #43a047;
  transform: scale(1.05);
}

.webphone-content :deep(.hangup-button:hover:not(.disabled)) {
  background: #e53935;
  transform: scale(1.05);
}

.webphone-content :deep(.call-button.disabled),
.webphone-content :deep(.hangup-button.disabled) {
  background: #e0e0e0;
  cursor: not-allowed;
  color: #9e9e9e;
}

.webphone-content :deep(.call-info) {
  text-align: center;
  font-size: 14px;
  color: #666;
}

.webphone-content :deep(.disconnected-message) {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: #f57c00;
  font-size: 14px;
  padding: 12px;
  background: #fff3e0;
  border-radius: 4px;
}

.tutorial-card {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  padding: 16px;
  transition: background 0.2s;
}
.tutorial-card-alt {
  background: #f5f7fa;
}
body.body--dark .tutorial-card {
  background: #23272e;
}
body.body--dark .tutorial-card-alt {
  background: #181b20;
}

.tutorial-thumb {
  width: 80px;
  height: 80px;
  min-width: 80px;
  min-height: 80px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(0,0,0,0.08);
  background: #f5f7fa;
  display: flex;
  align-items: center;
  justify-content: center;
}
body.body--dark .tutorial-thumb {
  background: #23272e;
}
</style>
 
