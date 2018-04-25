<template>
  <div id="app">
    <div class="header">
      <el-row>
        <el-col :span="4" class="logo">
          <span>133</span>
        </el-col>
        <el-col :span="20" class="header-tip">
           <span>455</span>
        </el-col>
      </el-row>
    </div>
    <el-row>
      <el-col :span="4">
        <el-menu
          default-active="2"
          :default-openeds="['1', '3']"
          class="el-menu-vertical-demo"
          active-text-color="#ffd04b">
          <router-link to="/home">
            <el-menu-item index="1">
              <i class="el-icon-location"></i>
              <span slot="title">前端笔记</span>
            </el-menu-item>
          </router-link>
          <router-link to="/news">
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">太阳日记</span>
            </el-menu-item>
          </router-link>
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">素材图层</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">音乐收藏</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="19" :offset="1">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>
<style>
  *{
    padding:0;
    margin:0;
  }
  .header{
    background:#545c64;
    color: #60e2dd;
  }
  .logo{
    border-right:1px solid white;
    padding:15px 0;
  }
  .header-tip span{
    float: right;
    margin:15px 10px 0 0 ;
  }

</style>
