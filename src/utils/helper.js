import axios from 'axios'
// async function userToken() {

//     let nurseToken = await localStorage.getItem('NurseToken')
//     var userToken = axios.defaults.headers.common['Authorization'] = nurseToken
//     return userToken
//   }

const nurseToken = localStorage.getItem('NurseToken')
var userToken
userToken = axios.defaults.headers.common['Authorization'] = nurseToken
export default userToken
