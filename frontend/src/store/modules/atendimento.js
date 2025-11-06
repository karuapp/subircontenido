export default {
  namespaced: true,
  state: {
    ticketFocado: {},
    hasMore: true
  },
  mutations: {
    TICKET_FOCADO(state, ticket) {
      state.ticketFocado = ticket
    },
    SET_HAS_MORE(state, hasMore) {
      state.hasMore = hasMore
    }
  },
  actions: {
    async espiarAtendimentoContactId({ commit }, contactId) {
      try {
        await this._vm.espiarAtendimentoContactId(contactId);
      } catch (error) {
        console.error('Error al ver el chat:', error);
        throw error;
      }
    },
    async AbrirChatMensagens({ commit }, ticket) {
      try {
        commit('TICKET_FOCADO', ticket)
        await this._vm.fetchMessagesForTicket(ticket)
      } catch (error) {
        console.error('Error al abrir el chat:', error)
        throw error
      }
    }
  }
} 