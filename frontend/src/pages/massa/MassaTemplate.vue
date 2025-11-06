<template>
  <div v-if="(userProfile === 'admin' || pageAllowed)">
    <div class="q-my-md">
      <q-card flat bordered class="my-sticky-dynamic q-ma-lg">
        <q-card-section class="text-h6 text-bold">
          {{ $t('massaTemplate.title') }}
        </q-card-section>
        <q-banner style="margin-top: 10px" class="custom-banner" inline-actions>
           <p>{{ $t('massaTexto.form.availableFunctionsWaba') }}</p>
        </q-banner>
        <q-list class="text-weight-medium">
          <div class="row q-px-md">
            <div class="col-3 q-py-md">
              <q-select
                style="margin: 1px;"
                v-model="whatsappId"
                :options="cSessionsOptions"
                label="WhatsApp ID"
                dense
                outlined
              />
            </div>
            <div class="col-3 q-py-md" style="margin: 1px;">
              <q-input v-model="min" :label="$t('massaTexto.form.minSeconds')" style="margin: 1px;" dense outlined />
            </div>
            <div class="col-3 q-py-md" style="margin: 1px;">
              <q-input v-model="max" :label="$t('massaTexto.form.maxSeconds')" style="margin: 1px;" dense outlined />
            </div>
            <div class="col-3 q-py-md" style="margin: 1px;">
              <q-toggle
                style="margin: 1px;"
                v-model="contatosImportar"
                :label="$t('massaTexto.form.contacts')"
                dense
              />
            </div>
            <div class="col-4 q-py-md" style="margin: 1px;">
              <q-toggle
                style="margin: 1px;"
                v-model="useTags"
                :label="$t('massaTexto.form.selectTag')"
                dense
              />
            </div>
            <div class="col-12 q-py-md" v-if="useTags">
              <div v-if="loading">{{ $t('grupoMassaUsuarios.loading.fetchingContacts') }}</div>
              <div v-if="loading" class="loading-bar">
                <div class="bar"></div>
              </div>
              <q-select
                v-model="selectedTag"
                :options="tagOptions"
                :label="$t('massaTemplate.form.selectTag')"
                dense
                outlined
                style="margin: 1px;"
                @update:model-value="filtrarContatosPorEtiqueta"
              />
            </div>
            <div class="col-12 q-py-md" v-if="contatosImportar && !useTags">
              <div v-if="loading">{{ $t('grupoMassaUsuarios.loading.fetchingContacts') }}</div>
              <div v-if="loading" class="loading-bar">
                <div class="bar"></div>
              </div>
              <q-select
                v-model="selectedContacts"
                :options="contactOptions"
                :label="$t('grupoMassaUsuarios.form.selectContacts')"
                use-chips
                multiple
                dense
                outlined
                style="margin: 1px;"
              />
            </div>
            <div class="col-9 q-py-md" v-if="!contatosImportar && !useTags">
              <q-input
                v-model="numberInput"
                :label="$t('grupoMassaUsuarios.form.numbersCommaSeparated')"
                dense
                outlined
                style="margin: 1px;"
              />
            </div>
            <div class="col-3 q-py-md" v-if="!contatosImportar && !useTags">
              <q-file
                accept=".csv"
                :label="$t('grupoMassaUsuarios.form.importCSV')"
                @update:model-value="handleFileUpload"
                dense
                outlined
                style="margin: 1px;"
                clearable
              />
            </div>
            <div class="col-12 q-py-md">
              <q-btn :label="$t('massaTemplate.form.selectTemplate')" @click="buscarTemplateWaba()" color="primary" style="margin-bottom: 15px;margin-right: 5px;"/>
              <!-- <q-btn
                flat
                dense
                class="bg-padrao btn-rounded q-mx-xs"
                :color="$q.dark.isActive ? 'white' : ''"
                @click="buscarTemplateWaba()"
              > Selecionar Template
                <q-tooltip content-class="text-bold"> Templates </q-tooltip>
              </q-btn> -->
            </div>
            <div v-if="sending">
              {{ $t('massaTemplate.notifications.messagesSent', {
                sent: sentCount,
                total: contatosImportar ? selectedContacts.length : numberInput.split(',').length
              }) }}
              <br />
              {{ $t('massaTemplate.notifications.uploadingMessages') }}
            </div>
            <!-- <div v-if="sending">
              Mensajes enviados: {{ sentCount }} de {{ contatosImportar ? selectedContacts.length : numberInput.split(',').length }}
              <br>
              Espere mientras se envían los mensajes.... No cierre esta página hasta que se complete el envío..
            </div> -->
            <div v-if="sending" class="loading-bar" style="margin-bottom: 10px;">
              <div class="bar"></div>
            </div>
          </div>
        </q-list>
      </q-card>
    </div>

    <q-dialog v-model="modalVisivelTemplate" position="standard" @hide="fecharModalTemplate">
      <q-card style="min-width: 500px">
        <q-card-section class="q-pa-md">
          <div class="q-gutter-sm row items-center">
            <div class="col-12">
              <q-select
                v-model="selectedTemplate"
                :options="templates.map(template => ({ label: `${template.name} (ID: ${template.id}, Lang: ${template.language})`, value: template }))"
                :label="$t('massaTemplate.form.chooseTemplate')"
                filled
                outlined
                dense
                bg-color="grey-2"
                color="grey-7"
                style="margin: 10px;"
                @update:model-value="handleTemplateSelection"
              />
            </div>
            <div class="col-12" v-if="selectedTemplateComponents.length > 0">
              <div v-for="(input, index) in selectedTemplateComponents" :key="index">
                <q-input
                  v-model="input.value"
                  :label="input.label"
                  filled
                  outlined
                  dense
                  bg-color="grey-2"
                  color="grey-7"
                  style="margin: 10px;"
                />
              </div>
            </div>
          </div>
        </q-card-section>
        <q-separator spaced />
        <q-card-section>
          <q-table
            flat
            :rows="templateDetails"
            :columns="[
              { name: 'label', align: 'left', label: 'Variable', field: 'label' },
              { name: 'value', align: 'left', label: 'Valor', field: 'value' }
            ]"
            row-key="label"
            dense
            separator="horizontal"
            class="q-mb-md"
          />
        </q-card-section>
        <q-card-actions align="right">
          <q-btn
            :label="$t('common.send')"
            color="primary"
            :disabled="!selectedTemplate || sending"
            @click="enviarTemplateSelecionado"
          />
          <q-btn
            :label="$t('common.cancel')"
            color="negative"
            @click="fecharModalTemplate"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
  <div v-else>
    <q-banner class="bg-red text-white" inline-actions>
      <q-icon name="warning" />
      <span>{{ $t('common.accessDenied') }}</span>
    </q-banner>
  </div>
</template>

<script>
import { EnviarTemplateMassaComponenteWaba, BuscarTemplates } from 'src/service/waba.js'
import { ListarContatos, ListarContatosPorEtiquetaEspecifica } from 'src/service/contatos.js'
import { mapGetters } from 'vuex';
import { uid } from 'quasar'
import { ListarEtiquetas } from 'src/service/etiquetas.js'

export default {
  name: 'MassaSms',
  data() {
    return {
      userProfile: 'user',
      pageAllowed: true,
      sentCount: 0, 
      templateDetails: [
        { label: 'Nombre', value: '{{name}}' },
        { label: 'Saludo', value: '{{greeting}}' },
        { label: 'Protocolo', value: '{{protocol}}' },
        { label: 'E-mail (si corresponde)', value: '{{email}}' },
        { label: 'Teléfono', value: '{{phoneNumber}}' },
        { label: 'Kanban (si corresponde)', value: '{{kanban}}' },
        { label: 'Asistente (si está disponible)', value: '{{user}}' },
        { label: 'E-mail Asistente (si está disponible)', value: '{{userEmail}}' },
        { label: 'Nombre (si corresponde)', value: '{{firstName}}' },
        { label: 'Apellidos (si corresponde)', value: '{{lastName}}' },
        { label: 'Empresa (si corresponde)', value: '{{businessName}}' }
      ],
      useTags: false,
      selectedTag: null,
      tagOptions: [],
      loading: false,
      whatsappId: null,
      whatsapp: null,
      numberInput: '',
      min: '',
      max: '',
      contatosImportar: false,
      sending: false,
      params: {
        hasMore: true
      },
      selectedContacts: [],
      contactOptions: [],
      modalVisivelTemplate: false,
      templates: [],
      cacheStatus: {
        ultimaAtualizacao: null,
        tempoRestante: 0,
        usandoCache: false
      },
      selectedTemplate: null,
      selectedTemplateComponents: [],
      // Sistema de gerenciamento de memória
      timers: [],
    }
  },
  watch: {
    contatosImportar(newVal, oldVal) {
      this.listarContatos();
    }
  },
  computed: {
    ...mapGetters(['whatsapps']),
    cSessions() {
      return this.whatsapps.filter(w => w.type === 'waba' && !w.isDeleted && w.status === 'CONNECTED');
    },
    cSessionsOptions() {
      return this.cSessions.map(w => ({ label: w.name, value: w.id, tokenAPI: w.tokenAPI, phone_number_id: w.wabaId, bmToken: w.bmToken, wabaVersion: w.wabaVersion }))
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
    async listarEtiquetas() {
      try {
        const { data } = await ListarEtiquetas(true);
        this.tagOptions = data.map(tag => ({ label: tag.tag, value: tag.id }));
      } catch (error) {
        console.error(error);
        this.$q.notify({
          type: 'negative',
          message: this.$t('massaTexto.notifications.errorFetchingTags')
        });
      }
    },
    async filtrarContatosPorEtiqueta() {
      if (this.selectedTag) {
        this.loading = true;
        try {
          this.contactOptions = [];
          this.params.pageNumber = 1;
          this.params.hasMore = true;
          
          while (this.params.hasMore) {
            const { data } = await ListarContatosPorEtiquetaEspecifica({
              ...this.params,
              tagId: this.selectedTag.value
            });
            this.processarContatos(data);
            this.params.hasMore = data.hasMore;
            if (this.params.hasMore) {
              this.params.pageNumber++;
              const timerId = await new Promise(resolve => setTimeout(resolve, 1000));
              this.addTimer(timerId);
            }
          }
          
          this.selectedContacts = this.contactOptions.map(contact => contact.value);
          console.log('selectedContacts', this.selectedContacts)
        } catch (error) {
          console.error(error);
          this.$q.notify({
            type: 'negative',
            message: this.$t('massaTemplate.notifications.errorFetchingTags'),
          });
        } finally {
          this.loading = false;
        }
      }
    },
    async listarContatos() {
      this.loading = true;
      this.contactOptions = [];
      this.params.pageNumber = 1;
      this.params.hasMore = true; 
      try {
        while (this.params.hasMore) {
          const { data } = await ListarContatos(this.params);
          this.processarContatos(data)
          this.params.hasMore = data.hasMore;
          if (this.params.hasMore) {
            this.params.pageNumber++;
            const timerId = await new Promise(resolve => setTimeout(resolve, 1000));
            this.addTimer(timerId);
          }
        }
      } catch (error) {
        console.error('Error al recuperar contactos:', error);
      } finally {
        this.loading = false;
      }
    },
    processarContatos(data) {
      const contatosFiltrados = data.contacts.filter(contato => this.isGroup ? contato.isGroup : !contato.isGroup);
      const opcoesContato = contatosFiltrados.map(contato => ({
        label: contato.name,
        value: contato.number,
        tags: contato.tags
      }));
      this.contactOptions = [...this.contactOptions, ...opcoesContato];
    },
    handleCSVUpload(event) {
      try {
        console.log('Evento recibido:', event);
        
        let file = null;
        
        // Tentar obter o arquivo do evento
        if (event && event.target && event.target.files && event.target.files[0]) {
          file = event.target.files[0];
        } else if (event && event.files && event.files[0]) {
          // Para eventos do Quasar
          file = event.files[0];
        } else if (this.$refs.csvInput && this.$refs.csvInput.$el) {
          // Fallback usando ref
          const inputElement = this.$refs.csvInput.$el.querySelector('input[type="file"]');
          if (inputElement && inputElement.files && inputElement.files[0]) {
            file = inputElement.files[0];
          }
        }

        if (!file) {
          console.warn('No se ha seleccionado ningún archivo o el evento no es válido');
          return;
        }

        console.log('Archivo seleccionado:', file);

        // Verificar se é um arquivo CSV
        if (!file.name.toLowerCase().endsWith('.csv')) {
          this.$q.notify({
            type: 'warning',
            message: this.$t('massaTemplate.notifications.invalidFileType'),
            position: 'top'
          });
          return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
          try {
            const content = e.target.result;
            console.log('Contenido CSV:', content);
            this.processCSV(content);
            this.$q.notify({
              type: 'positive',
              message: this.$t('massaTemplate.notifications.csvUploadedSuccessfully'),
              position: 'top'
            });
          } catch (error) {
            console.error('Error al procesar el archivo CSV:', error);
            this.$q.notify({
              type: 'negative',
              message: this.$t('massaTemplate.notifications.errorProcessingCSV'),
              position: 'top'
            });
          }
        };
        
        reader.onerror = () => {
          console.error('Error al leer el archivo');
          this.$q.notify({
            type: 'negative',
            message: this.$t('massaTemplate.notifications.errorReadingFile'),
            position: 'top'
          });
        };

        reader.readAsText(file, 'UTF-8');
      } catch (error) {
        console.error('Error al cargar el CSV:', error);
        this.$q.notify({
          type: 'negative',
          message: this.$t('massaTemplate.notifications.errorUploadingCSV'),
          position: 'top'
        });
      }
    },
    handleFileUpload(file) {
      try {
        console.log('Archivo recibido vía q-file:', file);
        
        if (!file) {
          console.warn('No se ha seleccionado ningún archivo');
          return;
        }

        // Verificar se é um arquivo CSV
        if (!file.name.toLowerCase().endsWith('.csv')) {
          this.$q.notify({
            type: 'warning',
            message: this.$t('massaTemplate.notifications.invalidFileType'),
            position: 'top'
          });
          return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
          try {
            const content = e.target.result;
            console.log('Contenido CSV:', content);
            this.processCSV(content);
            this.$q.notify({
              type: 'positive',
              message: this.$t('massaTemplate.notifications.csvUploadedSuccessfully'),
              position: 'top'
            });
          } catch (error) {
            console.error('Error al procesar el archivo CSV:', error);
            this.$q.notify({
              type: 'negative',
              message: this.$t('massaTemplate.notifications.errorProcessingCSV'),
              position: 'top'
            });
          }
        };
        
        reader.onerror = () => {
          console.error('Error al leer el archivo');
          this.$q.notify({
            type: 'negative',
            message: this.$t('massaTemplate.notifications.errorReadingFile'),
            position: 'top'
          });
        };

        reader.readAsText(file, 'UTF-8');
      } catch (error) {
        console.error('Error al cargar el CSV:', error);
        this.$q.notify({
          type: 'negative',
          message: this.$t('massaTemplate.notifications.errorUploadingCSV'),
          position: 'top'
        });
      }
    },
    processCSV(csvContent) {
      try {
        console.log('Procesando CSV:', csvContent);
        
        if (!csvContent || typeof csvContent !== 'string') {
          console.error('Contenido CSV no válido');
          this.$q.notify({
            type: 'negative',
            message: this.$t('massaTemplate.notifications.invalidCSVContent'),
            position: 'top'
          });
          return;
        }

        const lines = csvContent.split('\n');
        console.log('Filas CSV:', lines);
        
        const numbers = [];
        
        lines.forEach((line, index) => {
          const trimmedLine = line.trim();
          if (trimmedLine === '') return;
          
          console.log(`Procesando fila ${index + 1}:`, trimmedLine);
          
          // Suportar tanto vírgula quanto ponto e vírgula como separadores
          const separators = [',', ';'];
          let foundSeparator = null;
          
          for (const sep of separators) {
            if (trimmedLine.includes(sep)) {
              foundSeparator = sep;
              break;
            }
          }
          
          if (foundSeparator) {
            // Se tem separador, processar cada parte
            const parts = trimmedLine.split(foundSeparator);
            parts.forEach(part => {
              const cleanPart = part.trim();
              if (cleanPart && this.isValidPhoneNumber(cleanPart)) {
                numbers.push(cleanPart);
                console.log(`Número válido encontrado: ${cleanPart}`);
              }
            });
          } else {
            // Se não tem separador, tratar a linha inteira como um número
            if (this.isValidPhoneNumber(trimmedLine)) {
              numbers.push(trimmedLine);
              console.log(`Número válido encontrado: ${trimmedLine}`);
            }
          }
        });

        console.log('Números extraídos:', numbers);

        if (numbers.length === 0) {
          this.$q.notify({
            type: 'warning',
            message: this.$t('massaTemplate.notifications.noValidNumbersFound'),
            position: 'top'
          });
          return;
        }

        this.numberInput = numbers.join(',');
        console.log('Entrada actualizada con:', this.numberInput);
        console.log(`CSV procesado correctamente: ${numbers.length} Números válidos encontrados`);
      } catch (error) {
        console.error('Error al procesar CSV:', error);
        this.$q.notify({
          type: 'negative',
          message: this.$t('massaTemplate.notifications.errorProcessingCSV'),
          position: 'top'
        });
      }
    },
    isValidPhoneNumber(phone) {
      // Validar se é um número de telefone válido
      const phoneRegex = /^[\d\s\-\+\(\)]+$/;
      const hasDigits = /\d/.test(phone);
      return phoneRegex.test(phone) && hasDigits && phone.length >= 8;
    },
    handleTemplateSelection(templateWrapper) {
      this.selectedTemplateComponents = [];

      const template = templateWrapper.value;

      if (template && template.components) {
        template.components.forEach(component => {
          if (component.type === 'HEADER') {
            if (component.format === 'VIDEO' || component.format === 'IMAGE' || component.format === 'DOCUMENT') {
              this.selectedTemplateComponents.push({
                label: this.$t('massaTemplate.form.headerFormat', { format: component.format.toLowerCase() }),
                // label: `URL do Header (${component.format.toLowerCase()})`,
                value: '',
                key: `header_${component.format.toLowerCase()}`
              });
            }
          }

          if (component.type === 'BODY') {
            if (template.parameter_format === 'NAMED' && component.example?.body_text_named_params) {
              return
              // Novo formato NAMED
              component.example.body_text_named_params.forEach(param => {
                this.selectedTemplateComponents.push({
                  // label: `Valor da variável ${param.param_name}`,
                  label: this.$t('massaTemplate.form.variableNumber', { number }),
                  value: '',
                  key: `named_variable_${param.param_name}`
                });
              });
            } else {
              const variableMatches = component.text.match(/{{\d+}}/g);
              if (variableMatches) {
                variableMatches.forEach(variable => {
                  const variableNumber = variable.replace(/{{|}}/g, '');
                  this.selectedTemplateComponents.push({
                    label: this.$t('massaTemplate.form.variableNumber', { variableNumber }),
                    // label: `Valor da variável ${variableNumber}`,
                    value: '',
                    key: `variable_${variableNumber}`
                  });
                });
              }
            }
          }

          if (component.type === 'BUTTONS' && component.buttons) {
            component.buttons.forEach((button, index) => {
              this.selectedTemplateComponents.push({
                label: `Botón ${index + 1}: ${button.text}`,
                value: button.text,
                key: `button_${index + 1}`
              });

              // Se houver um exemplo para o botão, adicionamos também
              // if (button.example && button.example.length > 0) {
              //   button.example.forEach((exampleValue, exampleIndex) => {
              //     this.selectedTemplateComponents.push({
              //       label: `Exemplo Botão ${index + 1} - Opção ${exampleIndex + 1}`,
              //       value: exampleValue,
              //       key: `button_example_${index + 1}_${exampleIndex + 1}`
              //     });
              //   });
              // }
            });
          }
        });
      }
    },
    // handleTemplateSelection(templateWrapper) {
    //   this.selectedTemplateComponents = [];
      
    //   const template = templateWrapper.value;
    //   console.log('template >>>>>>>>>', template)

    //   if (template && template.components) {
    //     template.components.forEach(component => {
    //       if (component.type === 'HEADER') {
    //         if (component.format === 'VIDEO' || component.format === 'IMAGE' || component.format === 'DOCUMENT') {
    //           this.selectedTemplateComponents.push({
    //             label: `URL do Header (${component.format.toLowerCase()})`,
    //             value: '',
    //             key: `header_${component.format.toLowerCase()}`
    //           });
    //         } 
    //       }

    //       if (component.type === 'BODY') {
    //         const variableMatches = component.text.match(/{{\d+}}/g);
    //         if (variableMatches) {
    //           variableMatches.forEach(variable => {
    //             const variableNumber = variable.replace(/{{|}}/g, '');
    //             this.selectedTemplateComponents.push({
    //               label: `Valor da variável ${variableNumber}`,
    //               value: '',
    //               key: `variable_${variableNumber}`
    //             });
    //           });
    //         }
    //       }
    //     });
    //   }
    // },
    async enviarTemplateSelecionado() {
      if (!this.selectedTemplate || !this.selectedTemplate.value) {
        console.error(this.$t('massaTemplate.notifications.errorSendingTemplate'));
        return;
      }

      console.log('selectedTemplate', this.selectedTemplate);

      if(!this.useTags){
        if (!this.min) {
          this.$q.notify({
            html: true,
            message: this.$t('massaTemplate.notifications.chooseMinTime'),
            type: 'warning',
            progress: true,
            position: 'top',
            actions: [{
              icon: 'close',
              round: true,
              color: 'white'
            }]
          })
          return;
        }
        if (!this.max) {
          this.$q.notify({
            html: true,
            message: this.$t('massaTemplate.notifications.chooseMaxTime'),
            type: 'warning',
            progress: true,
            position: 'top',
            actions: [{
              icon: 'close',
              round: true,
              color: 'white'
            }]
          })
          return;
        }

        this.sending = true; 
        const minInt = parseInt(this.min, 10)
        const maxInt = parseInt(this.max, 10)

        let contacts = this.contatosImportar ? this.selectedContacts.map(contact => contact.value) : this.numberInput.split(',');
        contacts = contacts.map(contact => contact.trim()).filter(contact => contact !== '');

        if (contacts.length <= 0) {
          this.$q.notify({
            html: true,
            message: this.$t('massaTemplate.notifications.chooseContact'),
            type: 'warning',
            progress: true,
            position: 'top',
            actions: [{
              icon: 'close',
              round: true,
              color: 'white'
            }]
          })
          this.sending = false; 
          return;
        }

        for (const phoneNumber of contacts) {

          const delay = ms => new Promise(resolve => {
            const timerId = setTimeout(resolve, ms);
            this.addTimer(timerId);
          });
          const randomDelay = Math.floor(Math.random() * (maxInt - minInt + 1) + minInt) * 1000;
          
          const payload = {
            from: phoneNumber,
            whatsapp: this.whatsappId,
            language: this.selectedTemplate.value.language,
            templateName: this.selectedTemplate.value.name,
            components: [],
            body: JSON.stringify(this.selectedTemplate.value.components),
            scheduleDate: null,
          };

          if (this.selectedTemplateComponents && this.selectedTemplateComponents.length) {
            this.selectedTemplateComponents.forEach(input => {
              if (input.value == null) {
                console.error(`O valor do componente ${input.key} é nulo ou indefinido. Pulando esse componente.`);
                return;
              }
              
              if (input.key.startsWith('header')) {
                let format = '';
                if (input.key === 'header_video') format = 'VIDEO';
                if (input.key === 'header_image') format = 'IMAGE';
                if (input.key === 'header_document') format = 'DOCUMENT';
                if (input.key === 'header_text') format = 'TEXT';

                payload.components.push({
                  type: 'HEADER',
                  format: format,
                  value: input.value
                });
              } else if (input.key.startsWith('variable')) {
                const variableNumber = input.key.replace('variable_', '');
                if (!payload.components.some(component => component.type === 'BODY')) {
                  payload.components.push({
                    type: 'BODY',
                    variables: []
                  });
                }
                const bodyComponent = payload.components.find(component => component.type === 'BODY');
                bodyComponent.variables[variableNumber - 1] = input.value;
              } else if (input.key.startsWith('named_variable')) {
                const variableName = input.key.replace('named_variable_', '');
                const bodyComponent = payload.components.find(c => c.type === 'BODY') || { type: 'BODY', parameters: [] };
                if(variableName === 'nome'){
                  bodyComponent.parameters.push({
                    type: 'text',
                    text: input.value || '',
                    name: 'name'
                })
                } if(variableName === 'texto'){
                    bodyComponent.parameters.push({
                      type: 'text',
                      text: input.value || '',
                      name: 'text'
                  })
                } if(variableName === 'number'){
                    bodyComponent.parameters.push({
                      type: 'text',
                      text: input.value || '',
                      name: 'number'
                  })
                }

                if (!payload.components.some(c => c.type === 'BODY')) {
                    payload.components.push(bodyComponent);
                }
              } else if (input.key.startsWith('button_')) {
                // Obtendo o índice do botão
                const buttonIndex = parseInt(input.key.replace('button_', '')) - 1;

                // Obtendo o tipo do botão dinamicamente do template selecionado
                const selectedButton = this.selectedTemplate.value.components
                  .find(c => c.type === 'BUTTONS')?.buttons?.[buttonIndex];

                if (selectedButton) {
                  const subType = selectedButton.type === 'COPY_CODE' ? 'copy_code' : selectedButton.type;

                  if (!payload.components.some(c => c.type === 'BUTTONS')) {
                    payload.components.push({
                      type: 'BUTTONS',
                      buttons: []
                    });
                  }

                  const buttonsComponent = payload.components.find(c => c.type === 'BUTTONS');

                  buttonsComponent.buttons.push({
                    sub_type: subType,
                    index: buttonIndex,
                    parameters: [
                      {
                        type: 'text',
                        text: input.value || ''
                      }
                    ]
                  });
                }
              }
            });
          } else {
            console.log("selectedTemplateComponents warn 0");
          }

          try {
            console.log('payload', payload)
            const response = await EnviarTemplateMassaComponenteWaba(payload);
            console.log('Template Enviado correctamente a:', phoneNumber, response.data);
            this.sentCount++;
            await delay(randomDelay);
          } catch (error) {
            console.error('Error al enviar la plantilla a:', phoneNumber, error);
          }
        }

        this.sentCount = 0;
        this.sending = false; 
        this.fecharModalTemplate();
      }

      if(this.useTags){
        console.log('2', this.selectedContacts)
        if (!this.min) {
          this.$q.notify({
            html: true,
            message: this.$t('massaTemplate.notifications.chooseMinTime'),
            type: 'warning',
            progress: true,
            position: 'top',
            actions: [{
              icon: 'close',
              round: true,
              color: 'white'
            }]
          })
          return;
        }
        if (!this.max) {
          this.$q.notify({
            html: true,
            message: this.$t('massaTemplate.notifications.chooseMaxTime'),
            type: 'warning',
            progress: true,
            position: 'top',
            actions: [{
              icon: 'close',
              round: true,
              color: 'white'
            }]
          })
          return;
        }

        this.sending = true; 
        const minInt = parseInt(this.min, 10)
        const maxInt = parseInt(this.max, 10)

        let contacts = this.selectedContacts;
        contacts = contacts.map(contact => contact.trim()).filter(contact => contact !== '');
        console.log('3', this.selectedContacts)

        if (contacts.length <= 0) {
          this.$q.notify({
            html: true,
            message: this.$t('massaTemplate.notifications.chooseContact'),
            type: 'warning',
            progress: true,
            position: 'top',
            actions: [{
              icon: 'close',
              round: true,
              color: 'white'
            }]
          })
          this.sending = false; 
          return;
        }

        for (const phoneNumber of contacts) {

          const delay = ms => new Promise(resolve => {
            const timerId = setTimeout(resolve, ms);
            this.addTimer(timerId);
          });
          const randomDelay = Math.floor(Math.random() * (maxInt - minInt + 1) + minInt) * 1000;
          
          const payload = {
            from: phoneNumber,
            whatsapp: this.whatsappId,
            language: this.selectedTemplate.value.language,
            templateName: this.selectedTemplate.value.name,
            components: [],
            body: JSON.stringify(this.selectedTemplate.value.components),
            scheduleDate: null,
          };

          if (this.selectedTemplateComponents && this.selectedTemplateComponents.length) {
            this.selectedTemplateComponents.forEach(input => {
              if (input.value == null) {
                console.error(`El valor del componente ${input.key} es nulo o indefinido. Omitiendo este componente.`);
                return;
              }
              
              if (input.key.startsWith('header')) {
                let format = '';
                if (input.key === 'header_video') format = 'VIDEO';
                if (input.key === 'header_image') format = 'IMAGE';
                if (input.key === 'header_document') format = 'DOCUMENT';
                if (input.key === 'header_text') format = 'TEXT';

                payload.components.push({
                  type: 'HEADER',
                  format: format,
                  value: input.value
                });
              } else if (input.key.startsWith('variable')) {
                const variableNumber = input.key.replace('variable_', '');
                if (!payload.components.some(component => component.type === 'BODY')) {
                  payload.components.push({
                    type: 'BODY',
                    variables: []
                  });
                }
                const bodyComponent = payload.components.find(component => component.type === 'BODY');
                bodyComponent.variables[variableNumber - 1] = input.value;
              } else if (input.key.startsWith('named_variable')) {
                const variableName = input.key.replace('named_variable_', '');
                const bodyComponent = payload.components.find(c => c.type === 'BODY') || { type: 'BODY', parameters: [] };
                if(variableName === 'nome'){
                  bodyComponent.parameters.push({
                    type: 'text',
                    text: input.value || '',
                    name: 'name'
                })
                } if(variableName === 'texto'){
                    bodyComponent.parameters.push({
                      type: 'text',
                      text: input.value || '',
                      name: 'text'
                  })
                } if(variableName === 'number'){
                    bodyComponent.parameters.push({
                      type: 'text',
                      text: input.value || '',
                      name: 'number'
                  })
                }                

                if (!payload.components.some(c => c.type === 'BODY')) {
                    payload.components.push(bodyComponent);
                }
              }
            });
          } else {
            console.log("selectedTemplateComponents warn");
          }
          try {
            const response = await EnviarTemplateMassaComponenteWaba(payload);
            console.log('Plantilla enviada correctamente a:', phoneNumber, response.data);
            this.sentCount++;
            await delay(randomDelay);
          } catch (error) {
            console.error('Error al enviar la plantilla a:', phoneNumber, error);
          }
        }

        this.sentCount = 0;
        this.sending = false; 
        this.fecharModalTemplate();
      }
      
    },
    async buscarTemplateWaba() {
      if (!this.whatsappId) {
        this.$q.notify({
          html: true,
          message: this.$t('massaTemplate.notifications.chooseConnection'),
          type: 'warning',
          progress: true,
          position: 'top',
          actions: [{
            icon: 'close',
            round: true,
            color: 'white'
          }]
        })
        return;
      }
      
      const tokenApi = this.whatsappId.tokenAPI;
      
      // Verificar cache no localStorage
      const cacheKey = `templates_cache_${tokenApi}`
      const cachedData = localStorage.getItem(cacheKey)
      
      if (cachedData) {
        const { templates, timestamp } = JSON.parse(cachedData)
        const now = Date.now()
        const fiveMinutes = 5 * 60 * 1000 // 5 minutos em millisegundos
        
        // Se o cache ainda é válido (menos de 5 minutos), usar dados em cache
        if (now - timestamp < fiveMinutes) {
          console.log('Usando plantillas de la caché')
          this.templates = templates
          this.cacheStatus = {
            ultimaAtualizacao: new Date(timestamp).toLocaleString('es'),
            tempoRestante: Math.ceil((fiveMinutes - (now - timestamp)) / 1000),
            usandoCache: true
          }
          this.abrirModalTemplate()
          return
        }
      }
      
      // Se não há cache válido, fazer chamada à API
      console.log('Obteniendo plantillas de la API')
      const response = await BuscarTemplates(tokenApi);
      
      // Filtrar templates aprovados
      const templatesAprovados = response.data.data.filter(template => template.status === 'APPROVED');
      
      // Salvar no cache com timestamp
      const cacheData = {
        templates: templatesAprovados,
        timestamp: Date.now()
      }
      localStorage.setItem(cacheKey, JSON.stringify(cacheData))
      
      this.templates = templatesAprovados
      this.cacheStatus = {
        ultimaAtualizacao: new Date().toLocaleString('es'),
        tempoRestante: 300, // 5 minutos em segundos
        usandoCache: false
      }
      this.abrirModalTemplate();
    },
    
    // Métodos para gerenciar cache de templates
    limparCacheTemplates() {
      // Limpar todos os caches de templates
      const keys = Object.keys(localStorage)
      keys.forEach(key => {
        if (key.startsWith('templates_cache_')) {
          localStorage.removeItem(key)
        }
      })
      console.log('Caché de plantillas borrado')
    },
    
    limparCacheTemplateEspecifico(tokenApi) {
      // Limpar cache de um token específico
      const cacheKey = `templates_cache_${tokenApi}`
      localStorage.removeItem(cacheKey)
      console.log(`Caché de plantillas borrado para el token: ${tokenApi}`)
    },
    
    verificarStatusCache(tokenApi) {
      // Verificar status do cache para um token específico
      const cacheKey = `templates_cache_${tokenApi}`
      const cachedData = localStorage.getItem(cacheKey)
      
      if (!cachedData) {
        return { existe: false, valido: false, tempoRestante: 0 }
      }
      
      const { timestamp } = JSON.parse(cachedData)
      const now = Date.now()
      const fiveMinutes = 5 * 60 * 1000
      const tempoRestante = Math.max(0, fiveMinutes - (now - timestamp))
      const valido = tempoRestante > 0
      
      return {
        existe: true,
        valido,
        tempoRestante: Math.ceil(tempoRestante / 1000) // em segundos
      }
    },
    
    async forcarAtualizacaoTemplates() {
      // Força atualização ignorando o cache
      const tokenApi = this.whatsappId.tokenAPI
      this.limparCacheTemplateEspecifico(tokenApi)
      await this.buscarTemplateWaba()
    },
    
    abrirModalTemplate() {
      this.modalVisivelTemplate = true;
    },
    fecharModalTemplate() {
      this.modalVisivelTemplate = false;
      this.selectedTemplate = null;
      this.selectedTemplateComponents = [];
    }
  },
  async mounted() {
    this.userProfile = localStorage.getItem('profile');
    const menuPermissions = JSON.parse(localStorage.getItem('menuPermissions'))
    this.pageAllowed = menuPermissions?.massa === true;
    await this.listarEtiquetas();
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
.loading-bar {
  width: 100%;
  height: 4px;
  background-color: #ccc;
  position: relative;
}
.loading-bar .bar {
  width: 0;
  height: 100%;
  background-color: #007bff;
  position: absolute;
  top: 0;
  left: 0;
  animation: loadingAnimation 1s infinite;
}
@keyframes loadingAnimation {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
.blur-effect {
  filter: blur(0px);
}
.q-card {
  background: rgba(255,255,255,0.92);
  border-radius: 20px;
  box-shadow: 0 6px 32px rgba(0,0,0,0.13);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0,0,0,0.06);
  transition: box-shadow 0.2s, background 0.2s;
}
.q-card-section .text-h6, .q-card-section .text-bold {
  font-weight: 700;
  color: var(--q-primary);
}
.q-btn {
  border-radius: 6px;
  min-width: 24px;
  min-height: 24px;
  padding: 0.12rem 0.5rem;
  font-size: 0.85rem;
  transition: box-shadow 0.2s, background 0.2s;
  box-shadow: 0 1px 2px rgba(0,0,0,0.06);
}
.q-btn:hover {
  box-shadow: 0 2px 6px rgba(0,0,0,0.11);
  background: rgba(var(--q-primary-rgb), 0.09);
}
.q-list {
  background: transparent;
}
.q-select, .q-input, .q-toggle {
  border-radius: 8px;
}
.q-banner {
  border-radius: 10px;
  margin-bottom: 0.5rem;
  background: #fffbe6 !important;
  color: #222 !important;
  border: 1px solid #ffe58f !important;
}
.q-dialog .q-card {
  background: rgba(255,255,255,0.97);
  border-radius: 18px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.18);
  border: 1px solid rgba(0,0,0,0.08);
}
.q-table {
  background: rgba(255,255,255,0.85);
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.07);
  margin-bottom: 1rem;
  backdrop-filter: blur(6px);
}
body.body--dark .q-card, body.body--dark .q-dialog .q-card {
  background: rgba(30,30,30,0.98);
  box-shadow: 0 6px 32px rgba(0,0,0,0.22);
  border: 1px solid rgba(255,255,255,0.10);
}
body.body--dark .q-banner {
  background: #23234a !important;
  color: #e0e0e0 !important;
}
body.body--dark .q-table {
  background: rgba(40,40,40,0.92);
  box-shadow: 0 2px 12px rgba(0,0,0,0.18);
}
@media (max-width: 900px) {
  .q-card {
    border-radius: 12px;
    padding: 0.5rem;
  }
}
</style>
