import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import NewsList from '@/components/NewsList'
import NewsInfo from '@/components/NewsInfo'
// import App from '../App.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass:'mui-active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
    	path:'/home',
    	component:Home
    },
    {
    	path:'/news/newslist',
    	component:NewsList
    },
    {
      path:'/news/newsinfo/:id',
      component: NewsInfo
    }
  ]
})
