<template>
  <div>
    <br>
    <strong>2018/4/15 18:15</strong>
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
        items:'每天学一点，前端就算学的精通，如果不能自己独立构建' +
        '也会被其他的端牵着鼻子走，不喜欢别人在我面前说，看，你会吗？我没去试过' +
        '其实很简单的感觉，总会觉得自己懂的太少，其实有时候是自己不想花花时间去学其他的东西，' +
        '只想一心一意的学好自己这方面，总觉得学的越杂越不精。现在想通了，我的大脑能装的东西还很多，'
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
