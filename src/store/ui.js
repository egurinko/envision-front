// initial state
const state = {
  isPhone: false
};

// getters
const getters = {
  isPhone: (state, getters, rootState) => {
    return true;
  }
};

// actions
const actions = {
  handleWindowSize({ commit }, isPhone) {
    commit("updateIsPhone", isPhone);
  }
};

// mutations
const mutations = {
  updateIsPhone(state, isPhone) {
    state.isPhone = isPhone;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
