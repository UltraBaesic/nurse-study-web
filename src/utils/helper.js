import axios from 'axios'

const nurseToken = localStorage.getItem('NurseToken')
var userToken
userToken = axios.defaults.headers.common['Authorization'] = nurseToken

export default userToken
