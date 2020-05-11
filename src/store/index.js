import Vue from 'vue'
import Vuex from 'vuex'
import Sections from './Sections'
import Users from './Users'
import createPersistedState from 'vuex-persistedstate'


Vue.use(Vuex)
 
export default new Vuex.Store({
    modules: {
        Sections,
        Users

    },
    plugins: [ 
        createPersistedState() 
      ]
    
})
