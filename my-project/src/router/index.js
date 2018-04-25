import Vue from 'vue'
import Router from 'vue-router'
import content from '@/components/content'
import home from '../pages/home'
import news from '../pages/news'
import list1 from '../components/news-list1'
import list2 from '../components/news-list2.vue'

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
          component: content
         // redirect:'/news/list'       redirect代表的是重定向，及访问到content时，跳转到list页面
         // alias: '/news/list'        alias代表的是别名，url里面的地址是/news/list,而实际上的地址为/home/content
        }
      ]
    },
    {
      path: '/news',
      name: 'news',
      component: news,
    },
    {
      path:'/news/list1',
      name:'list1',
      component:list1
    },
    {
      path:'/news/list2',
      name:'list2',
      component:list2
    }
  ]
})
