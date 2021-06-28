import Vue from 'vue'
import Vuex from 'vuex'
import slovnik from './modules/slovnik'

Vue.use(Vuex)

export default new Vuex.Store({
    actions:{},
    mutations:{},
    state:{},
    getters:{},

    modules:{
        slovnik
    }
})