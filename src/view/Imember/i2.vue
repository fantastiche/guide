<template>
  <div class="content">
    <img src="../../common/images/pic_i2.png" class="pic">
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
        massage1: '会员管理的三项规则说明：<br/>流失预警是15天未消费/未服务的会<br/>员，生日邀约是3天内生日的会员，<br/>积分提醒是积分超过1000分的会员',
        massage2: '',
        address: 'i3'
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
    top: 870/@rem;
    left: 570/@rem;
  }

  .notice-position {
    position: absolute;
    top: 250/@rem;
    left: 140/@rem;
  }

  .notice-position-two {
    position: absolute;
    top: 250/@rem;
    left: 270/@rem;
  }
</style>
