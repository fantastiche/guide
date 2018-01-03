<template>
  <div class="content">
    <img src="../../common/images/pic_c10.png" class="pic">
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
        massage1: '“保存”出库单还可修改，但点击<br/>“提交”后就不能修改此出库单了',
        massage2: '苹果手机左划可编辑或删除<br/>安卓手机长按可编辑或删除',
        address: 'c11'
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
    left: 230/@rem;
  }

  .notice-position {
    position: absolute;
    top: 890/@rem;
    left: 50/@rem;
  }

  .notice-position-two {
    position: absolute;
    top: 520/@rem;
    left: 270/@rem;
  }
</style>
