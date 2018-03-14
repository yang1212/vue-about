<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <pagenav :current="2" :total="40" :currentChange="whenChange"></pagenav>
    <router-link to="/news/list">list</router-link>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import page from './page'
  import Vue from 'vue'
  Vue.use(page);
  export default {
    name: 'news',
    data () {
      return {
        msg: 'Welcome to news'
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
</style>

