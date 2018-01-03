<template>
  <div class="content">
    <img src="../../common/images/pic_p11.png" class="pic">
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
        massage1: '只有店长才会看到“合单”操作按钮，在<br/>这页面的商品数据不能进行修改，如果<br/>发现盘点有错，店长需要让盘点那个商<br/>品的店员去“我的盘点单”进行修改',
        massage2: '重要提醒：打开“漏盘商品清<br/>零”操作按钮，再点击合单，<br/>就会显示有哪些商品漏盘了',
        address: 'p12'
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
    left: 350/@rem;
  }

  .notice-position {
    position: absolute;
    top: 800/@rem;
    left: 50/@rem;
  }

  .notice-position-two {
    position: absolute;
    top: 120/@rem;
    left: 330/@rem;
  }
</style>
