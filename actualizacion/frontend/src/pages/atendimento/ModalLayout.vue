<template>
  <div>
    <q-dialog 
      :model-value="show" 
      @update:model-value="$emit('update:show', $event)" 
      persistent
    >
      <q-card>
        <q-card-section>
          <div class="text-h6">Términos y Condiciones</div>
        </q-card-section>

        <q-tabs v-model="activeTab" class="text-teal" align="left" narrow-indicator>
          <q-tab 
            name="uso" 
            label="Condiciones de Uso" 
            :class="{ 'active-tab': activeTab === 'uso', 'inactive-tab': activeTab !== 'uso' }"
          />
          <q-tab 
            name="servicio" 
            label="Condiciones del Servicio" 
            :class="{ 'active-tab': activeTab === 'servicio', 'inactive-tab': activeTab !== 'servicio' }"
          />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="activeTab" animated>
          <q-tab-panel name="uso">
            <div class="contract-content">
              <h2>Condiciones de Uso</h2>
              <p>Esta plataforma está destinada exclusivamente para la comunicación entre empresas y clientes. Se prohíbe el uso de la plataforma para actividades ilegales, incluyendo pero no limitado a:</p>
              <ul>
                <li>Spam o envío masivo de mensajes no solicitados.</li>
                <li>Fraude, estafas o cualquier actividad engañosa.</li>
                <li>Contenido ofensivo, discriminatorio o que infrinja derechos de terceros.</li>
              </ul>
              <p>El incumplimiento de estas condiciones resultará en la suspensión o eliminación de la cuenta sin previo aviso.</p>
            </div>
          </q-tab-panel>

          <q-tab-panel name="servicio">
            <div class="contract-content">
              <h2>Condiciones del Servicio</h2>
              <p>La plataforma ofrece servicios de comunicación multicanal con las siguientes garantías y condiciones:</p>
              <ul>
                <li>Disponibilidad del servicio 24/7, salvo interrupciones por mantenimiento programado.</li>
                <li>Protección de datos según normativas vigentes de privacidad y seguridad.</li>
                <li>Soporte técnico en horarios laborales establecidos.</li>
              </ul>
              <p>Nos comprometemos a mejorar continuamente el servicio, pero no garantizamos una disponibilidad absoluta debido a factores externos.</p>
            </div>
          </q-tab-panel>
        </q-tab-panels>

        <q-card-actions align="center">
          <q-btn 
            label="He leído y acepto los términos de uso y condiciones del servicio" 
            @click="aceitar" 
            color="primary" 
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import packageEnv from 'src/../package.json'

export default {
  props: {
    show: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      activeTab: 'uso'
    }
  },
  methods: {
    close () {
      this.$emit('update:show', false)
      this.$emit('close')
    },
    aceitar () {
      this.$emit('aceitar')
      this.$emit('update:show', false)
    }
  },
  computed: {
    cVersion () {
      return packageEnv.version
    }
  }
}
</script>

<style scoped>
.contract-content {
  text-align: justify;
  padding: 16px;
}

.active-tab {
  background-color: var(--q-primary) !important;
  color: white !important;
}

.inactive-tab {
  background-color: #f0f0f0 !important;
  color: #333 !important;
}
</style>
