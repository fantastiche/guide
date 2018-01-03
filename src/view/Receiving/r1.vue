<template>
  <div class="content">
    <img src="../../common/images/pic_r1.png" class="pic">
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
        massage1: '进入入库单',
        massage2: '',
        address: 'r2'
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
    top: 230/@rem;
    left: 150/@rem;
  }

  .notice-position {
    position: absolute;
    top: 150/@rem;
    left: 90/@rem;
  }

  .notice-position-two {
    position: absolute;
    top: 310/@rem;
    left: 390/@rem;
  }
</style>
