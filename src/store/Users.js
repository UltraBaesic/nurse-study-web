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
        user: {},
        unblockedUser: [],
        isFetching: false,
    },

    //store mutations
    mutations: {
        //to get all the sections in into sections in store
        setUsers(state, users){
          state.allUsers = users
        },

        startRequest(state){
            state.isFetching = true;
        },

        endRequest(state) {
            state.isFetching = false;
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
        //to get all the users in the database
        async getAllUsers({ commit }) {
            commit("startRequest");
            try{
               const response = await axios.get('https://nurse-study-backend.herokuapp.com/users',{
                headers: {
                    'x-auth-token': userToken,
                    'Content-type': 'application/json'
                   }
               })
               commit('setUsers', response.data)
               commit("endRequest")
            }catch(error){
                commit("endRequest")
               throw new Error(error.response)
            }
        },
        logout({ commit, state}){
            commit('endRequest');
            state.isAuthenticated = false;
            localStorage.removeItem('NurseToken')
        },

        //to block an active user
        blockuser( {commit}, id){
            return new Promise((resolve, reject) =>{
                let req = {
                    url: `https://nurse-study-backend.herokuapp.com/users/block/${id}`,
                    method: 'PUT',
                    headers: {'x-auth-token': userToken}
                }
                axios(req)
                .then((data) => {
                    commit('setblockUser', data)
                    resolve(data)
                })
                .catch((error) => {
                    reject(error)
                })
            })
        },

        //to unblock a blocked user
        async unblockUser({ commit } , id){
            return new Promise((resolve, reject) =>{
                let req = {
                    url: `https://nurse-study-backend.herokuapp.com/users/unblock/${id}`,
                    method: 'PUT',
                    headers: {'x-auth-token': userToken}
                }
                axios(req)
                .then((data) => {
                    commit('setunblockUser', data)
                    resolve(data)
                })
                .catch((error) => {
                    reject(error)
                })
            })
        },
    },
    getters: {
        getActiveUsers: (state) => state.allUsers,  
        getBlockedUsers: (state) => state.allUsers,
    }
}
