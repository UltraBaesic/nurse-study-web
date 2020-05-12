import Vue from 'vue'
import Vuex from 'vuex'
import userToken from '../utils/helper.js'
import axios from 'axios'
 
Vue.use(Vuex)
Vue.use(axios)

export default {
    //store state
    state: {
        allUsers: [],
        blockedUser: [],
        unblockedUser: [],
        isFetching: false
    },

    //store mutations
    mutations: {
        //to get all the sections in into sections in store
        setUsers(state, users){
          state.allUsers = users
        },

        //to block an active User
        setblockUser(state, blockedUser){
            state.blockedUser = blockedUser
        },

        //to unblock an active User
        setunblockUser(state, unblockedUser){
            state.unblockedUser = unblockedUser
        }


    },
    //store actions
    actions: {
        //to get all the sections in the database
        async getAllUsers({ commit }) {
            try{
               const response = await axios.get('https://nurse-study-backend.herokuapp.com/users',{
                headers: {
                    'x-auth-token': userToken
                   }
               })
               commit('setUsers', response.data)
            }catch(error){
               throw new Error(error.response)
            }
        },

        //to block an active user
        async blockUser({ commit } , id){
            console.log(id)
            console.log(userToken)
            try{
                const response = await axios.put(`https://nurse-study-backend.herokuapp.com/users/block/${id}`, {
                    headers: {
                        'x-auth-token': userToken
                    }
                })
                commit('setblockUser', response.data)
            }catch(error){
                throw new Error(error.response)
            }
        },

        //to unblock an active user
        async unblockUser({ commit } , id){
            console.log(id)
            console.log(userToken)
            try{
                const response = await axios.put(`https://nurse-study-backend.herokuapp.com/users/unblock/${id}`, {
                    headers: {
                        'x-auth-token': userToken
                    }
                })
                commit('setunblockUser', response.data)
            }catch(error){
                throw new Error(error.response)
            }
        },
    },
    getters: {
        getActiveUsers: (state) => state.allUsers,  
        getBlockedUsers: (state) => state.allUsers,
    }
}
