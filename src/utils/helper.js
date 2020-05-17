import axios from 'axios'
// async function userToken() {

const nurseToken = localStorage.getItem('NurseToken')

let userToken = axios.defaults.headers.common['Authorization'] = nurseToken

export default userToken;