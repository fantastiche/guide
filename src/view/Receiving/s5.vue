<template>
  <div class="content">
    <img src="../../common/images/pic_s5.png" class="pic">
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
        massage1: '若收货单有问题，可点<br/>击制单人拨打联系电话',
        massage2: '确认收货后，单据状态<br/>变更为已审核，商品库<br/>存也会相应增加',
        address: 's6'
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
    top: 550/@rem;
    left: 150/@rem;
  }

  .notice-position {
    position: absolute;
    top: 400/@rem;
    left: 20/@rem;
  }

  .notice-position-two {
    position: absolute;
    top: 310/@rem;
    left: 420/@rem;
  }
</style>
