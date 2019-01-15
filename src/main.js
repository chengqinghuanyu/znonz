// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'
import {getStorage} from './untils/index'

Vue.config.productionTip = false
Vue.use(VueI18n)
//let vuex = Vue.use(Vuex)
let i18n = new VueI18n({
	locale: getStorage()|| 'CN',
	messages:{
		'CN':require('./local/zh-cn'),
		'EN':require('./local/en-us')	
	}

})

new Vue({
  el: '#app',
  i18n,
  //vuex,
  router,
  components: { App },
  template: '<App/>'
})
