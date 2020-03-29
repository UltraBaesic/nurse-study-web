import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import userToken from '../utils/helper.js'

Vue.use(Vuex)
Vue.use(axios)

export default {
    //store state
    state: {
        allSections: [],
        section: [],
        isFetching: false
    },


    //store mutations
    mutations: {
        //to get all the sections in into sections in store
        setSections(state, section){
          state.allSections = section
        },
        setSection(state, section){
          state.section = section
        },
    },


    //store actions
    actions: {
        //to get all the sections in the database
        async getAllSections({ commit }) {
            try{
               const response = await axios.get('https://nurse-study.herokuapp.com/content/sections', {
                     headers: {
                     'x-auth-token': userToken
                    }
               })
               commit('setSections', response.data.data)
               console.log(response.data.data);
            }catch(error){ 
               throw new Error(error.response)
            }
        },
         //to get one section in the database
        async loadSectionsInfo({ commit }, id) {
            try{
               const response = await axios.get(`https://5e738263be8c5400165c3ad4.mockapi.io/sections/${id}`)
               commit('setSection', response.data)
            }catch(error){
               throw new Error(error.response)
            }
        },
        //to post a new section
        async submitSection(payload) {
            const data = payload
            try {
                const response = await axios.post('https://5e738263be8c5400165c3ad4.mockapi.io/sections', data)
                console.log(response)
            } catch(error) {
                throw new Error(error.message)
            }
              

                       
                       
        },


    }
}

