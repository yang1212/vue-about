<template>
  <div>
    <br>
    <strong>2018/4/15 1:16</strong>
    <ul>
      <li>{{items}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'list',
    data () {
      return {
        items:'前端学的不咋地，明明自己学的是计算机专业，' +
        '后台语言也完全不行，一个系统错误搞了一天也没弄明白，' +
        '糟糕的一天，从今天开始，不能在如此下去，攻克vue的同时，' +
        '拿下node.js以及原生设计模式，第一天，加油'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul {
    list-style-type: none;
    padding: 0;
    width:60%;
    line-height: 30px;
  }
</style>
