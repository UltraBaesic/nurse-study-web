import axios from 'axios'

const nurseToken = localStorage.getItem('NurseToken')

let userToken = axios.defaults.headers.common['Authorization'] = nurseToken

export default userToken
