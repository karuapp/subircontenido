<template>
  <div v-if="userProfile === 'admin'">
    <q-tabs
      v-model="tab"
      dense
      class="text-grey"
      active-color="primary"
      indicator-color="primary"
      align="justify"
      narrow-indicator
    >
      <q-tab name="config" :label="$t('configuracaoMeta.tabs.config')" />
      <q-tab name="templates" :label="$t('configuracaoMeta.tabs.templates')" />
    </q-tabs>

    <q-separator />

    <q-tab-panels v-model="tab" animated>
      <!-- Aba de Configurações -->
      <q-tab-panel name="config" class="q-pa-none">
        <q-list class="text-weight-medium">

          <q-item tag="label" v-ripple>
            <q-item-section @click="copiarLink">
              <q-item-label>{{ $t('configuracaoMeta.webhookMeta') }}</q-item-label>
              <q-item-label caption>{{ montarUrlIntegração() }}</q-item-label>
            </q-item-section>
            <q-tooltip content-class="bg-negative text-bold">
              {{ $t('configuracaoMeta.webhookTooltip') }}
            </q-tooltip>

            <q-item-section avatar>
              <p v-if="this.webhookChecked" class="text-weight-medium text-nowrap q-pr-md blur-effect">
                <span class="text-bold">Webhook: </span>
                {{ formatarDataBrasil(this.webhookChecked) }}
              </p>
            </q-item-section>
          </q-item>

          <div class="row q-px-md">
            <div class="col-12" style="margin-top: 20px;">
              <q-input
                class="blur-effect custom-input-padding"
                v-model="metaToken"
                :type="showMetaToken ? 'text' : 'password'"
                dense
                outlined
                :label="$t('configuracaoMeta.metaTokenLabel')"
                input-style="min-height: 40px; max-height: 60px;"
                debounce="700"
                @input="alterarMetaToken()"
              >
                <template v-slot:append>
                  <q-btn
                    round
                    dense
                    flat
                    icon="refresh"
                    @click="gerarNovoMetaToken"
                    :loading="loadingToken"
                  >
                    <q-tooltip>{{ $t('configuracoesWebchat.generateNewToken') || 'Gerar novo token' }}</q-tooltip>
                  </q-btn>
                  <q-icon
                    :name="showMetaToken ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer q-ml-sm"
                    @click="showMetaToken = !showMetaToken"
                  />
                </template>
              </q-input>
            </div>
          </div>

          <q-item tag="label" v-ripple style="margin-top: 20px;">
            <q-item-section>
              <q-item-label>{{ $t('configuracaoMeta.testBMTitle') }}</q-item-label>
              <q-item-label caption>{{ $t('configuracaoMeta.testBMDescription') }}</q-item-label>
            </q-item-section>
            <q-tooltip content-class="bg-negative text-bold">
              {{ $t('configuracaoMeta.testBMTooltip') }}
            </q-tooltip>
          </q-item>

          <div class="row q-px-md">
            <div class="col-12 q-mt-md">
              <q-input
                v-model="wabaId"
                class="custom-input-padding"
                outlined
                dense
                :label="$t('configuracaoMeta.wabaIdLabel')"
              />
            </div>
            <div class="col-12 q-mt-md">
              <q-input
                v-model="wabaVersion"
                class="custom-input-padding"
                outlined
                dense
                :label="$t('configuracaoMeta.wabaVersionLabel')"	
              />
            </div>
            <div class="col-12 q-mt-md">
              <q-input
                v-model="wabaToken"
                class="custom-input-padding"
                outlined
                dense
                :label="$t('configuracaoMeta.wabaTokenLabel')"
              />
            </div>
            <div class="col-12 q-mt-md">
              <q-btn
                :label="$t('configuracaoMeta.verifyBMButton')"
                color="primary"
                @click="verificarBM()"
              />
            </div>
            <div class="col-12 q-mt-md">
              <q-card v-if="wabaResponse && wabaResponse.data" class="q-pa-md bg-grey-1">
                <q-card-section>
                  <h4 class="text-primary text-bold">{{ $t('configuracaoMeta.verificationResultTitle') }}</h4>
                </q-card-section>

                <q-separator spaced />

                <q-card-section v-for="(item, index) in wabaResponse.data" :key="index" class="q-mb-md">
                  <q-list>
                    <q-item>
                      <q-item-section>
                        <p><strong>{{ $t('configuracaoMeta.verification.verifiedName') }}:</strong> {{ item.verified_name }}</p>
                      </q-item-section>
                    </q-item>
                    <q-separator />
                    <q-item>
                      <q-item-section>
                        <p><strong>{{ $t('configuracaoMeta.verification.verificationStatus') }}:</strong> {{ item.code_verification_status }}</p>
                      </q-item-section>
                    </q-item>
                    <q-separator />
                    <q-item>
                      <q-item-section>
                        <p><strong>{{ $t('configuracaoMeta.verification.phoneNumber') }}:</strong> {{ item.display_phone_number }}</p>
                      </q-item-section>
                    </q-item>
                    <q-separator />
                    <q-item>
                      <q-item-section>
                        <p><strong>{{ $t('configuracaoMeta.verification.qualityRating') }}:</strong> {{ item.quality_rating }}</p>
                      </q-item-section>
                    </q-item>
                    <q-separator />
                    <q-item>
                      <q-item-section>
                        <p><strong>{{ $t('configuracaoMeta.verification.platformType') }}:</strong> {{ item.platform_type }}</p>
                      </q-item-section>
                    </q-item>
                    <q-separator />
                    <q-item>
                      <q-item-section>
                        <p><strong>{{ $t('configuracaoMeta.verification.throughputLevel') }}:</strong> {{ item.throughput?.level || $t('configuracaoMeta.notConfigured') }}</p>
                      </q-item-section>
                    </q-item>
                    <q-separator />
                    <q-item>
                      <q-item-section>
                        <p><strong>{{ $t('configuracaoMeta.verification.webhookConfigured') }}:</strong> {{ item.webhook_configuration?.application || $t('configuracaoMeta.notConfigured') }}</p>
                      </q-item-section>
                    </q-item>
                    <q-separator />
                    <q-item>
                      <q-item-section>
                        <p><strong>{{ $t('configuracaoMeta.verification.id') }}:</strong> {{ item.id }}</p>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-card-section>
              </q-card>
            </div>
          </div>

        </q-list>
      </q-tab-panel>

      <!-- Aba de Templates -->
      <q-tab-panel name="templates" class="q-pa-none">
        <ConfiguracoesMetaTemplates />
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script>
const usuario = JSON.parse(localStorage.getItem('usuario'))
import { ListarTenantPorId, AlterarTenantMeta } from 'src/service/tenants.js'
import { defineComponent } from 'vue'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import { VerificarBM } from 'src/service/waba.js'
import { v4 as uuidv4 } from 'uuid'
import ConfiguracoesMetaTemplates from './ConfiguracoesMetaTemplates.vue'

export default defineComponent({
  name: 'IndexConfiguracoes',
  components: {
    ConfiguracoesMetaTemplates
  },
  data() {
    return {
      tab: 'config',
      usuario,
      metaToken: '',
      webhookChecked: '',
      wabaId: '',
      wabaVersion: '',
      wabaToken: '',
      wabaResponse: null,
      loading: false,
      userProfile: 'user',
      loadingToken: false,
      showMetaToken: false
    }
  },
  computed: {
    cBaseUrlIntegração () {
      return `${process.env.URL_API}/metaWebhook`
    }
  },
  methods: {
    async verificarBM() {
      try {
        const data = {
          wabaId: this.wabaId,
          wabaVersion: this.wabaVersion,
          wabaToken: this.wabaToken,
        };
        const response = await VerificarBM(data);
        this.wabaResponse = { data: response.data.data };
        this.$q.notify({
          type: 'positive',
          message: this.$t('configuracaoMeta.notifications.successVerify'),
          timeout: 2000,
        });
      } catch (error) {
        console.error('Erro na verificação:', error);
        this.$q.notify({
          type: 'negative',
          message: this.$t('configuracaoMeta.notifications.errorVerify'),
          timeout: 2000,
        });
      }
    },
    copiarLink() {
      const link = `${this.cBaseUrlIntegração}/${this.usuario.tenantId}`;
      
      const tempInput = document.createElement('input');
      tempInput.value = link;
      document.body.appendChild(tempInput);

      tempInput.select();
      document.execCommand('copy');

      document.body.removeChild(tempInput);

      this.$q.notify({
        message: this.$t('configuracaoMeta.notifications.successCopy'),
        color: 'positive',
        position: 'top',
        timeout: 2000
      });
    },
    formatarDataBrasil(data) {
      const dataObjeto = new Date(data);
      return format(dataObjeto, 'dd/MM/yyyy HH:mm:ss', { locale: es });
    },
    montarUrlIntegração() {
      return `${this.cBaseUrlIntegração}/${this.usuario.tenantId}`
    },
    formatarData(data) {
      const dataFormatada = new Date(data);
      return dataFormatada.toLocaleDateString('es');
    },
    async alterarMetaToken(){
      try {
        await AlterarTenantMeta({
          id: this.usuario.tenantId,
          metaToken: this.metaToken,
        })
        this.$q.notify({
          type: 'positive',
          message: this.$t('common.notifications.success'),
          progress: true,
          actions: [{ icon: 'close', round: true, color: 'white' }],
        })
      } catch (error) {
        console.error('error - AlterarConfiguracao', error)
        this.$notificarErro(this.$t('common.notifications.error'), error)
      } 
    },
    async listarTenantPorId(){
      this.loading = true; 
      const { data } = await ListarTenantPorId(this.usuario.tenantId)
      this.metaToken = data[0].metaToken
      this.webhookChecked = data[0].webhookChecked
    },
    async gerarNovoMetaToken() {
      try {
        this.loadingToken = true
        const novoToken = uuidv4()
        await AlterarTenantMeta({
          id: this.usuario.tenantId,
          metaToken: novoToken,
        })
        this.metaToken = novoToken
        this.$q.notify({
          color: 'positive',
          message: this.$t('configuracaoMeta.tokenUpdated') || 'Token atualizado com sucesso!',
          icon: 'check'
        })
      } catch (error) {
        console.error('Erro ao gerar novo token:', error)
        this.$q.notify({
          color: 'negative',
          message: this.$t('configuracaoMeta.tokenError') || 'Erro ao gerar novo token',
          icon: 'error'
        })
      } finally {
        this.loadingToken = false
      }
    },
  },
  async mounted() {
    await this.listarTenantPorId()
    this.userProfile = localStorage.getItem('profile')
  },
})
</script>

<style lang="scss" scoped>
.q-list {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.10);
  border: 1px solid rgba(0,0,0,0.04);
  transition: all 0.3s ease;
  padding: 18px 18px 10px 18px;
  margin-top: 18px;
  margin-bottom: 18px;
}

.q-item {
  border-radius: 8px;
  margin-bottom: 16px;
  transition: all 0.3s ease;
  &:hover {
    background: rgba(0,0,0,0.03);
  }
  .q-item__label {
    font-weight: 500;
  }
  .q-item__label--caption {
    opacity: 0.7;
  }
}

.row.q-px-md {
  margin-bottom: 18px;
  &:last-of-type {
    margin-bottom: 0;
  }
  .col-12 {
    margin-bottom: 0;
  }
}

.q-input {
  .q-field__control {
    background: rgba(255, 255, 255, 0.7);
    border-radius: 8px;
    transition: all 0.3s ease;
    &:hover {
      background: rgba(255, 255, 255, 0.9);
    }
  }
  &.q-field--focused .q-field__control {
    background: rgba(255, 255, 255, 0.95);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
}

.q-card.bg-grey-1 {
  background: rgba(245,245,245,0.85) !important;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  margin-top: 12px;
  margin-bottom: 12px;
}

.q-tabs {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 8px 8px 0 0;
  margin-bottom: 0;
}

.q-tab-panels {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 0 0 8px 8px;
  min-height: 400px;
}

/* Modo Escuro */
body.body--dark {
  .q-list {
    background: rgba(30, 30, 30, 0.95);
    border-color: rgba(255,255,255,0.08);
    box-shadow: 0 4px 16px rgba(0,0,0,0.25);
  }
  .q-item {
    &:hover {
      background: rgba(255,255,255,0.07);
    }
  }
  .q-input {
    .q-field__control {
      background: rgba(255,255,255,0.05);
      &:hover {
        background: rgba(255,255,255,0.1);
      }
    }
    &.q-field--focused .q-field__control {
      background: rgba(255,255,255,0.15);
    }
  }
  .q-card.bg-grey-1 {
    background: rgba(40,40,40,0.95) !important;
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  }
  .q-tabs {
    background: rgba(30, 30, 30, 0.95);
  }
  
  .q-tab-panels {
    background: rgba(30, 30, 30, 0.95);
  }
}

/* Responsividade */
@media (max-width: 1024px) {
  .q-list {
    padding: 10px 6px 6px 6px;
    border-radius: 10px;
    margin-top: 8px;
    margin-bottom: 8px;
  }
  .q-item {
    margin-bottom: 10px;
  }
  .row.q-px-md {
    margin-bottom: 10px;
  }
  .q-card.bg-grey-1 {
    border-radius: 8px;
    margin-top: 6px;
    margin-bottom: 6px;
  }
}

.custom-input-padding .q-field__native {
  padding-bottom: 16px !important;
  padding-top: 16px !important;
  padding-left: 12px !important;
  padding-right: 12px !important;
  line-height: 1.6 !important;
  font-size: 1.1em;
  box-sizing: border-box;
}
</style>
