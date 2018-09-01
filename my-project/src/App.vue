<template>
  <div id="app">
    <!--<div class="tab">-->
      <!--<div class="tab-item">-->
        <!--<router-link to="/home">-->
          <!--<i class="el-icon-location"></i>-->
          <!--<span>笔记</span>-->
        <!--</router-link>-->
      <!--</div>-->
      <!--<div class="tab-item">-->
        <!--<router-link to="/news">-->
          <!--<i class="el-icon-menu"></i>-->
          <!--<span>日记</span>-->
        <!--</router-link>-->
      <!--</div>-->
      <!--<div class="tab-item">-->
        <!--<i class="el-icon-document"></i>-->
        <!--<span slot="title">素材</span>-->
      <!--</div>-->
      <!--<div class="tab-item">-->
        <!--<i class="el-icon-setting"></i>-->
        <!--<span slot="title">音乐</span>-->
      <!--</div>-->
    <!--</div>-->
    <!--<div class="clearfix"></div>-->
     <router-view></router-view>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    components: {
    },
    name: 'App',
    data:function() {
      return {
        seller: {}
      }
    },
    created() {
//      axios.get('static/resouce.json').then((res) => {
//        this.seller = res.data.seller
//      })
  },
  }
</script>
<style>
  *{
    padding:0;
    margin:0;
  }
  .tab-item {
    float:left;
    width:25%;
    text-align: center;
    padding:16px 0;
  }
  .clearfix {
    content: '';
    height: 0;
    clear: both;
    display: block;
    visibility: hidden;
  }

</style>
