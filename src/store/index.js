import Vue from 'vue'
import Vuex from 'vuex'
import Sections from './Sections'
import users from './Users'
import Settings from './Settings'
import createPersistedState from 'vuex-persistedstate'


Vue.use(Vuex)
 
export default new Vuex.Store({
    modules: {
        Sections,
        users,
        Settings
    },
    plugins: [ 
        createPersistedState() 
      ]
    
})
