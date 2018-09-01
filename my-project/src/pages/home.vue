<template>
  <div class="hello">
    <div style="margin-top:30px">
      <strong style="color:red">自定义事件从子组件向父组件中传递数据</strong>
      <div>
        父组件,我接受到了：
        {{ text || '暂无数据' }}
        <!-- v-on 监听sendData事件 -->
        <son v-on:sendData='getSonText'></son>
      </div>
    </div>
    <div  style="margin-top:50px;">
      <strong style="color:red">通过ref属性在父组件中直接取得子组件中的数据</strong>
        <p>我是父组件,我接受到了：
        {{ texting || '暂无数据'  }}</p>
       <son-ex ref="sonEx"></son-ex>
       <button  @click="getData">得到数据</button>
    </div>
    <div  style="margin-top:50px;">
      <strong style="color:red">通过sync实现数据双向绑定， 从而同步父子组件数据</strong>
        <p>我是父组件,我接受到了：
        {{ fuValue || '暂无数据'  }}</p>
       <son-fx :wisdom.sync="fuValue"></son-fx>
    </div>
    <div style="margin-top:50px">
      <p style="color:red">状态管理模式 mutations</p>
       {{count}}
       <!-- 使用 $store.commit('switch_dialog') 来触发 mutations 中的 switch_dialog 方法。 -->
       <a href="javascript:;" @click="$store.commit('switch_dialog')">点击</a>
    </div>
    <div style="margin-top:50px">
      <p style="color:red">状态管理模式 actions</p>
       {{count}}
       <a href="javascript:;" @click="$store.dispatch('switch_dialog_actions')">点击</a>
    </div>
    <div style="margin-top:40px;">
        <router-link to="/home/content">购物车案例</router-link>
        <el-button @click="showInfo">弹出</el-button>
        <tip-pop  v-show="openPop"  :hideInf="hideInfo" :message="msg" ></tip-pop>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import tipPop from '../components/tip-pop'
  import son from '../components/son'
  import sonEx from '../components/son1'
  import sonFx from '../components/son2'

  export default {
    components:{
      tipPop,
      son,
      sonEx,
      sonFx,
    },
    name: 'home',
    data () {
      return {
        msg: 'Welcome to home',
        openPop: false,
        text: '',
        texting: '',
        fuValue: 60
      }
    },
     computed: {
      count() {
         return this.$store.state.dialog.show
      }
    },
    methods:{
      showInfo(){
        this.openPop = true;
      },
      hideInfo(){
        this.openPop = false;
      },
      getSonText (text) {
        console.log(text);
        this.text = text
      },
      getData () {
        console.log(this.$refs.sonEx.texting)
        this.texting = this.$refs.sonEx.texting;
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

