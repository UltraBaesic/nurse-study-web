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
        isAuthenticated: false,
        blockedUser: [],
        user: {},
        unblockedUser: [],
        isFetching: false
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

        setAuthSuccess(state, user){
            state.user = user
            state.isAuthenticated = true;
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
        //to get all the sections in the database
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

        async adminLogin({ commit }, user){
            commit("startRequest");
            try {
                await axios.post('https://nurse-study-backend.herokuapp.com/auth/login', user, {
                    headers: {
                        'Content-type': 'application/json'
                    }
                })
                    .then(res =>{
                        if(res.data.code === 200){
                            const token = res.data.token.token;
                            localStorage.setItem('NurseToken', token)
                        }
                        commit("endRequest")
                    })
            } catch(err){
                commit("endRequest")
                throw new Error(err.response)

            }
        },
        logout({ commit, state}){
            commit('endRequest');
            state.isAuthenticated = false;
            localStorage.removeItem('NurseToken')
        },

        //to block an active user
        async blockUser({ commit } , id){
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
