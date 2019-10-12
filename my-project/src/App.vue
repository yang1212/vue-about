<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    components: {
    },
    name: 'App',
    data() {
      return {
        num: 2
      }
    },
    created() {
      this.test()
    },
    methods: {
      test() {
        let Person = function() {
          this.data = this.data()
          this.num = 999;
        }
        Person.prototype.data = function() {
          return {
            age: 12,
            name: 'yang'
          }
        }
        let person1 = new Person()
        person1.data.age = 13;
        let person2 = new Person()
        person1.num = 1000
        console.log(person1)
        console.log(person2)
      }
    }
  }
</script>
<style>

</style>
