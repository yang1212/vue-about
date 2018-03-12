<template>
  <div id="app">
    <div>
      <router-link to="/home" class="title">Home</router-link>
      <router-link to="/news" class="title">news</router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>
<style>
  .title{
    background: #eee;
    width: 150px;
    height: 45px;
    line-height: 45px;
    display: block;
    float: left;
    text-align: center;
    color: #42b983;;
    border:2px solid white;
  }
</style>
