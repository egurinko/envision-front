// initial state
const state = {
    items: []
  }
  
  // getters
  const getters = {
    cartProducts: (state, getters, rootState) => {
      return true;
    }
  }
  
  // actions
  const actions = {
    checkout ({ commit, state }, products) {
      commit('setCartItems', { items: {} })
    }
  }
  
  // mutations
  const mutations = {
    pushProductToCart (state, { id }) {
      state.items.push({
        id,
        quantity: 1
      })
    }
  }
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }