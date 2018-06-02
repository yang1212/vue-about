<template>
  <div class="model-2">
    <div class="nav" ref="menuWrapper">
      <ul>
        <li v-for="item in goods" class="menu-items">
          <span class="text">
            {{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="content">
       <router-link to="/news/list1">
        <div class="list-content">
          <h3>2018年4月3日</h3>
          <p>posted @ 2018-04-03 23:49 Tiboo 阅读(5) 评论(0)</p>
        </div>
      </router-link>
    </div>
    <div class="content-detail"></div>
    <back-to-top></back-to-top>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import backToTop from '../components/back-to-top'
  import axios from 'axios'
  export default {
    components: {
      backToTop
    },
    name: 'news',
    data () {
      return {
        msg: 'Welcome to this place',
        goods: [],
      }
    },
    created() {
       axios.get('static/resouce.json').then((res) => {
       this.goods = res.data.goods;
       console.log(this.goods);
      })
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .model-2 {
    border-top:1px solid #ccc;
  }
  .nav {
    width:21%;
    border-right:1px solid #ccc;
    float: left;
  }
  .menu-items {
    padding: 15px 10px;
    border-bottom:1px solid #ccc;
  }
  .menu-items span {
    font-size:14px;
  }
  .content {
    width:70%;
    float:right;
    margin-right:4%;
  }
  h1 {
    font-weight: normal;
    padding-top: 70px;
  }
  .list-content{
    border-bottom:1px solid #ccc;
    padding:15px 20px;
  }
  .list-content p{
    margin-top:10px;
    text-decoration: none;
  }
</style>

