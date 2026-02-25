import Wavoip from 'wavoip-api';
import { cloneDeep } from 'lodash'
import parsePhoneNumber from 'libphonenumber-js';

const findRecordById = ($state, id) =>
  $state.records.find(record => record.id === Number(id)) || {};

const defaultState = {
  records: [],
  uiFlags: {
    isOpen: true,
    isFetching: false,
    isFetchingItem: false,
    isUpdating: false,
    isCheckoutInProcess: false,
    isWebphoneVisible: false,
  },
  call: {
    id: null,
    duration: 0,
    tag: null,
    phone: null,
    picture_profile: null,
    status: null,
    direction: null,
    whatsapp_instance: null,
    active_start_date: null,
    chat_id: null,
    inbox_name: null,
  },
  wavoip: {},
  socketEvents: []
};

export const getters = {
  getAccount: $state => id => {
    return findRecordById($state, id);
  },
  getUIFlags($state) {
    return $state.uiFlags;
  },
  getCallInfo($state) {
    return $state.call;
  },
  getWavoip($state) {
    return $state.wavoip;
  },
  getSocketEvents($state) {
    return $state.socketEvents;
  },
};

export const actions = {
  toggleWebphoneVisibility: ({ commit }, isVisible) => {
    commit('SET_WEBPHONE_VISIBILITY', isVisible);
  },
  startWavoip: async ({ commit, state, dispatch }, { inboxName, token }) => {
    if (state.wavoip[token] && token) {
      return;
    }

    const tokens = token.includes(',') ? token.split(',').map(t => t.trim()) : [token];

    for (const token of tokens){

      if (state.wavoip[token]) {
        continue;
      }
      try{
      const WAV = new Wavoip();
      const whatsapp_instance = await WAV.connect(token);

      whatsapp_instance.socket.off('signaling');
      whatsapp_instance.socket.on('signaling', (...args) => {
        const data = args[0];

        console.log('Signaling data:', data);
        commit('ADD_SOCKET_EVENT', {
          type: 'signaling',
          data: data
        });
        // Armazene automaticamente no localStorage se desejar
        dispatch('saveSocketEventsToLocalStorage');

        if(state.call.inbox_name) {
          if(state.call.inbox_name !== inboxName) {
            return;
          }
        }

        dispatch('updateCallStatus', data?.tag);
        if (data?.tag === 'offer') {
          const name = data?.content?.from_tag;
          const whatsapp_id = data?.content?.phone;
          const phone =
            parsePhoneNumber(`+${whatsapp_id}`)?.formatInternational() ??
            whatsapp_id;
          const profile_picture = data?.content?.profile_picture;
          dispatch('incomingCall', {
            token: token,
            phone: phone,
            contact_name: name,
            profile_picture: profile_picture,
          });
        } else if (data?.tag === 'terminate') {
          setTimeout(() => {
            dispatch('resetCall');
          }, 250);
          setTimeout(() => {
            window.location.reload();
          }, 500);
        } else if (data?.tag === 'reject') {
          setTimeout(() => {
            dispatch('resetCall');
          }, 250);
          setTimeout(() => {
            window.location.reload();
          }, 500);
        } else if (data?.tag === 'accept_elsewhere') {
          setTimeout(() => {
            dispatch('resetCall');
          }, 500);
        } else if (data?.tag === 'reject_elsewhere') {
          setTimeout(() => {
            dispatch('resetCall');
          }, 250);
          setTimeout(() => {
            window.location.reload();
          }, 500);
        }
      });

      commit('ADD_WAVOIP', {
        token: token,
        whatsapp_instance: whatsapp_instance,
        inboxName: inboxName,
      });

      whatsapp_instance.socket.on('connect', () => {});
      whatsapp_instance.socket.on('disconnect', () => {});
      } catch(e){
        console.log('error', e);
      }
    }
  },
  outcomingCall: async ({ commit, state, dispatch }, callInfo) => {
    let { phone, contact_name, chat_id, profile_picture } = callInfo;
    
    // const tokens = callInfo.token?.includes(',')
    //     ? callInfo.token.split(',').map(t => t.trim())
    //     : [callInfo.token];

    // let instances = callInfo.instances ?? Object.keys(state.wavoip);
    // let remainingInstances = [...instances];

    let instances = [];
    if (callInfo.instances && Array.isArray(callInfo.instances) && callInfo.instances.length > 0) {
      // Garante que cada item seja separado por vírgula, se necessário
      instances = callInfo.instances.flatMap(t => t.split(',').map(x => x.trim()));
    } else if (callInfo.token) {
      const tokens = callInfo.token.includes(',')
        ? callInfo.token.split(',').map(t => t.trim())
        : [callInfo.token];
      instances = tokens.filter(token => state.wavoip[token]);
    } else {
      instances = Object.keys(state.wavoip);
    }
    let remainingInstances = [...instances];

    for (const token of remainingInstances) {
        if (!state.wavoip[token]) {
            console.warn(`Token ${token} No conectado a Wavoip.`);
            continue;
        }

        let wavoip = state.wavoip[token]?.whatsapp_instance;
        let inbox_name = state.wavoip[token]?.inbox_name;

        if (!wavoip) {
            console.warn(`Instancia de Wavoip para el token ${token} no encontrado.`);
            continue;
        }

        console.log(`Intentando llamada con token: ${token}`);

        let timeout = setTimeout(() => {
            console.warn(`[${inbox_name}] - Timeout. Probando el siguiente token.`);
            dispatch('outcomingCall', {
                ...callInfo,
                instances: remainingInstances.filter(instance => instance !== token),
                token: null,
            });
        }, 1000);

        try {
            let response = await wavoip.callStart({ whatsappid: phone });

            if (response.type !== 'success') {
                console.warn(`Llamada fallida con token ${token}:`, response.result);
                throw new Error(response?.result || 'Error desconocido');
            }

            let newProfilePicture = response?.result?.profile_picture || profile_picture;

            commit('SET_WEBPHONE_CALL', {
                id: token,
                duration: 0,
                tag: contact_name,
                phone: phone,
                picture_profile: newProfilePicture,
                status: 'outcoming_calling',
                direction: 'outcoming',
                whatsapp_instance: token,
                inbox_name: inbox_name,
                chat_id: chat_id,
            });

            commit('SET_WEBPHONE_UI_FLAG', { isOpen: true });

            clearTimeout(timeout);
            return; // Sai do loop se uma chamada funcionar

        } catch (error) {
            console.error(`Error al intentar llamar con token ${token}:`, error.message);

            remainingInstances = remainingInstances.filter(instance => instance !== token);

            if (remainingInstances.length === 0) {
                console.warn('No hay instancia disponible para continuar la llamada.');
                throw new Error('Línea ocupada, inténtelo de nuevo más tarde o actualice');
            }
        } finally {
            clearTimeout(timeout);
        }
    }
  },
  incomingCall_CHECK: async ({ commit, state, dispatch }, callInfo) => {
    const tokens = callInfo.token.includes(',')
      ? callInfo.token.split(',').map(t => t.trim())
      : [callInfo.token];
  
    let inbox_name;
    let activeToken = null;
  
    for (const singleToken of tokens) {
      if (!state.wavoip[singleToken]) {
        console.warn(`No se encontró la instancia para el token ${singleToken}`);
        continue;
      }
  
      inbox_name = state.wavoip[singleToken].inbox_name;
      activeToken = singleToken;
  
      commit('SET_WEBPHONE_CALL', {
        id: singleToken,
        duration: 0,
        tag: callInfo.contact_name,
        phone: callInfo.phone,
        picture_profile: callInfo.profile_picture,
        status: 'offer',
        direction: 'incoming',
        whatsapp_instance: singleToken, // Aqui está o segredo!
        inbox_name: inbox_name,
        chat_id: null,
      });
  
      commit('SET_WEBPHONE_UI_FLAG', { isOpen: true });
  
      break; // Encerra após definir o token correto.
    }
  
    if (!activeToken) {
      console.error("No se encontró una instancia válida para la llamada entrante.");
    }
  },
  incomingCall: async ({ commit, state, dispatch }, callInfo) => {
    console.log('incomingCall', state);
    const tokens = callInfo.token.includes(',')
      ? callInfo.token.split(',').map(t => t.trim())
      : [callInfo.token];
  
    const singleToken = tokens.find(token => state.wavoip[token]);
  
    if (!singleToken) {
      console.error("No se encontró una instancia válida para la llamada entrante.");
      return;
    }
  
    const inbox_name = state.wavoip[singleToken].inbox_name;
  
    commit('SET_WEBPHONE_CALL', {
      id: singleToken,
      duration: 0,
      tag: callInfo.contact_name,
      phone: callInfo.phone,
      picture_profile: callInfo.profile_picture,
      status: 'offer',
      direction: 'incoming',
      whatsapp_instance: singleToken,
      inbox_name: inbox_name,
      chat_id: null,
    });
  
    commit('SET_WEBPHONE_UI_FLAG', { isOpen: true });
  },
  updateCallStatus: ({ commit }, status) => {
    commit('SET_WEBPHONE_CALL', { status });
  
    if (status === 'accept') {
      commit('SET_WEBPHONE_CALL', {
        active_start_date: new Date(),
      });
    }
  },
  acceptCall: async ({ state, dispatch }) => {
    try {
      const wavoip_token = state.call.whatsapp_instance;
  
      if (!wavoip_token || !state.wavoip[wavoip_token]) {
        console.error('Token o instancia no válidos al aceptar la llamada:', wavoip_token);
        return;
      }
  
      const wavoip = state.wavoip[wavoip_token].whatsapp_instance;
  
      await wavoip.acceptCall();
  
      dispatch('updateCallStatus', 'accept');
    } catch (error) {
      console.error('Error al aceptar la llamada:', error.message);
    }
  },
  rejectCall: async ({ state, dispatch }, token) => {
    try {
      const wavoip_token = state.call.whatsapp_instance;
  
      if (!wavoip_token || !state.wavoip[wavoip_token]) {
        console.error('Token o instancia no válidos no encontrados al aceptar la llamada:', wavoip_token);
        return;
      }
  
      
      const wavoip = state.wavoip[wavoip_token].whatsapp_instance;
      dispatch('resetCall');
      await wavoip.rejectCall();
      console.log('resetCall 2', state.wavoip[wavoip_token].whatsapp_instance);
    } catch (error) {
      console.error('Error al rechazar la llamada:', error.message);
    }
  },
  endCall: async ({ state, dispatch }) => {
    try {
      const wavoip_token = state.call.whatsapp_instance;
  
      if (!wavoip_token || !state.wavoip[wavoip_token]) {
        console.error('Token o instancia no válidos no encontrados al aceptar la llamada:', wavoip_token);
        return;
      }
  
      const wavoip = state.wavoip[wavoip_token].whatsapp_instance;

      await wavoip.endCall();
  
      dispatch('resetCall');
    } catch (error) {
      console.error('Error al finalizar la llamada:', error.message);
    }
  },
  resetCall: async ({ commit }) => {
    commit('SET_WEBPHONE_CALL', {
      id: null,
      duration: 0,
      tag: null,
      phone: null,
      picture_profile: null,
      status: null,
      direction: null,
      whatsapp_instance: null,
      active_start_date: null,
      inbox_name: null,
      chat_id: null,
    });
  },
  updateWebphoneVisible: ({ commit }, { isOpen }) => {
    commit('SET_WEBPHONE_UI_FLAG', {
      isOpen: isOpen,
    });
  },
  openWebphone: ({ commit }) => {
    commit('SET_WEBPHONE_UI_FLAG', {
      isOpen: true,
    });
  },
  exportSocketEvents({ state }) {
    const eventsJson = JSON.stringify(state.socketEvents, null, 2);
    
    const blob = new Blob([eventsJson], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `wavoip-events-${new Date().toISOString().replace(/:/g, '-')}.json`;
    document.body.appendChild(a);
    a.click();
    
    // Limpar
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 0);
    
    return eventsJson;
  },
  clearSocketEvents({ commit }) {
    commit('CLEAR_SOCKET_EVENTS');
  },
  saveSocketEventsToLocalStorage({ state }) {
    try {
      localStorage.setItem('wavoip-events', JSON.stringify(state.socketEvents));
      return true;
    } catch (error) {
      console.error('Error al guardar eventos en localStorage:', error);
      return false;
    }
  },
  loadSocketEventsFromLocalStorage({ commit }) {
    try {
      const savedEvents = localStorage.getItem('wavoip-events');
      if (savedEvents) {
        commit('SET_SOCKET_EVENTS', JSON.parse(savedEvents));
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error al cargar eventos desde localStorage:', error);
      return false;
    }
  }
};

export const mutations = {
  SET_WEBPHONE_VISIBILITY($state, isVisible) {
    $state.uiFlags.isWebphoneVisible = isVisible;
  },
  SET_WEBPHONE_UI_FLAG($state, data) {
    $state.uiFlags = {
      ...$state.uiFlags,
      ...data,
    };
  },
  ADD_WAVOIP($state, data) {
    const vdata=cloneDeep(data)
    $state.wavoip = {
      ...$state.wavoip  ,
      [vdata.token]: { inbox_name: vdata.inboxName, token: vdata.token, whatsapp_instance:vdata.whatsapp_instance },
    };
    // $state.wavoip = {
    //   ...$state.wavoip,
    //   [data.token]: {
    //     whatsapp_instance: data.whatsapp_instance,
    //     inbox_name: data.inboxName,
    //   },
    // };
  },
  SET_WEBPHONE_CALL($state, data) {
    console.log('SET_WEBPHONE_CALL', data);
    $state.call = {
      ...$state.call,
      ...data,
    };
  },
  SET_SOCKET_EVENTS($state, events) {
    $state.socketEvents = events;
  },
  ADD_SOCKET_EVENT($state, event) {
    $state.socketEvents.push({
      timestamp: new Date().toISOString(),
      event: event
    });
  },
  CLEAR_SOCKET_EVENTS($state) {
    $state.socketEvents = [];
  },
};

export default {
  namespaced: true,
  state: defaultState,
  getters,
  actions,
  mutations,
};