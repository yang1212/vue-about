<template>
  <div class="bg lucky-rotation">
    <div class="container" ref="total" style="margin-top: 60%;" >
        <ul ref="lottery" :class = "{ 'total-lottery':stopTag,'total-lottery1':fast}" class="ball">
          <li>
            <img class="pad_right"  src="../assets/coupon.png" >
            <p>奖品一</p>
          </li>
          <li>
            <img class="pad_right"  src="../assets/gift.png" >
            <p>奖品二</p>
          </li>
          <li>
            <img class="pad_right"  src="../assets/hotel.png" >
            <p>奖品三</p>
          </li>
          <li>
            <img class="pad_right"  src="../assets/redbag.png" >
            <p>奖品四</p>
          </li>
          <li>
            <img class="pad_right"  src="../assets/coupon.png" >
            <p>奖品一</p>
          </li>
          <li>
            <img class="pad_right"  src="../assets/gift.png" >
            <p>奖品二</p>
          </li>
          <li>
            <img class="pad_right"  src="../assets/hotel.png" >
            <p>奖品三</p>
          </li>
          <li>
            <img class="pad_right"  src="../assets/redbag.png" >
            <p>奖品四</p>
          </li>
        </ul>
    </div>
    <br>
    <br>
    <br>
    <div style="width:100px;height:100px;line-height:100px;text-align:center;border-radius:50%;background:red;color:#fff;" @click="start()">开始抽奖</div>
    <div @click="again">lngfefefe</div>
  </div>
</template>
<script>
  import { tween, styler} from 'popmotion';

  export default {
    name:'recommend',
    data (){
      return {
        speed: 30,
        name:'',
        flag: false,
        stopTag: true,
        fast:false
      }
    },
    created() {
    },
    methods: {
      start() {
        this.stopTag = false;
        this.initLoop();
      },
      initLoop() {
        this.fast = true;
        let intervalIndex = 0; 
        let loopFn = setInterval(() => { 
        if(this.$refs.total.scrollLeft === 0){
            intervalIndex ++;
            console.log(223)
            if(intervalIndex > 5) {
              this.fast = false;
            }
          }
        }, 1000);
        // let loopFn = setInterval(() => {
        // if (this.$refs.total.scrollLeft <= 0) {
        //     this.$refs.total.scrollLeft = 400
        //   } else {
        //     this.$refs.total.scrollLeft -= 50;
        //   }
        // if (intervalIndex > 100) { 
        //   window.clearInterval(loopFn); 
        //   // this.agai();
        // } 
        //   intervalIndex ++;
        // }, this.speed);
      },
      agai() {
        let displament = 600;
        console.log(this.stopTag)
        const ball = document.querySelector('.ball');
       tween({
         to: displament, duration: 500
       })
       .start(styler(ball).set('x'));
      },
      again() {
        this.stopTag = true;
      }
    }
  }
</script>
<style>
  /*http://localhost:8080/#/news/list1*/
  * {
    padding:0;
    margin:0;
  }
  .lucky-rotation {
    position: relative;
    color: #fff;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    padding-bottom:6px;
    /* overflow:hidden; */
  }
  .bg {
    background: url("../assets/bg.jpg");
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 100%;
  }
  .container {
    width:680px;
    height:180px;
    overflow: hidden;
  }
  ul{
    width:500%;
  }
  .total-lottery {
    -webkit-animation:scoll 5s linear infinite;
  }
  .total-lottery1 {
    -webkit-animation:scoll 1s linear infinite;
  }
  .container li{
    float: left;
    text-align: center;
    display: block;
    color:#000;
    list-style-type: none;
    margin-right: 20px;
  }
  li img {
    height: 150px;
  }
  li p {
    margin-top:-20px;
  }

  @-webkit-keyframes scoll{
    0%{
      -webkit-transform: translate3d(-679px, 0, 0);
    }
    100%{
      -webkit-transform: translate3d(0, 0, 0);
    }
  }

</style>
