import Vue from 'vue'
import Router from 'vue-router'
import content from '@/components/content'
import home from '../pages/home'
import news from '../pages/news'
import list from '../components/news-list'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home,
      children: [
        {
          path: '/home/content',
          name:'content',
          component: content,
          redirect:'/news/list'     //redirect代表的是重定向，及访问到content时，跳转到list页面
        }
      ]
    },
    {
      path: '/news',
      name: 'news',
      component: news,
      children:[
        {
          path:'/news/list',
          name:'list',
          component:list
        }
      ]
    }
  ]
})
