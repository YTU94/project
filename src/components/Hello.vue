<template>
  <div class="home">
    <transition name="slide-fade-left" mode="out-in">
      <div class="pic1" v-if="show"><img :src="img1" alt="交投" width="100%" height="100%"></div>
    </transition>
    <transition name="run">
      <div class="pic2 run-enter-active"><img :src="img2" alt="耳机" width="100%" height="100%"></div>
    </transition>
    <transition name="scale">
      <div class="pic3 text-animation" v-if="show"><img :src="img3" alt="三根草" width="100%" height="100%"></div>
    </transition>
    <transition name="slide-fade-right">
      <div class="pic4 run-enter-active" v-if="show"><img :src="img4" alt="惠青年" width="100%" height="100%"></div>
    </transition>
    <transition name="slide-fade-bottom">
      <div class="pic5 text-animation" v-if="show"><img :src="imgFive" alt="盛夏嗨翻天" width="100%" height="100%"></div>
    </transition>
    <div class="pic6 run-lb-enter-active"><img :src="img6" alt="长颈鹿" width="100%" height="100%"></div>
    <div class="pic7 text-animation"><img :src="img7" alt="网易严选" class="" width="100%" height="100%"></div>
    <div class="pic8">
      <img :src="img8" alt="" width="100%" height="100%">
      <p>
        <router-link to="/pageOne" class="scale-enter-active"></router-link>
      </p>
    </div>
    <div class="pic9">
      <img :src="img9" alt="" width="100%" height="100%">
      <p>
        <router-link to="/pageTwo" class="scale-enter-active"></router-link>
      </p>
    </div>
  </div>
</template>

<script>
import api from '../fetch/api'
import store from '../store/store'
import homeBg from '../assets/image/home/home_bg.png'
import img1 from '../assets/image/home/img1.png'
import img2 from '../assets/image/home/img2.png'
import img3 from '../assets/image/home/img3.png'
import img4 from '../assets/image/home/img4.png'
import imgFive from '../assets/image/home/img5.png'
import img6 from '../assets/image/home/img6.png'
import img7 from '../assets/image/home/img7.png'
import img8 from '../assets/image/home/img8.png'
import img9 from '../assets/image/home/img9.png'
import kuang8 from '../assets/image/home/kuang_8.png'
import kuang9 from '../assets/image/home/kuang_9.png'
import homeBtn from '../assets/image/home/home_btn.png'
export default {
  name: 'hello',
  data () {
    return {
      uid: '',
      token: '',
      show: false,
      yhj: '',
      allYhj: '',
      // 图片
      homeBg: homeBg,
      img1: img1,
      img2: img2,
      img3: img3,
      img4: img4,
      imgFive: imgFive,
      img6: img6,
      img7: img7,
      img8: img8,
      img9: img9,
      kuang8: kuang8,
      kuang9: kuang9,
      homeBtn: homeBtn,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted: function () {
    this.show = true
    let url = window.location.href // 当前url
    let re = /d=[0-9]*/gi // uid正则
    let reg = /n=[a-zA-Z0-9]*/gi // token正则
    let uid = re.exec(url) || ''
    if (uid === '' && this.$store.state.uid === '') {
      console.log('未登录')
      this.login()
    } else if (this.$store.state.uid !== '') {
      console.log('成功登陆')
    } else {
      // get weixinUser uid and token
      this.uid = uid.join().substring(2)
      this.token = reg.exec(url).join().substring(2)
      // 向store中存入uid token
      store.commit('setUid', this.uid)
      store.commit('setToken', this.token)
      console.log('已登录' + 'uid=>' + this.uid + '|' + 'token=>' + this.token)
    }
  },
  beforeMount: function () {
  },
  methods: {
    login: function () {
      api.Login()
        .then(res => {
          console.log(res)
          console.log('check-Success')
          window.location.href = res[1]
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
/*
* 动画
*/
.slide-fade-left-enter-active, .slide-fade-right-enter-active, .scale-enter-active, .slide-fade-bottom-enter-active{
  transition: all .8s cubic-bezier(1.0, 0.8, 0.8, 1.0);
}
.run-enter-active {
  animation: rock .7s linear .9s infinite alternate;
}
.run-lb-enter-active{
  transform-origin: left bottom;  
  animation: rock .9s linear .9s infinite alternate;
}
.scale-enter-active {
  animation: scale 1.0s linear .9s infinite alternate;
}
.text-animation {
  animation: textA 1.2s linear 1.0s infinite alternate;
}
.slide-fade-left-enter {
  transform: translateX(-50px);
  opacity: 0;
}
.slide-fade-right-enter {
  transform: translateX(50px);
  opacity: 0;
}
.scale-enter{
  transform: scale(0.1);
  opacity: 0;
}
.slide-fade-bottom-enter{
  transform: translateY(10px);
  opacity: 0;
}
// 摇摆动画
.run-enter{
}
@keyframes rock {
  0% {
    transform: rotate(10deg)
  }
  50% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(-10deg)
  }
}
@keyframes scale {
  0% {
    transform: scale(1) rotate(0deg) translateX(0px)
  }
  5% {
    transform: scale(1) rotate(0deg) translateX(2px)    
  }
  10% {
    transform: scale(1) rotate(0deg) translateX(-2px)
  }
  15%{
    transform: scale(1) rotate(0deg) translateX(2px)
  }
  20%{
    transform: scale(1) rotate(0deg) translateX(-2px)    
  }
  25% {
    transform: scale(1) rotate(0deg) translateX(0px)
  }
  35% {
    transform: scale(1) rotate(-0deg) translateX(-2px)
  }
  50% {
    transform: scale(1) rotate(0deg) translateX(0px)
  }
  100% {
    transform: scale(1)
  }
}
@keyframes textA {
  0% {
    transform: scale(1);
    opacity: 1
  }
  25% {
    transform: scale(.95);
    opacity: .6
  }
  50% { 
    transform: scale(1.05);
    opacity: 1
  }
  75% {
    transform: scale(1);
    opacity: 1
  }
  100% {
    transform: scale(1);
    opacity: 1
  }
}
.home{
  width:100%;
  height: 23.626667rem;
  overflow-x: hidden;
  background: url('../assets/image/home/home_bg.png') no-repeat center;
  background-size: 100% 100%;
  .pic1, .pic2, .pic3, .pic4, .pic5, .pic6, .pic7, .pic8, .pic9{
    position: absolute;
    overflow: hide;
    display: inline-block;
  }
  .pic1{
    top: 1.6rem;
    left:  .746667rem;
    width: 2.133333rem;
    height: 1.146667rem;
  }
  .pic2{
    top: 2.7rem;
    left: .746667rem;
    width: 1.333333rem;
    height: 1.493333rem;
  }
  .pic3{
    top: 2rem;
    left: 4rem;
    width: 1.2rem;
    height: .506667rem;
  }
  .pic4{
    top: 2.25rem;
    left: 2.713333rem;
    width: 5.973333rem;
    height: 1.73333rem;
  }
  .pic5{
    top: 3.653333rem;
    left: 1.066667rem;
    width: 7.6rem;
    height: 2.133333rem;
  }
  .pic6{
    top: 5.706667rem;
    left: -.5rem;
    width: 1.706667rem;
    height: 3.493333rem;
    transform: rotateX(45deg);
  }
  .pic7{
    top: 6.213333rem;
    left: 1.973333rem;
    width: 6.933333rem;
    height: .88rem;
  }
  .pic8{
    top: 11.60rem;
    left: .666667rem;
    width: 8.4rem;
    height: 4.133333rem;
    background: url('../assets/image/home/kuang_8.png') no-repeat center;
    background-size: 100% 100%;
    box-sizing: border-box;
    padding-top: 1.066667rem;
    img{
      width: 6.026667rem;
      height: 1.653333rem;
    }
    a{
      display: inline-block;
      width: 2.293333rem;
      height: .64rem;
      background: url('../assets/image/home/home_btn.png') no-repeat center;
      background-size: 100% 100%;
    } 
  }
  .pic9{
    top: 16.333333rem;
    left: .666667rem;
    width: 8.48rem;
    height: 4.72rem;
    background: url('../assets/image/home/kuang_9.png') no-repeat center;
    background-size: 100% 100%;
    box-sizing: border-box;
    padding-top: .7rem;
    img{
      width: 6.56rem;
      height: 2.426667rem;
    }
    a{
      display: inline-block;
      width: 2.293333rem;
      height: .64rem;
      background: url('../assets/image/home/home_btn.png') no-repeat center;
      background-size: 100% 100%;
    }     
  }
  a{
    text-decoration: none;
  }
}

</style>
