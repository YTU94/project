<template>
  <div class="home">
    <router-link to="/"><img :src="infoBack" alt="" class="back"></router-link>
    <router-link to="/"><img :src="infoClose" alt="" class="close"></router-link>
    <div class="use">
      <img :src="infoOneT" alt="" class="title" width="">
      <input type="text" name="" id="" :value="key" class="input" readonly>
      <a href="http://u.163.com/aosoutdtdt1"></a>
    </div>
    <div class="useInfo">
      <img :src="infoOne" alt="" width="100%" height="100%">
    </div>
    <!-- model 模态框 -->
    <div class="modelS" v-if="model === 1"></div>
    <div v-if="model === 1" class="model">
      <div style="padding: .1rem 0;" class="text">
        <img :src="modelText" alt="" width="100%" height="100%">
      </div>
      <input v-if="yhj !== ''" type="text" name="" id="" :value="key" readonly>
      <span @click="model = 0">
        <img :src="close" alt="" width="100%" height="100%">
      </span>
    </div>    
  </div>
</template>

<script>
import api from '../fetch/api'
// import store from '../store/store'
import infoBack from '../assets/image/info_back.png'
import infoClose from '../assets/image/info_close.png'
import infoOne from '../assets/image/info_one.png'
import infoOneT from '../assets/image/info_one_t.png'
import useInput from '../assets/image/use_input.png'
import modelText from '../assets/image/model_text.png'
import close from '../assets/image/close.png'
export default {
  data () {
    return {
      yid: '',
      infoBack: infoBack,
      infoClose: infoClose,
      infoOne: infoOne,
      infoOneT: infoOneT,
      useInput: useInput,
      modelText: modelText,
      close: close,
      key: '', // 优惠码
      model: 0
    }
  },
  beforeMount: function () {
    api.getInfo('get_user', this.$store.state.uid)
      .then(res => {
        console.log(res)
        if (parseInt(res[1].yhj_id) > 0) {
          console.log('85-已领取')
          this.model = 1
          this.key = res[1].yhj.name
        } else {
          console.log('85-未领取')
          api.getOne() // 获取优惠卷
            .then(res => {
              console.log(res)
              this.key = res[1][1]
              // store.commit('setYhj', this.key)
              this.yid = res[1][0]
              api.addYhj('add_yhj', this.$store.state.uid, this.yid) // 添加优惠
                .then(res => {
                  console.log('add_yhj')
                })
                .catch(error => {
                  console.log(error)
                })
            })
            .catch(error => {
              console.log(error)
            })
        }
        if (parseInt(res[1].allyhj_id) > 0) {
          console.log('商品卷-已领取')
          this.model = 1
        } else {
          console.log('商品卷-未领取')
        }
      })
      .catch(error => {
        console.log(error)
      })
  },
  mounted: function () {
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
    display: inline-block;
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
// model
.modelS{
  position: fixed;
  width: 100%;
  height: 100%;
  background: #333;
  opacity: .4;
  z-index: 1000;
}
.model{
  position: fixed;
  left: 1.5rem;
  top: 5rem; 
  z-index: 1001;
  width: 7.546667rem;
  height: 3.626667rem;
  background: #fff;
  border-radius: 5px;
  padding: .3rem 0;
  background: url('../assets/image/model.png') no-repeat center;
  background-size: 100% 100%;
  text-align: center;
  .text{
    width: 4rem;
    height: auto;
    position: relative;
    top: 1rem;
    display: inline-block;
  }
  input{
    position: relative;
    width: 3.5rem;
    top: 1.5rem;
    font-size: 16px;
  }
  span{
    position: absolute;
    right: -0.3rem;
    top: -.5rem;
    width: .6rem;
  }
}
</style>
