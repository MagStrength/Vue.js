import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import modal from './plugins/ModalPlugin'
import context from './plugins/ContextMenu'

Vue.config.productionTip = false

Vue.use(modal)
Vue.use(context)


new Vue({
  store,
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
