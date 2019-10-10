<template>
  <div class="app-container">
    <div class="header">
      <a class="logo"><img src="../img/igola-logo-oversea.png"/></a>
      <ul>
        <li>Book Flights</li>
        <li>Book Hotels</li>
        <li>Search guest bookings</li>
      </ul>
    </div>
    <div class="content">
      <div class="box-left">
        <h1>全球⽐價 即搜即買</h1>
        <h2>下載iGola App</h2>
        <div class="send-btn">下載iGola App</div>
      </div>
      <div class="box-right">
        {{detailData}}
      </div>
    </div>
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
      this.getDetailData() // 获取数据
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
      getDetailData() {
        getList().then((res) => {
          this.setTimelineAction(res)
        }).catch((error) => {
          console.log(error)
        })
      }
    }
  }
</script>

<style lang="less">
  * {
    padding: 0;
    margin: 0;
  }
  .app-container {
    background-image: url("../img/oversea_propagate_bg.png");
    height: 900px;
    .header {
      background: #fff;
      height: 60px;
      position: relative;
      font-size: 14px;
      .logo {
        position: absolute;
        top: 50%;
        z-index: 116;
        transform: translateY(-50%);
        margin-left: 40px;
      }
      ul {
        line-height: 60px;
        margin-left: 150px;
        li {
          display: inline-block;
          padding: 0 15px;
        }
      }
    }
    .content {
      display: flex;
      flex-direction: row;
      justify-content: center;
      padding-top: 78px;
      color: #fff;
      .box-left {
        width: 700px;
        .send-btn {
          background: #293182;
          .common-style(60px, 432px)
        }
      }
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

