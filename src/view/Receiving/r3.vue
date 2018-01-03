<template>
  <div class="content">
    <img src="../../common/images/pic_r3.png" class="pic">
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
        arrow2: true,
        massage1: '搜索或扫码输入商品很智能',
        massage2: '入库类型都默认：手工入库',
        address: 'r4'
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
    top: 450/@rem;
    left: 350/@rem;
  }

  .notice-position {
    position: absolute;
    top: 370/@rem;
    left: 120/@rem;
  }

  .notice-position-two {
    position: absolute;
    top: 200/@rem;
    left: 50/@rem;
  }
</style>
