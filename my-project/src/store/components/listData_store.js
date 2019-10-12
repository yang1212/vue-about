const listDataModule = {
  namespaced: true,
  state: {
    detailData: null
  },
  mutations: {
    setTimelineMutation(state, data) {state.detailData = data }
  },
  actions: {
    setTimelineAction({ commit, state }, result) { 
      commit('setTimelineMutation', result) 
    }
  },
  getters: {
    detailData: store => store.detailData
  }
}

export default listDataModule