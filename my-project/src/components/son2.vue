<template>
  <div style="border:1px solid red">
    <p style="color:green">子组件： {{ wisdom }}</p>
    <button @click="getReson">同步</button>
    <div>.</div>
  </div>
</template>
 
<script>
export default {
  props: {
    wisdom: Number,
  },
  data () {
    return {
      texting: 'sync 来自子组件的数据'
    }
  },
  methods: {
      getReson() {
      let newValue = this.wisdom + 1
      console.log(newValue)
      this.$emit("update:wisdom", newValue)
      }
  }
}
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   button { float: left }
</style>