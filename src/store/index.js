import Vue from 'vue'
import Vuex from 'vuex'
import Sections from './Sections'
import Users from './Users'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        Sections,
        Users

    }
})
