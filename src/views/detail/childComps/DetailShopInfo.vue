<template>
  <div class="detail-shop-info">
    <div class="shop-info-top">
      <img :src="shop.logo" alt="">
      <span>{{shop.name}}</span>
    </div>
    <div class="shop-info-middle">
      <div class="shop-info-middle-sells">
        <div class="sells-count">{{shop.sellsCount | sellsCountFilter}}</div>
        <div>总销售</div>
      </div>
      <div class="shop-info-middle-goods">
        <div class="goods-count">{{shop.goodsCount}}</div>
        <div>全部宝贝</div>
      </div>
      <div class="shop-info-middle-score">
        <div v-for="item in shop.score" class="score-item">
          <span>{{item.name}}</span>
          <span class="score" :class="{'high': item.isBetter}">{{item.score}}</span>
          <span class="better" :class="{'high': item.isBetter}">{{item.isBetter ? '高' : '低'}}</span>
        </div>
      </div>
    </div>
    <div class="shop-info-bottom">
      <div class="bottom-text">进店逛逛</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailShopInfo",
    props: {
      shop: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    filters: {
      sellsCountFilter(sellsCount) {
        if (sellsCount) {
          return sellsCount.toFixed(2) + '万';
        }
      }
    }
  }
</script>

<style scoped>
  .detail-shop-info {
    font-size: 14px;
  }

  .detail-shop-info .shop-info-top {
    display: flex;
    padding: 30px 10px;
  }

  .detail-shop-info .shop-info-top img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 20px;
  }

  .detail-shop-info .shop-info-top span {
    font-size: 18px;
    line-height: 50px;
  }

  .detail-shop-info .shop-info-middle {
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
  }

  .detail-shop-info .shop-info-middle .shop-info-middle-sells .sells-count,
  .detail-shop-info .shop-info-middle .shop-info-middle-goods .goods-count {
    font-weight: 600;
    font-size: 18px;
    padding: 5px;
  }

  .detail-shop-info .shop-info-middle .shop-info-middle-goods {
    padding-right: 10px;
    border-right: 1px solid rgba(0,0,0,0.2);
  }

  .detail-shop-info .shop-info-middle .shop-info-middle-score .score-item{
    text-align: left;
    padding: 5px;
    display: flex;
    justify-content: space-between;
  }

  .detail-shop-info .shop-info-middle .shop-info-middle-score .score-item span {
    margin: 0 5px;
  }

  .detail-shop-info .shop-info-middle .shop-info-middle-score .score-item .score{
    color: forestgreen;
  }

  .detail-shop-info .shop-info-middle .shop-info-middle-score .score-item .better {
    background-color: forestgreen;
    color: #fff;
  }

  .detail-shop-info .shop-info-middle .shop-info-middle-score .score-item .score.high {
    color: orangered;
  }

  .detail-shop-info .shop-info-middle .shop-info-middle-score .score-item .better.high {
    background-color: var(--color-high-text);
  }

  .detail-shop-info .shop-info-bottom {
    display: flex;
    justify-content: center;
  }

  .detail-shop-info .shop-info-bottom .bottom-text{
    width: 200px;
    height: 40px;
    background-color: rgba(0,0,0,0.2);
    border-radius: 10px;
    font-size: 20px;
    text-align: center;
    line-height: 40px;
  }
</style>
