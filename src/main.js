// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
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
Vue.prototype.$http = axios;

Vue.prototype.getConfigJson=function(){
  let date = new Date().getTime();
  this.$http.get("../static/serviceconfig.json"+"?v"+date).then((result)=>{
    console.log(result);
    //用一个全局字段保存ApiUrl 也可以用sessionStorage存储
    Vue.prototype.ApiUrl=result.data.ApiUrl;
    console.log(Vue.prototype.ApiUrl)
  }).catch((error)=>{console.log(error)});
}

new Vue({
  el: '#app',
  i18n,
  //vuex,
  router,
  components: { App },
  template: '<App/>'
})
