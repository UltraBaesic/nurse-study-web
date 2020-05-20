import Vue from 'vue'
import App from './App.vue'
import { router } from './router'
import Vuelidate from 'vuelidate'
import store from './store'
import axios from 'axios'
import VueSimpleAlert from "vue-simple-alert";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-default.css';
import moment from 'moment'
import {Tabs, Tab} from 'vue-tabs-component';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(VueToast);
Vue.use(Vuelidate)
Vue.use(IconsPlugin)
Vue.use(BootstrapVue)
Vue.use(axios)
Vue.use(VueSimpleAlert);
Vue.component('tabs', Tabs);
Vue.component('tab', Tab);


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

