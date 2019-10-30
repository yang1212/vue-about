<template>
  <div class="app-container">
    <div class="index-btn" @click="goHomePage">Enter</div>
  </div>
</template>

<script>
  import axios from 'axios'
  import { mapGetters, mapActions } from 'vuex'
  import { getList } from '@/service/demo-service'

  export default {
    name: 'demoTest',
    data () {
      return {
        
      }
    },
    created() {
      this.getDetailData() 
    },
    computed: {
      ...mapGetters('listDataModule', [
        'detailData', // 获取返回的结果
      ]),
    },
    methods:{
      ...mapActions('listDataModule', [
        'setTimelineAction'
      ]), 
      getDetailData() { // 获取数据
        getList().then((res) => {
          this.setTimelineAction(res)
        }).catch((error) => {
          console.log(error)
        })
      },
      goHomePage() {
        this.$router.push('/account')
      }
    }
  }
</script>

<style lang="less">
  html,body{
    height: 100%;
    margin: 0;
    padding: 0;
  }
  .app-container {
    background-image: url("../img/bg.jpg");
    background-size: 100%;
    background-repeat:no-repeat;
    height: 100%;
    .index-btn {
      background: #293182;
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 116;
      transform: translate(-50%, -50%);
      color: #fff;
      .common-style(50px, 132px)
    }
  }
  .common-style(@hightSize, @widthSize) {
    width: @widthSize;
    height: @hightSize;
    line-height: @hightSize;
    text-align: center;
    border-radius: 4px;
    cursor: pointer;
  }
</style> 

