<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
const usuario = JSON.parse(localStorage.getItem('usuario'))
const userId = JSON.parse(localStorage.getItem('userId'))
import { MostrarCoresPublicas } from 'src/service/empresas.js';
import { DadosUsuario } from 'src/service/user.js'

export default {
  name: 'Sisnetel',
  components: { 
    // Webphone 
  },
  data () {
    return {
      IDLE_TIMEOUT: 7200,
      idleSecondsCounter: 0,
      // userProfile: 'user'
      usuario: {
        profile: 'user'
      },
      // Adicionar propriedades para controlar os timers
      idleTimer: null,
      updateUserTimer: null,
      checkScheduleTimer: null,
      eventListeners: []
    }
  },
  methods: {
    async iniciarAtualizacaoUsuario() {
      await this.atualizarUsuario();
      this.updateUserTimer = setTimeout(() => this.iniciarAtualizacaoUsuario(), 30000);
    },
    async atualizarUsuario() {
      if (this.atualizandoUsuario) return;
      this.atualizandoUsuario = true;
      try {
        if(!userId) return;
        if (this.usuario.profile === 'user') return;
        const { data } = await DadosUsuario(userId);
        localStorage.setItem('profile', data.profile);
      } catch (error) {
        console.error('Error al cargar el usuario:', error);
      } finally {
        this.atualizandoUsuario = false;
      }
      // try {
      //   if(usuario.profile === 'user') return
      //   const { data } = await DadosUsuario(userId)
      //   localStorage.setItem('profile', data.profile)
      // } catch (error) {
      //   // console.error(error)
      //   // this.$notificarErro('Problema ao carregar usuário', error)
      // }
    },
    async iniciarChecarHorarioAtendimento() {
      await this.checarHorarioAtendimento();
      this.checkScheduleTimer = setTimeout(() => this.iniciarChecarHorarioAtendimento(), 1800000);
    },
    async checarHorarioAtendimento() {
      if (this.checandoHorarioAtendimento) return;
      this.checandoHorarioAtendimento = true;
      try {
        if(!userId) return;
        await DadosUsuario(userId);
      } catch (error) {
        console.error('Error al cargar el usuario:', error);
      } finally {
        this.checandoHorarioAtendimento = false;
      }
      // try {
      //   if(usuario.profile === 'user') return
      //   const { data } = await DadosUsuario(userId)
      //   localStorage.setItem('profile', data.profile)
      // } catch (error) {
      //   // console.error(error)
      //   // this.$notificarErro('Problema ao carregar usuário', error)
      // }
    },
    CheckIdleTime () {
      this.idleSecondsCounter++
      if (this.idleSecondsCounter >= this.IDLE_TIMEOUT) {
        window.location.reload();
      }
      this.idleTimer = setTimeout(() => this.CheckIdleTime(), 30000);
    },
    bindEventListeners() {
      // Usar addEventListener em vez de atribuição direta
      const clickHandler = () => { this.idleSecondsCounter = 0; };
      const moveHandler = () => { this.idleSecondsCounter = 0; };
      const keyHandler = () => { this.idleSecondsCounter = 0; };
      
      document.addEventListener('click', clickHandler);
      document.addEventListener('mousemove', moveHandler);
      document.addEventListener('keypress', keyHandler);
      
      // Armazenar referências para limpeza
      this.eventListeners = [
        { element: document, event: 'click', handler: clickHandler },
        { element: document, event: 'mousemove', handler: moveHandler },
        { element: document, event: 'keypress', handler: keyHandler }
      ];
    },
    async loadColors() {
      try {
        const response = await MostrarCoresPublicas();
        if (response.status === 200) {
          localStorage.setItem('storedColors', JSON.stringify(response.data));
          
          const root = document.documentElement;
          response.data.forEach(colorObj => {
            Object.keys(colorObj).forEach(key => {
              root.style.setProperty(`--q-${key}`, colorObj[key]);
            });
          });

        } else {
          console.error('Error al cargar los colores');
        }
      } catch (error) {
        console.error('Error al cargar los colores:', error);
      }
    },
    // Método para limpar todos os timers e listeners
    cleanup() {
      // Limpar timers
      if (this.idleTimer) {
        clearTimeout(this.idleTimer);
        this.idleTimer = null;
      }
      if (this.updateUserTimer) {
        clearTimeout(this.updateUserTimer);
        this.updateUserTimer = null;
      }
      if (this.checkScheduleTimer) {
        clearTimeout(this.checkScheduleTimer);
        this.checkScheduleTimer = null;
      }
      
      // Remover event listeners
      this.eventListeners.forEach(({ element, event, handler }) => {
        element.removeEventListener(event, handler);
      });
      this.eventListeners = [];
    },
    // monitorarLocalStorage() {
    //   this.atualizarUsuario();
    // },
  },
  beforeMount () {
    if (usuario?.configs?.isDark) {
      this.$q.dark.set(usuario?.configs?.isDark)
    }
    this.bindEventListeners();
    this.CheckIdleTime();
  },
  mounted() {
    this.iniciarAtualizacaoUsuario();
    this.iniciarChecarHorarioAtendimento();
    this.loadColors();
  },
  // Adicionar lifecycle hooks para limpeza
  beforeUnmount() {
    this.cleanup();
  },
  unmounted() {
    this.cleanup();
  }
}
</script>

