import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
 
Vue.use(Vuex)
Vue.use(axios)

export default {
    //store state
    state: {
        allUsers: [],
        isFetching: false
    },

    //store mutations
    mutations: {
        //to get all the sections in into sections in store
        setUsers(state, users){
          state.allUsers = users
        }
    },
    //store actions
    actions: {
        //to get all the sections in the database
        async getAllUsers({ commit }) {
            try{
               const response = await axios.get('https://5e738263be8c5400165c3ad4.mockapi.io/Users')
               commit('setUsers', response.data)
            }catch(error){
               throw new Error(error.response)
            }
        }
    }
}
