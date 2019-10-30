<template>
  <div class="account-box">
    <div class="index-btn">表单输入</div>
    <div class="account-input">
      <span>名称：</span>
      <el-input v-model="input" placeholder="请输入内容"></el-input>
    </div>
    <div class="account-input">
      <span>类型：</span>
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
    <div class="submit-btn">提交</div>
    <!-- <div>
      <span>时间：暂时默认今天</span>
    </div> -->
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
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    },
    created() {
      this.getDetailData() 
    },
    methods:{
      ...mapActions('listDataModule', [
        'setTimelineAction'
      ]), 
      goHomePage() {
        this.$router.push()
      }
    }
  }
</script>

<style lang="less">
  .account-box {
    padding: 20px;
    .account-input {
      margin-bottom: 20px;
      span {
        display: block;
      }
      input {
        width: 250px;
      }
    }
    .submit-btn {
      background: #1E32AA;
      width: 120px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      border-radius: 4px;
      cursor: pointer;
      color: #fff;
    }
  }
</style> 

