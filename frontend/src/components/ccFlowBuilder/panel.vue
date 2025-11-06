<template>
  <div v-if="easyFlowVisible"
    :class="{
      'fullscreen bg-white': isFullScreen,
      'flowHeightDefault': !isFullScreen
    }">
    <q-toolbar class="text-grey-8 ">
      <q-toolbar-title>
        <div class="text-h6">{{ data.name }}</div>
      </q-toolbar-title>
      <!-- <q-btn round
        flat
        icon="mdi-delete"
        @click="deleteElement"
        :disabled="!this.activeElement.type || ['start', 'exception'].includes(this.activeElement.type)"></q-btn> -->
      <!-- <q-separator inset
        spaced
        vertical />
      <q-btn
        round
        flat
        icon="mdi-download"
        @click="downloadData"
      ></q-btn>
      <q-btn round
        flat
        :icon="isFullScreen ? 'mdi-fullscreen-exit' : 'mdi-fullscreen'"
        @click="isFullScreen = !isFullScreen" /> -->
      <!-- <div class="q-gutter-md q-mx-md">
        <q-btn
          type="info"
          @click="dataInfo"
          size="mini"
        >Información</q-btn>
        <q-btn
          type="primary"
          @click="dataReloadA"
          size="mini"
          icon="mdi-refresh"
        >Proceso A</q-btn>
      </div> -->
    </q-toolbar>
    <q-separator color="text-grey-3" />
    <div class="q-mt-sm"
      style="display: flex; height: calc(100% - 10px);">
      <!-- <div style="width: 230px;border-right: 1px solid #dce3e8;">
        <node-menu
          @addNode="addNode"
          ref="nodeMenu"
        ></node-menu>
      </div> -->
      <div id="efContainer"
        ref="efContainer"
        class="container"
        v-flowDrag>
        <template v-for="node in (data.nodeList || [])" :key="node.id">
          <flow-node :id="node.id"
            :node="node"
            :activeElement="activeElement"
            @changeNodeSite="changeNodeSite"
            @nodeRightMenu="nodeRightMenu"
            @clickNode="clickNode"
            @deleteNode="deleteNode"
            >
          </flow-node>
        </template>
        <!-- Forzar área de construcción -->
        <div style="position:absolute;top: 3000px;left: 3000px;">&nbsp;</div>
      </div>
      <!-- Configuración de nodo -->
      <div style="width: 650px; border-left: 1px solid #dce3e8;">
        <flow-node-form ref="nodeForm"
          @setLineLabel="setLineLabel"
          @repaintEverything="repaintEverything"
          :filas="cDataFlow.filas"
          :usuarios="cDataFlow.usuarios"
          :nodesList="data"
          @addNode="addNode"
          @deleteLine="deleteLine"
          @addNewLineCondition="addNewLineCondition"
          @saveFlow="saveFlow"
          @downloadData="downloadData"
          @toggleFullScreen="isFullScreen = $event"
          >
        </flow-node-form>
      </div>
    </div>
    <!-- Visualização Resultado -->
    <flow-info v-if="flowInfoVisible"
      ref="flowInfo"
      :data="data"></flow-info>
    <flow-help v-if="flowHelpVisible"
      ref="flowHelp"></flow-help>
  </div>

</template>

<script>
import draggable from 'vuedraggable'
// import jsPlumb from './jsplumb.js'
// 使用修改后的jsplumb
import './jsplumb.js'
import { easyFlowMixin } from './mixins.js'
import flowNode from './node.vue'
import nodeMenu from './node_menu.vue'
import FlowInfo from './info.vue'
import FlowHelp from './help.vue'
import FlowNodeForm from './node_form.vue'
import { merge, cloneDeep } from 'lodash'
import './index.css'
import { uid } from 'quasar'

import { UpdateChatFlow } from '../../service/chatFlow.js'

export default {
  data () {
    return {
      isFullScreen: false,
      // jsPlumb 实例
      jsPlumb: null,
      // 控制画布销毁
      easyFlowVisible: true,
      // 控制流程数据显示与隐藏
      flowInfoVisible: false,
      // 是否加载完毕标志位
      loadEasyFlowFinish: false,
      flowHelpVisible: false,
      // 数据
      data: {},
      // Elemento ativo para modificação
      activeElement: {
        // node, line
        type: undefined,
        nodeId: undefined,
        sourceId: undefined,
        targetId: undefined
      },
      zoom: 0.5
    }
  },
  props: {
    filas: {
      type: Array,
      default: () => []
    },
    usuarios: {
      type: Array,
      default: () => []
    }
  },
  // 一些基础配置移动该文件中
  mixins: [easyFlowMixin],
  components: {
    // eslint-disable-next-line vue/no-unused-components
    draggable, flowNode, nodeMenu, FlowInfo, FlowNodeForm, FlowHelp
  },
  directives: {
    flowDrag: {
      bind (el, binding, vnode, oldNode) {
        if (!binding) {
          return
        }
        el.onmousedown = (e) => {
          if (e.button == 2) {
            // 右键不管
            return
          }
          //  鼠标按下，计算当前原始距离可视区的高度
          let disX = e.clientX
          let disY = e.clientY
          el.style.cursor = 'move'

          document.onmousemove = function (e) {
            // 移动时禁止默认事件
            e.preventDefault()
            const left = e.clientX - disX
            disX = e.clientX
            el.scrollLeft += -left

            const top = e.clientY - disY
            disY = e.clientY
            el.scrollTop += -top
          }

          document.onmouseup = function (e) {
            el.style.cursor = 'auto'
            document.onmousemove = null
            document.onmouseup = null
          }
        }
      }
    }
  },
  computed: {
    cDataFlow () {
      return this.$store.state.chatFlow
    }
  },
  methods: {
    getUUID () {
      return uid()
    },
    // updateLineNodes (node) {
    //   this.jsPlumb.repaintEverything()
    // },
    addNewLineCondition (from, to, oldTo) {
      console.log('addNewLineCondition called:', { from, to, oldTo })
      
      // Si "to" es nulo, no hace nada
      if (!to) {
        console.log('Target es nulo, se omite')
        return
      }
      
      if (!this.jsPlumpConsist({ sourceId: from, targetId: to })) {
        console.log('jsPlumpConsist devuelve falso')
        return
      }
      
      // Añade la línea a la lista de líneas
      if (!this.data.lineList) this.data.lineList = []
      
      // Elimina solo la línea específica que se está modificando (si se proporcionó "oldTo")
      if (oldTo) {
        this.data.lineList = this.data.lineList.filter(line => 
          !(line.from === from && line.to === oldTo)
        )
        
        // Elimina solo la conexión visual específica
        try {
          const specificConnections = this.jsPlumb.getConnections({
            source: from,
            target: oldTo
          })
          
          if (specificConnections && specificConnections.length > 0) {
            setTimeout(() => {
              specificConnections.forEach(conn => {
                if (conn && conn.source && conn.target) {
                  try {
                    this.jsPlumb.deleteConnection(conn)
                  } catch (connError) {
                    if (!connError.message?.includes("Cannot read properties of null")) {
                      console.error('Error al eliminar la conexión específica:', connError)
                    }
                  }
                }
              })
            }, 0)
          }
        } catch (error) {
          console.error('Error al obtener conexiones específicas:', error)
        }
      }
      
      // Comprueba si ya existe una línea con el mismo origen y destino
      const existingLine = this.data.lineList.find(line => 
        line.from === from && line.to === to
      )
      
      // Si no, añade la nueva línea a la lista de líneas
      if (!existingLine) {
        this.data.lineList.push({ from: from, to: to, label: 'Valor' })
        console.log('Añadido a la lista de líneas:', this.data.lineList)
        
        // Crea la nueva conexión
        const connParam = {
          source: from,
          target: to,
          paintStyle: { strokeWidth: 3, stroke: '#5c67f2' }
        }
        
        console.log('Connecting with params:', connParam)
        this.jsPlumb.connect(connParam, this.jsplumbConnectOptions)
      } else {
        console.log('La línea ya existe, se omite la creación')
      }
      
      // REMOVIDO: this.clickNode(from) para evitar que el panel se abra automáticamente
    },
    saveFlow () {
      const data = {
        ...this.cDataFlow.flow,
        flow: this.data
      }
      UpdateChatFlow(data)
        .then(res => {
          this.$notificarSucesso('¡Flujo guardado!')
        })
        .catch(error => {
          console.error(error)
          this.$notificarErro(error)
        })
    },
    jsPlumpConsist (evt) {
      const from = evt.sourceId
      const to = evt.targetId
      if (from === to) {
        this.$q.notify({
          type: 'negative',
          progress: true,
          position: 'top',
          timeout: 2500,
          message: 'No se puede conectar el elemento consigo mismo.',
          actions: [{
            icon: 'close',
            round: true,
            color: 'white'
          }]
        })
        return false
      }
      /*
      if (this.hasLine(from, to)) {
        this.$q.notify({
          type: 'negative',
          progress: true,
          position: 'top',
          timeout: 2500,
          message: 'No se puede realizar un bucle entre elementos..',
          actions: [{
            icon: 'close',
            round: true,
            color: 'white'
          }]
        })
        return false
      }
      if (this.hashOppositeLine(from, to)) {
        this.$q.notify({
          type: 'negative',
          progress: true,
          position: 'top',
          timeout: 2500,
          message: 'No se puede realizar un bucle entre elementos.',
          actions: [{
            icon: 'close',
            round: true,
            color: 'white'
          }]
        })
        return false
      }
      */
      this.$notificarSucesso('Conexión establecida.')
      return true
    },
    jsPlumbInit () {
      console.log('jsPlumbInit called')
      this.jsPlumb.ready(() => {
        console.log('jsPlumb ready callback executed')
        // 导入默认配置
        this.jsPlumb.importDefaults(this.jsplumbSetting)
        // 会使整个jsPlumb立即重绘。
        this.jsPlumb.setSuspendDrawing(false, true)
        // 初始化节点
        this.loadEasyFlow()
        // 单点击了连接线, https://www.cnblogs.com/ysx215/p/7615677.html
        // DESACTIVADO: Hacer clic en las líneas para evitar cambios. activeElement
        // this.jsPlumb.bind('click', (conn, originalEvent) => {
        //   this.activeElement.type = 'line'
        //   this.activeElement.sourceId = conn.sourceId
        //   this.activeElement.targetId = conn.targetId
        //   this.$refs.nodeForm.lineInit({
        //     from: conn.sourceId,
        //     to: conn.targetId,
        //     label: conn.getLabel()
        //   })
        // })
        // 连线
        this.jsPlumb.bind('connection', (evt) => {
          if (!this.jsPlumpConsist(evt)) {
            return
          }
          const from = evt.source.id
          const to = evt.target.id
          if (this.loadEasyFlowFinish) {
            if (!this.data.lineList) this.data.lineList = []
            this.data.lineList.push({ from: from, to: to, label: 'Valor' })
            // const label = 'Chave'
            const label = null
            // ELIMINADO: lineInit para evitar la apertura automática del div de edición de línea.
            // if (this.$refs.nodeForm) {
            //   this.$refs.nodeForm.lineInit({
            //     from,
            //     to,
            //     label
            //   })
            // }
            this.setLineLabel(from, to, label)
          }
        })

        // 删除连线回调
        this.jsPlumb.bind('connectionDetached', (evt) => {
          this.deleteLine(evt.sourceId, evt.targetId)
        })

        // 改变线的连接节点
        this.jsPlumb.bind('connectionMoved', (evt) => {
          this.changeLine(evt.originalSourceId, evt.originalTargetId)
        })

        // 连线右击
        this.jsPlumb.bind('contextmenu', (evt) => {
          console.log('contextmenu', evt)
        })

        // 连线
        this.jsPlumb.bind('beforeDrop', (evt) => {
          return this.jsPlumpConsist(evt)
        })

        // beforeDetach
        this.jsPlumb.bind('beforeDetach', (evt) => {
          console.log('beforeDetach', evt)
        })
        this.jsPlumb.setContainer(this.$refs.efContainer)
      })
    },
    loadEasyFlow () {
      // 初始化节点
      if (!this.data.nodeList) return
      for (var i = 0; i < this.data.nodeList.length; i++) {
        const node = this.data.nodeList[i]
        // DESACTIVADO: Se eliminó makeSource para evitar arrastrar líneas desde las condiciones.
        // this.jsPlumb.makeSource(node.id, merge(this.jsplumbSourceOptions, {}))
        // DESABILITADO: Removido makeTarget para impedir conectar às condições
        // this.jsPlumb.makeTarget(node.id, this.jsplumbTargetOptions)
        if (!node.viewOnly) {
          this.jsPlumb.draggable(node.id, {
            containment: 'parent',
            stop: function (el) {
              // 拖拽节点结束后的对调
              console.log('drag to the end: ', el)
            }
          })
        }
      }
      // 初始化连线
      const uniqueConnections = new Set();
      if (this.data.lineList) {
        for (let i = 0; i < this.data.lineList.length; i++) {
          const line = this.data.lineList[i];
          const connectionKey = `${line.from}-${line.to}`;

          if (!uniqueConnections.has(connectionKey)) {
              uniqueConnections.add(connectionKey);
              
              var connParam = {
                  source: line.from,
                  target: line.to,
                  label: line.label ? line.label : '',
                  connector: line.connector ? line.connector : '',
                  anchors: line.anchors ? line.anchors : undefined,
                  paintStyle: { strokeWidth: 3, stroke: '#636063' }
              };
              
              this.jsPlumb.connect(connParam, this.jsplumbConnectOptions);
          }
        }
      }
      // for (let i = 0; i < this.data.lineList.length; i++) {
      //   const line = this.data.lineList[i]
      //   var connParam = {
      //     source: line.from,
      //     target: line.to,
      //     label: line.label ? line.label : '',
      //     connector: line.connector ? line.connector : '',
      //     anchors: line.anchors ? line.anchors : undefined,
      //     // paintStyle: line.paintStyle ? line.paintStyle : undefined
      //     paintStyle: { strokeWidth: 3, stroke: '#636063' }
      //   }
      //   this.jsPlumb.connect(connParam, this.jsplumbConnectOptions)
      // }
      this.$nextTick(function () {
        this.loadEasyFlowFinish = true
      })
    },
    setLineLabel (from, to, label) {
      var conn = this.jsPlumb.getConnections({
        source: from,
        target: to
      })[0]
      if (!label || label === '') {
        conn.removeClass('flowLabel')
        conn.addClass('emptyFlowLabel')
      } else {
        conn.addClass('flowLabel')
      }
      conn.setLabel({
        label: label
      })

      conn.setPaintStyle({ strokeWidth: 3, stroke: '#5c67f2' })

      if (this.data.lineList) {
        this.data.lineList.forEach(function (line) {
          if (line.from == from && line.to == to) {
            line.label = label
          }
        })
      }
    },
    deleteElement () {
      if(this.activeElement.id === 'nodeC') return
      if (this.activeElement.type === 'node') {
        this.deleteNode(this.activeElement)
      } else if (this.activeElement.type === 'line') {
        this.$q.dialog({
          title: this.$t('common.attention'),
          message: '¿Realmente desea eliminar la línea seleccionada?',
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
          var conn = this.jsPlumb.getConnections({
            source: this.activeElement.sourceId,
            target: this.activeElement.targetId
          })[0]
          this.jsPlumb.deleteConnection(conn)
        })
      }
    },
    deleteLine (from, to) {
      console.log('deleteLine called:', { from, to })
      
      // Remove da lista de linhas
      if (this.data.lineList) {
        this.data.lineList = this.data.lineList.filter(function (line) {
          if (line.from == from && line.to == to) {
            return false
          }
          return true
        })
      }
      
      // Elimina la conexión visual de jsPlumb con gestión de errores.
      if (from && to) {
        try {
          const conn = this.jsPlumb.getConnections({
            source: from,
            target: to
          })[0]
          if (conn && conn.source && conn.target) {
            // Usa setTimeout para evitar problemas de sincronización de jsPlumb.
            setTimeout(() => {
              try {
                this.jsPlumb.deleteConnection(conn)
              } catch (connError) {
                // Silencia el error específico de jsPlumb que no afecta la funcionalidad.
                if (!connError.message?.includes("Cannot read properties of null")) {
                  console.error('Error al eliminar la conexión.:', connError)
                }
              }
            }, 0)
          }
        } catch (error) {
          console.error('Error al obtener la conexión para la eliminación.:', error)
        }
      }
    },
    changeLine (oldFrom, oldTo) {
      this.deleteLine(oldFrom, oldTo)
    },
    changeNodeSite (data) {
      if (!this.data.nodeList) return
      for (var i = 0; i < this.data.nodeList.length; i++) {
        const node = this.data.nodeList[i]
        if (node.id === data.id) {
          node.left = data.left
          node.top = data.top
        }
      }
    },
    addNode (evt, nodeMenu, mousePosition) {
      var screenX = evt.originalEvent.clientX, screenY = evt.originalEvent.clientY
      const efContainer = this.$refs.efContainer
      var containerRect = efContainer.getBoundingClientRect()
      var left = screenX, top = screenY
      // Marca si quieres arrastrarlo al contenedor.
      if (left < containerRect.x || left > containerRect.width + containerRect.x || top < containerRect.y || containerRect.y > containerRect.y + containerRect.height) {
        this.$notificarErro('Arrastra el elemento al lienzo..')
        return
      }
      left = left - containerRect.x + efContainer.scrollLeft
      top = top - containerRect.y + efContainer.scrollTop
      // Centrar.
      left -= 85
      top -= 16
      var nodeId = this.getUUID()
      // Generar nombre dinámico.
      var origName = nodeMenu.name
      var nodeName = origName
      var index = 1
      while (index < 10000) {
        var repeat = false
        if (this.data.nodeList) {
          for (var i = 0; i < this.data.nodeList.length; i++) {
            const node = this.data.nodeList[i]
            if (node.name === nodeName) {
              nodeName = origName + index
              repeat = true
            }
          }
        }
        if (repeat) {
          index++
          continue
        }
        break
      }
      var node = {
        id: nodeId,
        name: nodeName,
        type: nodeMenu.type,
        left: left + 'px',
        top: top + 'px',
        ico: nodeMenu.ico,
        state: 'success',
        actions: nodeMenu?.actions,
        conditions: nodeMenu?.conditions,
        interactions: nodeMenu?.interactions
      }
      /**
               * 这里可以进行业务判断、是否能够添加该节点
               */
      if (!this.data.nodeList) this.data.nodeList = []
      this.data.nodeList.push(node)
      this.$nextTick(function () {
        // DESACTIVADO: Se eliminó makeSource para evitar arrastrar las líneas de condición.
        // this.jsPlumb.makeSource(nodeId, this.jsplumbSourceOptions)
        // DESABILITADO: Removido makeTarget para impedir conectar às condições
        // this.jsPlumb.makeTarget(nodeId, this.jsplumbTargetOptions)
        this.jsPlumb.draggable(nodeId, {
          containment: 'parent',
          stop: function (el) {
            // 拖拽节点结束后的对调
            console.log('drag to the end: ', el)
          }
        })
      })
    },
    deleteNode (node) {
      this.$q.dialog({
        title: this.$t('common.attention'),
        message: `¿Seguro que desea eliminar el elemento? (${node.name})?`,
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
        console.log('Deleting node:', node.id, node.name)
        console.log('Current lineList before deletion:', this.data.lineList)
        
        // Elimina todas las líneas conectadas a este nodo (tanto de origen como de destino).
        if (this.data.lineList) {
          const linesBefore = this.data.lineList.length
          // Elimina las líneas donde el nodo es el origen.
          this.data.lineList = this.data.lineList.filter(line => {
            const shouldKeep = line.from !== node.id && line.to !== node.id
            if (!shouldKeep) {
              console.log('Removing line:', line)
            }
            return shouldKeep
          })
          console.log(`Removed ${linesBefore - this.data.lineList.length} lines from lineList`)
          console.log('Updated lineList:', this.data.lineList)
        }
        
        // Elimina todas las conexiones visuales de jsPlumb conectadas a este nodo.
        try {
          // Elimina las conexiones donde el nodo es el origen.
          const sourceConnections = this.jsPlumb.getConnections({
            source: node.id
          })
          
          // Elimina las conexiones donde el nodo es el destino.
          const targetConnections = this.jsPlumb.getConnections({
            target: node.id
          })
          
          const allConnections = [...sourceConnections, ...targetConnections]
          console.log(`Encontrado. ${allConnections.length} Conexiones para eliminar:`, allConnections)
          
          if (allConnections && allConnections.length > 0) {
            setTimeout(() => {
              allConnections.forEach((conn, index) => {
                if (conn && conn.source && conn.target) {
                  try {
                    console.log(`Eliminando conexión. ${index + 1}:`, conn.source.id, '->', conn.target.id)
                    this.jsPlumb.deleteConnection(conn)
                  } catch (connError) {
                    if (!connError.message?.includes("Cannot read properties of null")) {
                      console.error('Error al eliminar la conexión:', connError)
                    }
                  }
                }
              })
            }, 0)
          }
        } catch (error) {
          console.error('Error al obtener las conexiones para la eliminación del nodo.:', error)
        }
        
        // Elimina el nodo de la lista.
        if (this.data.nodeList) {
          this.data.nodeList = this.data.nodeList.filter(n => n.id !== node.id)
        }
        
        this.$nextTick(function () {
          this.jsPlumb.removeAllEndpoints(node.id)
          console.log('Eliminación de nodo completada')
        })
      })

      return true
    },
    clickNode (nodeId) {
      const node = this.data.nodeList?.find(n => n.id === nodeId)
      // this.activeElement.type = 'node'
      // this.activeElement.id = nodeId
      this.activeElement = node
      if (this.$refs.nodeForm) {
        this.$refs.nodeForm.nodeInit(this.data, nodeId)
      }
    },
    hasLine (from, to) {
      if (!this.data.lineList) return false
      for (var i = 0; i < this.data.lineList.length; i++) {
        var line = this.data.lineList[i]
        if (line.from === from && line.to === to) {
          return true
        }
      }
      return false
    },
    // 是否含有相反的线
    hashOppositeLine (from, to) {
      return this.hasLine(to, from)
    },
    nodeRightMenu (nodeId, evt) {
      this.menu.show = true
      this.menu.curNodeId = nodeId
      this.menu.left = evt.x + 'px'
      this.menu.top = evt.y + 'px'
    },
    repaintEverything () {
      this.syncLinesWithConditions()
      this.jsPlumb.repaint()
    },
    // Método para sincronizar linhas com as condições dos nós
    syncLinesWithConditions() {
      console.log('Sincronización de líneas con condiciones...')
      
      if (!this.data.nodeList || !this.data.lineList) return
      
      // Recopila todas las líneas que deberían existir según las condiciones
      const expectedLines = []
      
      this.data.nodeList.forEach(node => {
        if (node.conditions && Array.isArray(node.conditions)) {
          node.conditions.forEach(condition => {
            if (condition.nextStepId) {
              expectedLines.push({
                from: node.id,
                to: condition.nextStepId,
                label: 'Valor'
              })
            }
          })
        }
      })
      
      console.log('Líneas esperadas según las condiciones:', expectedLines)
      console.log('Current lineList:', this.data.lineList)
      
      // Remove linhas que não deveriam existir
      const linesToRemove = this.data.lineList.filter(line => 
        !expectedLines.some(expected => 
          expected.from === line.from && expected.to === line.to
        )
      )
      
      console.log('Líneas para eliminar:', linesToRemove)
      
      //Elimina líneas innecesarias
      linesToRemove.forEach(line => {
        this.deleteLine(line.from, line.to)
      })
      
      // Agrega líneas faltantes
      const linesToAdd = expectedLines.filter(expected => 
        !this.data.lineList.some(line => 
          line.from === expected.from && line.to === expected.to
        )
      )
      
      console.log('Líneas para agregar:', linesToAdd)
      
      // Agrega líneas faltantes
      linesToAdd.forEach(line => {
        this.addNewLineCondition(line.from, line.to, null)
      })
    },
    dataInfo () {
      this.flowInfoVisible = true
      this.$nextTick(function () {
        this.$refs.flowInfo.init()
      })
    },
    dataReload (data) {
      this.easyFlowVisible = false
      this.data = {
        nodeList: [],
        lineList: [],
        ...data
      }
      this.$nextTick(() => {
        data = cloneDeep(data)
        this.easyFlowVisible = true
        this.data = data
        this.$nextTick(() => {
          if (this.jsPlumb) {
            this.jsPlumb.deleteEveryConnection()
            this.jsPlumb.deleteEveryEndpoint()
          }
          this.jsPlumbInit()
        })
      })
    },
    zoomAdd () {
      if (this.zoom >= 1) {
        return
      }
      this.zoom = this.zoom + 0.1
      this.$refs.efContainer.style.transform = `scale(${this.zoom})`
      this.jsPlumb.setZoom(this.zoom)
    },
    zoomSub () {
      if (this.zoom <= 0) {
        return
      }
      this.zoom = this.zoom - 0.1
      this.$refs.efContainer.style.transform = `scale(${this.zoom})`
      this.jsPlumb.setZoom(this.zoom)
    },
    // 下载数据
    downloadData () {
      this.$q.dialog({
        title: 'Atención!',
        message: '¿Confirmar descarga?',
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
        var datastr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(this.data, null, '\t'))
        var downloadAnchorNode = document.createElement('a')
        downloadAnchorNode.setAttribute('href', datastr)
        downloadAnchorNode.setAttribute('download', 'data.json')
        downloadAnchorNode.click()
        downloadAnchorNode.remove()
        this.$notificarSucesso('Descargando, espere....')
      })
    },
    openHelp () {
      this.flowHelpVisible = true
      this.$nextTick(function () {
        this.$refs.flowHelp.init()
      })
    }
  },
  mounted () {
    // eslint-disable-next-line no-undef
    this.jsPlumb = jsPlumb.getInstance()
    this.$nextTick(() => {
      // 默认加载流程A的数据、在这里可以根据具体的业务返回符合流程数据格式的数据即可
      this.dataReload(this.cDataFlow.flow.flow)
    })
  }
}
</script>
