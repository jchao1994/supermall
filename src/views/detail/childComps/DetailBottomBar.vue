<template>
  <div class="detail-bottom-bar">
    <div class="bottom-bar-item bottom-bar-left">
      <div>
        <span class="icon service"></span>
        <div class="text">客服</div>
      </div>
      <div>
        <span class="icon shop"></span>
        <div class="text">店铺</div>
      </div>
      <div>
        <span class="icon select"></span>
        <div class="text">收藏</div>
      </div>
    </div>
    <div class="bottom-bar-item bottom-bar-right">
      <div class="cart" @click="addCartClick">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBottomBar",
    methods: {
      addCartClick() {
        this.$emit('addCartClick');
      }
    },
    data() {
      return {
        isCollect: false
      }
    }
  }
</script>

<style scoped>
  .detail-bottom-bar {
    display: flex;
    text-align: center;
    background-color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 49px;
  }

  .detail-bottom-bar .bottom-bar-item {
    display: flex;
  }

  .detail-bottom-bar .bottom-bar-left{
    flex-grow: 1;
    font-size: 14px;
    justify-content: space-around;
    text-align: center;
  }

  .detail-bottom-bar .bottom-bar-left .icon {
    display: block;
    margin: 3px auto;
    width: 22px;
    height: 22px;
    background: url("~assets/img/detail/detail_bottom.png") 0 1px/100%;
  }

  .detail-bottom-bar .bottom-bar-left .service {
    background-position: 0 -53px;
  }

  .detail-bottom-bar .bottom-bar-left .shop {
    background-position: 0 -98px;
  }

  .detail-bottom-bar .bottom-bar-right {
    flex-grow: 1.5;
    display: flex;
    text-align: center;
    font-size: 16px;
    line-height: 49px;
  }

  .detail-bottom-bar .bottom-bar-right div{
    flex: 1;
  }

  .detail-bottom-bar  .bottom-bar-right .cart {
    background-color: #ffe817;
    color: #000;
  }

  .detail-bottom-bar .bottom-bar-right .buy {
    background-color: var(--color-high-text);
    color: #fff;
  }
</style>
