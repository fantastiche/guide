<template>
  <div class="content">
    <img src="../../common/images/pic_p12.png" class="pic">
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
        massage1: '如果存在未审核的收货单据，在合单时<br/>会有提示，但此时再去收货审核，也不<br/>会改动盘点单的库存数据，所以建议在<br/>盘点之前查清是否有未审核的收货单据，<br/>不然就等收货单确认后再重新盘点。',
        massage2: '',
        address: 'p13'
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
    top: 720/@rem;
    left: 380/@rem;
  }

  .notice-position {
    position: absolute;
    top: 120/@rem;
    left: 20/@rem;
  }

  .notice-position-two {
    position: absolute;
    top: 250/@rem;
    left: 270/@rem;
  }
</style>
