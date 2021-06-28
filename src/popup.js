'use strict';

import './popup.css';

import Vue from 'vue' 
import vuetify from './plugins/vuetify' 
import store from './store'
import App from './App.vue'
import './temp/initLocalStorage'  // docasne reseni

new Vue({
  store,
  vuetify,
  el: '#app',
  render: h => h(App)
}).$mount('#app')
