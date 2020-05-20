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
        blockUser({ commit } , id){
            // commit("startRequest");
            let head = { headers: {'x-auth-token': userToken, 'Content-type': 'application/json' }}
           console.log(head)
            try{
                console.log("I reached here")
                const response = axios.put(`https://nurse-study-backend.herokuapp.com/users/block/${id}`, head )
                commit('setblockUser', response.data)
                commit("endRequest")
            }catch(error){
                // commit("endRequest")
                throw new Error(error.response)
            }
        },

        //to block an active user
        blockuser({ commit } , id){
            return new Promise((resolve, reject) =>{
                let head = {
                headers: {'x-auth-token': userToken}
                };
                console.log(id)
                console.log(head)
                let url = "https://nurse-study-backend.herokuapp.com/users/block"
                axios.put(`${url}/${id}`, head)
                .then((data) => {
                    commit('setblockUser', data)
                    commit("endRequest")
                    resolve(data)
                })
                .catch((error) => {
                    commit('endRequest')
                    reject(error)
                })
            })
        },

        //to unblock a blocked user
        async unblockUser({ commit } , id){
            console.log("I reached here")
           let head = { headers: {'x-auth-token': userToken}}
           console.log(head)
            try{
                console.log("I reached here too")
                const response = await axios.put(`https://nurse-study-backend.herokuapp.com/users/unblock/${id}`, head
                // {
                    // headers: {
                    //     'x-auth-token': userToken,
                    //     'Content-type': 'application/json'
                    // }
                // }
                )
                commit('setunblockUser', response.data)
                console.log("I reached here too too")
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
