<template>
  <div class="content">
    <img src="../../common/images/pic_p16.png" class="pic">
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
        massage1: '圈示处的按钮为红色时，则表示<br/>店长合单时有打开漏盘商品清<br/>零；如果按钮为灰色，则表示店<br/>长合单时没有打开漏盘商品清零',
        massage2: '',
        address: 'p17'
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
    top: 300/@rem;
    left: 590/@rem;
  }

  .notice-position {
    position: absolute;
    top: 30/@rem;
    left: 50/@rem;
  }

  .notice-position-two {
    position: absolute;
    top: 250/@rem;
    left: 270/@rem;
  }
</style>
