// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'
import vueService from 'vue-service'
import moment from 'moment'
import 'mint-ui/lib/style.css'
import '../static/mui/css/mui.css'

// Vue.use(vueService)
Vue.use(Mint)

Vue.config.productionTip = false

Vue.filter('myTime',function(input,timefmt){
	return moment().format('YYYY-MM-DD HH:mm:SS');
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
