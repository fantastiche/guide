<template>
  <div class="content">
    <img src="../../common/images/pic_s3.png" class="pic">
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
        massage1: '确认商品信息无误，点击确认收货',
        massage2: '',
        address: 's4'
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
    top: 1030/@rem;
    left: 400/@rem;
  }

  .notice-position {
    position: absolute;
    top: 900/@rem;
    left: 100/@rem;
  }

  .notice-position-two {
    position: absolute;
    top: 250/@rem;
    left: 270/@rem;
  }
</style>
