
<template>
  <div class="main">
    <div class="content">
      <p style="color:darkred">{{message}}</p>
      <el-button @click="hideInf" class="btn-close">关闭</el-button>
    </div>
  </div>
</template>

<script>
  import ElButton from "../../node_modules/element-ui/packages/button/src/button.vue";

  export default {
    components: {ElButton},
    props: ['message','hideInf'],
    name: 'list',
    data () {
      return {
      }
    },
    methods: {
      backTop(){
        scrollTo(0,0);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main {
    background: gray;
    width:100%;
    height: 100%;
    position: fixed;
    top:0;
    left:0;
  }
  .content{
    background: white;
    width:400px;
    height:200px;
    margin:10% auto;
    border-radius: 5px;
    position: relative;
  }
  .btn-close{
    position: absolute;
    top:5px;
    right:5px;
  }
</style>
