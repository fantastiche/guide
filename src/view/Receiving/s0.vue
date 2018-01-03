<template>
  <div class="content">
    <img src="../../common/images/pic_01.png" class="pic">
    <div class="pointer-position">
      <pointer :address="address"></pointer>
    </div>
    <div class="notice-position">
      <notice :arrowShow='arrow' :massage="massage"></notice>
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
        arrow: true,
        massage: '入库出库要记清<br/>盘点数据要分明',
        address: 's1'
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
    top: 500/@rem;
    left: 340/@rem;
  }

  .notice-position {
    position: absolute;
    top: 360/@rem;
    left: 255/@rem;
  }
</style>
