<template>
  <div class="shop-box">
    <table>
      <tr>
        <th>名称</th>
        <th>价格</th>
        <th>数量</th>
        <th>操作</th>
      </tr>
      <tr v-for="item in items">
        <td>{{item.name}}</td>
        <td>{{item.price}}</td>
        <td><span @click="reduce(item)">-</span><input type="text" v-model="item.number"/><span @click="add(item)">+</span> </td>
        <td><a class="btn" @click="deleteBtn(item)">删除</a></td>
      </tr>
    </table>
    <br>
    <h3>总价格：<span>{{totalPrice}}</span></h3>
    <h3>总数量：<span>{{totalNumber()}}</span></h3>

  </div>
</template>

<script>
//  You may have an infinite update loop in a component render function.
//  此时不要把变量放在data里面，声明为局部变量
  let totalMoney = 0;
  let num = 0;

  export default {
    name: 'content1',
    data () {
      return {
        items:[
          {
            name:'Tiboo1',
            price:'22',
            number:'2'
          },
          {
            name:'Tiboo2',
            price:'33',
            number:'5'
          },
          {
            name:'Tiboo3',
            price:'44',
            number:'7'
          }
        ],
        message:'hello',
      }
    },
    computed:{
      totalPrice: function(){
        var vm = this;
        vm.totalMoney = 0;
        vm.items.forEach(function(item){
//          在此处打印this为undefined,故用vm保存this字段的引用
//          console.log(this);
          vm.totalMoney +=Number(item.price*item.number);
        });
        return vm.totalMoney;
      }
    },
    methods:{
      totalNumber :function(){
        var vm = this;

//      每次进来需要重置num
        vm.num = 0;
        vm.items.forEach(function(item){
          vm.num +=Number(item.number);
        });
        return vm.num;
      },
      reduce:function(item){
        if(item.number > 0){
          item.number --;
        }
      },
      add:function(item){
        item.number++;
      },
      deleteBtn:function(item){
        //点击按钮的时候，怎么识别到我是点的哪一个，然后输出对应的item;
        this.items.splice(this.items.indexOf(item),1)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .shop-box{
    padding-top: 20px;
  }
  table{
    width: 50%;
  }
  td{
    border-top:1px solid #eee;
    text-align: center;
    padding:10px 0;
  }
  th{
    border-top:1px solid #eee;
    padding:10px 0;
  }
  .btn{
    background: darkred;
    color:#fff;
    width: 55px;
    height: 30px;
    display: block;
    margin: 0 auto;
    line-height: 30px;
    border-radius: 5px;
  }
</style>
