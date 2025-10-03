<template>
  <q-page class="q-pa-md" v-if="userProfile === 'superadmin'">
    <q-tabs
      v-model="tab"
      class="text-primary"
      active-color="primary"
      indicator-color="primary"
      align="justify"
      narrow-indicator
    >
      <q-tab name="colors" :label="$t('customizar.tabs.colors')" />
      <q-tab name="branding" :label="$t('customizar.tabs.branding')" />
      <q-tab name="tutorials" :label="$t('customizar.tabs.tutorials')" />
      <q-tab name="forceLogout" :label="$t('customizar.tabs.forceLogout')" />
      <q-tab name="masterkey" :label="$t('customizar.tabs.masterkey')" />
    </q-tabs>

    <q-tab-panels v-model="tab" animated>
      <!-- Tab de Cores -->
      <q-tab-panel name="colors">
        <q-card flat bordered class="my-card compact-card">
          <q-card-section>
            <div class="text-center q-pa-xs">
              {{ $t('customizar.chooseColors') }}
            </div>
          </q-card-section>
          <q-card-section>
            <div class="row q-col-gutter-xs justify-start items-start compact-row">
              <div style="margin: 15px;" class="col-6 col-sm-4 col-md-2 col-lg-1 flex justify-center" v-for="(label, key) in colorDefs" :key="key">
                <div class="color-title text-center q-mb-xs">{{ label }}</div>
                <q-color v-model="colors[key]" class="color-picker-compact" />
              </div>
            </div>
          </q-card-section>
          <q-card-actions align="right" class="q-pa-md">
            <q-btn color="primary" @click="saveColorsToBackend">{{ $t('customizar.saveColors') }}</q-btn>
            <q-btn color="negative" @click="applyColors">{{ $t('customizar.applyColors') }}</q-btn>
          </q-card-actions>
        </q-card>
      </q-tab-panel>

      <!-- Tab de Branding -->
      <q-tab-panel name="branding">
        <div class="row q-col-gutter-sm">
          <!-- Card para Logo -->
          <q-card flat bordered class="my-card col-12 col-md-3">
            <q-card-section class="q-pa-sm">
              <div class="text-center">
                {{ $t('customizar.logo.title') }}
              </div>
            </q-card-section>
            <q-card-section class="q-pa-sm">
              <div class="text-center" style="height: 60px;">
                <q-img :src="logoUrl" spinner-color="primary" style="height: 40px; width: 100px" />
              </div>
            </q-card-section>
            <q-card-section class="q-pa-sm">
              <q-input filled dense style="width: 100%;">
                <template v-slot:prepend>
                  <q-icon name="image" />
                </template>
                <template v-slot:append>
                  <q-btn @click="triggerLogoFileInput" :label="$t('customizar.logo.chooseFile')" color="primary" flat dense />
                </template>
                <input ref="logoFileInput" type="file" @change="handleLogoFileUpload" style="display: none;" accept=".jpg,.jpeg,.png" />
              </q-input>
            </q-card-section>
            <q-card-actions align="right" class="q-pa-sm">
              <q-btn color="primary" @click="uploadLogoFile" :disable="!selectedLogoFile" flat dense>{{ $t('customizar.logo.upload') }}</q-btn>
            </q-card-actions>
          </q-card>

          <!-- Card para Logo Escura -->
          <q-card flat bordered class="my-card col-12 col-md-3">
            <q-card-section class="q-pa-sm">
              <div class="text-center">
                {{ $t('customizar.logoDark.title') || 'Logo Escura' }}
              </div>
            </q-card-section>
            <q-card-section class="q-pa-sm">
              <div class="text-center" style="height: 60px;">
                <q-img :src="logoDarkUrl" spinner-color="primary" style="height: 40px; width: 100px" />
              </div>
            </q-card-section>
            <q-card-section class="q-pa-sm">
              <q-input filled dense style="width: 100%;">
                <template v-slot:prepend>
                  <q-icon name="dark_mode" />
                </template>
                <template v-slot:append>
                  <q-btn @click="triggerLogoDarkFileInput" :label="$t('customizar.logoDark.chooseFile') || 'Escolher'" color="primary" flat dense />
                </template>
                <input ref="logoDarkFileInput" type="file" @change="handleLogoDarkFileUpload" style="display: none;" accept=".jpg,.jpeg,.png" />
              </q-input>
            </q-card-section>
            <q-card-actions align="right" class="q-pa-sm">
              <q-btn color="primary" @click="uploadLogoDarkFile" :disable="!selectedLogoDarkFile" flat dense>{{ $t('customizar.logoDark.upload') || 'Upload' }}</q-btn>
            </q-card-actions>
          </q-card>

          <!-- Card para Favicon -->
          <q-card flat bordered class="my-card col-12 col-md-3">
            <q-card-section class="q-pa-sm">
              <div class="text-center">
                {{ $t('customizar.favicon.title') }}
              </div>
            </q-card-section>
            <q-card-section class="q-pa-sm">
              <div class="text-center" style="height: 60px;">
                <q-img :src="iconUrl" spinner-color="primary" style="height: 16px; width: 16px" />
              </div>
            </q-card-section>
            <q-card-section class="q-pa-sm">
              <q-input filled dense style="width: 100%;">
                <template v-slot:prepend>
                  <q-icon name="favorite" />
                </template>
                <template v-slot:append>
                  <q-btn @click="triggerIconFileInput" :label="$t('customizar.favicon.chooseFile')" color="primary" flat dense />
                </template>
                <input ref="iconFileInput" type="file" @change="handleIconFileUpload" style="display: none;" accept=".ico" />
              </q-input>
            </q-card-section>
            <q-card-actions align="right" class="q-pa-sm">
              <q-btn color="primary" @click="uploadIconFile" :disable="!selectedIconFile" flat dense>{{ $t('customizar.favicon.upload') }}</q-btn>
            </q-card-actions>
          </q-card>

          <!-- Card para Vídeo -->
          <q-card flat bordered class="my-card col-12 col-md-3">
            <q-card-section class="q-pa-sm">
              <div class="text-center">
                {{ $t('customizar.video.title') }}
              </div>
            </q-card-section>
            <q-card-section class="q-pa-sm">
              <div class="text-center" style="height: 60px;">
                <video v-if="videoUrl" :src="videoUrl" controls style="max-width: 100%; max-height: 100px;"></video>
                <div v-else class="text-grey">Nenhum vídeo selecionado</div>
              </div>
            </q-card-section>
            <q-card-section class="q-pa-sm">
              <q-input filled dense style="width: 100%;">
                <template v-slot:prepend>
                  <q-icon name="movie" />
                </template>
                <template v-slot:append>
                  <q-btn @click="triggerVideoFileInput" :label="$t('customizar.video.chooseFile')" color="primary" flat dense />
                </template>
                <input ref="videoFileInput" type="file" @change="handleVideoFileUpload" style="display: none;" accept=".mp4" />
              </q-input>
            </q-card-section>
            <q-card-actions align="right" class="q-pa-sm">
              <q-btn color="primary" @click="uploadVideoFile" :disable="!selectedVideoFile" flat dense>{{ $t('customizar.video.upload') }}</q-btn>
            </q-card-actions>
          </q-card>

          <!-- Card para Nome do Aplicativo -->
          <q-card flat bordered class="my-card col-12 col-md-3">
            <q-card-section class="q-pa-sm">
              <div class="text-center">
                {{ $t('customizar.appName.title') }}
              </div>
            </q-card-section>
            <q-card-section class="q-pa-sm">
              <q-input
                v-model="appName"
                :label="$t('customizar.appName.label')"
                filled
                dense
                style="width: 100%;"
              >
                <template v-slot:prepend>
                  <q-icon name="edit" />
                </template>
              </q-input>
            </q-card-section>
            <q-card-actions align="right" class="q-pa-sm">
              <q-btn color="primary" @click="updateAppName" flat dense>{{ $t('customizar.appName.update') }}</q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </q-tab-panel>

      <!-- Tab de Tutoriais -->
      <q-tab-panel name="tutorials">
        <q-card flat bordered class="my-card q-mb-md">
          <q-card-section>
            <q-item tag="label" v-ripple class="responsive-item">
            <!-- Texto do Item -->
            <q-item-section class="text-section">
              <q-item-label>{{ $t('configuracoesGerais.labels.postmanLink') }}</q-item-label>
              <q-item-label caption>{{ $t('configuracoesGerais.captions.postmanLink') }}</q-item-label>
            </q-item-section>

            <!-- Input Responsivo -->
            <q-item-section avatar class="input-section">
              <q-input
                v-model="postmanLink"
                type="text"
                dense
                outlined
                debounce="700"
                @update:model-value="() => alterarTenantPostmanLink('postmanLink')"
              />
            </q-item-section>
          </q-item>
          </q-card-section>
        </q-card>
        <ConfiguracoesTutoriais />
      </q-tab-panel>

      <!-- Tab de Force Logout -->
      <q-tab-panel name="forceLogout">
        <q-card flat bordered class="my-card">
          <q-card-section>
            <div class="text-h6 q-mb-md">{{ $t('customizar.forceLogout.title') }}</div>
            <div class="text-caption q-mb-lg">
              {{ $t('customizar.forceLogout.description') }}
            </div>
          </q-card-section>
          <q-card-section>
            <div class="row q-col-gutter-md">
              <div class="col-12 col-md-6">
                <q-select
                  v-model="selectedTenant"
                  :options="tenantsList"
                  option-label="name"
                  :label="$t('customizar.forceLogout.selectTenant')"
                  filled
                  dense
                  @update:model-value="loadTenantForceLogoutConfig"
                >
                  <template v-slot:prepend>
                    <q-icon name="business" />
                  </template>
                  <template v-slot:option="{ itemProps, opt }">
                    <q-item v-bind="itemProps">
                      <q-item-section>
                        <q-item-label>{{ opt.name }}</q-item-label>
                        <q-item-label caption>
                          {{ $t('customizar.forceLogout.forceLogout') }}: 
                          <span :class="opt.forceLogout === 'enabled' ? 'text-positive' : 'text-grey'">
                            {{ opt.forceLogout === 'enabled' ? $t('customizar.forceLogout.enabled') : $t('customizar.forceLogout.disabled') }}
                          </span>
                        </q-item-label>
                      </q-item-section>
                      <q-item-section side>
                        <q-icon 
                          :name="opt.forceLogout === 'enabled' ? 'security' : 'lock_open'" 
                          :color="opt.forceLogout === 'enabled' ? 'positive' : 'grey'"
                        />
                      </q-item-section>
                    </q-item>
                  </template>
                </q-select>
              </div>
              <div class="col-12 col-md-6">
                <q-toggle
                  v-model="forceLogoutEnabled"
                  :label="forceLogoutEnabled ? $t('customizar.forceLogout.forceLogoutEnabled') : $t('customizar.forceLogout.forceLogoutDisabled')"
                  color="primary"
                  :disable="!selectedTenant"
                />
              </div>
            </div>
            
            <div v-if="selectedTenant" class="q-mt-md">
              <q-banner 
                :class="forceLogoutEnabled ? 'bg-positive text-white' : 'bg-grey-4 text-grey-8'"
                class="q-mb-md"
              >
                <template v-slot:avatar>
                  <q-icon :name="forceLogoutEnabled ? 'security' : 'lock_open'" />
                </template>
                <div class="text-weight-medium">
                  {{ selectedTenant?.name || 'Tenant' }}
                </div>
                <div class="text-caption">
                  {{ forceLogoutEnabled 
                    ? $t('customizar.forceLogout.warning1') 
                    : $t('customizar.forceLogout.warning2') 
                  }}
                </div>
              </q-banner>
            </div>
          </q-card-section>
        </q-card>
      </q-tab-panel>

      <!-- Tab de Masterkey -->
      <q-tab-panel name="masterkey">
        <q-card flat bordered class="my-card">
          <q-card-section>
            <div class="text-h6 q-mb-md">{{ $t('customizar.masterkey.title') }}</div>
            <div class="text-caption q-mb-lg">
              {{ $t('customizar.masterkey.description') }}
            </div>
          </q-card-section>
          <q-card-section>
            <div class="row q-col-gutter-md">
              <div class="col-12 col-md-6">
                <q-toggle
                  v-model="masterkeyEnabled"
                  :label="masterkeyEnabled ? $t('customizar.masterkey.enabled') : $t('customizar.masterkey.disabled')"
                  color="primary"
                  @update:model-value="updateMasterkeyConfig"
                />
              </div>
              <div class="col-12 col-md-6">
                <q-input
                  v-model="masterkeyValue"
                  :label="$t('customizar.masterkey.keyLabel')"
                  :type="showMasterkey ? 'text' : 'password'"
                  filled
                  dense
                  :disable="!masterkeyEnabled"
                  @update:model-value="updateMasterkeyConfig"
                >
                  <template v-slot:prepend>
                    <q-icon name="vpn_key" />
                  </template>
                  <template v-slot:append>
                    <q-btn
                      :icon="showMasterkey ? 'visibility_off' : 'visibility'"
                      flat
                      dense
                      @click="showMasterkey = !showMasterkey"
                      :disable="!masterkeyEnabled"
                    />
                  </template>
                </q-input>
                <div class="q-mt-sm">
                  <q-btn
                    :label="$t('customizar.masterkey.generateRandom')"
                    color="primary"
                    outline
                    dense
                    :disable="!masterkeyEnabled"
                    @click="generateRandomMasterkey"
                    class="full-width"
                  >
                    <template v-slot:prepend>
                      <q-icon name="refresh" />
                    </template>
                  </q-btn>
                </div>
              </div>
            </div>
            
            <div v-if="masterkeyEnabled" class="q-mt-md">
              <q-banner 
                class="bg-warning text-black q-mb-md"
              >
                <template v-slot:avatar>
                  <q-icon name="warning" />
                </template>
                <div class="text-weight-medium">
                  {{ $t('customizar.masterkey.warningTitle') }}
                </div>
                <div class="text-caption">
                  {{ $t('customizar.masterkey.warningText') }}
                </div>
              </q-banner>
            </div>

            <div v-if="masterkeyLog" class="q-mt-md">
              <q-card flat bordered class="bg-grey-1">
                <q-card-section>
                  <div class="text-subtitle2 q-mb-sm">{{ $t('customizar.masterkey.lastUsed') }}</div>
                  <div class="text-caption" style="white-space: pre-line;">{{ masterkeyLog }}</div>
                </q-card-section>
              </q-card>
            </div>
          </q-card-section>
        </q-card>
      </q-tab-panel>
    </q-tab-panels>

    <!-- Rodapé com Botões de Ação -->
    <div class="row justify-end q-mt-md" v-if="tab === 'colors' || tab === 'branding'">
      <q-card flat bordered class="my-card col-12">
        <div class="text-center q-pa-sm">
          <div v-if="loadingBar" class="q-mb-sm">
            <div>{{ $t('customizar.frontend.rebuildMessage') }}</div>
            <div class="loading-bar">
              <div class="bar"></div>
            </div>
          </div>
          <q-banner class="bg-yellow text-black q-mb-sm" inline-actions>{{ $t('customizar.frontend.warning') }}</q-banner>
          <q-btn style="margin-top: 10px; margin-bottom: 20px; margin-left:10px; margin-right: 10px" color="negative" @click="buildFrontend" :disable="loadingBar">
            {{ $t('customizar.frontend.rebuildButton') }}
          </q-btn>
        </div>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { UploadLogo, UploadIcon, UpdateName, Build, UploadVideo, UploadLogoDark } from 'src/service/customizar.js';
import { MostrarCores, AtualizarCores } from 'src/service/empresas.js';
import ConfiguracoesTutoriais from 'src/pages/configuracoes/ConfiguracoesTutoriais.vue';
import { AlterarTenantPostmanLink, ListarTenants, AlterarTenantForcarLogout, AlterarTenantMasterKey } from 'src/service/tenants.js';
import { i18n } from 'src/boot/i18n'

export default {
  components: {
    ConfiguracoesTutoriais
  },
  computed: {
    // Obtém o objeto de labels via i18n (Vue 3) garantindo compat com v9
    colorDefs () {
      try {
        const defs = i18n?.global?.tm && i18n.global.tm('customizar.colors')
        if (defs && typeof defs === 'object') return defs
      } catch (e) { /* ignore */ }
      // Fallback seguro usando chaves individuais
      return {
        neutral: this.$t('customizar.colors.neutral') || 'Cor Neutra',
        primary: this.$t('customizar.colors.primary') || 'Cor Primária',
        secondary: this.$t('customizar.colors.secondary') || 'Cor Secundária',
        accent: this.$t('customizar.colors.accent') || 'Cor de Destaque',
        warning: this.$t('customizar.colors.warning') || 'Cor de Aviso',
        negative: this.$t('customizar.colors.negative') || 'Cor Negativa',
        positive: this.$t('customizar.colors.positive') || 'Cor Positiva',
        light: this.$t('customizar.colors.light') || 'Cor Clara'
      }
    }
  },
  data() {
    return {
      tab: 'colors',
      userProfile: 'user',
      loadingBar: false,
      appName: '',
      logoUrl: '/logo.png',
      logoDarkUrl: '/logo_dark.png',
      iconUrl: '/favicon.ico',
      videoUrl: '/assets/110694.mp4',
      selectedLogoFile: null,
      selectedLogoDarkFile: null,
      selectedIconFile: null,
      selectedVideoFile: null,
      colors: {},
      postmanLink: 'https://documenter.getpostman.com/view/48685409/2sB3QDwD7N',
      selectedTenant: null,
      tenantsList: [],
      forceLogoutEnabled: false,
      masterkeyEnabled: false,
      masterkeyValue: '',
      showMasterkey: false,
      masterkeyLog: '',
      // Sistema de gerenciamento de memória
      timers: []
    };
  },
  created() {
    this.loadColorsFromBackend();
    this.loadTenantsList();
    this.loadMasterkeyConfig();
  },
  mounted() {
    this.userProfile = localStorage.getItem('profile');
    this.usuario = JSON.parse(localStorage.getItem('usuario'))
  },
  watch: {
    forceLogoutEnabled(newVal, oldVal) {
      if (this.selectedTenant && newVal !== oldVal) {
        this.updateForceLogoutConfig();
      }
    },
    selectedTenant(newVal, oldVal) {
      if (newVal && newVal !== oldVal) {
        this.loadTenantForceLogoutConfig();
      }
    }
  },
  
  beforeUnmount() {
    // Limpeza completa de memória
    this.cleanupMemory();
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
    applyColors() {
      const root = document.documentElement;
      root.style.setProperty("--q-neutral", this.colors.neutral);
      root.style.setProperty("--q-primary", this.colors.primary);
      root.style.setProperty("--q-secondary", this.colors.secondary);
      root.style.setProperty("--q-accent", this.colors.accent);
      root.style.setProperty("--q-warning", this.colors.warning);
      root.style.setProperty("--q-negative", this.colors.negative);
      root.style.setProperty("--q-positive", this.colors.positive);
      root.style.setProperty("--q-light", this.colors.light);
    },
    async loadColorsFromBackend() {
      try {
        const response = await MostrarCores();
        if (response.status === 200) {
          const companyData = response.data[0] || {};
          const colorsArray = Array.isArray(companyData.systemColors) ? companyData.systemColors : [];
          this.colors = colorsArray.reduce((acc, colorObj = {}) => {
            const key = String(colorObj.label || colorObj.name || colorObj.key || '').toLowerCase().trim();
            const val = (
              colorObj.value ??
              (key && (colorObj[key] ?? undefined)) ??
              colorObj.hex ?? colorObj.color ?? null
            );
            if (key && typeof val === 'string') acc[key] = val.replace(/"/g, '');
            return acc;
          }, {});

          this.applyColors();
        } else {
          console.error('Erro ao carregar as cores');
        }
      } catch (error) {
        console.error('Erro ao carregar as cores:', error);
      }
    },
    async saveColorsToBackend() {
      try {
        const colorsArray = Object.keys(this.colors).map(key => ({
          label: key.charAt(0).toUpperCase() + key.slice(1),
          [key]: this.colors[key]
        }));

        // Remover aspas dos valores
        const fixedColorsArray = colorsArray.map(color => {
          const newColor = {};
          Object.keys(color).forEach(key => {
            if (typeof color[key] === 'string') {
              newColor[key] = color[key].replace(/"/g, ''); // Remover aspas dos valores
            } else {
              newColor[key] = color[key];
            }
          });
          return newColor;
        });

        const response = await AtualizarCores(fixedColorsArray);
        if (response.status === 200) {
          console.log(this.$t('customizar.notifications.successSaveColors'));
        } else {
          console.error(this.$t('customizar.notifications.errorSaveColors'));
        }
      } catch (error) {
        console.error(this.$t('customizar.notifications.errorSaveColors'), error);
      }
    },
    triggerLogoFileInput() {
      this.$refs.logoFileInput.click();
    },
    handleLogoFileUpload(event) {
      const target = event.target;
      if (target.files && target.files.length > 0) {
        const file = target.files[0];
        const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
        const fileExtension = file.name.split('.').pop().toLowerCase();
        const allowedExtensions = ['jpg', 'jpeg', 'png'];
        
        if (!allowedTypes.includes(file.type) || !allowedExtensions.includes(fileExtension)) {
          this.$q.notify({
            type: 'negative',
            message: this.$t('customizar.notifications.errorLogo')
          });
          target.value = '';
          return;
        }
        
        this.selectedLogoFile = file;
      }
    },
    async uploadLogoFile() {
      if (!this.selectedLogoFile) return;

      const formData = new FormData();
      formData.append('file', this.selectedLogoFile);

      try {
        const response = await UploadLogo(formData);
        if (response.status === 200) {
          this.logoUrl = URL.createObjectURL(this.selectedLogoFile);
          console.log(this.$t('customizar.notifications.successUploadLogo'));
        } else {
          console.error(this.$t('customizar.notifications.errorUploadLogo'));
        }
      } catch (error) {
        console.error(this.$t('customizar.notifications.errorUploadLogo'), error);
      }
    },
    triggerLogoDarkFileInput() {
      this.$refs.logoDarkFileInput.click();
    },
    handleLogoDarkFileUpload(event) {
      const target = event.target;
      if (target.files && target.files.length > 0) {
        const file = target.files[0];
        const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
        const fileExtension = file.name.split('.').pop().toLowerCase();
        const allowedExtensions = ['jpg', 'jpeg', 'png'];
        
        if (!allowedTypes.includes(file.type) || !allowedExtensions.includes(fileExtension)) {
          this.$q.notify({
            type: 'negative',
            message: this.$t('customizar.notifications.errorLogo')
          });
          target.value = '';
          return;
        }
        
        this.selectedLogoDarkFile = file;
      }
    },
    async uploadLogoDarkFile() {
      if (!this.selectedLogoDarkFile) return;

      const formData = new FormData();
      formData.append('file', this.selectedLogoDarkFile);

      try {
        const response = await UploadLogoDark(formData);
        if (response.status === 200) {
          this.logoDarkUrl = URL.createObjectURL(this.selectedLogoDarkFile);
          console.log(this.$t('customizar.notifications.successUploadLogo') || 'Logo escura enviada com sucesso');
        } else {
          console.error(this.$t('customizar.notifications.errorUploadLogo') || 'Erro ao enviar logo escura');
        }
      } catch (error) {
        console.error(this.$t('customizar.notifications.errorUploadLogo') || 'Erro ao enviar logo escura', error);
      }
    },
    triggerIconFileInput() {
      this.$refs.iconFileInput.click();
    },
    handleIconFileUpload(event) {
      const target = event.target;
      if (target.files && target.files.length > 0) {
        const file = target.files[0];
        const fileExtension = file.name.split('.').pop().toLowerCase();
        
        if (fileExtension !== 'ico') {
          this.$q.notify({
            type: 'negative',
            message: this.$t('customizar.notifications.errorIcon')
          });
          target.value = '';
          return;
        }
        
        this.selectedIconFile = file;
      }
    },
    async uploadIconFile() {
      if (!this.selectedIconFile) return;

      const formData = new FormData();
      formData.append('file', this.selectedIconFile);

      try {
        const response = await UploadIcon(formData);
        if (response.status === 200) {
          this.iconUrl = URL.createObjectURL(this.selectedIconFile);
          console.log(this.$t('customizar.notifications.successUploadIcon'));
        } else {
          console.error(this.$t('customizar.notifications.errorUploadIcon'));
        }
      } catch (error) {
        console.error(this.$t('customizar.notifications.errorUploadIcon'), error);
      }
    },
    triggerVideoFileInput() {
      this.$refs.videoFileInput.click();
    },
    handleVideoFileUpload(event) {
      const target = event.target;
      if (target.files && target.files.length > 0) {
        const file = target.files[0];
        const fileExtension = file.name.split('.').pop().toLowerCase();
        
        if (fileExtension !== 'mp4') {
          this.$q.notify({
            type: 'negative',
            message: this.$t('customizar.notifications.errorVideo')
          });
          target.value = '';
          return;
        }

        if (file.size > 5 * 1024 * 1024) { // 5MB
          this.$q.notify({
            type: 'negative',
            message: this.$t('customizar.notifications.errorVideoSize')
          });
          target.value = '';
          return;
        }
        
        this.selectedVideoFile = file;
        this.videoUrl = URL.createObjectURL(file);
      }
    },
    async uploadVideoFile() {
      if (!this.selectedVideoFile) return;

      const formData = new FormData();
      formData.append('file', this.selectedVideoFile);

      try {
        const response = await UploadVideo(formData);
        if (response.status === 200) {
          this.$q.notify({
            type: 'positive',
            message: this.$t('customizar.notifications.successUploadVideo')
          });
        } else {
          this.$q.notify({
            type: 'negative',
            message: this.$t('customizar.notifications.errorUploadVideo')
          });
        }
      } catch (error) {
        this.$q.notify({
          type: 'negative',
          message: this.$t('customizar.notifications.errorUploadVideo')
        });
      }
    },
    async buildFrontend() {
      this.loadingBar = true
      try {
        const response = await Build();
        if (response.status === 200) {
          console.log(this.$t('customizar.notifications.successRebuildFrontend'));
        } else {
          console.error(this.$t('customizar.notifications.errorRebuildFrontend'));
        }
      } catch (error) {
        console.error(this.$t('customizar.notifications.errorRebuildFrontend'), error);
      }
      const timerId = setTimeout(() => {
        this.loadingBar = false;
        const timerId2 = setTimeout(() => {
          window.location.reload();
        }, 1000);
        this.addTimer(timerId2);
      }, 20000);
      this.addTimer(timerId);
    },
    async updateAppName() {
      if (!this.appName) {
        return;
      }

      try {
        const response = await UpdateName({ newAppName: this.appName });
        if (response.status === 200) {
          console.log(this.$t('customizar.notifications.successUpdateAppName'));
        } else {
          console.error(this.$t('customizar.notifications.errorUpdateAppName'));
        }
      } catch (error) {
        console.error(this.$t('customizar.notifications.errorUpdateAppName'), error);
      }
    },
    async alterarTenantPostmanLink(){
      try {
        await AlterarTenantPostmanLink({
          id: this.usuario.tenantId,
          postmanLink: this.postmanLink,
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
    async loadTenantsList() {
      try {
        const response = await ListarTenants();
        if (response.status === 200) {
          this.tenantsList = response.data.map(t => ({
            ...t,
            forceLogout: t.forceLogout || 'disabled'
          }));
        } else {
          console.error('Erro ao carregar a lista de tenants');
        }
      } catch (error) {
        console.error('Erro ao carregar a lista de tenants:', error);
      }
    },
    async loadTenantForceLogoutConfig() {
      if (!this.selectedTenant) {
        console.log('Nenhum tenant selecionado');
        return;
      }
      
      try {
        const tenant = this.selectedTenant;
        this.forceLogoutEnabled = tenant.forceLogout === 'enabled';
      } catch (error) {
        console.error('Erro ao carregar a configuração de force logout:', error);
      }
    },
    async updateForceLogoutConfig() {
      if (!this.selectedTenant) {
        console.log('Nenhum tenant selecionado');
        return;
      }
      
      try {     
        const requestData = {
          id: this.selectedTenant.id,
          forceLogout: this.forceLogoutEnabled ? 'enabled' : 'disabled'
        };
        
        const response = await AlterarTenantForcarLogout(requestData);
        
        if (response.status === 200) {
          this.$q.notify({
            type: 'positive',
            message: 'Configuração de force logout atualizada com sucesso',
            position: 'top',
            timeout: 3000,
            actions: [{
              icon: 'close',
              round: true,
              color: 'white'
            }]
          });
          // Atualizar o tenant na lista
          const tenantIndex = this.tenantsList.findIndex(t => t.id === this.selectedTenant.id);
          if (tenantIndex !== -1) {
            this.tenantsList[tenantIndex].forceLogout = this.forceLogoutEnabled ? 'enabled' : 'disabled';
            // Atualizar também o selectedTenant
            this.selectedTenant.forceLogout = this.forceLogoutEnabled ? 'enabled' : 'disabled';
          }
        } else {
          console.error('Error response:', response);
          this.$q.notify({
            type: 'negative',
            message: 'Erro ao atualizar a configuração de force logout',
            position: 'top',
            timeout: 3000,
            actions: [{
              icon: 'close',
              round: true,
              color: 'white'
            }]
          });
        }
      } catch (error) {
        console.error('=== ERROR UPDATE FORCE LOGOUT ===');
        console.error('Error details:', error);
        console.error('Error response:', error.response);
        this.$q.notify({
          type: 'negative',
          message: 'Erro ao atualizar a configuração de force logout',
          position: 'top',
          timeout: 3000,
          actions: [{
            icon: 'close',
            round: true,
            color: 'white'
          }]
        });
      }
    },
    async loadMasterkeyConfig() {
      try {
        // Buscar apenas o tenant 1 (master tenant)
        const response = await ListarTenants();
        if (response.status === 200) {
          const masterTenant = response.data.find(t => t.id === 1);
          if (masterTenant) {
            this.masterkeyEnabled = masterTenant.masterkeyEnabled === 'enabled';
            this.masterkeyValue = masterTenant.masterkey || '';
            this.masterkeyLog = masterTenant.masterkeyLog || '';
          }
        } else {
          console.error('Erro ao carregar a configuração do masterkey');
        }
      } catch (error) {
        console.error('Erro ao carregar a configuração do masterkey:', error);
      }
    },
    async updateMasterkeyConfig() {
      try {
        const requestData = {
          id: 1, // Sempre o tenant 1
          masterkey: this.masterkeyValue,
          masterkeyEnabled: this.masterkeyEnabled ? 'enabled' : 'disabled'
        };
        
        const response = await AlterarTenantMasterKey(requestData);
        
        if (response.status === 200) {
          this.$q.notify({
            type: 'positive',
            message: 'Configuração do masterkey atualizada com sucesso',
            position: 'top',
            timeout: 3000,
            actions: [{
              icon: 'close',
              round: true,
              color: 'white'
            }]
          });
        } else {
          console.error('Error response:', response);
          this.$q.notify({
            type: 'negative',
            message: 'Erro ao atualizar a configuração do masterkey',
            position: 'top',
            timeout: 3000,
            actions: [{
              icon: 'close',
              round: true,
              color: 'white'
            }]
          });
        }
      } catch (error) {
        console.error('Erro ao atualizar a configuração do masterkey:', error);
        this.$q.notify({
          type: 'negative',
          message: 'Erro ao atualizar a configuração do masterkey',
          position: 'top',
          timeout: 3000,
          actions: [{
            icon: 'close',
            round: true,
            color: 'white'
          }]
        });
      }
    },
    generateRandomMasterkey() {
      const length = 32; // Tamanho da chave
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let randomString = '';
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomString += characters[randomIndex];
      }
      this.masterkeyValue = randomString;
      this.updateMasterkeyConfig(); // Salva a chave gerada
    }
  }
};
</script>

<style lang="scss" scoped>
.color-title {
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 4px;
}
.compact-card {
  padding: 0 8px;
}
.compact-row {
  margin-left: 0;
  margin-right: 0;
}
.color-picker-compact {
  min-width: 70px;
  max-width: 250px;
  min-height: 90px;
  margin: 0 auto;
  box-shadow: 0 1px 4px rgba(0,0,0,0.07);
}

.my-card {
  margin: 0 auto;
  margin-top: 10px;
  transition: all 0.3s ease;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.my-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}

.q-card-section {
  padding: 12px;
}

.q-card-section:first-child {
  background: rgba(var(--q-primary-rgb), 0.05);
  padding: 0.8rem 1rem;
}

.q-card-actions {
  padding: 8px 12px;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  background: rgba(255, 255, 255, 0.95);
}

.loading-bar {
  width: 100%;
  height: 4px;
  background-color: rgba(0, 0, 0, 0.06);
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}

.loading-bar .bar {
  width: 0;
  height: 100%;
  background: linear-gradient(90deg, var(--q-primary), var(--q-secondary));
  position: absolute;
  top: 0;
  left: 0;
  animation: loadingAnimation 1.5s ease-in-out infinite;
  border-radius: 4px;
}

@keyframes loadingAnimation {
  0% {
    width: 0;
    left: -100%;
  }
  50% {
    width: 100%;
    left: 0;
  }
  100% {
    width: 0;
    left: 100%;
  }
}

.q-input {
  transition: all 0.3s ease;
}

.q-input .q-field__control {
  background: rgba(255, 255, 255, 0.7);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.q-input .q-field__control:hover {
  background: rgba(255, 255, 255, 0.9);
}

.q-input.q-field--focused .q-field__control {
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.q-btn {
  transition: all 0.3s ease;
  border-radius: 4px;
  font-weight: 500;
  letter-spacing: 0.1px;
  padding: 0.2rem 0.6rem;
  min-height: 24px;
  font-size: 0.85rem;
}

.q-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.my-card .q-btn {
  margin: 0 2px;
}

body.body--dark {
  .q-btn {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  }
  
  .q-btn:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  }
}

.q-btn .q-icon {
  font-size: 1.1rem;
}

@media (max-width: 1024px) {
  .my-card {
    margin: 10px 0;
    border-radius: 8px;
  }
  
  .q-card-section {
    padding: 8px;
  }

  .q-card-actions {
    padding: 8px;
  }
}

.q-banner {
  border-radius: 8px;
  margin: 8px 0;
  padding: 8px;
  transition: all 0.3s ease;
}

.q-banner.bg-yellow {
  background: #fffbe6 !important;
  color: #222 !important;
  border: 1px solid #ffe58f !important;
  box-shadow: 0 2px 8px rgba(255, 229, 143, 0.2);
}

body.body--dark {
  .q-banner.bg-yellow {
    background: #fffbe6 !important;
    color: #222 !important;
    border: 1px solid #ffe58f !important;
  }

  .my-card {
    background: rgba(30, 30, 30, 0.95);
    border-color: rgba(255, 255, 255, 0.1);
  }

  .q-input .q-field__control {
    background: rgba(255, 255, 255, 0.05);
  }

  .q-input .q-field__control:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  .q-input.q-field--focused .q-field__control {
    background: rgba(255, 255, 255, 0.15);
  }
}

.text-center[style*="height: 60px"] {
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.02);
  border-radius: 8px;
  margin: 8px 0;
  transition: all 0.3s ease;
}

.text-center[style*="height: 60px"]:hover {
  background: rgba(0, 0, 0, 0.04);
}

.q-color.color-picker-mini {
  min-width: 80px;
  max-width: 120px;
  min-height: 120px;
  max-height: 160px;
}

.q-color {
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.q-color:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}
</style>
