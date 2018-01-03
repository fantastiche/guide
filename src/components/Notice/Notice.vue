<template>
  <transition name="notice">
    <div class="notice-arrow" v-show="show">
      <div class="notice-arrow-wrap">
        <img src="./arrow.png" alt="" ref="arrow" v-show="arrowShow">
        <div class="notice-arrow-title" v-html="massage"></div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'Notice',
    props: {
      massage: {
        type: String,
        default: 'no massage'
      },
      arrowShow: {
        type: Boolean,
        default: true
      },
      contentShow: {
        type: Boolean,
        default: false
      }
    },
    data: function () {
      return {
        show: false
      }
    },
    methods: {},
    created: function () {
    },
    mounted: function () {
      const that = this
      this.$nextTick(function () {
        that.show = true
      })
    }
  }
</script>

<style lang="less" type="text/less" scoped>
  @import "../../common/less/mixin";

  .notice {
    display: inline-block;
    padding: 18/@rem 12/@rem;
    line-height: 40/@rem;
    color: #ffffff;
    background: #66d243;
    border-radius: 8/@rem;
  }

  .notice-enter-active {
    animation: bounce-in .5s;
  }

  .notice-arrow {
    display: inline-block;
  }

  .notice-arrow-wrap {
    position: relative;
  }

  .notice-arrow-wrap img {
    width: 30/@rem;
    height: 15/@rem;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    bottom: -14/@rem;
  }

  .notice-arrow-title {
    padding: 18/@rem 12/@rem;
    .dpr-font(15px);
    line-height: 40/@rem;
    color: #ffffff;
    background: #66d243;
    border-radius: 8/@rem;
  }

  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
