<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/home/content">购物车</router-link>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
        msg: 'Welcome to home'
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
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>

