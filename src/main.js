import Vue from 'vue'
import App from './App.vue'
import { router } from './router'
import store from './store'
import axios from 'axios'
import VueSimpleAlert from "vue-simple-alert";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import moment from 'moment'
import VueToastr2 from 'vue-toastr-2'
window.toastr = require('toastr')
import 'vue-toastr-2/dist/vue-toastr-2.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
 
Vue.use(VueToastr2)
Vue.use(IconsPlugin)
Vue.use(BootstrapVue)
Vue.use(axios)
Vue.use(VueSimpleAlert);


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

Vue.filter('todaysDate',  (val)  => {
  return moment(val).format('LLLL');
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

