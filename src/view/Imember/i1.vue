<template>
  <div class="content">
    <img src="../../common/images/pic_i1.png" class="pic">
    <div class="pointer-position">
      <pointer :address="address"></pointer>
    </div>
    <div class="notice-position">
      <notice :arrowShow='arrow1' :massage="massage1"></notice>
    </div>
    <div class="notice-position-two">
      <notice :arrowShow='arrow1' :massage="massage2"></notice>
    </div>
    <div class="notice-position-three">
      <notice :arrowShow='arrow1' :massage="massage3"></notice>
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
        massage1: '进入爱会员，能看到三项数据统<br/>计，默认显示为本月的数据，如图<br/>中新老顾客统计就是本月进店消费<br/>的新老顾客，图示就是统计的人数',
        massage2: '点击说明，可查看会员<br/>管理的相关规则说明',
        massage3: '邀约记录：店员通过电话/<br/>短信/微信维护顾客的记录',
        address: 'i2'
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
    left: 570/@rem;
  }

  .notice-position {
    position: absolute;
    top: 250/@rem;
    left: 250/@rem;
  }

  .notice-position-two {
    position: absolute;
    top: 600/@rem;
    left: 250/@rem;
  }

  .notice-position-three {
    position: absolute;
    top: 920/@rem;
    left: 280/@rem;
  }
</style>
