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
        sectionArticles: [],
        sectionQuestions: [],
        sectionMedia: [],
        newsection: [],
        newArticle: [],
        newVideo: [],
        newQuestion: [],
        isFetching: false
    },

    //store mutations
    mutations: {
        //to get all the sections in into sections in store
        setSections(state, section){
          state.allSections = section
        },

        //to get all the sections in into sections in store
        setSection(state, section){
          state.section = section
        },

        //to get all articles under a section
        setSectionArtcles(state, sectionArticles){
            state.sectionArticles = sectionArticles
        },

        //to get all questions under a section
        setSectionQuestions(state, sectionQuestions){
            state.sectionQuestions = sectionQuestions
          },

        //to get all medias under a section
        setSectionMedia(state, sectionMedia){
            state.sectionMedia = sectionMedia
        },

        //to add  new section 
        newSection(state, setnewsection){
          state.newsection = setnewsection
        },

        //to add new articles
        addArticle(state, setNewArticle){
            state.newArticle = setNewArticle
        },

        //to add new video
        addVideo(state, setNewVideo){
            state.newVideo = setNewVideo
        },

        //to add new question
        addQuestion(state, setNewQuestion){
            state.newQuestion = setNewQuestion
        }
        
    },

    //store actions
    actions: {
        //to get all the sections in the database
        async getAllSections({ commit }) {
            // console.log(userToken)
            try{
               const response = await axios.get('https://nurse-study-backend.herokuapp.com/content/sections', {
                     headers: {
                     'x-auth-token': userToken
                    }
               })
               commit('setSections', response.data.data)
            //    console.log(response.data.data);
            }catch(error){ 
               throw new Error(error.response)
            }
        },
        
         //to get one section in the database
        async loadSectionsInfo({ commit }, id) {
            try{
               const response = await axios.get(`https://nurse-study-backend.herokuapp.com/content/section/${id}`, {
                 headers: {'x-auth-token': userToken}
               })
               commit('setSection', response.data)
            }catch(error){
               throw new Error(error.response)
            }
        },

        //to get all articles under a section
        async getSectionArticles({ commit }, id) {
            try{
               const response = await axios.get(`https://nurse-study-backend.herokuapp.com/content/section_articles/${id}`, {
                 headers: {'x-auth-token': userToken}
               })
               commit('setSectionArtcles', response.data)
            }catch(error){
               throw new Error(error.response)
            }
        },
        
        //to get all questions under a section
        async getSectionQuestions({ commit }, id) {
            try{
               const response = await axios.get(`https://nurse-study-backend.herokuapp.com/content/section_questions/${id}`, {
                 headers: {'x-auth-token': userToken}
               })
               commit('setSectionQuestions', response.data)
            }catch(error){
               throw new Error(error.response)
            }
        },
        
        //to get all media video and audio
        async getSectionMedia({ commit }, id){
            try{
                const response = await axios.get(`https://nurse-study-backend.herokuapp.com/content/section_media/${id}`, {
                    headers: {'x-auth-token': userToken}
                })
                commit('setSectionMedia', response.data)
            }catch(error){
                throw new Error(error.response)
            }
        },

        // to post a new section
        submitSection : ({commit}, payload)=>{
            return new Promise((resolve, reject) =>{
                let head = {
                    headers: {'x-auth-token': userToken}
                }
                let load = {
                    "title" : payload.title,
                    "description" : payload.description,
                    "image_link" : payload.image_link
                }
                axios.post('https://nurse-study-backend.herokuapp.com/content/section', load , head)
                .then((data) =>{
                    commit('newSection', data)
                    resolve(data)
                })
                .catch((error) =>{
                    reject(error)
                })
            })
        },
        
        //to post a new article
        newArticle: ({commit, state}, newpayload) =>{
            return new Promise((resolve, reject) =>{
                let head = {
                    headers: {'x-auth-token': userToken}
                };
                let ID = state.section.data[0]._id
                console.log('this is the ID' +ID)
                console.log(state.section)
                let load = {
                    "title" : newpayload.title,
                    "content" : newpayload.content,
                    "section_id" : ID,
                    "category" : newpayload.category
                }
                axios.post('https://nurse-study-backend.herokuapp.com/content/article', load, head)
                .then((data) => {
                    commit('addArticle', data)
                    resolve(data)
                })
                .catch((error) => {
                    reject(error)
                })
            })
        },
        //to post a new video
        newVideo: ({commit, state}, payload) =>{
            return new Promise((resolve, reject) =>{
                let head = {
                    headers: {'x-auth-token': userToken}
                };
                let ID = state.section.data[0]._id
                console.log('this is the ID' +ID)
                console.log(state.section)
                let load = {
                    "title" : payload.title,
                    "link" : payload.link,
                    "section_id" : ID,
                    "type" : "video"
                }
                axios.post('https://nurse-study-backend.herokuapp.com/content/media', load, head)
                .then((data) => {
                    commit('addVideo', data)
                    resolve(data)
                })
                .catch((error) => {
                    reject(error)
                })
            })
        },

        //to post a new question
        addQuestion: ({commit, state}, questionPayload) =>{
            return new Promise((resolve, reject) =>{
                let head = {
                    headers: {'x-auth-token': userToken}
                };
                let ID = state.section.data[0]._id
                console.log('this is the ID ' +ID)
                let load = {
                    "question" : questionPayload.question,
                    "options" : questionPayload.options,
                    "section_id" : ID,
                    "correct_option" : questionPayload.correct_option,
                }
                console.log(load)
                axios.post('https://nurse-study-backend.herokuapp.com/content/question', load, head)
                .then((data) => {
                    commit('addQuestion', data)
                    resolve(data)
                })
                .catch((error) => {
                    reject(error)
                })
            })
        }

    },

    //store getters
    getters: {
        getArticleInfo: (state) => state.sectionArticles.data,  
        getSectionAudio: (state) => state.sectionMedia.data,
        getSectionVideo: (state) => state.sectionMedia.data
    }
}

