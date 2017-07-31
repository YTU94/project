<template>
  <div id="app">    
    <div class="mic">
      <audio id="music" height="100" width="100"  autoplay="autoplay" loop="loop">
        <source src="../static/mic.mp3" type="audio/mp3" />
      <embed height="100" width="100" src="../static/mic.mp3" />
    </audio>
<button id="btn" @click="playPause()" :class="play"></button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      play: 'stop'
    }
  },
  methods: {
    playPause: function () {
      var music = document.getElementById('music')
      if (music.paused) {
        music.play()
        this.play = 'stop'
      } else {
        music.pause()
        this.play = 'play'
      }
    }
  }
}
</script>

<style lang="scss">
.play{
  background: url("./assets/image/play.png") no-repeat center
}
.stop{
  background: url("./assets/image/stop.png") no-repeat center  
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}
#btn{
  width: 30px;
  height: 30px;
  background-size: 100% 100%;
  border: none;
  opacity: .68;
}
.mic{
  display: inline-block;
  position: fixed;
  right: .026667rem;
  top:1.413333rem;
  border-radius: 24px;
  transform: scale(.8);
  overflow-x: hidden;
  z-index: 2;
  audio {
    display: inline-block;
    overflow: hidden;
    opacity: .7;   
  }
}
      audio::-internal-media-controls-download-button {display:none;}
audio::-webkit-media-controls {overflow: hidden !important}
audio::-webkit-media-controls-enclosure {width: calc(100% + 0px);} 
</style>
