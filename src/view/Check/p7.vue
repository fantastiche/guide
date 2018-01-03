<template>
  <div class="content">
    <img src="../../common/images/pic_p7.png" class="pic">
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
        massage1: '确认后悔显示：1.我的盘点单：是你<br/>刚刚盘点完提交的单据，在店长合单<br/>前还可以进行修改。2.待店长合单：<br/>是所有店员盘点提交后集合在一起的<br/>单据。',
        massage2: '',
        address: 'p8'
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
    top: 350/@rem;
    left: 590/@rem;
  }

  .notice-position {
    position: absolute;
    top: 550/@rem;
    left: 0;
    right: 0;
    margin: 0 auto;
    text-align: center;
  }

  .notice-position-two {
    position: absolute;
    top: 250/@rem;
    left: 270/@rem;
  }
</style>
