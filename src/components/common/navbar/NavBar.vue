<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
  .nav-bar {
    display: flex;
    height: 44px;
    text-align: center;
    line-height: 44px;
    box-shadow: 0 3px 1px rgba(100,100,100,0.08);
    font-size: 16px;
  }

  .nav-bar .left {
    width: 60px;
  }

  .nav-bar .right {
    width: 60px;
  }

  .nav-bar .center {
    flex: 1
  }
</style>
