<template>
  <div class="gmail-callback-page">
    <div class="callback-container">
      <!-- Loading State -->
      <div v-if="loading" class="text-center">
        <q-spinner-dots size="50px" color="primary" />
        <div class="text-h6 q-mt-md">{{ $t('gmailCallback.processing') || 'Procesando autorización de Gmail...' }}</div>
        <div class="text-body2 q-mt-sm">{{ $t('gmailCallback.waitMessage') || 'Espere mientras procesamos su autorización de Gmail OAuth2.' }}</div>
      </div>

      <!-- Success State -->
      <div v-else-if="success" class="text-center">
        <q-icon name="check_circle" size="80px" color="positive" />
        <div class="text-h5 text-positive q-mt-md">{{ $t('gmailCallback.title') || '✅ ¡Autorización de Gmail completada!' }}</div>
        <div class="text-body1 q-mt-sm">
          {{ $t('gmailCallback.message') || 'Su cuenta de Gmail se ha configurado correctamente para OAuth2..' }}
        </div>
        
        <div class="q-mt-lg">
          <q-card class="q-pa-md">
            <div class="text-subtitle1 q-mb-sm">{{ $t('gmailCallback.infoSession') }}</div>
            <div class="text-body2">
              <div><strong>{{ $t('gmailCallback.whatsappId') || 'WhatsApp ID:' }}</strong> {{ whatsappId }}</div>
              <div><strong>{{ $t('gmailCallback.status') || 'Estado:' }}</strong> <span class="text-positive">✅ Configurado</span></div>
              <div><strong>{{ $t('gmailCallback.data') || 'Fecha:' }}</strong> {{ currentDate }}</div>
            </div>
          </q-card>
        </div>

        <div class="q-mt-lg">
          <q-btn 
            color="primary" 
            :label="$t('gmailCallback.closeWindow') || 'Cerrar ventana'" 
            @click="closeWindow"
            icon="close"
            size="lg"
          />
        </div>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="text-center">
        <q-icon name="error" size="80px" color="negative" />
        <div class="text-h5 text-negative q-mt-md">{{ $t('gmailCallback.errorTitle') || '❌ Error de autorización' }}</div>
        <div class="text-body1 q-mt-sm">
          {{ errorMessage }}
        </div>
        
        <div class="q-mt-lg">
          <q-card class="q-pa-md">
            <div class="text-subtitle1 q-mb-sm">{{ $t('gmailCallback.debugInfo') || 'Información de depuración:' }}</div>
            <div class="text-body2">
              <div><strong>{{ $t('gmailCallback.fullUrl') || 'URL completa:' }}</strong> {{ currentUrl }}</div>
              <div><strong>{{ $t('gmailCallback.parameters') || 'Parámetros:' }}</strong> {{ urlParams }}</div>
            </div>
          </q-card>
        </div>

        <div class="q-mt-lg">
          <q-btn 
            color="negative" 
            :label="$t('gmailCallback.retry') || 'Inténtelo de nuevo'" 
            @click="retryAuth"
            icon="refresh"
            size="lg"
          />
          <q-btn 
            color="secondary" 
            :label="$t('gmailCallback.closeWindow') || 'Cerrar ventana'" 
            @click="closeWindow"
            icon="close"
            class="q-ml-sm"
            size="lg"
          />
        </div>
      </div>

      <!-- Default State -->
      <div v-else class="text-center">
        <q-icon name="help" size="80px" color="grey" />
        <div class="text-h5 q-mt-md">{{ $t('gmailCallback.callbackTitle') || 'Devolución de llamada de Gmail' }}</div>
        <div class="text-body1 q-mt-sm">
          {{ $t('gmailCallback.waitingMessage') || 'Esperando el procesamiento de la autorización...' }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GmailCallbackUrlBack',
  data() {
    return {
      loading: true,
      success: false,
      error: false,
      errorMessage: '',
      whatsappId: '',
      currentDate: '',
      currentUrl: '',
      urlParams: '',
      // Sistema de gerenciamento de memória
      timers: []
    }
  },
  
  async mounted() {
    this.processCallback();
  },
  
  methods: {
    async processCallback() {
      try {
        // Extrair parâmetros manualmente da URL
        const url = window.location.href
        const hashIndex = url.indexOf('#')
        const queryIndex = url.indexOf('?', hashIndex)
        
        if (queryIndex === -1) {
          console.warn('No parameters found in URL')
          this.errorMessage = this.$t('gmailCallback.noParametersFound') || 'No se encontraron parámetros en la URL'
          this.error = true
          this.loading = false
          return
        }
        
        const queryString = url.substring(queryIndex + 1)
        
        // Decodificar e parsear manualmente
        const decodedQuery = decodeURIComponent(queryString)
        
        const params = new URLSearchParams(decodedQuery)
        const code = params.get('code')
        const error = params.get('error')
        const state = params.get('state') // WhatsApp ID
        
        if (error) {
          console.error(this.$t('gmailCallback.authorizationError'), error)
          this.errorMessage = this.$t('gmailCallback.authorizationError') || `Error de autorización: ${error}`
          this.error = true
          this.loading = false
          return
        }
        
        if (!code) {
          console.warn(this.$t('gmailCallback.codeNotFound'))
          this.errorMessage = this.$t('gmailCallback.codeNotFound') || 'Código de autorización no encontrado'
          this.error = true
          this.loading = false
          return
        }
        
        if (!state) {
          console.warn(this.$t('gmailCallback.whatsappIdNotFound'))
          this.errorMessage = this.$t('gmailCallback.whatsappIdNotFound') || 'ID de WhatsApp no encontrado'
          this.error = true
          this.loading = false
          return
        }
        
        this.whatsappId = state
        this.currentDate = new Date().toLocaleDateString()
        this.currentUrl = url
        this.urlParams = queryString
        
        try {
          // Chamar o endpoint para salvar os tokens
          // Tentar diferentes formas de obter a URL do backend
          let backendUrl = process.env.URL_API || 'http://localhost:3101'; // Fallback padrão
          
          // Tentar obter do process.env (injetado pelo Quasar)
          if (typeof process !== 'undefined' && process.env && process.env.URL_API) {
            backendUrl = process.env.URL_API;
          }
          // Tentar obter da URL atual (substituir porta)
          else if (window.location.origin) {
            backendUrl = window.location.origin.replace(/:\d+/, ':3101');
          }
          
          // Testar se o backend está acessível
          try {
            const testResponse = await fetch(`${backendUrl}/health`, { method: 'GET' });
          } catch (testError) {
            console.warn('El backend no respondió a la prueba de conectividad:', testError.message);
          }
          
          const response = await fetch(`${backendUrl}/gauth/gmail/save-tokens`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              code: code,
              state: state
            })
          })
          
          if (!response.ok) {
            const errorText = await response.text();
            console.error('Erro HTTP:', response.status, errorText);
            throw new Error(`HTTP ${response.status}: ${response.statusText} - ${errorText}`);
          }
          
          const result = await response.json()
          if (result.success) {
            this.success = true
            this.loading = false
          } else {
            console.error('Erro ao salvar tokens:', saveError)
            this.errorMessage = this.$t('gmailCallback.saveTokensError') || `Error al guardar tokens: ${result.message}`
            this.error = true
            this.loading = false
          }
          
        } catch (saveError) {
          console.error('Erro ao salvar tokens:', saveError)
          this.errorMessage = this.$t('gmailCallback.saveTokensError') || `Error al guardar tokens: ${saveError.message}`
          this.error = true
          this.loading = false
        }
        
      } catch (error) {
        console.error('Error processing authorization:', error)
        this.errorMessage = this.$t('gmailCallback.processAuthorizationError') || `Error al procesar la autorización: ${error.message}`
        this.error = true
        this.loading = false
      }
    },
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
    closeWindow() {
      window.close();
    },
    retryAuth() {
      this.loading = true;
      this.success = false;
      this.error = false;
      this.errorMessage = '';
      this.whatsappId = '';
      this.currentDate = '';
      this.currentUrl = '';
      this.urlParams = '';
      // Reprocessar a autorização
      this.processCallback();
    }
  },
  
  beforeUnmount() {
    // Limpeza completa de memória
    this.cleanupMemory();
  },
  
  unmounted() {
    // Limpeza completa de memória
    this.cleanupMemory();
  }
}
</script>

<style lang="scss" scoped>
.gmail-callback-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
}

.callback-container {
  text-align: center;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
</style>
