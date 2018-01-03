<template>
  <div class="content">
    <img src="../../common/images/pic_p10.png" class="pic">
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
        massage1: '当本店所有店员都盘点完并确认<br/>提交后，店长就可以进行合单了',
        massage2: '',
        address: 'p11'
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
    top: 430/@rem;
    left: 570/@rem;
  }

  .notice-position {
    position: absolute;
    top: 550/@rem;
    left: 150/@rem;
  }

  .notice-position-two {
    position: absolute;
    top: 250/@rem;
    left: 270/@rem;
  }
</style>
