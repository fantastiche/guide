<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="less" type="text/less">
  @import '~vux/src/styles/reset.less';
  @import "./common/less/mixin.less";

  body {
    background-color: #fbf9fe;
  }

  .content {
    background: url('./common/images/Phone_bg.png') no-repeat center;
    background-size: 717/@rem 1135/@rem;
    width: 100%;
    margin-top: 30/@rem;
    min-height: 1135/@rem;
    position: relative;
  }

  .pic {
    width: 564/@rem;
    height: 980/@rem;
    position: absolute;
    bottom: 5/@rem;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
</style>
