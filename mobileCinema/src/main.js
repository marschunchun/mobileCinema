// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import Scroller from './components/Scroller'
import Loading from './components/Loading'
import store from './store/store'
// import axios from 'axios'
// import VueAxios from 'vue-axios'


Vue.config.productionTip = false
Vue.use(VueResource)
Vue.component('Scroller',Scroller)
Vue.component('Loading',Loading)

Vue.filter('setWH',(url, arg)=>{
  return url.replace(/w\.h/,arg);
})
// Vue.use(axios)
// Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,store,
  components: { App },
  template: '<App/>'
})
