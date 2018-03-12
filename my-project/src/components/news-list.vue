<template>
  <div>
    <ul>
      <li v-for="item in items">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'list',
    data () {
      return {
        items:[
          {name:'了解路由'},
          {name:'了解基础知识'},
          {name:'更深层次案例'}
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul {
    list-style-type: none;
    padding: 0;
  }
</style>
