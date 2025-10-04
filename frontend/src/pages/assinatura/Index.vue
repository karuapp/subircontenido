<template>
  <div v-if="userProfile === 'superadmin'">
    <q-page padding>
      <q-card flat bordered class="q-pa-md">
        <q-card-section class="text-center">
          <div class="text-h5 text-primary">{{ $t('assinatura.pageTitle') }}</div>
          <div class="text-subtitle1 q-mt-sm">{{ $t('assinatura.pageSubtitle') }}</div>
        </q-card-section>

        <q-separator spaced />

        <q-card-section class="q-pa-md">
          <q-list separator>
            <q-item>
              <q-item-section avatar>
                <q-icon name="verified" color="primary" size="md" />
              </q-item-section>
              <q-item-section>
                <q-item-label caption>{{ $t('assinatura.licenseStatusLabel') }}
                  <q-chip
                    outline
                    :color="license === 'enabled' ? 'positive' : 'negative'"
                  >
                    {{ license === 'enabled' ? $t('assinatura.licenseActive') : $t('assinatura.licenseValidating') }}
                  </q-chip>
                </q-item-label>
              </q-item-section>
            </q-item>

            <q-item>
              <q-item-section avatar>
                <q-icon name="mdi-key-variant" color="primary" size="md" />
              </q-item-section>
              <q-item-section>
                <q-item-label class='blur-effect' caption>{{ $t('assinatura.license_code') }}
                  {{ license_code ? '*'.repeat(license_code.length) : '' }}
                </q-item-label>
              </q-item-section>
            </q-item>

            

            

            

          </q-list>
        </q-card-section>

        <q-card-actions align="center">
          <q-btn
            :label="$t('assinatura.updateLicenseButton')"
            color="primary"
            icon="edit"
            push
            @click="openEmailModal"
          />
          <q-btn
            color="primary"
            icon="refresh"
            push
            :disable="!canRefreshLicense"
            @click="refreshLicenseData()"
            >
            <q-tooltip>
              {{ $t('assinatura.lookForUpdatedData') }}
            </q-tooltip>
          </q-btn>
        </q-card-actions>
      </q-card>

      <q-dialog v-model="isEmailModalOpen" persistent>
        <q-card>
          <q-card-section>
            <div class="text-h6 text-primary">{{ $t('assinatura.modalTitle') }}</div>
            <div class="text-subtitle2 q-mt-sm">{{ $t('assinatura.modalSubtitle') }}</div>
          </q-card-section>

          <q-card-section>
            <q-input
              v-model="email"
              :label="$t('assinatura.emailFieldLabel')"
              outlined
              dense
              :rules="[val => !!val || $t('assinatura.emailFieldError')]"
            />
          </q-card-section>

          <q-card-actions align="right">
            <q-btn
              flat
              :label="$t('assinatura.cancelButton')"
              color="negative"
              @click="closeEmailModal"
            />
            <q-btn
              flat
              :label="$t('assinatura.saveButton')"
              color="positive"
              @click="saveEmail"
              :loading="loading"
            />
          </q-card-actions>
        </q-card>
      </q-dialog>

      <!-- Dialog para editar domínios -->
      <q-dialog v-model="isDomainModalOpen" persistent>
        <q-card>
          <q-card-section>
            <div class="text-h6 text-primary">{{ $t('assinatura.domainModalTitle') || 'Editar dominiosEditar dominios' }}</div>
            <div class="text-subtitle2 q-mt-sm">{{ $t('assinatura.domainModalSubtitle') || 'Actualizar dominios con licenciaActualizar dominios con licencia' }}</div>
          </q-card-section>

          <q-card-section>
            <q-input
              v-model="domainInput"
              :label="$t('assinatura.domainFieldLabel') || 'Dominios (separados por comas)Dominios (separados por comas)'"
              outlined
              dense
              type="textarea"
              :rules="[val => !!val || $t('assinatura.domainFieldError') || 'Dominios obligatoriosDominios obligatorios']"
              hint="Ex: exemplo1.com, exemplo2.com, exemplo3.com"
            />
          </q-card-section>

          <q-card-actions align="right">
            <q-btn
              flat
              :label="$t('assinatura.cancelButton') || 'Cancelar'"
              color="negative"
              @click="closeDomainModal"
            />
            <q-btn
              flat
              :label="$t('assinatura.saveButton') || 'Guardar'"
              color="positive"
              @click="saveDomains"
              :loading="domainLoading"
            />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </q-page>
  </div>
</template>

<script>
import { ListarTenants, AlterarEmail, ListarTenantsLs, AlterarTenantDomain, AlterarTenantRefreshLicenseData  } from "src/service/tenants.js";
import { MostrarCores, ValidarVersao } from "src/service/empresas.js";
import packageEnv from 'src/../package.json'

export default {
  name: "Assinaturas",
  data() {
    return {
      versionInfo: null,
      isEmailModalOpen: false,
      email: "",
      license: "disabled",
      license_code: "",
      product_name: "",
      license_expiry: "",
      domains: "",
      is_blocked: false,
      colors: {},
      userProfile: "user",
      loading: false,
      isDomainModalOpen: false,
      domainInput: "",
      domainLoading: false,
      canRefreshLicense: true,
      refreshCooldown: 10, // segundos
      refreshInterval: null,
    };
  },
  computed: {
    cVersion () {
      return packageEnv.version
    }
  },
  methods: {
    async validarVersao(){
      const cachedData = localStorage.getItem('versionInfo');
      const cachedTimestamp = localStorage.getItem('versionInfoTimestamp');
      
      if (cachedData && cachedTimestamp) {
        const now = new Date().getTime();
        const cacheAge = now - parseInt(cachedTimestamp);
        const twelveHoursInMs = 12 * 60 * 60 * 1000;
        
        if (cacheAge < twelveHoursInMs) {
          this.versionInfo = JSON.parse(cachedData);
          return;
        }
      }
      
      const resp = await ValidarVersao();
      console.log(resp.data)
      this.versionInfo = resp.data;
      
      // Salvar no localStorage com timestamp
      localStorage.setItem('versionInfo', JSON.stringify(resp.data));
      localStorage.setItem('versionInfoTimestamp', new Date().getTime()?.toString());
    },
    formatarDataBR(dataISO) {
      if (!dataISO) return "Sin una fecha establecida";

      const data = new Date(dataISO);
      return data.toLocaleString("es", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
    },
    async listarTenants() {
      const { data } = await ListarTenants();
      this.email = data[0].tenantEmail;
      this.license = data[0].tenantLicense;
      const response = await ListarTenantsLs(data[0].tenantEmail)
      this.license_code = response.data.license_code || ''
      this.license_expiry = response.data.license_expiry || ''
      this.domains = response.data.licensed_domains || ''
      this.is_blocked = response.data.is_blocked || false
      this.product_name = response.data.product_name || ''
    },
    openEmailModal() {
      this.isEmailModalOpen = true;
      this.email = '';
    },
    closeEmailModal() {
      this.isEmailModalOpen = false;
    },
    async saveEmail() {
      try {
        this.loading = true;
        await AlterarEmail({ tenantEmail: this.email });
        this.$q.notify({ type: "positive", message: this.$t("assinatura.successMessage")});
        this.closeEmailModal();
        this.listarTenants();
      } catch (error) {
        if(error.data.error === 'ERR_LIMIT_MAX'){
          this.$q.notify({
            type: 'negative',
            message: this.$t("assinatura.errorLimitExceeded"),
            position: 'top',
            progress: true
          })
        }
        console.error(error);
        // this.$q.notify({ type: "negative", message: "Erro ao atualizar o e-mail." });
      } finally {
        this.loading = false;
      }
    },
    async loadColors() {
      try {
        const response = await MostrarCores();
        if (response.status === 200) {
          const companyData = response.data[0];
          const colorsArray = companyData.systemColors;

          this.colors = (Array.isArray(colorsArray) ? colorsArray : []).reduce((acc, colorObj = {}) => {
            const key = String(colorObj.label || colorObj.name || colorObj.key || '').toLowerCase().trim();
            const val = colorObj.value ?? (key && key in colorObj ? colorObj[key] : undefined) ?? colorObj.hex ?? colorObj.color ?? null;
            if (key && typeof val === 'string') acc[key] = val;
            return acc;
          }, {});

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
          console.error("Error al cargar los colores");
        }
      } catch (error) {
        console.error("Error al cargar los colores:", error);
      }
    },
    openDomainModal() {
      this.isDomainModalOpen = true;
      // Carregar domínios atuais no input
      this.domainInput = this.domains || '';
    },
    closeDomainModal() {
      this.isDomainModalOpen = false;
      this.domainInput = '';
    },
    checkRefreshCooldown() {
      const lastRefresh = localStorage.getItem('lastRefreshLicenseData');
      if (lastRefresh) {
        const now = Date.now();
        const diff = Math.floor((now - parseInt(lastRefresh, 10)) / 1000);
        if (diff < this.refreshCooldown) {
          this.canRefreshLicense = false;
          // Atualiza o botão quando o tempo acabar
          this.refreshInterval = setTimeout(() => {
            this.canRefreshLicense = true;
            this.refreshInterval = null;
          }, (this.refreshCooldown - diff) * 1000);
        } else {
          this.canRefreshLicense = true;
        }
      } else {
        this.canRefreshLicense = true;
      }
    },
    async refreshLicenseData() {
      // Salva o horário do clique
      localStorage.setItem('lastRefreshLicenseData', Date.now().toString());
      this.canRefreshLicense = false;
      if (this.refreshInterval) clearTimeout(this.refreshInterval);
      this.refreshInterval = setTimeout(() => {
        this.canRefreshLicense = true;
        this.refreshInterval = null;
      }, this.refreshCooldown * 1000);
      try {
        this.loading = true;
        const response = await AlterarTenantRefreshLicenseData();
        
        // Detectar dark mode
        const isDark = this.$q.dark.isActive;
        const textColor = isDark ? '#eee' : '#222';
        const labelColor = isDark ? '#90caf9' : '#1976d2';
        const expiryColor = isDark ? '#81c784' : '#388e3c';
        const bgColor = isDark ? '#23272e' : '#fff';

        // Melhorar visual da notificação
        const domainsList = response.data.licensed_domains && typeof response.data.licensed_domains === 'string' && response.data.licensed_domains.split
          ? response.data.licensed_domains.split(',').map(domain => `<li style='margin-bottom:2px;'><span style='color:${labelColor};'>🌐</span> <span style='color:${textColor};'>${domain.trim()}</span></li>`).join('')
          : `<li style="color:${isDark ? '#888' : '#aaa'}">Empty</li>`;

        const licenseInfo = `
          <div style="text-align:left;min-width:260px;max-width:350px;line-height:1.7;background:${bgColor};border-radius:10px;padding:2px 0;">
            <div style="margin-bottom:8px;display:flex;align-items:center;gap:8px;">
              <span style='font-size:1.3em;color:${expiryColor};'>📅</span>
              <span style='font-weight:600;color:${expiryColor};font-size:1.08em;'>Expiry:</span>
            </div>
            <div style="margin-bottom:16px;color:${textColor};font-size:1.05em;">
              ${this.formatarDataBR(response.data.license_expiry)}
            </div>
            <div style="margin-bottom:8px;display:flex;align-items:center;gap:8px;">
              <span style='font-size:1.3em;color:${labelColor};'>🌐</span>
              <span style='font-weight:600;color:${labelColor};font-size:1.08em;'>Domains:</span>
            </div>
            <ul style='margin:0 0 0 18px;padding:0 0 0 0;font-size:1em;color:${textColor};'>
              ${domainsList}
            </ul>
          </div>
        `;
        
        this.$q.notify({ 
          message: licenseInfo,
          html: true,
          color: isDark ? 'grey-10' : 'white',
          textColor: isDark ? 'grey-2' : 'primary',
          position: 'top',
          timeout: 10000,
          progress: true,
          actions: [
            { label: 'OK', color: 'primary' }
          ]
        });
        
        // Atualizar os dados locais
        this.product_name = response.data.product_name || ''
        this.license_code = response.data.license_code || '';
        this.license_expiry = response.data.license_expiry || '';
        this.domains = response.data.licensed_domains || '';
        
      } catch (error) {
        console.error("Error al actualizar la licencia:", error);
        this.$q.notify({ 
          type: "negative", 
          message: this.$t("assinatura.licenseRefreshError") 
        });
      } finally {
        this.loading = false;
        setTimeout(() => {
          window.location.reload();
        }, 10000)
      }
    },
    async saveDomains() {
      try {
        this.domainLoading = true;
        
        // Processar os domínios (remover espaços e dividir por vírgula)
        const domainsArray = this.domainInput && typeof this.domainInput === 'string' && this.domainInput.split
          ? this.domainInput
              .split(',')
              .map(domain => domain.trim())
              .filter(domain => domain.length > 0)
          : [];
        
        if (domainsArray.length === 0) {
          this.$q.notify({ 
            type: "negative", 
            message: this.$t("assinatura.domainSaveError") || "Ingrese al menos un dominio válido." 
          });
          return;
        }
        
        // Enviar para o backend
        const response = await AlterarTenantDomain({ domains: domainsArray });
        
        // Verificar o status da resposta
        if (response.data.status === true || response.data.status === 1) {
          this.$q.notify({ 
            type: "positive", 
            message: response.data.message || this.$t("assinatura.domainSaveSuccess") || "Dominios actualizados correctamente." 
          });
          this.closeDomainModal();
          this.listarTenants(); // Recarregar dados
        } else {
          this.$q.notify({ 
            type: "negative", 
            message: response.data.message || this.$t("assinatura.domainSaveError") || "Error al actualizar los dominios." 
          });
        }
      } catch (error) {
        console.error("Erro ao salvar os domínios:", error);
        this.$q.notify({ 
          type: "negative", 
          message: this.$t("assinatura.domainSaveError") || "Error al actualizar los dominios" 
        });
      } finally {
        this.domainLoading = false;
      }
    },
  },
  mounted() {
    this.listarTenants();
    this.validarVersao()
    this.userProfile = localStorage.getItem("profile");
    const storedColors = localStorage.getItem('storedColors');
    if (storedColors) {
      let list = []
      try { const parsed = JSON.parse(storedColors); list = Array.isArray(parsed) ? parsed : (Array.isArray(parsed?.colors) ? parsed.colors : []) } catch (_) { list = [] }
      const colors = list.reduce((acc, colorObj = {}) => {
        const key = String(colorObj.label || colorObj.name || colorObj.key || '').toLowerCase().trim();
        const val = colorObj.value ?? (key && key in colorObj ? colorObj[key] : undefined) ?? colorObj.hex ?? colorObj.color ?? null;
        if (key && typeof val === 'string') acc[key] = val
        return acc
      }, {})

      const root = document.documentElement;
      Object.keys(colors).forEach(key => {
        root.style.setProperty(`--q-${key}`, colors[key]);
      });
    } else {
      console.warn('No hay color almacenado en localStorage');
    }
    this.checkRefreshCooldown();
  },
};
</script>

<style lang="scss" scoped>
.q-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  max-width: 500px;
  margin: 0 auto;

  &:hover {
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  }

  .q-card-section {
    padding: 1.2rem 1.5rem;

    .text-h5 {
      color: var(--q-primary);
      font-weight: 600;
      font-size: 1.4rem;
      margin: 0;
    }

    .text-subtitle1 {
      color: var(--q-primary);
      opacity: 0.8;
      font-size: 1rem;
    }
  }

  .q-separator {
    background: rgba(255, 255, 255, 0.1);
  }

  .q-list {
    .q-item {
      padding: 1rem;
      transition: all 0.3s ease;

      &:hover {
        background: rgba(var(--q-primary-rgb), 0.05);
      }

      .q-item__section--avatar {
        min-width: 40px;
      }

      .q-icon {
        font-size: 1.5rem;
        transition: all 0.3s ease;

        &:hover {
          transform: scale(1.1);
        }
      }

      .q-item__label {
        font-size: 0.9rem;
        color: var(--q-primary);
        opacity: 0.9;

        strong {
          color: var(--q-primary);
          font-weight: 600;
        }
      }
    }
  }
}

.q-chip {
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-1px);
  }
}

.q-dialog {
  .q-card {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(12px);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    min-width: 300px;

    .q-card-section {
      .text-h6 {
        color: var(--q-primary);
        font-weight: 600;
        font-size: 1.2rem;
        margin: 0;
      }

      .text-subtitle2 {
        color: var(--q-primary);
        opacity: 0.8;
        font-size: 0.9rem;
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
  }
}

.blur-effect {
  filter: blur(0px);
  transition: all 0.3s ease;
}

.domains-list {
  display: block;
  margin-top: 4px;
  word-break: break-all;
  white-space: pre-line;
  font-size: 0.98em;
}

/* Modo Escuro */
body.body--dark {
  .q-card {
    background: rgba(30, 30, 30, 0.95);
    border-color: rgba(255, 255, 255, 0.1);

    .q-list {
      .q-item {
        &:hover {
          background: rgba(255, 255, 255, 0.05);
        }
      }
    }
  }

  .q-dialog {
    .q-card {
      background: rgba(30, 30, 30, 0.95);
      border-color: rgba(255, 255, 255, 0.1);

      .q-input {
        .q-field__control {
          background: rgba(255, 255, 255, 0.05);

          &:hover {
            background: rgba(255, 255, 255, 0.1);
          }
        }

        &.q-field--focused .q-field__control {
          background: rgba(255, 255, 255, 0.15);
        }
      }
    }
  }
}

/* Responsividade */
@media (max-width: 600px) {
  .q-card {
    margin: 0.5rem;
    border-radius: 12px;

    .q-card-section {
      padding: 1rem;

      .text-h5 {
        font-size: 1.2rem;
      }

      .text-subtitle1 {
        font-size: 0.9rem;
      }
    }

    .q-list {
      .q-item {
        padding: 0.8rem;

        .q-icon {
          font-size: 1.2rem;
        }

        .q-item__label {
          font-size: 0.85rem;
        }
      }
    }
  }

  .q-dialog {
    .q-card {
      width: 95vw !important;
      margin: 1rem;
    }
  }
}
</style>
