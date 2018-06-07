<template>
  <div>
    <p style="color:green">子组件,我所拥有的数据： {{ texting }}</p>
  </div>
</template>
 
<script>
export default {
  data () {
    return {
      texting: 'ref 来自子组件的数据'
    }
  }
}
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   button { float: left }
</style>