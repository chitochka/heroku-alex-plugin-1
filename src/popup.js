'use strict';

import './popup.css';

import Vue from 'vue' 
import vuetify from './plugins/vuetify' 
import App from './App.vue'

new Vue({
  vuetify,
  el: '#app',
  render: h => h(App)
}).$mount('#app')
