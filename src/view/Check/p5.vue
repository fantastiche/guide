<template>
  <div class="content">
    <img src="../../common/images/pic_p5.png" class="pic">
    <div class="pointer-position">
      <pointer :address="address"></pointer>
    </div>
    <div class="notice-position">
      <notice :arrowShow='arrow1' :massage="massage1"></notice>
    </div>
    <div class="notice-position-two">
      <notice :arrowShow='arrow1' :massage="massage2"></notice>
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
        massage1: '提醒：盘点时避免多个店员去盘点同<br/>一个商品，最好分类盘点（如店员A<br/>盘点彩妆，店员B盘点护肤产品）；<br/>盘点过长输入有误时，可编辑或删除<br/>（苹果手机左划/安卓手机长按）。',
        massage2: '盘点完商品点击提交',
        address: 'p6'
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
    top: 1040/@rem;
    left: 380/@rem;
  }

  .notice-position {
    position: absolute;
    right: 0;
    left: 0;
    margin: 0 auto;
    text-align: center;
    top: 570/@rem;
  }

  .notice-position-two {
    position: absolute;
    top: 900/@rem;
    left: 150/@rem;
  }
</style>
