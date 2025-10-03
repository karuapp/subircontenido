<template>
  <div v-if="(userProfile === 'admin' || (userProfile === 'super' && pageAllowed))">
    <div class="row col full-width q-pa-lg">
      <q-card
        flat
        bordered
        class="full-width"
      >
        <q-card-section class="text-h6 text-bold">
          {{ $t('sessao.title') }}
          <div class="absolute-top-right q-pa-sm">
            <q-btn flat class="btn-outline q-mr-sm attention-button"
              color="primary"
              :icon="isCompactView ? 'mdi-view-grid' : 'mdi-view-list'"
              :label="isCompactView ? $t('sessao.normalView') : $t('sessao.compactView')"
              @click="toggleView"
            />
            <q-btn flat class="btn-outline"
              color="primary"
              icon="add"
              :label="$t('sessao.addChannel')"
              @click="whatsappSelecionado = {}; modalWhatsapp = true"
            />
          </div>
        </q-card-section>
      </q-card>
    </div>
    <div class="row full-width q-py-lg q-px-md ">
      <template v-for="item in canais" :key="item.id">
        <q-card
          flat
          bordered
          :class="[
            isCompactView ? 'col-xs-12 col-sm-6 col-md-4 col-lg-3 q-ma-sm' : 'col-xs-12 col-sm-5 col-md-4 col-lg-3 q-ma-md',
            isCompactView ? 'compact-card' : ''
          ]"
        >
          <q-item :class="{'q-pa-sm': isCompactView}">
            <q-item-section avatar>
              <q-avatar>
                <q-icon
                  :size="isCompactView ? '30px' : '40px'"
                  :name="`img:${item.type}-logo.png`"
                />
              </q-avatar>
            </q-item-section>
            <q-item-section>
              <q-item-label :class="{'text-subtitle1': isCompactView, 'text-h6': !isCompactView}" class="text-bold">{{ item.name }}</q-item-label>
              <q-item-label :class="{'text-caption': isCompactView, 'text-h6 text-caption': !isCompactView}">
                #{{ item.id }} - {{ item.type }}
              </q-item-label>
            </q-item-section>
            <q-item-section v-if="item.isDefault">
                <q-icon color="primary" :class="{'text-subtitle1': isCompactView, 'text-h6': !isCompactView}" name="mdi-checkbox-multiple-marked-circle-outline">
                  <q-tooltip>
                    {{ $t('sessao.defaultConnection') }}
                  </q-tooltip>
                </q-icon>
              </q-item-section>
              <q-item-section side v-if="isCompactView">
                <div class="row items-center no-wrap" style="flex-wrap: wrap; justify-content: space-between;">
                  <q-btn
                    round
                    flat
                    dense
                    icon="edit"
                    @click="handleOpenModalWhatsapp(item)"
                    v-if="isAdmin">
                    <q-tooltip>
                      {{ $t('sessao.editChannel') }}
                    </q-tooltip>
                  </q-btn>
                  <q-btn-dropdown
                    round
                    flat
                    dense
                    icon="settings"
                    class="q-ml-sm"
                  >
                    <q-list>
                      <q-item clickable v-if="item.type.includes('hub')" @click="setWebhookAgain(item)">
                        <q-item-section avatar>
                          <q-icon name="refresh" />
                        </q-item-section>
                        <q-item-section>
                          <q-item-label>{{ $t('sessao.revalidateWebhook') }}</q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-item clickable v-if="item.type.includes('evo')" @click="setEvoWebhookAgain(item)">
                        <q-item-section avatar>
                          <q-icon name="refresh" />
                        </q-item-section>
                        <q-item-section>
                          <q-item-label>{{ $t('sessao.revalidateConnection') }}</q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-item clickable v-if="item.type.includes('meow')" @click="setMeowWebhookAgain(item)">
                        <q-item-section avatar>
                          <q-icon name="refresh" />
                        </q-item-section>
                        <q-item-section>
                          <q-item-label>{{ $t('sessao.revalidateConnection') }}</q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-item clickable @click="deleteWhatsapp(item)" :disable="!isAdmin">
                        <q-item-section avatar>
                          <q-icon name="mdi-delete" />
                        </q-item-section>
                        <q-item-section>
                          <q-item-label>{{ $t('sessao.deleteTooltip') }}</q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-item clickable @click="setDefault(item)" :disable="!isAdmin">
                        <q-item-section avatar>
                          <q-icon name="mdi-checkbox-multiple-marked-circle-outline" />
                        </q-item-section>
                        <q-item-section>
                          <q-item-label>{{ $t('sessao.defaultTooltip') }}</q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-item clickable @click="closeAllOpen(item)" :disable="!isAdmin">
                        <q-item-section avatar>
                          <q-icon name="mdi-progress-close" />
                        </q-item-section>
                        <q-item-section>
                          <q-item-label>{{ $t('sessao.closeOpenTickets') }}</q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-item clickable @click="closeAllPending(item)" :disable="!isAdmin">
                        <q-item-section avatar>
                          <q-icon name="mdi-progress-clock" />
                        </q-item-section>
                        <q-item-section>
                          <q-item-label>{{ $t('sessao.closePendingTickets') }}</q-item-label>
                        </q-item-section>
                      </q-item>
                      <q-item clickable @click="syncOldMessagesWhatsapp(item)" :disable="!isAdmin" v-if="item.type === 'whatsapp'">
                        <q-item-section avatar>
                          <q-icon name="mdi-sync" />
                        </q-item-section>
                        <q-item-section>
                          <q-item-label>{{ $t('sessao.syncMessages') }}</q-item-label>
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </q-btn-dropdown>
                  <q-btn-dropdown
                    round
                    flat
                    dense
                    icon="mdi-robot"
                    class="q-ml-sm"
                  >
                    <q-list>
                      <q-item>
                        <q-card-section>
                          <div class="text-bold q-mb-xs">{{ $t('sessao.chatbot') }}</div>
                          <q-select
                            outlined
                            dense
                            style="min-width: 200px;"
                            :label="$t('sessao.chatbot')"
                            v-model="item.chatFlowId"
                            :options="listaChatFlow"
                            map-options
                            emit-value
                            option-value="id"
                            option-label="name"
                            clearable
                            @input="handleSaveWhatsApp(item)"
                          />
                        </q-card-section>
                      </q-item>
                      <q-item style="margin-top: -30px;">
                        <q-card-section>
                          <div class="text-bold q-mb-xs">{{ $t('sessao.queue') }}</div>
                          <q-select
                            outlined
                            dense
                            style="min-width: 200px;"
                            :label="$t('sessao.queue')"
                            v-model="item.queueId"
                            :options="listaFila"
                            map-options
                            emit-value
                            option-value="id"
                            option-label="queue"
                            clearable
                            @input="handleSaveWhatsApp(item)"
                          >
                            <q-tooltip>
                              {{ $t('sessao.noQueueTooltip') }}
                            </q-tooltip>
                          </q-select>
                        </q-card-section>
                      </q-item>
                      <q-item style="margin-top: -30px;">
                        <q-card-section>
                          <div class="text-bold q-mb-xs">{{ $t('sessao.user') }}</div>
                          <q-select
                            outlined
                            dense
                            style="min-width: 200px;"
                            :label="$t('sessao.user')"
                            v-model="item.userId"
                            :options="listaUsuario"
                            map-options
                            emit-value
                            option-value="id"
                            option-label="name"
                            clearable
                            @input="handleSaveWhatsApp(item)"
                          >
                            <q-tooltip>
                              {{ $t('sessao.noUserTooltip') }}
                            </q-tooltip>
                          </q-select>
                        </q-card-section>
                      </q-item>
                    </q-list>
                  </q-btn-dropdown>
                </div>
              </q-item-section>
            <template v-if="!isCompactView">
              <q-item-section v-if="item.isDefault">
                <q-icon color="primary" :class="{'text-subtitle1': isCompactView, 'text-h6': !isCompactView}" name="mdi-checkbox-multiple-marked-circle-outline">
                  <q-tooltip>
                    {{ $t('sessao.defaultConnection') }}
                  </q-tooltip>
                </q-icon>
              </q-item-section>
              <q-item-section side>
                <div class="row items-center no-wrap" style="flex-wrap: wrap; justify-content: space-between;">
                  <q-btn
                    round
                    flat
                    dense
                    icon="edit"
                    @click="handleOpenModalWhatsapp(item)"
                    v-if="isAdmin">
                    <q-tooltip>
                      {{ $t('sessao.editChannel') }}
                    </q-tooltip>
                  </q-btn>
                  <q-btn
                    round
                    flat
                    dense
                    icon="refresh"
                    class="q-ml-sm"
                    @click="setWebhookAgain(item)"
                    v-if="item.type.includes('hub')"
                  >
                    <q-tooltip>
                      {{ $t('sessao.revalidateWebhook') }}
                    </q-tooltip>
                  </q-btn>
                  <q-btn
                    round
                    flat
                    dense
                    icon="refresh"
                    class="q-ml-sm"
                    @click="setEvoWebhookAgain(item)"
                    v-if="item.type.includes('evo')"
                  >
                    <q-tooltip>
                      {{ $t('sessao.revalidateConnection') }}
                    </q-tooltip>
                  </q-btn>
                  <q-btn
                    round
                    flat
                    dense
                    icon="refresh"
                    class="q-ml-sm"
                    @click="setMeowWebhookAgain(item)"
                    v-if="item.type.includes('meow')"
                  >
                    <q-tooltip>
                      {{ $t('sessao.revalidateConnection') }}
                    </q-tooltip>
                  </q-btn>
                </div>
              </q-item-section>
            </template>
          </q-item>
          <q-separator />
          <q-card-section :class="{'q-pa-sm': isCompactView}">
            <ItemStatusChannel :item="item" :compact="isCompactView" />
            <template v-if="item.type === 'messenger'">
              <div :class="{'text-caption': isCompactView, 'text-body2': !isCompactView}" class="text-bold q-mt-sm">
                <span> {{ $t('sessao.page') }} </span>
                {{ item.fbObject && item.fbObject.name || $t('sessao.noPageConfigured') }}
              </div>
            </template>
          </q-card-section>
          <template v-if="isCompactView">
            <q-card-actions
              class="q-gutter-md q-pa-md q-pt-none"
              align="center"
            >
              <template v-if="item.type !== 'messenger'">
                <q-btn
                  v-if="(item.type == 'whatsapp' || item.type == 'baileys' || item.type == 'meow' || item.type == 'evo') && item.status == 'qrcode'"
                  color="primary"
                  :label="$t('sessao.qrCode')"
                  @click="handleOpenQrModal(item, 'btn-qrCode')"
                  icon-right="mdi-qrcode-scan"
                  :disable="!isAdmin"
                />

                <div
                  v-if="item.status == 'DISCONNECTED'"
                  class="q-gutter-sm"
                >
                  <q-btn
                    v-if="(item.type == 'whatsapp' && item.type == 'baileys' || item.type == 'meow' || item.type == 'evo') && item.status == 'qrcode'"
                    color="positive"
                    :label="$t('sessao.connect')"
                    @click="handleStartWhatsAppSession(item.id)"
                  />
                  <q-btn
                    v-if="(item.type != 'whatsapp' && item.type != 'baileys' && item.type != 'meow' && item.type != 'evo')"
                    color="positive"
                    :label="$t('sessao.connect')"
                    @click="handleStartWhatsAppSession(item.id)"
                  />
                  <q-btn
                    v-if="(item.status == 'DISCONNECTED' && item.type == 'whatsapp') || (item.status == 'DISCONNECTED' && item.type == 'baileys') || (item.status == 'DISCONNECTED' && item.type == 'meow') || (item.status == 'DISCONNECTED' && item.type == 'evo')"
                    color="primary"
                    :label="$t('sessao.newQrCode')"
                    @click="handleRequestNewQrCode(item, 'btn-qrCode')"
                    icon-right="mdi-qrcode-scan"
                    :disable="!isAdmin"
                  />
                </div>

                <div
                  v-if="item.status == 'OPENING'"
                  class="row items-center q-gutter-sm flex flex-inline"
                >
                  <div class="text-bold">
                    {{ $t('sessao.connecting') }}
                  </div>
                  <q-spinner-radio
                    color="positive"
                    size="2em"
                  />
                  <q-separator
                    vertical
                    spaced=""
                  />
                </div>

                <q-btn
                  v-if="['OPENING', 'CONNECTED', 'PAIRING', 'TIMEOUT'].includes(item.status) && !item.type.includes('hub')"
                  color="negative"
                  :label="$t('sessao.disconnect')"
                  @click="handleDisconectWhatsSession(item.id)"
                  :disable="!isAdmin"
                  class="q-mx-sm"
                />
              </template>
              <template v-if="item.type === 'messenger'">
                <VFacebookLogin
                  :app-id="cFbAppId"
                  @sdk-init="handleSdkInit"
                  @login="login => fbLogin(login, item)"
                  @logout="logout => fbLogout(item)"
                  :login-options="FBLoginOptions"
                  version="v12.0"
                >
                  <template v-slot:login>
                    {{ item.status === 'CONNECTED' ? $t('sessao.edit') : $t('sessao.connect') }}
                  </template>
                  <template v-slot:logout>
                    {{ item.status === 'DISCONNECTED' ? $t('sessao.connect') : $t('sessao.edit') }}
                  </template>
                </VFacebookLogin>
              </template>
            </q-card-actions>
          </template>
          <template v-if="!isCompactView">
            <q-card-section>
              <q-select
                outlined
                dense
                :label="$t('sessao.chatbot')"
                v-model="item.chatFlowId"
                :options="listaChatFlow"
                map-options
                emit-value
                option-value="id"
                option-label="name"
                clearable
                @input="handleSaveWhatsApp(item)"
              />
            </q-card-section>
            <q-card-section>
              <q-select
                outlined
                dense
                :label="$t('sessao.queue')"
                v-model="item.queueId"
                :options="listaFila"
                map-options
                emit-value
                option-value="id"
                option-label="queue"
                clearable
                @input="handleSaveWhatsApp(item)"
              >
                <q-tooltip>
                  {{ $t('sessao.noQueueTooltip') }}
                </q-tooltip>
              </q-select>
            </q-card-section>
            <q-card-section>
              <q-select
                outlined
                dense
                :label="$t('sessao.user')"
                v-model="item.userId"
                :options="listaUsuario"
                map-options
                emit-value
                option-value="id"
                option-label="name"
                clearable
                @input="handleSaveWhatsApp(item)"
              >
                <q-tooltip>
                  {{ $t('sessao.noUserTooltip') }}
                </q-tooltip>
              </q-select>
            </q-card-section>
          </template>
          <q-separator v-if="!isCompactView"/>
          <template v-if="!isCompactView">
            <q-card-actions
              style="margin-top: 2px;"
              class="q-gutter-md q-pa-md q-pt-none"
              align="center"
            >
              <template v-if="item.type !== 'messenger'">
                <q-btn
                  v-if="(item.type == 'whatsapp' || item.type == 'baileys' || item.type == 'meow' || item.type == 'evo') && item.status == 'qrcode'"
                  color="primary"
                  :label="$t('sessao.qrCode')"
                  @click="handleOpenQrModal(item, 'btn-qrCode')"
                  icon-right="mdi-qrcode-scan"
                  :disable="!isAdmin"
                />

                <div
                  v-if="item.status == 'DISCONNECTED'"
                  class="q-gutter-sm"
                >
                  <q-btn
                    v-if="(item.type == 'whatsapp' && item.type == 'baileys' || item.type == 'meow' || item.type == 'evo') && item.status == 'qrcode'"
                    color="positive"
                    :label="$t('sessao.connect')"
                    @click="handleStartWhatsAppSession(item.id)"
                  />
                  <q-btn
                    v-if="(item.type != 'whatsapp' && item.type != 'baileys' && item.type != 'meow' && item.type != 'evo')"
                    color="positive"
                    :label="$t('sessao.connect')"
                    @click="handleStartWhatsAppSession(item.id)"
                  />
                  <q-btn
                    v-if="(item.status == 'DISCONNECTED' && item.type == 'whatsapp') || (item.status == 'DISCONNECTED' && item.type == 'baileys') || (item.status == 'DISCONNECTED' && item.type == 'meow') || (item.status == 'DISCONNECTED' && item.type == 'evo')"
                    color="primary"
                    :label="$t('sessao.newQrCode')"
                    @click="handleRequestNewQrCode(item, 'btn-qrCode')"
                    icon-right="mdi-qrcode-scan"
                    :disable="!isAdmin"
                  />
                </div>

                <div
                  v-if="item.status == 'OPENING'"
                  class="row items-center q-gutter-sm flex flex-inline"
                >
                  <div class="text-bold">
                    {{ $t('sessao.connecting') }}
                  </div>
                  <q-spinner-radio
                    color="positive"
                    size="2em"
                  />
                  <q-separator
                    vertical
                    spaced=""
                  />
                </div>

                <q-btn
                  v-if="['OPENING', 'CONNECTED', 'PAIRING', 'TIMEOUT'].includes(item.status) && !item.type.includes('hub')"
                  color="negative"
                  :label="$t('sessao.disconnect')"
                  @click="handleDisconectWhatsSession(item.id)"
                  :disable="!isAdmin"
                  class="q-mx-sm"
                />
              </template>

              <template v-if="item.type === 'messenger'">
                <VFacebookLogin
                  :app-id="cFbAppId"
                  @sdk-init="handleSdkInit"
                  @login="login => fbLogin(login, item)"
                  @logout="logout => fbLogout(item)"
                  :login-options="FBLoginOptions"
                  version="v12.0"
                >
                  <template v-slot:login>
                    {{ item.status === 'CONNECTED' ? $t('sessao.edit') : $t('sessao.connect') }}
                  </template>
                  <template v-slot:logout>
                    {{ item.status === 'DISCONNECTED' ? $t('sessao.connect') : $t('sessao.edit') }}
                  </template>
                </VFacebookLogin>
              </template>
              <q-btn
                color="negative"
                icon="mdi-delete"
                @click="deleteWhatsapp(item)"
                :disable="!isAdmin"
                dense
                round
                flat
                class="absolute-bottom-right"
              >
                <q-tooltip>
                  {{ $t('sessao.deleteTooltip') }}
                </q-tooltip>
              </q-btn>
              <q-btn
                style="margin-right: 30px"
                color="primary"
                icon="mdi-checkbox-multiple-marked-circle-outline"
                @click="setDefault(item)"
                :disable="!isAdmin"
                dense
                round
                flat
                class="absolute-bottom-right"
              >
                <q-tooltip>
                  {{ $t('sessao.defaultTooltip') }}
                </q-tooltip>
              </q-btn>
              <q-btn
                
                style="margin-right: 60px"
                color="primary"
                icon="mdi-progress-close"
                @click="closeAllOpen(item)"
                :disable="!isAdmin"
                dense
                round
                flat
                class="absolute-bottom-right"
              >
                <q-tooltip>
                  {{ $t('sessao.closeOpenTickets') }}
                </q-tooltip>
              </q-btn>
              <q-btn
                
                style="margin-right: 90px"
                color="primary"
                icon="mdi-progress-clock"
                @click="closeAllPending(item)"
                :disable="!isAdmin"
                dense
                round
                flat
                class="absolute-bottom-right"
              >
                <q-tooltip>
                  {{ $t('sessao.closePendingTickets') }}
                </q-tooltip>
              </q-btn>
              <template v-if="item.type === 'whatsapp'">
                <q-btn
                  color="positive"
                  icon="mdi-sync"
                  @click="syncOldMessagesWhatsapp(item)"
                  :disable="!isAdmin"
                  dense
                  round
                  flat
                  class="absolute-bottom-left"
                >
                  <q-tooltip>
                    {{ $t('sessao.syncMessages') }}
                  </q-tooltip>
                </q-btn>
              </template>
            </q-card-actions>
          </template>
        </q-card>
      </template>
    </div>
    <ModalQrCode
      v-model:abrirModalQR="abrirModalQR"
      :channel="cDadosWhatsappSelecionado"
      @gerar-novo-qrcode="v => handleRequestNewQrCode(v, 'btn-qrCode')"
    />
    <ModalWhatsapp
      v-model:modalWhatsapp="modalWhatsapp"
      v-model:whatsAppEdit="whatsappSelecionado"
      @recarregar-lista="listarWhatsapps"
    />
    <q-inner-loading :showing="loading">
      <q-spinner-gears
        size="50px"
        color="primary"
      />
    </q-inner-loading>
  </div>
  <div v-else>
    <q-banner class="bg-red text-white" inline-actions>
      <q-icon name="warning" />
      <span>{{ $t('common.accessDenied') }}</span>
    </q-banner>
  </div>
</template>

<script>
import bus from 'src/utils/eventBus'
import { FecharTodosPendente, FecharTodosAbertos, DefinirPadrao, DeletarWhatsapp, DeleteWhatsappSession, StartWhatsappSession, ListarWhatsapps, RequestNewQrCode, UpdateWhatsapp } from 'src/service/sessoesWhatsapp.js'
import { SyncOldMessagesWbot, AtualizarMensagensSyncTime } from 'src/service/tickets.js'
import { format, parseISO } from 'date-fns'
import pt from 'date-fns/locale/pt-BR/index'
import ModalQrCode from './ModalQrCode.vue'
import { mapGetters } from 'vuex'
import ModalWhatsapp from './ModalWhatsapp.vue'
import ItemStatusChannel from './ItemStatusChannel.vue'
import VFacebookLogin from 'src/components/FacebookLogin.vue'
import { FetchFacebookPages, LogoutFacebookPages } from 'src/service/facebook.js'
import { ListarChatFlow } from 'src/service/chatFlow.js'
import { ListarUsuarios } from 'src/service/user.js'
import { ListarFilas } from 'src/service/filas.js'
import { MostrarCores } from 'src/service/empresas.js';
import { SetarWebhook } from 'src/service/hub.js'
import { QRCodeMeow, ValidarWebhookMeow } from 'src/service/meow.js'
import { QRCodeEvo, ValidarWebhook } from 'src/service/evo.js'
const userLogado = JSON.parse(localStorage.getItem('usuario'))

export default {
  name: 'IndexSessoesWhatsapp',
  components: {
    ModalQrCode,
    ModalWhatsapp,
    ItemStatusChannel,
    VFacebookLogin
  },
  data () {
    return {
      pageAllowed: true,
      colors: {},
      userProfile: 'user',
      loading: false,
      userLogado,
      isAdmin: false,
      abrirModalQR: false,
      modalWhatsapp: false,
      whatsappSelecionado: {},
      listaChatFlow: [],
      listaFila: [],
      listaUsuario: [],
      whatsAppId: null,
      canais: [],
      objStatus: {
        qrcode: ''
      },
      columns: [
        {
          name: 'name',
          label: 'Nome',
          field: 'name',
          align: 'left'
        },
        {
          name: 'status',
          label: 'Status',
          field: 'status',
          align: 'center'
        },
        {
          name: 'session',
          label: 'Sessão',
          field: 'status',
          align: 'center'
        },
        {
          name: 'number',
          label: 'Número',
          field: 'number',
          align: 'center'
        },
        {
          name: 'updatedAt',
          label: 'Última Atualização',
          field: 'updatedAt',
          align: 'center',
          format: d => this.formatarData(d, 'dd/MM/yyyy HH:mm')
        },
        {
          name: 'isDefault',
          label: 'Padrão',
          field: 'isDefault',
          align: 'center'
        },
        {
          name: 'acoes',
          label: 'Ações',
          field: 'acoes',
          align: 'center'
        }
      ],
      FB: {},
      FBscope: {},
      FBLoginOptions: {
        scope:
          'pages_manage_metadata,pages_messaging,instagram_basic,pages_show_list,pages_read_engagement,instagram_manage_messages'
      },
      FBPageList: [],
      fbSelectedPage: { name: null, id: null },
      fbPageName: '',
      fbUserToken: '',
      isCompactView: true,
      // Sistema de gerenciamento de memória
      timers: [],
    }
  },
  watch: {
    whatsapps: {
      handler () {
        this.canais = JSON.parse(JSON.stringify(this.whatsapps))
      },
      deep: true
    }
  },
  computed: {
    ...mapGetters(['whatsapps']),
    cFbAppId () {
      return process.env.FACEBOOK_APP_ID
    },
    cDadosWhatsappSelecionado () {
      const { id } = this.whatsappSelecionado
      return this.whatsapps.find(w => w.id === id)
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
    async setWebhookAgain(data){
      try{
        await SetarWebhook(data)
        this.$q.notify({
          color: 'positive',
          position: 'top',
          message: this.$t('sessao.processStarted'),
        });
        window.location.reload();
      } catch(e){
        this.$notificarErro(e)
      }
    },
    async setEvoWebhookAgain(data){
      try{
        await ValidarWebhook(data)
        this.$q.notify({
          color: 'positive',
          position: 'top',
          message: this.$t('sessao.processStarted'),
        });
        window.location.reload();
      } catch(e){
        this.$notificarErro(e)
      }
    },
    async setMeowWebhookAgain(data){
      try{
        await ValidarWebhookMeow(data)
        this.$q.notify({
          color: 'positive',
          position: 'top',
          message: this.$t('sessao.processStarted'),
        });
        window.location.reload();
      } catch(e){
        this.$notificarErro(e)
      }
    },
    async loadColors() {
      try {
        const response = await MostrarCores();
        if (response.status === 200) {
          const companyData = response.data[0];
          const colorsArray = companyData.systemColors;

          this.colors = (Array.isArray(colorsArray) ? colorsArray : []).reduce((acc, colorObj = {}) => {
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

          

          const root = document.documentElement;
          root.style.setProperty("--q-neutral", this.colors.neutral);
          root.style.setProperty("--q-primary", this.colors.primary);
          root.style.setProperty("--q-secondary", this.colors.secondary);
          root.style.setProperty("--q-accent", this.colors.accent);
          root.style.setProperty("--q-warning", this.colors.warning);
          root.style.setProperty("--q-negative", this.colors.negative);
          root.style.setProperty("--q-positive", this.colors.positive);
          root.style.setProperty("--q-light", this.colors.light);

          

        } else {
          console.error('Erro ao carregar as cores');
        }
      } catch (error) {
        console.error('Erro ao carregar as cores:', error);
      }
    },
    formatarData (data, formato) {
      return format(parseISO(data), formato, { locale: pt })
    },
    handleSdkInit ({ FB }) {
      this.FB = FB
      // try login

      // this.FBscope = scope
    },
    async fbLogout (whatsapp) {
      console.info('fbLogout')
      await LogoutFacebookPages(whatsapp)
    },
    fbLogin (login, channel) {
      if (login?.status === 'connected') {
        this.fbFetchPages(
          login.authResponse.accessToken,
          login.authResponse.userID,
          channel
        )
        console.info('fbLogin in connected')
      } else if (login?.status === 'not_authorized') {
        // The person is logged into Facebook, but not your app.
        console.info('fbLogin in not_authorized')
      } else {
        // The person is not logged into Facebook, so we're not sure if
        // they are logged into this app or not.
        console.info('fbLogin in not logged')
      }
    },
    async fbFetchPages (_token, _accountId, channel) {
      try {
        const response = await FetchFacebookPages({
          whatsapp: channel,
          userToken: _token,
          accountId: _accountId
        })
        const {
          data: { data }
        } = response
        this.FBPageList = data.page_details
        this.fbUserToken = data.user_access_token
      } catch (error) {
        // Ignore error
      }
    },
    handleOpenQrModal (channel) {
      this.whatsappSelecionado = channel
      this.abrirModalQR = true
    },
    handleOpenModalWhatsapp (whatsapp) {
      this.whatsappSelecionado = whatsapp
      this.modalWhatsapp = true
    },
    async setDefault(whatsapp){
      const data = {
        isDefault: true
      }
      await DefinirPadrao(whatsapp.id, data)
      await this.listarWhatsapps()
    },
    async closeAllOpen(whatsapp){
      this.$q.dialog({
        title: this.$t('sessao.closeOpenTicketsPrompt'),
        message: this.$t('common.attention'),
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
        this.$q.notify({
          color: 'positive',
          position: 'top',
          message: this.$t('sessao.processStarted'),
        });
        try{
          await FecharTodosAbertos(whatsapp.id)
          this.$q.notify({
            color: 'positive',
            position: 'top',
            message: this.$t('sessao.closingOpenTickets'),
          });
          const timerId = setTimeout(() => {
            window.location.reload();
          }, 1500);
          this.addTimer(timerId);
        } catch(e){
          this.$q.notify({
            color: 'negative',
            position: 'top',
            message: `${this.$t('sessao.actionError')} ${e.data.error}`,
          });
        }        
      })
    },
    async atualizarMensagens(item) {
      console.log('item', item.tenantId)
      try {
        const response = await AtualizarMensagensSyncTime(item.tenantId);
        console.log('Mensagens atualizadas:', response.data);
      } catch (error) {
        console.error('Erro ao atualizar mensagens:', error);
      }
    },
    async closeAllPending(whatsapp){
      this.$q.dialog({
        title: this.$t('sessao.closePendingTicketsPrompt'),
        message: this.$t('common.attention'),
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
        this.$q.notify({
          color: 'positive',
          position: 'top',
          message: this.$t('sessao.processStarted'),
        });
        try{
          await FecharTodosPendente(whatsapp.id)
          this.$q.notify({
            color: 'positive',
            position: 'top',
            message: this.$t('sessao.closingPendingTickets'),
          });
          const timerId = setTimeout(() => {
            window.location.reload();
          }, 1500);
          this.addTimer(timerId);
        } catch(e){
          this.$q.notify({
            color: 'negative',
            position: 'top',
            message: `${this.$t('sessao.actionError')} ${e.data.error}`,
          });
        }        
      })
    },
    async handleDisconectWhatsSession (whatsAppId) {
      this.$q.dialog({
        title: this.$t('sessao.disconnectPrompt'),
        // message: 'Mensagens antigas não serão apagadas no whatsapp.',
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
      }).onOk(() => {
        this.loading = true
        DeleteWhatsappSession(whatsAppId).then(() => {
          const whatsapp = this.whatsapps.find(w => w.id === whatsAppId)
          this.$store.commit('UPDATE_WHATSAPPS', {
            ...whatsapp,
            status: 'DISCONNECTED'
          })
        }).finally(f => {
          this.loading = false
        })
      })
    },
    async handleStartWhatsAppSession (whatsAppId) {
      try {
        await StartWhatsappSession(whatsAppId)
        const data = this.whatsapps.find(w => w.id === whatsAppId)
        if(data.type === 'waba' || data.type === 'telegram'){
          window.location.reload();
        }
      } catch (error) {
        console.error(error)
      }
    },
    async handleRequestNewQrCode (channel, origem) {
      if (channel.type === 'telegram' && !channel.tokenTelegram) {
        this.$notificarErro(this.$t('sessao.tokenRequiredTelegram'))
      }
      if (channel.type === 'meow') {
        await QRCodeMeow(channel)
        this.loading = false
        const timerId = setTimeout(() => {
          window.location.reload();
        }, 1000);
        this.addTimer(timerId);
        return
      }
      if (channel.type === 'evo') {
        await QRCodeEvo(channel)
        this.loading = false
        const timerId = setTimeout(() => {
          window.location.reload();
        }, 1000);
        this.addTimer(timerId);
        return
      }
      this.loading = true
      try {
        await RequestNewQrCode({ id: channel.id, isQrcode: true })
        const timerId = setTimeout(() => {
          this.handleOpenQrModal(channel)
        }, 2000)
        this.addTimer(timerId);
      } catch (error) {
        console.error(error)
      }
      this.loading = false
      const timerId = setTimeout(() => {
        window.location.reload();
      }, 1000);
      this.addTimer(timerId);
    },
    async listarWhatsapps () {
      const { data } = await ListarWhatsapps()
      this.$store.commit('LOAD_WHATSAPPS', data)
    },
    async deleteWhatsapp (whatsapp) {
      this.$q.dialog({
        title: this.$t('sessao.deleteChannelPrompt'),
        message: this.$t('sessao.deleteChannelMessage'),
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
      }).onOk(() => {
        this.loading = true
        DeletarWhatsapp(whatsapp.id).then(r => {
          this.$store.commit('DELETE_WHATSAPPS', whatsapp.id)
        }).finally(f => {
          this.loading = false
        })
      })
    },
    async syncOldMessagesWhatsapp (whatsappId) {
      let value = 1;
      this.$q.dialog({
        title: this.$t('sessao.syncPrompt'),
        message: this.$t('sessao.syncWarningPrompt'),
        prompt: {
          model: value,
          type: 'number',
          label: this.$t('sessao.syncMessagesPrompt'),
          hint: this.$t('sessao.syncMessagesHint'),
          attributes: {
            min: 0,
            step: 1,
          },
        },
        ok: {
          label: this.$t('common.yes'),
          color: 'primary',
          push: true
        },
        cancel: {
          label: this.$t('common.no'),
          color: 'negative',
          push: true
        },
        persistent: true
      }).onOk((value) => {
        const data = {
          whatsappId: whatsappId.id,
          limit: value,
          tenantId: whatsappId.tenantId
        };
        if (value !== null && value > 0) {
          this.$q.notify({
            type: 'positive',
            progress: true,
            position: 'top',
            message: this.$t('sessao.syncingMessages', { limit: value }),
            actions: [{
              icon: 'close',
              round: true,
              color: 'white'
            }]
          })
          this.loading = true
          SyncOldMessagesWbot(data).then(r => {
            // this.$store.commit('SYNC_WHATSAPP', whatsappId)
          }).finally(f => {
            this.loading = false
          })
        } else {
          this.$q.notify({
            type: 'error',
            progress: true,
            position: 'top',
            message: this.$t('sessao.invalidValue'),
            actions: [{
              icon: 'close',
              round: true,
              color: 'white'
            }]
          })
        }
      })
    },
    async listarChatFlow () {
      const { data } = await ListarChatFlow()
      this.listaChatFlow = data.chatFlow
    },
    async listarFila () {
      const { data } = await ListarFilas()
      this.listaFila = data.filter(item => item.isActive)
    },
    async listarUsuario () {
      const { data } = await ListarUsuarios()
      this.listaUsuario = data.users.filter(user => user.profile !== 'superadmin')
    },
    async handleSaveWhatsApp (whatsapp) {
      try {
        await UpdateWhatsapp(whatsapp.id, whatsapp)
        this.$q.notify({
          type: 'positive',
          progress: true,
          position: 'top',
          message: this.$t('sessao.whatsappSaved', { action: whatsapp.id ? this.$t('common.edited') : this.$t('common.created') }),
          actions: [{
            icon: 'close',
            round: true,
            color: 'white'
          }]
        })
      } catch (error) {
        console.error(error)
        return this.$q.notify({
          type: 'error',
          progress: true,
          position: 'top',
          message: this.$t('sessao.whatsappSaveError'),
          actions: [{
            icon: 'close',
            round: true,
            color: 'white'
          }]
        })
      }
    },
    handleUpdateSession(session) {
      this.$store.commit('UPDATE_SESSION', session);
      this.atualizarPagina();
    },
    atualizarPagina() {
      location.reload();
    },
    toggleView() {
      this.isCompactView = !this.isCompactView;
    }
  },
  beforeUnmount() {
    this._offUpdateSession && this._offUpdateSession()
    // Limpeza completa de memória
    this.cleanupMemory();
  },
  mounted () {
    this.isAdmin = localStorage.getItem('profile')
    const menuPermissions = JSON.parse(localStorage.getItem('menuPermissions'))
    this.pageAllowed = menuPermissions?.sessoes === true;
    this.listarWhatsapps()
    this.listarChatFlow()
    this.listarFila()
    this.listarUsuario()
    this.userProfile = localStorage.getItem('profile')
    this._offUpdateSession = bus.on('UPDATE_SESSION', this.handleUpdateSession)
    const storedColors = localStorage.getItem('storedColors');
    if (storedColors) {
      let list = []
      try {
        const parsed = JSON.parse(storedColors)
        list = Array.isArray(parsed) ? parsed : (Array.isArray(parsed?.colors) ? parsed.colors : [])
      } catch (_) { list = [] }

      const colors = list.reduce((acc, colorObj = {}) => {
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

      const root = document.documentElement;
      Object.keys(colors).forEach(key => {
        root.style.setProperty(`--q-${key}`, colors[key]);
      });
    } else {
      console.warn('Nenhuma cor armazenada no localStorage');
    }
    const button = this.$el.querySelector('.btn-outline');
    if (button) {
      button.classList.add('attention');
      const timerId = setTimeout(() => {
        button.classList.remove('attention');
      }, 3000); // Remove a animação após 3 segundos
      this.addTimer(timerId);
    }
  }
}
</script>

<style scoped lang="scss">
.sessao-container {
  min-height: 100vh;
  padding: 2rem 1rem;
  background: linear-gradient(120deg, rgba(var(--q-primary-rgb),0.07) 0%, rgba(var(--q-secondary-rgb),0.07) 100%);
  animation: fadeIn 0.7s;
}

.q-card {
  border-radius: 18px;
  background: rgba(255,255,255,0.88);
  box-shadow: 0 4px 24px rgba(0,0,0,0.10);
  backdrop-filter: blur(8px);
  transition: box-shadow 0.2s;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(0,0,0,0.04);
  &:hover {
    box-shadow: 0 8px 32px rgba(0,0,0,0.13);
  }

  &.compact-card {
    border-radius: 12px;
    margin-bottom: 0.5rem;
    
    .q-card-section {
      padding: 8px;
    }

    .q-item {
      min-height: 48px;
    }

    .q-btn {
      min-width: 28px;
      min-height: 28px;
    }

    .q-card-actions {
      padding: 4px;
    }
  }
}

.q-card-section {
  border-radius: 12px 12px 0 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--q-primary);
  background: transparent;
}

.q-btn {
  border-radius: 7px;
  min-width: 22px;
  min-height: 22px;
  padding: 0.08rem 0.38rem;
  font-size: 0.78rem;
  transition: box-shadow 0.2s, background 0.2s;
  box-shadow: 0 1px 2px rgba(0,0,0,0.06);
  &:hover {
    box-shadow: 0 3px 8px rgba(0,0,0,0.11);
    background: rgba(var(--q-primary-rgb), 0.09);
  }
}

.q-select, .q-input {
  border-radius: 10px;
  background: rgba(255,255,255,0.7);
  transition: background 0.2s;
  margin-bottom: 0.7rem;
  &:hover {
    background: rgba(255,255,255,0.9);
  }
}

.q-separator {
  margin: 0.5rem 0;
}

body.body--dark {
  .q-card {
    background: rgba(30,30,30,0.96);
    box-shadow: 0 4px 24px rgba(0,0,0,0.18);
    border: 1px solid rgba(255,255,255,0.08);
  }
  .q-card-section {
    color: var(--q-primary);
  }
  .q-select, .q-input {
    background: rgba(255,255,255,0.08);
    &:hover {
      background: rgba(255,255,255,0.13);
    }
  }
}

@media (max-width: 900px) {
  .q-card {
    margin-bottom: 1rem;
  }
}

@media (max-width: 600px) {
  .sessao-container {
    padding: 0.5rem 0.2rem;
  }
  .q-card {
    border-radius: 12px;
    padding: 0.5rem;
  }
  .q-card-section {
    padding: 1rem !important;
    font-size: 1rem;
  }
  .q-btn {
    font-size: 0.85rem;
    padding: 0.15rem 0.5rem;
  }
  .absolute-top-right.q-pa-sm {
    position: static !important;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 8px;
    margin-top: 8px;
  }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.attention-button {
  animation: shrink 1s ease-in-out 2;
}

@keyframes shrink {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
}

.q-btn.attention {
  animation: none;
}
</style>
