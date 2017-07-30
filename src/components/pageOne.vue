<template>
  <div class="home">
    <router-link to="/"><img :src="infoBack" alt="" class="back"></router-link>
    <router-link to="/"><img :src="infoClose" alt="" class="close"></router-link>
    <div class="use">
      <img :src="infoOneT" alt="" class="title" width="">
      <input type="text" name="" id="" :value="key" class="input" readonly>
      <!-- <img :src="useInput" alt="" class="input"> -->
      <a href="http://u.163.com/aosoutdtdt1"></a>
    </div>
    <div class="useInfo">
      <img :src="infoOne" alt="" width="100%" height="100%">
    </div>
  </div>
</template>

<script>
import api from '../fetch/api'
import infoBack from '../assets/image/info_back.png'
import infoClose from '../assets/image/info_close.png'
import infoOne from '../assets/image/info_one.png'
import infoOneT from '../assets/image/info_one_t.png'
import useInput from '../assets/image/use_input.png'
export default {
  data () {
    return {
      infoBack: infoBack,
      infoClose: infoClose,
      infoOne: infoOne,
      infoOneT: infoOneT,
      useInput: useInput,
      key: 'DSDSDSD56756' // 优惠码
    }
  },
  beforeMount: function () {
    api.getOne()
      .then(res => {
        console.log(res)
        this.key = res[1][1]
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style lang="scss" scoped>
.home{
  width: 100%;
  height: 16.586667rem;
  background: url('../assets/image/info_bg.png') no-repeat center;
  background-size: 100% 100%;
  .back, .close{
    position: absolute;
    top: .36rem;
    width: 1.706667rem;
    height: .746667rem;
  }
  .back{
    left: .453333rem;
  }
  .close{
    right: .453333rem;
  }
  .use{
    background: url('../assets/image/use_bg.png') no-repeat center;
    background-size: 100% 100%;
    position: absolute;
    top: 1.84rem;
    left: .8rem;
    width: 8.4rem;
    height: 4rem;
    box-sizing: border-box;
    padding-top: .9rem;
    .title{
      display: inline-block;
      width: 4.4rem;
      height: .72rem;
    }
    .input{
      display: inline-block;
      width: 6.533333rem;
      height: 1.013333rem;
      box-sizing: border-box;
      border: 1px solid #eee;
      padding-left: .133333rem;
      margin-bottom: .106667rem;
      outline: none;
    }
    a{
      display: inline-block;
      width: 2.32rem;
      height: .64rem;
      background: url('../assets/image/use_btn.png') no-repeat center;
      background-size: 100% 100%;
    }
  }
  .useInfo{
    position: absolute;
    top: 8.2rem;
    left: 1.0rem;
    width: 8.0rem;
    height: 6.613333rem;
  }
}
</style>
