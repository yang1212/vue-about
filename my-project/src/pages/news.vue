<template>
  <div class="hello" style="height: 800px;">
    <div>
      <router-link to="/news/list1">
        <div class="list-content">
          <h3>2018年4月3日</h3>
          <p>posted @ 2018-04-03 23:49 Tiboo 阅读(5) 评论(0)</p>
        </div>
      </router-link>
      <router-link to="/news/list2">
        <div class="list-content">
          <h3>2018年4月3日</h3>
          <p>posted @ 2018-04-03 23:49 Tiboo 阅读(5) 评论(0)</p>
        </div>
      </router-link>
    </div>
    <back-to-top></back-to-top>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import page from './page'
  import Vue from 'vue'
  import backToTop from '../components/back-to-top'
  Vue.use(page);
  export default {
    components:{
      backToTop
    },
    name: 'news',
    data () {
      return {
        msg: 'Welcome to this place'
      }
    },
    methods:{
      whenChange(item){
        console.log(item);
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  h1 {
    font-weight: normal;
    padding-top: 70px;
  }
  .list-content{
    border:1px solid #eee;
    width:70%;
    margin:10px 0;
    padding:15px 20px;
  }
  .list-content p{
    margin-top:10px;
    color:gray;
    text-decoration: none;
  }
</style>

