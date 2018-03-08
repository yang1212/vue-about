<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/news/list">list</router-link>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'news',
    data () {
      return {
        msg: 'Welcome to news'
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

