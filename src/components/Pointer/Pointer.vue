<template>
  <div class="ball-wrap" @click="turnTo">
    <div class="ball" ref="ball" v-if="show">
      <img src="./hotspot.png" alt="">
    </div>
    <img src="./pionter.png" alt="" class="pointer">
  </div>
</template>

<script>
  export default {
    name: 'Pointer',
    props: {
      address: {
        type: String,
        default: ''
      }
    },
    data: function () {
      return {
        show: true
      }
    },
    mounted: function () {
      this.$nextTick(function () {
      })
    },
    methods: {
      turnTo: function () {
        this.$router.push({
          path: `/${this.address}`
        })
      }
    },
    created: function () {
    }
  }
</script>

<style lang="less" type="text/less" scoped>
  @import "../../common/less/mixin";

  .ball-wrap {
    display: inline-block;
    position: relative;
  }

  .ball-wrap img {
    width: 100/@rem;
    height: 98/@rem;
  }

  .pointer {
    position: absolute;
    left: 0.5rem;
    top: 0.5rem;
  }

  .ball img {
    width: 80/@rem;
    height: 80/@rem;
  }

  .ball {
    display: inline-block;
    animation: myfirst .7s linear infinite alternate;
    /* Firefox: */
    -moz-animation: myfirst .7s linear infinite alternate;
    /* Safari and Chrome: */
    -webkit-animation: myfirst .7s linear infinite alternate;
    /* Opera: */
    -o-animation: myfirst .7s linear infinite alternate;
  }

  @keyframes myfirst {
    0% {
      transform: scale(0.4);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
