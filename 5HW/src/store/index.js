import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// export const localDB = {
//   "page1": [
//     { "id": 1, "date": "20.11.2022", "category": "Food", "value": 49 },
//     { "id": 2, "date": "21.11.2022", "category": "Navigation", "value": 50 },
//     { "id": 3, "date": "22.11.2022", "category": "Sport", "value": 450 }
//   ],
//   "page2": [
//     { "id": 4, "date": "23.11.2022", "category": "Entertaiment", "value": 69 },
//     { "id": 5, "date": "24.11.2022", "category": "Sport", "value": 100 },
//     { "id": 6, "date": "25.11.2022", "category": "Food", "value": 1000 }
//   ],
//   "page3": [
//     { "id": 7, "date": "23.11.2022", "category": "Entertaiment", "value": 969 },
//     { "id": 8, "date": "24.11.2022", "category": "Education", "value": 15 },
//     { "id": 9, "date": "25.11.2022", "category": "Food", "value": 200 }
//   ],
//   "page4": [
//     { "id": 10, "date": "23.11.2022", "category": "Sport", "value": 89 },
//     { "id": 11, "date": "24.11.2022", "category": "Education", "value": 100 },
//     { "id": 12, "date": "25.11.2022", "category": "Food", "value": 200 }
//   ],
// }

export default new Vuex.Store({
  state: {
    // paymentList: JSON.parse(localStorage.getItem('pay') || '[]'),
    paymentList: [],
    categories: [],
    paymentListIds: [],
  },
  mutations: {
    setPaymentsListData(state, payload) {
      const newUnitIds = payload.filter((item) => {
        return state.paymentListIds.indexOf(item.id) < 0
      })
      const uniqIds = newUnitIds.map(obj => obj.id)
      state.paymentList.push(...newUnitIds);
      state.paymentListIds.push(...uniqIds);
    },
    addPaymentListData(state, data) {
      // localStorage.setItem('pay', JSON.stringify(state.paymentList))
      state.paymentList.push(data)
    },
    setCategoriesListData(state, payload) {
      state.categories = payload;
    },
    addCategoryToList(state, payload) {
      state.categories.push(payload);
    },
  },


  getters: {
    getFullPaymentValue: state => {
      return state.paymentList.reduce((res, cur) => res + cur.value, 0)
    },
    getPaymentList: state => state.paymentList,
    getCategories: state => state.categories,

  },
  actions: {

    // fetchData({
    //   commit
    // }, page) {
    //   return new Promise((resolve) => {
    //     setTimeout(() => {
    //       const items = localDB[`page${page}`];
    //       resolve(items);
    //     }, 0);
    //   }).then((res) => commit('setPaymentsListData', res))
    // },

    fetchData({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const items = [];
          for (let i = 1; i < 12; i++) {
            items.push({
              date: "25.11.2022",
              category: "Education",
              value: i,
              id: i,
            });
          }
          resolve(items);
        }, 0);
      }).then((res) => commit("setPaymentsListData", res));
    },


    // addPaymentListData({
    //   commit
    // }, data) {
    //   commit('addPaymentListData', data)
    // },


    fetchCategory({
      commit
    }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const categories = ["Sport", "Education", "Internet", "Food", "Transport", "Entertaiment"];
          resolve(categories);
        }, 0);
      }).then((res) => commit("setCategoriesListData", res));
    },

  },
});
