import axios from 'axios'

const nurseToken = localStorage.getItem('Nurse-Token')

var userToken = axios.defaults.headers.common['Authorization'] = 'Token ' + nurseToken

export default userToken
