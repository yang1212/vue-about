
<template>
  <div style="position: absolute;bottom:30%;right: 0;">
    <el-button @click="backTop()" v-show="backTip" type="primary">回到顶部</el-button>
  </div>
</template>

<script>
  import ElButton from "../../node_modules/element-ui/packages/button/src/button.vue";

  export default {
    components: {ElButton},
    name: 'list',
    data () {
      return {
        backTip: false,
        scroll: '',
      }
    },
    methods: {
      backTop(){
        scrollTo(0,0);
      },
      backScroll(){
        this.scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        console.log(this.scroll);
        if(this.scroll > 100){
          this.backTip = true;
        }else{
          this.backTip = false;
        }
      }
    },
    mounted(){
      window.addEventListener('scroll', this.backScroll)
    }
  }
</script>

<style scoped>

</style>
