<template>
  <div class="detai-recommend-info">
    <div class="recommend-title">
      <div class="text">看了又看</div>
    </div>
    <goods-list :goods="recommendInfo"></goods-list>
  </div>
</template>

<script>
  import GoodsList from 'components/content/goods/GoodsList'

  export default {
    name: "DetailRecommendInfo",
    props: {
      recommendInfo: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      GoodsList
    }
  }
</script>

<style scoped>
  .detai-recommend-info .recommend-title {
    padding: 20px 10px;
    font-size: 16px;
    text-align: center;
    display: flex;
    justify-content: center;
  }

  .detai-recommend-info .recommend-title .text {
    position: relative;
    width: 100px;
  }

  .detai-recommend-info .recommend-title .text::before,
  .detai-recommend-info .recommend-title .text::after{
    content: '';
    border-bottom: 1px solid rgba(100,100,100,0.3);
    width: 50px;
    position: absolute;
    top: 50%;
  }

  .detai-recommend-info .recommend-title .text::before {
    left: -50%;
  }

  .detai-recommend-info .recommend-title .text::after {
    right: -50%;
  }
</style>
