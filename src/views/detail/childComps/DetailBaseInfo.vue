<template>
  <div class="detail-base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="new-price">{{goods.price}}</span>
      <span class="old-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discountDesc" class="discount">{{goods.discountDesc}}</span>
    </div>
    <div class="info-column">
      <span v-for="item in goods.columns">{{item}}</span>
    </div>
    <div class="info-service">
      <div v-for="(item, index) in goods.services" class="info-service-item" :key="index">
        <img :src="item.icon" alt="">
        <span>{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBaseInfo",
    props: {
      goods: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .detail-base-info .info-title {
    font-weight: 600;
    padding: 10px;
    font-size: 14px;
  }

  .detail-base-info .info-price {
    padding: 8px;
  }

  .detail-base-info .info-price span {
    margin: 5px;
  }

  .detail-base-info .info-price .new-price {
    font-size: 24px;
    color: var(--color-high-text);
    font-weight: 400;
  }

  .detail-base-info .info-price .old-price {
    font-size: 14px;
    text-decoration: line-through;
  }

  .detail-base-info .info-price .discount {
    display: inline-block;
    /*width: 100px;*/
    padding: 0 8px;
    height: 20px;
    border-radius: 10px;
    background-color: var(--color-high-text);
    color: #fff;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    position: relative;
    top: -10px;
  }

  .detail-base-info .info-column {
    display: flex;
    justify-content: space-between;
    box-shadow: 0 1px 1px rgba(100,100,100,0.1);
    padding: 10px 5px;
    font-size: 14px;
  }

  .detail-base-info .info-service {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    padding: 20px 5px;
    box-shadow: 0 3px 3px rgba(100,100,100,0.1);
  }

  .detail-base-info .info-service .info-service-item {
    display: flex;
    align-items: center;
  }

  .detail-base-info .info-service .info-service-item img{
    width: 14px;
    height: 14px;
  }
</style>
