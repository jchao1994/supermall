<template>
  <div class="detail-goods-info" v-if="Object.keys(detailInfo).length !== 0">
    <div class="info-desc">
      <div class="start"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img :src="item" alt="" v-for="item in detailInfo.detailImage[0].list" @load="imgLoad">
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailGoodsInfo",
    props: {
      detailInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      imgLoad() {
        this.$bus.$emit('itemImageLoad');
      }
    }
  }
</script>

<style scoped>
  .detail-goods-info {
    padding: 20px 0;
    border-bottom: 5px solid rgba(0,0,0,0.1);
    font-size: 14px;
  }

  .detail-goods-info .info-desc {
    padding: 5px;
    position: relative;
  }

  .detail-goods-info .info-desc .start, .detail-goods-info .info-desc .end {
    width: 5px;
    height: 5px;
    background-color: black;
    margin-bottom: 20px;
    position: relative;
  }

  .detail-goods-info .info-desc .end {
    position: absolute;
    right: 5px;
    margin-top: 20px;
    margin-bottom: 0;
  }

  .detail-goods-info .info-desc .start::after,
  .detail-goods-info .info-desc .end::before {
    content: '';
    width: 90px;
    height: 1px;
    background-color: black;
    position: absolute;
    bottom: 0;
  }

  .detail-goods-info .info-desc .start::after {
    left: 5px;
  }

  .detail-goods-info .info-desc .end::before {
    right: 5px;
  }

  .detail-goods-info .info-key {
    font-size: 18px;
    margin: 30px 10px 20px;
  }

  .detail-goods-info .info-list img {
    width: 100%;
  }
</style>
