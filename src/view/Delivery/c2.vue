<template>
  <div class="content">
    <img src="../../common/images/pic_c2.png" class="pic">
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
        massage1: '新建出库单',
        massage2: '可根据不同的状态和<br/>类型查看出库单记录',
        address: 'c3'
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
    top: 150/@rem;
    left: 590/@rem;
  }

  .notice-position {
    position: absolute;
    top: 70/@rem;
    left: 500/@rem;
  }

  .notice-position-two {
    position: absolute;
    top: 110/@rem;
    left: 120/@rem;
  }
</style>
