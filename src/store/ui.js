// initial state
const state = {
  isPhone: false,
  isLoading: true
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
  },
  handleIsLoading({ commit }, isLoading) {
    commit("updateIsLoading", isLoading);
  }
};

// mutations (reducer)
const mutations = {
  updateIsPhone(state, isPhone) {
    state.isPhone = isPhone;
  },
  updateIsLoading(state, isLoading) {
    state.isLoading = isLoading;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
