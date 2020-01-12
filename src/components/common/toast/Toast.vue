<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
  export default {
    name: "Toast",
    data() {
      return {
        message: '',
        isShow: false
      }
    },
    methods: {
      show(message='默认信息', delay=1500) {
        this.message = message;
        this.isShow = true;
        setTimeout(() => {
          this.isShow = false;
          this.message = '';
        }, delay)
      }
    }
  }
</script>

<style scoped>
  .toast {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(100,100,100,0.6);
    color: #fff;
    z-index: 999;
    padding: 10px;
    border-radius: 5px;
  }
</style>
