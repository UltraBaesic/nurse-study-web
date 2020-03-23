import axios from 'axios'

const nurseToken = localStorage.getItem('Nurse-Token')

var userToken = axios.defaults.headers.common['Authorization'] = nurseToken

export default userToken
