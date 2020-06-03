import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import userToken from '../utils/helper.js'

Vue.use(Vuex)
Vue.use(axios)

export default {
    //store state
    state: {
        plans: [],
        edittedplan: ""
    },

    //store mutations
    mutations: {
        //to get all the sections in into sections in store
        setPlans(state, plans){
          state.plans= plans
        },
        editPlan(state, plan){
          state.edittedplan= plan
        },
    },

    //store actions
    actions: {
        //to get plans
        async getPlans({ commit }) {
            commit('startRequest')
            try{
               const response = await axios.get('https://nurse-study-backend.herokuapp.com/content/subscription/', {
                    headers: {
                        'x-auth-token': userToken,
                    }    
               })
               commit('setPlans', response.data.data)
               commit('endRequest')
               
            }catch(error){ 
               commit('endRequest')
               throw new Error(error.response)
            }
        },
        async editPlan({ commit }, payload) {
            commit('startRequest')
            let id = payload.id
            let newData = {
                    "plan": payload.plan,
                    "amount": payload.amount,
                    "duration": payload.duration
                }
                console.log(newData)
                console.log(id)
            try{
               const response = await axios.put(`https://nurse-study-backend.herokuapp.com/content/subscription/${id}`,  newData, {
                    headers: {
                        'x-auth-token': userToken,
                    }    
               })
               commit('editPlan', response)
               commit('endRequest')
               
            }catch(error){ 
               commit('endRequest')
               throw new Error(error.response)
            }
        },
        
    },

    //store getters
    getters: {
    }
}

