import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    costList: [],
    page: 1,
    itemsPerPage: 5
  },
  getters: {
    getList: (state) => {
      const pageCount = state.costList.length / state.itemsPerPage
      const startIdx = (state.page == 0) * state.itemsPerPage
      const endIdx = (startIdx + state.itemsPerPage <= state.costList.length)
        ? startIdx + state.itemsPerPage : state.costList.length
      return state.costList.slice(startIdx, endIdx)


    }
  },
  mutations: {
    setList: (state, list) => { state.costList = list },
    setPage: (state, pageNum) => { state.page = pageNum },

    nextPage: (state) => { state.page = (++state.page) % Math.ceil(state.costList.length / state.itemsPerPage) },
    prevPage: (state) => { state.page == (--state.page) ? state.costList.length / state.itemsPerPage : state.page - 1 }
  },

  actions: {
    getList({ commit }) {
      return new Promise((res) => {
        setTimeout(() => {
          commit('setList', [
            { id: 1, category: 'food', value: 100, date: '27.11.2022' },
            { id: 2, category: 'sport', value: 200, date: '28.11.2022' },
            { id: 3, category: 'food', value: 150, date: '28.11.2022' },
            { id: 4, category: 'transport', value: 179, date: '28.11.2022' },
            { id: 5, category: 'food', value: 80, date: '29.11.2022' },
            { id: 6, category: 'transport', value: 300, date: '29.11.2022' },
            { id: 7, category: 'sport', value: 110, date: '30.11.2022' },
          ])
          res()
        }, 0)
      })
    }
  },
  modules: {
  }
})
