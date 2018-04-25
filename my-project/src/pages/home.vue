<template>
  <div class="hello">
    <br>
    <router-link to="/home/content">购物车案例</router-link>
    <el-button @click="showInfo">弹出</el-button>
    <tip-pop  v-show="openPop"  :hideInf="hideInfo" :message="msg" ></tip-pop>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import tipPop from '../components/tip-pop'
  export default {
    components:{
      tipPop
    },
    name: 'home',
    data () {
      return {
        msg: 'Welcome to home',
        openPop: false,
      }
    },
    methods:{
      showInfo(){
        this.openPop = true;
      },
      hideInfo(){
        this.openPop = false;
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

