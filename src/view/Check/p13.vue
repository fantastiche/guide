<template>
  <div class="content">
    <img src="../../common/images/pic_p13.png" class="pic">
    <div class="pointer-position">
      <pointer :address="address"></pointer>
    </div>
    <div class="notice-position">
      <notice :arrowShow='arrow1' :massage="massage1"></notice>
    </div>
    <div class="notice-position-two" v-if="arrow2">
      <notice :arrowShow='arrow2' :massage="massage2"></notice>
    </div>
  </div>
</template>

<script>
  import Pointer from '../../components/Pointer/Pointer'
  import Notice from '../../components/Notice/Notice'

  export default {
    components: {
      Pointer,
      Notice
    },
    data: function () {
      return {
        arrow1: false,
        arrow2: false,
        massage1: '差异数量是指商品所有差异数（盘多的<br/>与盘漏的）总和，差异金额是指每个商<br/>品单价乘以差异数量的总金额；如果盘<br/>点的时候有一些商品没有盘到但是库存<br/>是有的，就会在这里显示出来；如果你<br/>不作修改，这些商品就会在合单后清零。',
        massage2: '',
        address: 'p14'
      }
    },
    methods: {},
    created: function () {
    }
  }
</script>

<style lang="less" type="text/less" scoped>
  @import "../../common/less/mixin";

  .pointer-position {
    position: absolute;
    top: 790/@rem;
    left: 450/@rem;
  }

  .notice-position {
    position: absolute;
    top: 100/@rem;
    left: 20/@rem;
  }

  .notice-position-two {
    position: absolute;
    top: 250/@rem;
    left: 270/@rem;
  }
</style>
