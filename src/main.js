import Vue from 'vue'
import App from './App.vue'
import { router } from './router'
import store from './store'
import axios from 'axios'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import moment from 'moment'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(IconsPlugin)
Vue.use(BootstrapVue)
Vue.use(axios)


Vue.filter('truncate', function (string, number) {
  if (string.length >= number) {
    return string.slice(0, number) + "...";
  } else {
    return string;
  }
})

Vue.filter('fullDate', (value) => {
  return moment(value).format('ll')
})

// Vue.filter('todaysDate', => {
//   return moment("dddd, MMMM Do YYYY, h:mm:ss a")
// })

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

