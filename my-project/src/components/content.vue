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
     <h3>总价格：<span></span></h3>
     <h3>总数量：<span>{{total_num}}</span></h3>

  </div>
</template>

<script>
export default {
  name: 'content',
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
       totalNum:[]
    }
  },
//  computed:{
//    total_num:function(){
//      var num = 0;
//      this.number.forEach(function(item){
//        num+=Number(item.number);
//      });
//      return num;
//    }
//  },
  computed:{
    total_num :function(){
      var num =0;
      this.totalNum.forEach(function (item){
        num+=Number(item.number);
      });
      return num;

    }
  },

  methods:{
    reduce:function(item){
      if(item.number > 0){
        item.number --;
      }
    },
    add:function(item){
      item.number++;
      console.log(this.totalNum.length)
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
