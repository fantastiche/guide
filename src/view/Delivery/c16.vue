<template>
  <div class="content">
    <img src="../../common/images/pic_c16.png" class="pic">
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
        massage1: '出库类型为调拨出货时，提交<br/>之后单据状态显示“运输中”',
        massage2: '出库类型为试用装领用<br/>或其他出库时，提交之后<br/>单据状态就是“已审核”',
        address: 'c17'
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
    top: 830/@rem;
    left: 570/@rem;
  }

  .notice-position {
    position: absolute;
    top: 700/@rem;
    left: 250/@rem;
  }

  .notice-position-two {
    position: absolute;
    top: 310/@rem;
    left: 390/@rem;
  }
</style>
