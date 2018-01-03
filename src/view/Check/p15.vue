<template>
  <div class="content">
    <img src="../../common/images/pic_p15.png" class="pic">
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
        massage1: '点击进入查看盘点的详细情况',
        massage2: '合单之后单据就会显示“已合<br/>单”，“新建”按钮会再次出现',
        address: 'p16'
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
    top: 280/@rem;
    left: 580/@rem;
  }

  .notice-position {
    position: absolute;
    top: 200/@rem;
    left: 240/@rem;
  }

  .notice-position-two {
    position: absolute;
    top: 600/@rem;
    left: 150/@rem;
  }
</style>
