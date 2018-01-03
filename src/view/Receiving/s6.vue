<template>
  <div class="content">
    <img src="../../common/images/pic_r8.png" alt="" class="pic">
    <div class="pointer-position">
      <Pointer :address="address"></Pointer>
    </div>

    <div class="finish">
      <div class="title-first">收货单据要确认<br/>盘点盈亏不会乱</div>
      <button @click="turnTo">演示完成</button>
    </div>
    <div class="title-second">接着可选择不同的功能模块<br/>体验演示</div>
  </div>
</template>

<script>
  import Pointer from '../../components/Pointer/Pointer'

  export default {
    components: {
      Pointer
    },
    data: function () {
      return {
        address: 's0'
      }
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

  .finish {
    position: absolute;
    top: 550/@rem;
    left: 0;
    right: 0;
    margin: 0 auto;
    text-align: center;
  }

  .finish button {
    .dpr-font(16px);
    font-weight: bold;
    color: #fff;
    background: #ff5585;
    width: 300/@rem;
    height: 80/@rem;
    border-radius: 10/@rem;
    border: none;
    vertical-align: middle;
  }

  .title-first {
    .dpr-font(15px);
    line-height: 40/@rem;
    color: #ffffff;
    text-align: center;
    margin-bottom: 60/@rem;
  }

  .title-second {
    .dpr-font(13px);
    line-height: 40/@rem;
    text-align: center;
    color: #66d243;
    position: absolute;
    top: 850/@rem;
    left: 350/@rem;
  }

  .pointer-position {
    position: absolute;
    top: 690/@rem;
    left: 410/@rem;
    z-index: 1001;
  }
</style>
