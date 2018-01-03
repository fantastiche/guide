<template>
  <div class="content">
    <img src="../../common/images/pic_p6.png" class="pic">
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
        massage1: '系统反馈盘点单已经<br/>提交成功，点击确认',
        massage2: '',
        address: 'p7'
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
    top: 650/@rem;
    left: 370/@rem;
  }

  .notice-position {
    position: absolute;
    top: 400/@rem;
    left: 230/@rem;
  }

  .notice-position-two {
    position: absolute;
    top: 250/@rem;
    left: 270/@rem;
  }
</style>
