import Vue from 'vue'
import App from './App'
import router from './router'
import wsCache from 'web-storage-cache'


import "./assets/scss/app.scss"
import 'mint-ui/lib/style.css'


Vue.config.productionTip = false

router.beforeEach((to,from,next)=>{
	Vue.prototype.$wsCache = new wsCache(); 
		if(to.path === '/login'){
			next()
		}else{
			if(to.meta.requiresAuth && !localStorage.getItem('token')){
				next({path:'/login'})
			}else{
				next()
			}
		}
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
